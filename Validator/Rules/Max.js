const Rule = require('./Rule');

/**
 * Max Length Rule Validation
 */
class MaxRule extends Rule {
    constructor(max) {
        super()
        this.max = max;
    }

    /**
     * validate rule
     * @param {any} value - value
     * @returns response
     */
    validate(value) {
        if (value.toString().length > this.max) {
            this.response.update(false, `${value} should be ${this.max} characters maximum`)
        } 

        return this.response;
    }
}

module.exports = MaxRule;
