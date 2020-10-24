function eqNeighbors(arrMatrix2D){
    let counter = 0;
    for(let array = 0; array < arrMatrix2D.length - 1; array++){
        let firstArr = arrMatrix2D[array].slice();
        let secondArr = arrMatrix2D[array+1].slice();
        for(let i = 0; i < firstArr.length; i++){
            if(firstArr[i] == secondArr[i]){
                counter++;
            }           
            if(firstArr[i] == firstArr[i+1]){
                counter++;
            }
        }
        
    
        if(array == arrMatrix2D.length - 2){
            for(let y = 0; y < secondArr.length - 1; y++){
                if(secondArr[y] == secondArr[y+1]){
                    counter++;
                }
            }
        }
    }
    console.log(counter);
}

eqNeighbors([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]);


