function bunnyKill(array) {
    let myArr = array.slice();
    let arrOfBombsPositions = myArr.splice(myArr.length - 1, 1);
    myArr = arrayTo2DArray(myArr);

    arrOfBombsPositions = arrOfBombsPositions[0].split(' ');     //returns array of BombPos like array[BombNumber][0-> returns row, 2-> column]

    for (let bombNumber = 0; bombNumber < arrOfBombsPositions.length; bombNumber++) {

        let row = Number(arrOfBombsPositions[bombNumber][0]);
        let column = Number(arrOfBombsPositions[bombNumber][2]);
        console.log(`row, column -> ${row}, ${column}`);
        console.log(`           bombValue -> ${myArr[row][column]}`);
        function boom(array, row, column) {
            if (row != 0) {
                if (column - 1 >= 0) array[row - 1][column - 1] -= array[row][column];
                array[row - 1][column] -= array[row][column];
                if (column + 1 != array[0].length - 1) array[row - 1][column + 1] -= array[row][column];
            }

            if (column - 1 >= 0) array[row][column - 1] -= array[row][column];
            if (column + 1 < array[0].length) array[row][column + 1] -= array[row][column];

            if (row != array.length - 1) {
                if (column - 1 >= 0) array[row + 1][column - 1] -= array[row][column];
                array[row + 1][column] -= array[row][column];
                if (column + 1 < array[0].length) array[row + 1][column + 1] -= array[row][column];
            }
            return array;
        }


    }


    console.log(`arrOfBombsPositions.length -> ${arrOfBombsPositions.length}`);
    console.log(`arrOfBombsPositions[0][0]  -> ${arrOfBombsPositions[0][2]}`);
    console.log(`myArr                      ->${`\n`}${myArr.join('\n')}`);
    console.log(`arrOfBombsPositions        -> ${arrOfBombsPositions.join(' ')}`);


    //================= functions declaration =========
    function arrayTo2DArray(array) {
        for (let row = 0; row < array.length; row++) {
            let column = array[0].split(' ');
            array.shift();
            array.push(column);
        }
        return array;
    }
}

bunnyKill(
    ['5 10 15 20',
        '10 10 10 10',
        '10 15 10 10',
        '10 10 10 10',
        '2,1 0,3']
)