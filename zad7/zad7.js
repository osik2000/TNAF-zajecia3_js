function isHappyNumber(number){
    arr = [];

    let x = number;

    while (!arr.includes(x)){
        arr.push(x);

        let digits = [];
        while(x!==0){
            digits.push(x%10);
            x = parseInt(x/=10);
        }
        let suma = 0;
        for(let i=0; i<digits.length; i++){
            suma += digits.at(i) * digits.at(i);
        }
        if(suma === 1) return true;
        x = suma;
    }
    return false;
}

console.log(isHappyNumber(19));