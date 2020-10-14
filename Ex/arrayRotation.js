function rotateArr(myArr, numOfRotations){
    for(let i = 0; i < numOfRotations; i++){
        myArr.push(myArr[0]);
        myArr.shift();
    }
    console.log(myArr);
}
rotateArr([51, 47, 32, 61, 21], 2);