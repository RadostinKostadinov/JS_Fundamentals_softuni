function bunnyKill(array){
    let myArr = array.slice();
    let arrOfBombsPositions = myArr.splice(myArr.length-1, 1);
    arrOfBombsPositions = arrOfBombsPositions[0].split(' ');     //returns array of BombPos like array[BombNumber][0-> returns row, 2-> column]

    for(let bombNumber = 0; bombNumber < arrOfBombsPositions.length; bombNumber++){
        let row = arrOfBombsPositions[bombNumber][0];
        let column = arrOfBombsPositions[bombNumber][2];
        console.log(`row, column -> ${row}, ${column}`);
        
    }


    console.log(`arrOfBombsPositions.length -> ${arrOfBombsPositions.length}`);
    console.log(`arrOfBombsPositions[0][0]  -> ${arrOfBombsPositions[0][2]}`);
    console.log(`myArr                      -> ${myArr.join('    ')}`);
    console.log(`arrOfBombsPositions        -> ${arrOfBombsPositions.join(' ')}`);


}

bunnyKill(
    ['5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1 3,4']
)