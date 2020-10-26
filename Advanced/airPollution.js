function airP(arrayOne, arrayTwo) {
    let arrMap = arrayOne.slice();
    let arrForces = arrayTwo.slice();

    arrMap = arrayTo2DArray(arrMap);
    arrForces = arrayTo2DArray(arrForces);

    arrMap = forceMap(arrMap, arrForces);
    pollutedAreas = calculatePollutedAreas(arrMap);

    if (pollutedAreas.length != 0) {
        console.log(`Polluted areas: ${pollutedAreas.join(', ')}`);
    } else {
        console.log('No polluted areas')
    }

    // ========= functions declaration ==========

    function arrayTo2DArray(array) {
        for (let row = 0; row < array.length; row++) {
            let column = array[0].split(' ');
            array.shift();
            array.push(column);
        }
        return array;
    }

    function calculatePollutedAreas(arrMap) {
        let pollutedAreas = [];
        for (let row = 0; row < arrMap.length; row++) {
            for (let column = 0; column < arrMap[row].length; column++) {
                if (arrMap[row][column] >= 50) {
                    let area = `[${row}-${column}]`;
                    pollutedAreas.push(area);
                }
            }
        }
        return pollutedAreas;
    }

    function forceMap(arrMap, arrForces) {
        for (let forceNum = 0; forceNum < arrForces.length; forceNum++) {
            let index = Number(arrForces[forceNum][1]);
            switch (arrForces[forceNum][0]) {
                case "breeze":
                    for (let column = 0; column < arrMap[index].length; column++) {
                        arrMap[index][column] = Number(arrMap[index][column]) - 15;
                    }
                    break;
                case "gale":
                    for (let row = 0; row < arrMap.length; row++) {
                        arrMap[row][index] = Number(arrMap[row][index]) - 20;
                    }
                    break;
                case "smog":
                    for (let row = 0; row < arrMap.length; row++) {
                        for (let column = 0; column < arrMap[row].length; column++) {
                            arrMap[row][column] = Number(arrMap[row][column]) + index;
                        }
                    }
                    break;
            }
        }
        return arrMap;
    }
}
airP(["5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24"],
    ["breeze 1", "gale 2", "smog 25"]
)