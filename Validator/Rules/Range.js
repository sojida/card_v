const Rule = require('./Rule');

/**
 * Range Rule Class
 */
class RangeRule extends Rule {
    constructor(min, max) {
        super()
        this.min = min;
        this.max = max;
    }

    /**
     * validate rule
     * @param {Number} value - value
     * @returns response
     */
    validate(value) {
        if (Number(value) <= this.min || Number(value) >= this.max) {
            this.response.update(false, `${value} should be greater than ${this.min} and less than ${this.max}`)
        } 

        return this.response;
    }
}

module.exports = RangeRule;
