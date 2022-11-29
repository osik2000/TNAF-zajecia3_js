function fibonnaci(n){


    let out = [];

        let temp = 0;
        let temp2 = 1;
        let sum = 0;
        for(let i=1; i<=n; i++){

            out.push(temp);
            sum = temp+temp2;
            temp = temp2;
            temp2 = sum;
        }
    return out;
}

console.log(fibonnaci(9));