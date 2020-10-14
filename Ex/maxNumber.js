function maxNum(myArr) {
    let isBigger = true;
    let printString = "";
    for (let i = 0; i < myArr.length; i++) {
        for(let j = i; j < myArr.length; j++){
            if(myArr[i] < myArr[j] || myArr[i] == myArr[j] && i != j) {
                isBigger = false;
                break;
            } else{
                isBigger = true;
            }
        }
        if(isBigger) printString += `${myArr[i]} `;
    }
    console.log(printString);
}

maxNum([41, 41, 34, 20]);