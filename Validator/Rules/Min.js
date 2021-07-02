const Rule = require('./Rule');

/**
 * Min Rule Class
 */
class MinRule extends Rule {
    constructor(min) {
        super()
        this.min = min;
    }

    /**
     * validate rule
     * @param {any} value - value
     * @returns response
     */
    validate(value) {
        if (value.toString().length < this.min) {
            this.response.update(false, `${value} should be ${this.min} characters minimum`)
        } 

        return this.response;
    }
}

module.exports = MinRule;
