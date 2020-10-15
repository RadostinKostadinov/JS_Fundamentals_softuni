function smallestOfThreeNumbers(number1, number2, number3){
    let n1 = Number(number1);
    let n2 = Number(number2);
    let n3 = Number(number3);

    if(n1 <= n2 && n1 <= n3){
        return n1;;
    } else if(n2 <= n1 && n2 <= n3){
        return n2;
    } else if(n3 <= n1 && n3 <= n2){
        return n3;
    }
}

function smallestOfThreeNumbers(number1, number2, number3){
    n1 = Number(number1);
    n2 = Number(number2);
    n3 = Number(number3);

    if(n1 <= n2 && n1 <= n3){
        console.log(n1);
    } else if(n2 <= n1 && n2 <= n3){
        console.log(n2);
    } else if(n3 <= n1 && n3 <= n2){
        console.log(n3);
    }
}
