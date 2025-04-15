

test("One euro should be 1.07 dollars", function () {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;


    expect(dollars).toBe(expected)
});

test("One dollar should be 511.91588785046724 yen", function () {
    // Importar las funciones desde app.js
    const { fromDollarToYen } = require('./app.js');
    const dollars = 3.5;
    const yen = fromDollarToYen(dollars);
    const expected = 3.5 * 156.5 / 1.07;

    expect(yen).toBe(expected);
});


test("One yen should be 0.0181839897285838 pounds", function () {
    const { fromYenToPound } = require('./app.js');
    const yen = 3.5;
    const pound = fromYenToPound(yen);
    const expected = yen * (0.87 / 156.5);
    expect(pound).toBe(expected);
});



