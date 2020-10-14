function spiceMustFlow(yieldDrop){
    yieldDrop = +yieldDrop;
    let totalAmount = 0;
    const workersConsumption = 26;
    let days = 0;
    for(let i = yieldDrop; i > 100; i -= 10){
        days += 1;
        totalAmount += i;
        totalAmount -= workersConsumption;
    }
    totalAmount -= workersConsumption;

    console.log(days)
    console.log(totalAmount)
}

spiceMustFlow(111);