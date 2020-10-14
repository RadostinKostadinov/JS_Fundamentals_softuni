function addOrSubs(myArr){
    let prevValueOfArray = 0;
    let newValueOfArray = 0;
    for(let i = 0; i < myArr.length; i++){
        prevValueOfArray += myArr[i];
        if(isEven(myArr[i])){
            myArr[i] += i;
        } else {
            myArr[i] -= i;
        }
        newValueOfArray += myArr[i];
    }

    console.log(myArr);
    console.log(prevValueOfArray);
    console.log(newValueOfArray);

//==== functions declaration =====
    function isEven(number){
        if(number % 2 == 0){
            return true;
        } else {
            return false;
        }
    }

}

addOrSubs([5, 15, 23, 56, 35])