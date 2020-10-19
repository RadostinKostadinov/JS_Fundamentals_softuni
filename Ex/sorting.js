function sorting(array){
    let myArr = [];
    let biggestArr = array.slice();
    let smallestArr = array.slice();
    biggestArr.sort((a, b) => b - a);
    smallestArr.sort((a, b) => a - b);

    for(let i = 0; i < array.length / 2; i++){
        myArr.push(biggestArr[i]);
        myArr.push(smallestArr[i]);
    }

    if(array.length % 2 !== 0) myArr.pop();
    
    console.log(myArr.join(' '));


}
