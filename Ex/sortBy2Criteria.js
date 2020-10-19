function sortAnArrayBy2Criteria(array) {
    myArr = array.slice();
    myArr.sort((a, b) => {
        if (a.length - b.length <= -1) {
            return a.length - b.length;
        } else if (a.length - b.length == 0) {
           return a.localeCompare(b);
        } else if (a.length - b.length >= 1) {
            return a.length - b.length;
        }

    })
    console.log(myArr.join('\n'));
}

sortAnArrayBy2Criteria(["Bbb", "Aaa", "Jack", "Harrison", "George"]);