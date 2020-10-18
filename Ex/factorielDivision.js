function factDiv(numberOne, numberTwo){
    let n1 = Number(numberOne);
    let n2 = Number(numberTwo);

    let firstFactoriel = 1;
    let secondFactoriel = 1;

    for(let i = n1; i > 0; i--){
        firstFactoriel *= i;
    }

    for(let i = n2; i > 0; i--){
        secondFactoriel *= i;
    }

    let result = firstFactoriel / secondFactoriel;
    console.log(result.toFixed(2));
}

factDiv(6,2);