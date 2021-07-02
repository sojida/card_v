const Validator = require('../Validator');
const Luhn = require('../Helpers/luhn');

/**
 * Validate Card Controller
 * @param {Object} httpContract - req, res
 * @returns response
 */
const ValidateCard = (httpContract) => {
    // auth
    const apiKey = httpContract.req.headers['api-key'];
    if (!apiKey) {
        return httpContract.res.status(401).json({
            valid: false,
            errorCode: 401,
            message: 'Unauthorized request, please provide an api-key',
            errors: {},
            data: {}
        })
    }

    if (apiKey !== '35aa60dd-2e5b-42c1-867f-88f56e4b48d3') {
        return httpContract.res.status(401).json({
            valid: false,
            errorCode: 401,
            message: 'invalid api key',
            errors: {},
            data: {}
        })
    }


    // create schema to validate body
    const schema = new Validator().createSchema({
        credit_card_number: Validator.number().maxLength(19).minLength(13).custom(Luhn, 'is not a valid card'),
        exp_date: Validator.date().expiredCard(),
        email: Validator.string().email(),
        mobile: Validator.number().maxLength(11).minLength(11),
        phone_number: Validator.number().maxLength(11).minLength(11),
        amount: Validator.number().range(1, Number.MAX_SAFE_INTEGER),
        cvv: Validator.number().maxLength(3).minLength(3)
    })

    schema.validate(httpContract.req.body);

    if (schema.hasError) {
        return httpContract.res.status(400).json({
            valid: false,
            errorCode: 400,
            errors: schema.errors.errors,
            data: {}
        })
    }

    // card types
    const cardTypes = {
        3: 'American Express',
        4: 'Visa',
        5: 'Mastercard',
        6: 'Discover'
    }
    const firstNumber = httpContract.req.body.credit_card_number.toString()[0]
    const cardType = cardTypes[firstNumber] || '';

  return httpContract.res.status(200).json({ valid: true, errorCode: 200, errors: {} , data: { cardType, ...httpContract.req.body} });
}

module.exports = ValidateCard;
