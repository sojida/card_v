const Rule = require('./Rule');

/**
 * Email Rule Validation
 */
class EmailRule extends Rule {
    constructor(regex) {
        super()
        this.regex = regex
    }

    /**
     * validate rule
     * @param {String} value - value
     * @returns response
     */
    validate(value) {
        const regex = this.regex || /\S+@\S+\.\S+/
        if (!regex.test(value)) {
            this.response.update(false, `${value} is not a valid email`)
        }

        return this.response
    }
}

module.exports = EmailRule;