function procOddNums(array){
    let myArr = array;
    let newArr = [];
    for (let i = 0; i < myArr.length; i++) {
        const element = myArr[i];
        if(i % 2 != 0){
            newArr.unshift(element*2);
        }
    }

    console.log(newArr.join(' '));
}

procOddNums2([3, 0, 10, 4, 7, 3]);

function procOddNums2(array){
    let myArr = array;
    let newArr = [];
    for (let i = 0; i < myArr.length; i++) {
        let element = myArr[i];
        if(i % 2 != 0){
            newArr.push(element);
        }
    }

    newArr = newArr.map((x) => x * 2);
    newArr.reverse();

    console.log(newArr.join(' '));

}