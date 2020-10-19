// You will be given an array of strings.
// The first element will be a string containing wagons (numbers). Each number inside the string represents the number of passengers that are currently in a wagon. 
// The second element in the array will be the max capacity of each wagon (single number).
// The rest of the elements will be commands in the following format:
// •	Add {passengers} – add a wagon to the end with the given number of passengers.
// •	{passengers} -  find an existing wagon to fit all the passengers (starting from the first wagon)
// At the end print the final state of the train (all the wagons separated by a space)

function train(array) {
    let myArr = array;
    let wagonsArr = myArr.shift().split(' ').map(Number);
    let maxCapacityPerWagon = Number(myArr.shift());
    let myArrLength = myArr.length;

    for (let i = 0; i < myArrLength; i++) {
        let command = myArr.shift().split(' ');
        if (command[0] == 'Add') {
            wagonsArr.push(Number(command[1]));
        } else {
            let passengers = Number(command[0])
            for (let i = 0; i < wagonsArr.length; i++) {
                if (wagonsArr[i] + passengers <= maxCapacityPerWagon) {
                    wagonsArr[i] += passengers;
                    break;
                }
            }
        }
    }

    console.log(wagonsArr.join(' '));
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);