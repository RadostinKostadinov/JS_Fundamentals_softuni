function arrMan(array){
    let myArr = array;
    let targetArr = myArr.shift().split(' ').map(Number);
    let myArrLength = myArr.length;

    for (let i = 0; i < myArrLength; i++) {
        let commandArr = myArr.shift().split(' ');
        command = commandArr[0];
        switch(command){    
            case 'Add':
                targetArr.push(Number(commandArr[1]));
                break;
            case 'Remove':
                targetArr = targetArr.filter((val) => val !== Number(commandArr[1]));
                break;
            case 'RemoveAt':
                targetArr.splice(commandArr[1], 1);
                break;
            case 'Insert':
                targetArr.splice(commandArr[2], 0, commandArr[1]);    
            break;
        }
        
    }

    console.log(targetArr.join(' '));
}

arrMan(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
);