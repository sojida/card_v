const Rule = require('./Rule');

/**
 * Number Rule Class
 */
class NumberRule extends Rule {
    constructor() {
        super()
    }

    /**
     * validate rule
     * @param {Number} value - value
     * @returns response
     */
    validate(value) {
        if (isNaN(value)) {
            this.response.update(false, `${value} must be a valid number`)
        }

        return this.response
    }
}

module.exports = NumberRule;
