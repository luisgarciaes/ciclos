const factorial = (num) =>{
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}
const euler = () =>{
    let number = 0;

    for (let i = 0; i < 100; i++) {
        number += 1/factorial(i); 
    }
    return "Tú aproximación es " + number + ". El resultado real es " + Math.E;
}

const infSeries = () =>{
    let number = 4;

    for (let i = 3; i < 3000; i+=2) {
        number -= 4/i; 
        i+=2 
        number += 4/i; 
        console.log(number)
    }

    return "Tú aproximación es " + number + ". El resultado real es " + Math.PI;
}