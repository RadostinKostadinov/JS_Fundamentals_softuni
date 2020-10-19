function houseParty(array){
    let myArr = array.slice();
    let arrOfGuests = [];
    let myArrLength = myArr.length;
    for(let i = 0; i < myArrLength; i++){
        let addGuest = myArr.shift().split(' ');
        let isInTheList = false;
        switch(addGuest[2]){
            case 'going!':
                isInTheList = arrOfGuests.includes(addGuest[0]);
                if(!isInTheList){
                    arrOfGuests.push(addGuest[0]);
                } else {
                    console.log(`${addGuest[0]} is already in the list!`);
                }
            break;
            case 'not':
                isInTheList = arrOfGuests.includes(addGuest[0]);
                if(!isInTheList){
                    console.log(`${addGuest[0]} is not in the list!`)
                } else {
                    arrOfGuests.splice(arrOfGuests.indexOf(addGuest[0]), 1);
                }
            break;
        }

    }
    for (const guest of arrOfGuests) {
        console.log(guest);
    }
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']

);