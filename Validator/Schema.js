/**
 * Errors class
 */
class Errors {
    constructor() {
        this.errors = {};
    }

    /**
     * adds an error
     * @param {any} key key
     * @param {any} value value
     */
    add(key, value) {
        if (this.errors[key]) {
            this.errors[key].push(value)
        } else {
            this.errors[key] = [value];
        }
    }
}

/**
 * Schema class
 */
class Schema {
    constructor(schema) {
        this.schema = schema;
        this.errors = new Errors();
        this.hasError = false;
    }

    /**
     * validates object against schema
     * @param {object} o object
     */
    validate(o) {
        Object.keys(this.schema).forEach(key => {
            const objKey = o[key];
            if (objKey) {
                const builder = this.schema[key];
                builder.checks.forEach(check => {
                    const validResp = check.validate(o[key]);
                    if (!validResp.valid) {
                        this.errors.add(key, validResp.message);
                        this.hasError = true;
                    }
                })
            } else {
                this.errors.add(key, `${key} is required`);
                this.hasError = true;
            }
        });
    }
}

module.exports = Schema;
