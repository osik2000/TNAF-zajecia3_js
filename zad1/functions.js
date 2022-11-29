function isOdd(x){
    return (x%2 == 1);
}


const isEven = x => !isOdd(x);

console.log(isOdd(1));
console.log(isEven(1));