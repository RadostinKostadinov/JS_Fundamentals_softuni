function palindromeInt(array){
    let myArr = array;

    for(let i = 0; i < myArr.length; i++){
        let palindromeArray = fromNumberToArrayOfChars(myArr[i]);
        let isPalindrome = isPalindromeF(palindromeArray);
        console.log(isPalindrome);
    }



// ============ functions declaration ============
    function fromNumberToArrayOfChars(number){
        let n1 = number;
        let n1toString = number.toString();

        let array = [];

        for(let i = 0; i < n1toString.length; i++){
            let char = n1 % 10;
            array.unshift(char);
            n1 = parseInt(n1 / 10);
        }
        
        return array;
    }

    function isPalindromeF(array){
        let isPalindrome = true;
        for(let i = 0; i < (array.length/2); i++){
            if(array[i] !== array[(array.length - 1) - i]){
                isPalindrome = false;
            }
        }
        return isPalindrome;
    }
}
palindromeInt([32,2,232,1010]);