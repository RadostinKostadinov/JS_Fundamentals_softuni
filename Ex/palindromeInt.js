function palindromeInt(array){
    let myArr = array;

    for(let i = 0; i < myArr.length; i++){
        let palindromeArray = [];
        let number = myArr[i];
        let numberToChars = myArr[i];
        number = number.toString();
        for(let j = 0; j < number.length; j++){
            let charN = numberToChars % 10;
            numberToChars = parseInt(numberToChars/10);
            palindromeArray.unshift(charN);
        }
        console.log(palindromeArray);
    }

}
palindromeInt([123,323,421,121]);