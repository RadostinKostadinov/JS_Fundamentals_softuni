function bunnyKill(array) {
    let myArr = array.slice();
    let arrOfBombsPositions = myArr.splice(myArr.length - 1, 1);
    myArr = arrayTo2DArray(myArr);

    arrOfBombsPositions = arrOfBombsPositions[0].split(' ');     //make an array of BombPos like array[BombNumber][0-> returns row, 2-> column]
    let damageDone = 0;
    let kills = 0;

    for (let bombNumber = 0; bombNumber < arrOfBombsPositions.length; bombNumber++) {
        let row = arrOfBombsPositions[bombNumber].split(',').map(Number)[0];
        let column = arrOfBombsPositions[bombNumber].split(',').map(Number)[1];

        if (Number(myArr[row][column]) > 0) {
            damageDone += Number(myArr[row][column]);
            kills++;
            myArr = boom(myArr, row, column);
        }
    }
    let result = killRemained(myArr, damageDone, kills);
    console.log(result[0]);
    console.log(result[1]);

    //================= functions declaration =========
    function arrayTo2DArray(array) {
        for (let row = 0; row < array.length; row++) {
            let column = array[0].split(' ');
            array.shift();
            array.push(column);
        }
        return array;
    }


    function boom(array, row, column) {
        let myArr = array.slice();
        row = Number(row);
        column = Number(column);
        if (row != 0) {
            if (column - 1 >= 0) myArr[row - 1][column - 1] -= myArr[row][column];
            myArr[row - 1][column] -= myArr[row][column];
            if (column + 1 < myArr[0].length) myArr[row - 1][column + 1] -= myArr[row][column];
        }

        if (column - 1 >= 0) myArr[row][column - 1] -= myArr[row][column];
        if (column + 1 < myArr[0].length) myArr[row][column + 1] -= myArr[row][column];

        if (row != myArr.length - 1) {
            if (column - 1 >= 0) myArr[row + 1][column - 1] -= myArr[row][column];
            myArr[row + 1][column] -= myArr[row][column];
            if (column + 1 < myArr[0].length) myArr[row + 1][column + 1] -= myArr[row][column];
        }

        myArr[row][column] = 0;
        return myArr;
    }

    function killRemained(array, damageDone, kills) {
        let myArr = array.slice();
        for (let row of myArr) {
            for (let bunnyHP of row) {
                if (bunnyHP > 0) {
                    damageDone += Number(bunnyHP);
                    kills++;
                }
            }
        }
        let arrReturn = [damageDone, kills];
        return arrReturn;
    }
}

