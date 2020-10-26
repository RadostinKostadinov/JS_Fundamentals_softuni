function jansNotation(array) {
    myArr = array.slice();
    arrNums = [];
    for (let i = 0; i < myArr.length; i++) {
        if (Number.isInteger(myArr[i])) {
            arrNums.push(Number(myArr[i]));
        } else {
            let operator = myArr[i];
            let operand1 = arrNums[arrNums.length - 2];
            let operand2 = arrNums[arrNums.length - 1];
            switch (operator) {
                case "-":
                    result = operand1 - operand2;
                    break;
                case "+":
                    result = operand1 + operand2;
                    break;
                case "*":
                    result = operand1 * operand2;
                    break;
                case "/":
                    result = operand1 / operand2;
                    break;
            }
            arrNums[arrNums.length - 2] = result;
            arrNums.splice(arrNums.length - 1, 1);
        }
    }
    if (!Number.isInteger(arrNums[0])) {
        console.log(`Error: not enough operands!`);
    } else if(arrNums.length != 1){
        console.log(`Error: too many operands!`);
    } else {
        console.log(arrNums[0]);
    }
}
jansNotation([5,
    3,
    4,
    '*',
    '-']
   

);