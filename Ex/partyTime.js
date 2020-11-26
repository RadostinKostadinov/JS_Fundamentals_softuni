function ptTime(array) {
    let myArr = array.slice();
    let vipAA = {};
    let regAA = {};

    let i = 0;
    while (myArr[i] != 'PARTY') {
        if (Number(myArr[i][0]) >= 0) {
            vipAA[myArr[i]] = 0;
        } else {
            regAA[myArr[i]] = 0;
        }
        i++;
    }
    console.log(vipAA, regAA);
    while (i < myArr.length) {
        if (vipAA.hasOwnProperty(myArr[i]) || regAA.hasOwnProperty(myArr[i])) {
            delete guestListAA[myArr[i]];
        } 
        i++;
    }

    let length = Object.keys(vipAA).length + Object.keys(regAA).length;
    let sorted = Object.entries(guestListAA);
    console.log(sorted[0][0], sorted[1][0]);
    console.log(Object.keys(guestListAA).length);
    console.log(Object.keys(sorted));

}
ptTime([
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    '7IK9Yo0h',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
);