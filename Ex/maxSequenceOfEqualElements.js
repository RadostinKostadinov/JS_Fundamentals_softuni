function maxSoEE(myArr){
    let elementID = myArr.length;
    let sumSeq = 0;
    let newSumSeq = 0;
    for(let i = 0; i < myArr.length; i++){
        
        if(myArr[i] == myArr[i+1]){
            newSumSeq += 1;
            if(newSumSeq > sumSeq){
                elementID = i-(newSumSeq-1);
                sumSeq = newSumSeq;
            }
        } else {
            newSumSeq = 0;
        }
    }
    let printString = "";
    for(let i = elementID; i <= elementID + sumSeq; i++){
        printString += `${myArr[i]} `;
    }

    console.log(printString);
}

maxSoEE([0, 1, 1, 5, 2, 2, 6, 3, 3]);