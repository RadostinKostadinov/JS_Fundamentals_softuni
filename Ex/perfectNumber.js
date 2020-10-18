function perfectNumber(number){
    let num = Number(number);
    let arrPosDivisiors = [];
    for(let i = 1; i <= num; i++){
        let posDivisior = num % i;
        if(posDivisior == 0){
            arrPosDivisiors.push(i);
        }
    }
    arrPosDivisiors.pop();                  
    let sum = arrPosDivisiors.reduce((a, b) => a + b);
    if(sum == num){
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }

}

perfectNumber(1236498);