// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
} 
console.log(fromEuroToDollar(3.5))



// function that converts a Dollar valkue to Yen
const fromDollarToYen = function(valueInDollar){
let valueInYen = valueInDollar * 156.5;

return valueInYen;
}

console.log(fromDollarToYen(3.5))


const fromYenToPound = function(valueInYen){
    let valueInPounds = valueInYen * 0.87;
    return valueInPounds;
}

 







const sum = (a, b) => {
    return a + b
}

console.log(sum(7, 3));

module.exports = { sum, fromEuroToDollar,fromDollarToYen };