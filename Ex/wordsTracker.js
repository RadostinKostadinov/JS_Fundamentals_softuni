function wordsTracker(array) {
    let myArr = array.slice();
    let myAssocArr = {};
    myArr.shift().split(' ').forEach(element => {
        myAssocArr[element] = 0;
    });
    while (myArr.length > 0) {
        let word = myArr.shift();
        if (myAssocArr.hasOwnProperty(word)) myAssocArr[word]++;
    }


    let sorted = Object.entries(myAssocArr).sort((a, b) => {
        return b[1] - a[1];
    });
    
    for (const element of sorted) {
        console.log(`${element[0]} - ${element[1]}`);
    }
}
wordsTracker(
    [
        'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
        , 'words', 'this', 'and', 'sentence', 'sentence', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]

);