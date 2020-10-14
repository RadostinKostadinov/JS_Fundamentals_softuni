function sumdigits(number){
    let strNumb = number.toString();
    let result = 0;
    for(let i = 0; i < strNumb.length; i++){
        result += Number(strNumb[i]);
    }
    console.log(result);
}

sumdigits(2345);