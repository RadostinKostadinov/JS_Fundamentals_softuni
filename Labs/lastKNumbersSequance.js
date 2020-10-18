function lastKNumsSeq(numberOne, numberTwo){
    let n1 = Number(numberOne);
    let n2 = Number(numberTwo);

    let myArr = [1];
    for(let i = 1; i < n1; i++){
        let newArrStart = myArr.length - n2;
        let newArr = myArr.filter((val, index) => index >= newArrStart).map(Number);
        let sum = newArr.reduce((a, b) => a + b);
        myArr.push(sum);
    }
    console.log(myArr.join(' '));
}

lastKNumsSeq(6, 3);
