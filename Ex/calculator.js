function calculator(number1, operator, number2) {
    number1 = +number1;
    number2 = +number2;
    let result = 0;
    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
    }

    console.log(result.toFixed(2));
}

calculator(2,'+',3)