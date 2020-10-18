function smallestTwoNums(array){
    let myArr = array;
    myArr.map(Number);
    myArr.sort((a, b) => a - b);
    myArr = myArr.slice(0, 2);
    console.log(myArr.join(' '));
}

smallestTwoNums([3, 0, 10, 4, 7, 3]);