function sum(number1, number2, number3){
    let n1 = Number(number1);
    let n2 = Number(number2);
    let n3 = Number(number3);

    let result = n1 + n2;
    result = substract(result, n3);
    return result;


    function substract(number1, number2){
        return number1 - number2;
    }
}
