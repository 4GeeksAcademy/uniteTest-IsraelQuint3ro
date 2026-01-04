const {sum} = require('./app.js');

test('adds 14 + 9 to equal 23',()=>{
    let total = sum(14,9);
    expect(total).toBe(23);
})


test("One euro should be 1.07 dollars",()=>{
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');
   

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})


test("One dollar should be 156.80 yen", () => {
    const {fromDollarToYen} =require('./app.js')

    const yen = fromDollarToYen(3.5);

    const expected = 3.5 * 156.80;

    expect(fromDollarToYen(3.5)).toBe(548.8000000000001);
})


test("One yen should be equivalent to 0.87 pounds", ()=>{
    const {fromYenToPound} = require('./app.js')

    const pounds = fromYenToPound(150);

    const expected = 150 * 0.87;

    expect(fromYenToPound(150)).toBe(130.5);
})