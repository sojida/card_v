const Rule = require('./Rule');

/**
 * Custom Rule validation
 */
class CustomRule extends Rule {
    constructor(fn, message) {
        super()
        this.fn = fn;
        this.message = message;
    }

    /**
     * validate rule
     * @param {any} value value
     * @returns response
     */
    validate(value) {
        const valid = this.fn(value)
        if (!valid) {
            this.response.update(false, `${value} ${this.message}`)
        }

        return this.response
    }
}

module.exports = CustomRule;