function expenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let totalExpenses = 0;
    let isShieldBrake2ndTime = 0;
    for(let i = 1; i <= lostFights; i++){
        let isSwordAndHelmetBroken = 0; // +1 if helmet broke up and +1 if sword broke up
        
        if(i % 2 == 0){
            totalExpenses += helmetPrice;
            isSwordAndHelmetBroken += 1;
        }
        if(i % 3 == 0){
            totalExpenses += swordPrice;
            isSwordAndHelmetBroken += 1;
        }
        if(isSwordAndHelmetBroken == 2){
            totalExpenses += shieldPrice;
            isShieldBrake2ndTime += 1;
        }
        if(isShieldBrake2ndTime == 2){
            totalExpenses += armorPrice;
            isShieldBrake2ndTime = 0;
        }

    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`)

}

expenses(23,
    12.50,
    21.50,
    40,
    200
    
    )