function warships(array){
        let myArr = array.slice();
        let pirateShip = myArr.shift();
        let warShip = myArr.shift();
        let maxHP = Number(myArr.shift());
        pirateShip = pirateShip.split('>');
        warShip = warShip.split('>');
        for(let i = 0; i < pirateShip.length; i++) pirateShip[i] = Number(pirateShip[i]);
        for(let i = 0; i < warShip.length; i++) warShip[i] = Number(warShip[i]);
        let isOver = false;
        let commandsArrLength = myArr.length;

        while(commandsArrLength > 0){
            let operatingArr = myArr.shift();
            operatingArr = operatingArr.split(' ');
            
            switch(operatingArr[0]){
                case 'Fire':{
                    operatingArr[1] = Number(operatingArr[1]);
                    operatingArr[2] = Number(operatingArr[2]);
                    if(operatingArr[1] >= 0 && operatingArr[1] < warShip.length){
                        warShip[operatingArr[1]] -= operatingArr[2];
                        if(warShip[operatingArr[1]] <= 0) {
                            console.log("You won! The enemy ship has sunken.")
                            isOver = true;
                        }
                    }
                }break;
                case 'Defend':{
                    operatingArr[1] = Number(operatingArr[1]);
                    operatingArr[2] = Number(operatingArr[2]);
                    operatingArr[3] = Number(operatingArr[3]);

                    for(let index = operatingArr[1]; index <= operatingArr[2]; index++){
                        if(index >= 0 && index < pirateShip.length){
                        pirateShip[index] -= operatingArr[3];
                        if(pirateShip[index] <= 0){
                            console.log(`You lost! The pirate ship has sunken.`);
                            isOver = true;
                        }
                        if(isOver) break;
                        }
                    }
                }break;
                case 'Repair':{
                    operatingArr[1] = Number(operatingArr[1]);
                    operatingArr[2] = Number(operatingArr[2]);

                    if(operatingArr[1] >= 0 && operatingArr[1] < pirateShip.length){
                        pirateShip[operatingArr[1]] += operatingArr[2];
                        if(pirateShip[operatingArr[1]] > maxHP){
                            pirateShip[operatingArr[1]] = maxHP;
                        }
                    }
                }break;
                case 'Status':{
                    let needsRepair = 0;
                    for (const section of pirateShip) {
                        
                        if(section < (maxHP * 0.2)){
                            needsRepair++;
                        }
                       }
                       console.log(`${needsRepair} sections need repair.`)
                    }break;
                case 'Retire':{
                        let pirateShipSum = 0;
                        let warShipSum = 0;
                        for (const section of pirateShip) {
                            pirateShipSum += section;
                        }
                        for (const section of warShip) {
                            warShipSum += section
                        }
                        console.log(`Pirate ship status: ${pirateShipSum}`);
                        console.log(`Warship status: ${warShipSum}`);
                }
            }
            if(isOver) {
                commandsArrLength = -1;
            } else {
                commandsArrLength = myArr.length;
            }
        }

}
warships(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"]);
