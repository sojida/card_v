const _NumberCheck = require('../Rules/_Number');
const Max = require('../Rules/Max');
const Min = require('../Rules/Min');
const Fn = require('../Rules/Fn');
const Range = require('../Rules/Range');

/**
 * Number Validation
 */
class NumberBuilder {
    constructor() {
        this.checks = [new _NumberCheck()];
    }

    /**
     * max length validation
     * @param {Number} num max value
     * @returns {NumberBuilder}
     */
    maxLength(num) {
        const max = new Max(num);
        this.checks.push(max);
        return this;
    }

    /**
     * min length validation
     * @param {Number} num min value
     * @returns {NumberBuilder}
     */
    minLength(num) {
        const min = new Min(num);
        this.checks.push(min)
        return this;
    }

    /**
     * custom validation
     * @param {Function} fn function
     * @param {String} message string
     * @returns {NumberBuilder}
     */
    custom(fn, message) {
        const func = new Fn(fn, message);
        this.checks.push(func)
        return this;
    }

    /**
     * range validation
     * @param {Number} min min value
     * @param {Number} max max value
     * @returns {NumberBuilder}
     */
    range(min, max) {
        const range = new Range(min, max);
        this.checks.push(range);
        return this;
    }
}

module.exports = NumberBuilder;
