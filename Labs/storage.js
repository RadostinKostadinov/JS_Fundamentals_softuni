function storage(array){
    let myArr = array.slice();
    let myAssocArr = {};

    while(myArr.length > 0){
        let [item, qty] = myArr.shift().split(' ');
        qty = Number(qty);
        if(!myAssocArr.hasOwnProperty(item)){
            myAssocArr[item] = 0;
        }
        myAssocArr[item] += qty;       
    }

    for (const key in myAssocArr) {
        if (myAssocArr.hasOwnProperty(key)) {
            const value = myAssocArr[key];
            console.log(`${key} -> ${value}`);
        }
    }
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
);