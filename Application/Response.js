/**
 * Response class
 */
class Response {
    constructor(res) {
        this.res = res;
        this.statusCode = 200;
        this.body = {};
    }

    /**
     * set status code
     * @param {NUmber} statusCode - status code
     * @returns {Response}
     */
    status(statusCode) {
        this.statusCode = statusCode;
        return this;
    }

    /**
     * return json body
     * @param {Object} obj - response body
     * @returns res
     */
    json(obj) {
        this.body = obj;
        this.res.writeHead(this.statusCode, {
            'Content-Type': 'application/json'
        });
        return this.res.end(JSON.stringify(this.body));
    }
}

module.exports = Response;
