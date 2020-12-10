function replaceRepeatingChars(string){
    let myString = string; 
    let flag = true;
    let i = 0;
    while(flag) {
        if(myString[i] === myString[i+1]){
            myString = myString.slice(0, i+1) + myString.slice(i+2);
        } else {
            i++;
        }

        if(i >= myString.length){
            flag = false;
        }
    }

    console.log(myString);
}
replaceRepeatingChars('qqqwerqwecccwd');