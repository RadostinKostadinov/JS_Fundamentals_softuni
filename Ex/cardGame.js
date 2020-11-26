function cardGame(array){
    let myArr = array.slice();
    let myAssocArr = {};

    while(myArr.length > 0){
        let [name, cards] = myArr.shift().split(': ');
        cards = cards.split(', ');
        if(!myAssocArr[name]) myAssocArr[name] = [];
        for (const card of cards) {
             if(!myAssocArr[name].includes(card)) myAssocArr[name].push(card);
        }
    }   


    for (const name in myAssocArr) {
        if (myAssocArr.hasOwnProperty(name)) {
            const arrOfCards = myAssocArr[name];
            console.log(`${name}: ${calcPoints(arrOfCards)}`);
        }
    }




    function calcPoints(cards){
        let points = 0;
        for (const card of cards) {
            let typeOfCurrentCard = card.substring(card.length-1);
            let cardPower = card.substring(0, card.length-1);
            
            if(cardPower <= 10) cardPower = Number(cardPower);
            else if(cardPower === 'J') cardPower = 11;
            else if(cardPower === 'Q') cardPower = 12;
            else if(cardPower === 'K') cardPower = 13;
            else if(cardPower === 'A') cardPower = 14;
            
            if(typeOfCurrentCard === 'S') typeOfCurrentCard = 4;
            else if(typeOfCurrentCard === 'H') typeOfCurrentCard = 3;
            else if(typeOfCurrentCard === 'D') typeOfCurrentCard = 2;
            else if(typeOfCurrentCard === 'C') typeOfCurrentCard = 1;
        
            points += cardPower * typeOfCurrentCard;
        }
        return points;
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    );