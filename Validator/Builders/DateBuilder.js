const ExpiredCard = require('../Rules/ExpiredCard');
const _Date = require('../Rules/_Date');

/**
 * Date Validation
 */
class DateBuilder {
    constructor() {
        this.checks = [new _Date()];
    }

    /**
     * expire card
     * @returns {DateBuilder} DateBuilder
     */
    expiredCard() {
        const expiredCardCheck = new ExpiredCard();
        this.checks.push(expiredCardCheck);
        return this
    }
}

module.exports = DateBuilder;
