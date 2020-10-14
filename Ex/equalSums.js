function equalSums(myArr){
    let leftSum = 0;
    let rightSum = 0;
    let isThereEquals = false;
    for(let i = 0; i < myArr.length; i++){
        for(let j = 0; j < i; j++){
            leftSum += myArr[j];
        }
        for(let k = i+1; k < myArr.length; k++){
            rightSum += myArr[k];
        }

        if(leftSum == rightSum){
            console.log(i);  
            isThereEquals = true;
        }
        leftSum = 0;
        rightSum = 0;
       
    }
    if(!isThereEquals){
        console.log('no');
    }
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]   );