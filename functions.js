const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    // add: (num1, num2) => num1 + num2 + 1,                    // give error according to test case
    isNull: () => null,
    // isNull: () => undefined                                  // give error according to test case
    checkValue: (x) => x,
    createUser: () => {
        const user = {
            firstName: 'alex',
            lastName: 'xander'
        };
        // user[lastName] = 'xander';
        return user;
    },
    fetchUser: () => axios
        .get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'error')
};

module.exports = functions;

// es6: export default functions

// https://www.youtube.com/watch?v=7r4xVDI2vho
// https://jestjs.io/docs/expect