function bakery(number1, number2, number3){
    let biscuitsPerWorker = Number(number1);
    let workers = Number(number2);
    let enemy = Number(number3);
    let biscuitsProduced = 0;
    let biscuitsPerDay = biscuitsPerWorker * workers;

    for(let day = 1; day <= 30; day++){
        if(day % 3 == 0){
            biscuitsProduced += Math.floor(biscuitsPerDay * 0.75);
        } else {
            biscuitsProduced += Math.floor(biscuitsPerDay);
        }
    }
    console.log(`You have produced ${biscuitsProduced} biscuits for the past month.`)
    let difference = 0;
    let percents = 0;
    if(biscuitsProduced > enemy) {
        difference = biscuitsProduced - enemy;
        percents = (difference / enemy) * 100;
        console.log(`You produce ${percents.toFixed(2)} percent more biscuits.`);
    } else {
        difference = enemy - biscuitsProduced;
        percents = (difference / enemy) * 100;
        console.log(`You produce ${percents.toFixed(2)} percent less biscuits.`);
    }



}
bakery(78,
    8,
16000
    )