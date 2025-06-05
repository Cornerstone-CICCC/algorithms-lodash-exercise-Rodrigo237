// Instructions: Use lodash's groupBy function to group the numbers by odd and even.

const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// your code here
const groupedNumbers = _.groupBy(numbers,(num)=> num % 2 !== 0 ? 'odd' :"even")

console.log(groupedNumbers); // Expected output: { 'odd': [1, 3, 5, 7], 'even': [2, 4, 6, 8] }
