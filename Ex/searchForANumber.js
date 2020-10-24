function searchForANum(arrayOne, arrayTwo){
    let myArr = arrayOne.slice().map(Number);
    let cmdArr = arrayTwo.slice().map(Number);

    myArr = myArr.slice(0, cmdArr[0]);
    console.log(myArr);
    myArr.splice(0, cmdArr[1]);
    console.log(myArr);
    let counter = 0;
    while(myArr.includes(cmdArr[2])){
        counter++;
        let index = myArr.indexOf(cmdArr[2]);
        myArr.splice(index, 1);
    }

    console.log(`Number ${cmdArr[2]} occurs ${counter} times.`)
}
searchForANum([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )