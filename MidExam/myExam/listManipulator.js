function listManipulator(array){
    let myArr = array.slice();
    let namesList = myArr.shift();
    namesList = namesList.split(', ');
    let blacklisted = 0;
    let lost = 0;
    while(myArr.length > 0){
        let operatingArr = myArr.shift();
        operatingArr = operatingArr.split(' ');

        switch(operatingArr[0]){
            case 'Blacklist':{
                let index = namesList.indexOf(operatingArr[1]);
                if( index != -1 ){
                    namesList[index] = "Blacklisted";
                    console.log(`${operatingArr[1]} was blacklisted.`);
                    blacklisted++;
                } else {
                    console.log(`${operatingArr[1]} was not found.`)
                }
            }
                break;
            case 'Error':{
                name = namesList[operatingArr[1]];
                if(name != "Blacklisted" && name != "Lost"){
                    namesList[operatingArr[1]] = "Lost";
                    console.log(`${name} was lost due to an error.`)
                    lost++;
                }
            }
                break;
            case 'Change':{
                if(operatingArr[1] >= 0 && operatingArr[1] <= namesList.length - 1){
                    currentName = namesList[operatingArr[1]];
                    namesList[operatingArr[1]] = operatingArr[2];
                    console.log(`${currentName} changed his username to ${operatingArr[2]}.`);
                }
            }
                break;
            case 'Report':{
                console.log(`Blacklisted names: ${blacklisted}`);
                console.log(`Lost names: ${lost}`);
                console.log(namesList.join(' '));	
            }
                break;

        }
    }
}
listManipulator(((["Mike, John, Eddie, William",
"Error 3",
"Error 3",
"Change 0 Mike123",
"Blacklist Eddie",
"Report"])
)
);