function heartDelivery(array){
    let myArr = array.slice();
    let neighborhood = myArr.shift();
    neighborhood = neighborhood.split('@');
    let lastindex = 0;

    for(let i = 0; i < myArr.length; i++){
        let operatingArr = myArr[i].slice().split(' ');
        if(operatingArr[0] == 'Jump'){
            lastindex += Number(operatingArr[1]);
            if(lastindex >= neighborhood.length) lastindex = 0;
            if(Number(neighborhood[lastindex]) > 0){
            neighborhood[lastindex] = Number(neighborhood[lastindex]) - 2;
            if(Number(neighborhood[lastindex]) == 0) console.log(`Place ${lastindex} has Valentine's day.`);
            } else {
                console.log(`Place ${lastindex} already had Valentine's day.`);
            }
        }
        
        if(operatingArr[0] == 'Love!'){
            console.log(`Cupid's last position was ${lastindex}.`)
            let notSuccessful = 0;
            for (const value of neighborhood) {
                if(value != 0) notSuccessful += 1;
            }
            if(notSuccessful == 0){
                console.log(`Mission was successful.`);
            } else {
                console.log(`Cupid has failed ${notSuccessful} places.`)
            }
        }
    }
}

heartDelivery(['10@10@10@2',
    'Jump 1',
    'Jump 2',
    'Love!'
    ]
    )