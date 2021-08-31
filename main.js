const factorial = (num) =>{
    let val=1;
    for (var i = 2; i <= num; i++)
        val = val * i;
    return val;
}
const eulerApproximation = () =>{
    let number = 0;

    for (let i = 0; i < 100; i++) {
        number += 1/factorial(i); 
    }
    return "Tú aproximación es " + number + ". El resultado real es " + Math.E;
}

const piApproximation = () =>{
    let number = 4;

    for (let i = 3; i < 203; i+=2) {
        number -= 4/i; 
        i+=2 
        number += 4/i; 
    }

    return "Tú aproximación es " + number + ". El resultado real es " + Math.PI;
}