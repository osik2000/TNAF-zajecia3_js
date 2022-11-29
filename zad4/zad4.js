function sum(arr){
    let suma = 0;
    for(let i=0; i<arr.length; i++){
        suma += arr.at(i);
    }
    return suma;
}

let ar = [0,1,2,3,4,5];

console.log(sum(ar));