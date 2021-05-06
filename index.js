// Add your functions here

// function sayHello(name="") {
//     console.log(`Hello ${name}`)
// }

// let sayHola = function(name="") {
//     console.log(`Hola ${name}`)
// }

// functionUsingCallback(sayHello, sayHola, function(name=""){
//     console.log(`Ni Hao ${name}`)
// });

// function functionUsingCallback(en, es, zh, name) {
//     en()
//     es()
//     zh()
// }

function map(src, callback) {
    const r = []

    for (let i = 0; i < src.length; i++) {
        const theElement = src[i];
        r.push(callback(theElement))
    }
    return r;
}

function reduce(src, callback, startingValue) {
    let total;
        if (startingValue) {
            total = startingValue;
            for (let i = 0; i < src.length; i++) {
                total = callback(src[i], total);
            }
            return total;
        } else {
            total = src[0];
            for (let i = 1; i < src.length; i++) {
                total = callback(src[i], total);
            }
        return total;
    }
}

