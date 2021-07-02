/**
 * Validation Response class
 */
class Response {
    constructor() {
        this.valid = true;
        this.message = ''
    }

    update(valid, message) {
        this.valid = valid
        this.message = message;
    }
}

module.exports = Response;
