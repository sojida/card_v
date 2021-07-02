const Rule = require('./Rule');

/**
 * Expired class Rule
 */
class ExpiredCardRule extends Rule {
    constructor() {
        super()
    }

    /**
     * validate rule
     * @param {Date} date - date
     * @returns response
     */
    validate(date) {
        if (/^(0[1-9]|1[0-2])\/?([0-9]{4})$/.test(date)) {
            const [month, year] = date.split('/')
            const dateToCheck = new Date(year,month,0,0,0,0,0);
            const currentDate = new Date()
            if (currentDate.getMonth() === dateToCheck.getMonth()) {
                return this.response;
            } 
        
            if (currentDate.getTime() > dateToCheck.getTime()) {
                this.response.update(false, `card is expired`)
            }
    
            return this.response;
        }

        return this.response;
    }
}

module.exports = ExpiredCardRule;