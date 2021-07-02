const Rule = require('./Rule');

/**
 * String Rule Class
 */
class StringRule extends Rule {
    constructor() {
        super()
    }

    /**
     * validate rule
     * @param {String} value value
     * @returns response
     */
    validate(value) {
        if (typeof value !== 'string') {
            this.response.update(false, `${value} must be a valid string`)
        }

        return this.response
    }
}

module.exports = StringRule;
