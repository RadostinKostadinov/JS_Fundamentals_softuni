function deckOfCards(array){
    let myArr = array.slice();
    let deck = myArr.shift();
    let operations = myArr.shift();
    deck = deck.split(', ');
    for(let operation = 0; operation < operations; operation++){
        let operatingArr = myArr.shift();
        operatingArr = operatingArr.split(', ');
        switch(operatingArr[0]){
            case 'Add':{
                index = deck.indexOf(operatingArr[1]);
                if(index != -1) {
                    console.log(`Card is already bought`);
                } else {
                    deck.push(operatingArr[1]);
                    console.log(`Card successfully bought`);
                }
            }break;
            case 'Insert':{
                if(Number(operatingArr[1]) >= 0 && Number(operatingArr[1]) <= deck.length - 1){
                    index = deck.indexOf(operatingArr[2]);
                    if(index != -1){
                       console.log(`Card is already bought`);
                    } else {
                        deck.splice(Number(operatingArr[1]), 0, operatingArr[2]);
                        console.log(`Card successfully bought`);
                    }
                  
                } else {
                    console.log(`Index out of range`)
                }
            }break;
            case 'Remove':{
                index = deck.indexOf(operatingArr[1]);
                if(index != -1){
                    deck.splice(index, 1);
                    console.log(`Card successfully sold`);
                } else {
                    console.log(`Card not found`);
                }
            }break;
            case 'Remove At':{
                if(Number(operatingArr[1]) > 0 && Number(operatingArr[1]) < deck.length - 1){
                    deck.splice(Number(operatingArr[1]), 1);
                    console.log(`Card successfully sold`);
                } else {
                    console.log(`Index out of range`)
                }
            }break;
        }
    }
    console.log(deck.join(', '));
    
}
deckOfCards(["T 34, T 34 B, T92, AMX 13 57",
"4",
"Add, T 34",
"Remove, AMX CDC",
"Insert, 10, M60",
"Remove At, 1"]);