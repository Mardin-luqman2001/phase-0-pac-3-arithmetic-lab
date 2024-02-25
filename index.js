function add(num1, num2){
    return num1+num2;
}
console.log(2+2);
function subtract(num1, num2){
    return num1-num2
}
console.log(5-1)

function multiply(num1, num2){
    return num1*num2
}
console.log(4*1)

function divide(num1, num2){
    return num1/num2
}
console.log(8/2);

function increment(n){
    return n+1;
}

function decrement(n){
    return n-1;
}

console.log(increment(3)); 
console.log(decrement(5)); 


function makeInt(n){
    const parsedInt = parseInt(n, 10);
    return parsedInt;
}
function preserveDecimal(n) {
    const parsedFloat = parseFloat(n);
    if (isNaN(parsedFloat)) {
        return NaN;
    } else {
        return parsedFloat;
    }
}

