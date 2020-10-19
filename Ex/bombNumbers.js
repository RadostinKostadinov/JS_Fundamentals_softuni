function bombNumbers(arrayOne, arrayTwo) {
    let myArr = arrayOne.slice();
    let arrPower = arrayTwo.slice();
    while (myArr.includes(arrPower[0])) {
        let start = myArr.indexOf(arrPower[0]) - arrPower[1];
        let numsToDel = (arrPower[1] * 2) + 1;
        if (start < 0) {
            numsToDel = start + numsToDel;
            start = 0;
        }
        let deleted = myArr.splice(start, numsToDel);
    }
    let result = 0;
    for (const num of myArr) {
        result += Number(num);
    }
    console.log(result);

}
bombNumbers([1, 4, 2, 3, 4, 5, 6, 7, 8, 9, 4, 0],
     [4, 1]
);
