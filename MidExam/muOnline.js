function muOnline(array){
    let roomsArr = array.split('|');
    
    let health = 100; 
    let bitcoins = 0;
    let isDead = false;
    for(let i = 0; i < roomsArr.length ; i++){
        let insideRoom = roomsArr[i].split(" ");
        switch(insideRoom[0]){
            case "potion": 
            {
                let fix = 0;
                if(health < 100) health += Number(insideRoom[1]);
                if(health > 100) {
                    fix = health - 100; 
                    health = 100;
                }
                console.log(`You healed for ${Number(insideRoom[1] - fix)} hp.`);
                console.log(`Current health: ${health} hp.`)
            } break;
            case "chest": {
                bitcoins += Number(insideRoom[1]);
                console.log(`You found ${Number(insideRoom[1])} bitcoins.`);
            } break;
            default:
                health -= Number(insideRoom[1]);
                if(health <= 0){
                    isDead = true;
                    break;
                } else {
                    console.log(`You slayed ${insideRoom[0]}.`);
                }
        }
        if(isDead) {
            console.log(`You died! Killed by ${insideRoom[0]}.`)
            console.log(`Best room: ${i+1}`);
            break;
        }
    }

    if(!isDead){
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}
muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000')