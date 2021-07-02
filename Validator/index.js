const StringBuilder = require('./Builders/StringBuilder');
const Schema = require('./Schema');
const DateBuilder = require('./Builders/DateBuilder');
const NumberBuilder = require('./Builders/NumberBuilder');

/**
 * Validator class
 */
class Validator {
    /**
     * creates schema
     * @param {Object} o body
     * @returns {Schema} schema
     */
    createSchema(o) {
        return new Schema(o)
    }

    /**
     * string validation
     * @returns {StringBuilder} string validation
     */
    static string() {
        return new StringBuilder();
    }

    /**
     * date validation
     * @returns {DateBuilder} date validation
     */
    static date() {
        return new DateBuilder()
    }

    /**
     * number validation
     * @returns {NumberBuilder} number validation
     */
    static number() {
        return new NumberBuilder()
    }
}

module.exports = Validator;
