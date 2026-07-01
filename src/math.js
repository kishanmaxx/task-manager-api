const calculateTip = (total, tipPercent = 0.1) => {
    return total * tipPercent;
}
const fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
}
const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
}
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
};
module.exports = {
    calculateTip,
    fahrenheitToCelsius,
    celsiusToFahrenheit,
    add
}