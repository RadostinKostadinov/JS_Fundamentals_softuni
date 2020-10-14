function mergeArr(myArr1, myArr2) {

    let newArr = [];
    for(let i = 0; i < myArr1.length; i++){
        if(isEven(i)){
            newArr.push(Number(myArr1[i]) + Number(myArr2[i]));
        } else {
            newArr.push(`${myArr1[i]}${myArr2[i]}`)
        }
    }

    console.log(newArr.join(" - "));





    //==== functions declaration =====
    function isEven(number) {
        if (number % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }

}
mergeArr(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)