function stringSubstring(stringOne, stringTwo){
    let myArr = stringTwo.toLocaleLowerCase().split(' ');
    if(myArr.includes(stringOne.toLocaleLowerCase())){
        console.log(stringOne);
    } else {
        console.log(`${stringOne} not found!`) 
    }
}
stringSubstring('javascript',
'JavaScript is the best programming language'
);