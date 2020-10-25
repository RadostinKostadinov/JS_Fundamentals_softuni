function bunnyKill(array){
    let myArr = array.slice();
    let arrOfBombsPositions = myArr.splice(myArr.length-1, 1);
    
    console.log(myArr);
    console.log(arrOfBombsPositions);


}

bunnyKill(
    ['5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1']
)