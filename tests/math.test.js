const { calculateTip,celsiusToFahrenheit,fahrenheitToCelsius,add } = require('../src/math');
test('Should calculate the correct tip amount',()=>{
    const total = 10;
    const tipPercent = 0.3;
    const result = calculateTip(total,tipPercent);
    expect(result).toBe(3);
})

test('Should calculate the default tip amount',()=>{
    const total = 10;
    const result = calculateTip(total);
    expect(result).toBe(1);
})

test('Should convert fahrenheit to celsius',()=>{
    const fahrenheit = 32;
    const result = fahrenheitToCelsius(fahrenheit);
    expect(result).toBe(0);
})

test('Should convert celsius to fahrenheit',()=>{
    const celsius = 0;
    const result = celsiusToFahrenheit(celsius);
    expect(result).toBe(32);
})

// test('Async test demo', (done)=>{
//     setTimeout(()=>{
//         expect(1).toBe(2);
//         done();
//     },2000)})

    test('Should add two numbers', (done)=>{
        add(2,3).then((sum)=>{
            expect(sum).toBe(5);
            done();
        })}) 

        test('Should add two numbers async/await', async()=>{
            const sum = await add(10,22);
            expect(sum).toBe(32);
        })