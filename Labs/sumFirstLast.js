function sumFirstLast(array){
    let myArr = array;
    let sum = Number(myArr[0]) + Number(myArr[myArr.length - 1]);
    console.log(sum);
}

sumFirstLast(['20', '30', '40']);