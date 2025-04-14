const oneEuroIs = {
    "JPY": 156.5, // Japan Yen
    "USD": 1.07,  // US Dollar
    "GBP": 0.87,  // British Pound
};


const fromEuroToDollar = function(valueInEuro) {

    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}


const fromDollarToYen = function(valueInDollar) {
    
    let valueInYen = (valueInDollar * 156.5) / 1.07 ;
    return valueInYen;
}
const fromYenToDollar = function(valueInDollar) {
    
    let valueInPound = ((valueInDollar * 0.87) / 156.5) / 1.07 ;
    return valueInPound;
}

console.log(fromYenToDollar(3.5))

module.exports = {oneEuroIs, fromEuroToDollar, fromDollarToYen, fromYenToDollar };
