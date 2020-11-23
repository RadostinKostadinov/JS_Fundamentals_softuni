function piccolo(array){
    let myArr = array.slice();
    let myAssocArr = {};
    while(myArr.length > 0){
        let [dir, plate] = myArr.shift().split(', ');
        if(dir === 'IN'){
            myAssocArr[plate] = 'IN';
        } else if(dir === 'OUT') {
            if(myAssocArr.hasOwnProperty(plate)){
                delete myAssocArr[plate];
            }
        }
    }
    let sorted = Object.entries(myAssocArr).sort((a, b) => {
        let subsA = a[0].substring(2, 6);
        let subsB = b[0].substring(2 ,6);
        return subsA - subsB;
    })
    for (const car of sorted) {
        console.log(car[0]);
    }
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);