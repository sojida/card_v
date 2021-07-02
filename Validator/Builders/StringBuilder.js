const Max = require('../Rules/Max');
const Min = require('../Rules/Min');
const StringCheck = require('../Rules/_String');
const Email = require('../Rules/Email');

/**
 * String Validation
 */
class StringBuilder {
    constructor() {
        this.checks = [new StringCheck()];
    }

    /**
     * max length validation
     * @param {Number} num - max value
     * @returns {StringBuilder}
     */
    max(num) {
        const max = new Max(num);
        this.checks.push(max);
        return this;
    }

    /**
     * min length validation
     * @param {Number} num - min value
     * @returns {StringBuilder}
     */
    min(num) {
        const min = new Min(num);
        this.checks.push(min)
        return this;
    }

    /**
     * email validation
     * @returns {StringBuilder}
     */
    email() {
        const email = new Email();
        this.checks.push(email);
        return this;
    }
}

module.exports = StringBuilder;
