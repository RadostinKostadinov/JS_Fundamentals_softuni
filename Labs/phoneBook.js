function phoneBook(array){
    let myArr = array.slice();
    let myAssocArr = {};

    while(myArr.length > 0) {
        let [name, number] = myArr.shift().split(' ');
        myAssocArr[name] = number;
    }

    for (const key in myAssocArr) {
        if (myAssocArr.hasOwnProperty(key)) {
            const value = myAssocArr[key];
            console.log(`${key} -> ${value}`);
        }
    }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);