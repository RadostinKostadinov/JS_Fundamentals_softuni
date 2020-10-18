function negOrPos(array){
    let myArr = array;
    let newArr = [];

    for (let element of myArr) {
        if(element >= 0){
            newArr.push(element);
        } else {
            newArr.unshift(element);
        }
    }

    for (let element of newArr) {
        console.log(element);
    }

}

negOrPos([7, -2, 8, 9]);