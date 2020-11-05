function inventory(array) {
    let myArr = array.slice();
    let sequenceArray = myArr.shift();
    sequenceArray = sequenceArray.split(', ');

    while (myArr.length > 0) {
        let operatingArr = myArr.shift().split(' - ');
        switch (operatingArr[0]) {
            case 'Collect': {
                let isExists = sequenceArray.indexOf(operatingArr[1]);
                if (isExists == -1) sequenceArray.push(operatingArr[1]);
            } break;

            case 'Drop':
                {
                    let itemId = sequenceArray.indexOf(operatingArr[1]);
                    if (itemId != -1) sequenceArray.splice(itemId, 1);
                } break;

            case 'Combine Items':
                {
                    let itemsForCombining = operatingArr[1].split(':');
                    let isExists = sequenceArray.includes(itemsForCombining[0]);
                    if (isExists) {
                        let itemId = sequenceArray.indexOf(itemsForCombining[0]);
                        sequenceArray.splice(itemId+1, 0, itemsForCombining[1]);
                    }
                } break;
            case 'Renew':
                {
                    let isExists = sequenceArray.includes(operatingArr[1]);
                    if (isExists) {
                        let itemId = sequenceArray.indexOf(operatingArr[1]);
                        sequenceArray.splice(itemId, 1);
                        sequenceArray.push(operatingArr[1]);
                    }
                }
                break;

            case 'Craft!':
                {
                    console.log(sequenceArray.join(', '));
                } break;
        }

    }

}

inventory([ 'Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!' ]
);