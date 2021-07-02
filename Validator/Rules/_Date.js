const Rule = require('./Rule');

/**
 * Date Rule class
 */
class DateRule extends Rule {
    constructor() {
        super()
    }

    /**
     * validate rule
     * @param {Date} date - date
     * @returns response
     */
    validate(date) {
        if(!/^(0[1-9]|1[0-2])\/?([0-9]{4})$/.test(date)) {
            this.response.update(false, `${date} is not a valid date, use format MM/YYYY`);
        }

        return this.response;
    }
}

module.exports = DateRule;
