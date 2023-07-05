const functions = require('./functions');

// es6: import functions from './functions.js';

// toBe

test('Add 2 + 2 is equal to 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

// not toBe

test('Add 2 + 2 is equal to 4', () => {
    expect(functions.add(2,2)).not.toBe(5);
});

// toBeNull

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// toBeFalsy

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();                  // passed
    // expect(functions.checkValue(0)).toBeFalsy();                  // passed
    // expect(functions.checkValue(undefined)).toBeFalsy();          // passed
    // expect(functions.checkValue(2)).toBeFalsy();                  // failed
});

// toEqual -> using for objects and array compare

test('User should be alex xander object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'alex',
        lastName: 'xander'
    });
});

// less than and greater than

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex Expression

test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);                        // passed
    // expect('teami').not.toMatch(/I/);                    // passed
    // expect('teamI').not.toMatch(/I/);                    // failed
});

// Arrays

test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin']
    // usernames = ['john', 'karen']                                 // failed
    expect(usernames).toContain('admin');
});

// working with async data:

// promise

// test('User fetched name should be Leanne Graham', () => {
//     expect.assertions(1);                                        // Necessary to use expect.assertions() if you're awaiting any async function calls
    
//     return functions.fetchUser()
//         .then(data => {
//            expect(data.name).toEqual('Leanne Graham');
//     });

// });

// async await

// test('User fetched name should be Leanne Graham', async () => {
//     expect.assertions(1);                                        
    
//     const data = await functions.fetchUser();
//     expect(data.name).toEqual('Leanne Graham')

// });

