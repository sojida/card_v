const Response = require('../utils/Response');

/**
 * Rule class
 */
class Rule {
    constructor() {
        this.response = new Response();
    }

    /**
     * validate rule
     * @param {any} value - value
     * @returns response
     */
    validate(value) {
        return this.response;
    }
}

module.exports = Rule;
