/**
 * Luhns Algorithm
 * @param {Number} n - card number
 * @returns {Boolean} true/false
 */
const Luhn = (n) => {
    let num = n.toString().split('');
    let base = 0;

    // from right to left
    for(let i = num.length-1; i >= 0; i--) {
        // if index is an even number
        if (i % 2 === 0) {
            // multiply by 2
            num[i] = (Number(num[i]) * 2).toString();
            // if value is greater than 10
            if (Number(num[i]) >= 10) {
                // subtract 9 from it
                num[i] = (Number(num[i]) - 9).toString();
            }
        }

        // add all the values together
        base += Number(num[i]) 
    }

    // check summation of numbers modulo ten is 0
    return (base % 10 === 0)
}

module.exports = Luhn;
