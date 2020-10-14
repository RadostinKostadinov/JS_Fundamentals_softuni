function magicSum(myArr, eqNum) {
    for (let i = 0; i < myArr.length; i++) {
        for (let j = i + 1; j < myArr.length; j++){
            if((Number(myArr[i]) + Number(myArr[j])) == Number(eqNum)){
                console.log(`${myArr[i]} ${myArr[j]}`);
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23],
    8
    
    );