function range(a, b){
    let start = a;
    let out = [];
    for(let i = a; i<=b; i++){
        out.push(i);
    }
    return out;
}

console.log(range(6,12));