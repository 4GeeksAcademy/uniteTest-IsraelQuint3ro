// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
} 

console.log(fromEuroToDollar(3.5
))

const fromDollarToYen = function (valueInDollar) {
    let valueInYen = valueInDollar * 3.45;
    return valueInYen;
}
console.log(fromDollarToYen(3.5))







// from yen to euro
const fromEuroToYen = function (valueInYen){
let conversionEuroToYen = valueInYen* 156.5
    return conversionEuroToYen;
}
console.log(fromEuroToYen(3.5))




const fromYenToPound = function (valueInYen) {
    let valueInPound = valueInYen * 547.75;
    return valueInPound;
}

console.log(fromYenToPound(3.5))












const sum = (a, b) => {
    return a + b
}

console.log(sum(7, 3));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };