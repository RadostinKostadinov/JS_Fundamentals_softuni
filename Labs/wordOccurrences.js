function wordOcc(array){
    let myArr = array.slice();
    let myAssocArr = {};

    while(myArr.length > 0){
        let word = myArr.shift();
        if(!myAssocArr.hasOwnProperty(word)) myAssocArr[word] = 0;
        myAssocArr[word]++;
    }

    let sorted = Object.entries(myAssocArr).sort((a,b) => {
        return b[1] - a[1];
    })
    for (const element of sorted) {
        const key = element[0];
        const value = element[1];
        console.log(`${key} -> ${value} times`);
    }

}
wordOcc(
    ["Here", "is", "the", "first", "sentence", 
    "Here", "is", "another", 
    "sentence", "And", "finally", 
    "the", "third", "sentence"]
);