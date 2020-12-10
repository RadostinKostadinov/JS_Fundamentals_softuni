function stringSubstring(stringOne, stringTwo){
    let reg = stringOne;
    let text = stringTwo;

    let pattern = new RegExp(`${reg}`, 'i');

    let match = pattern.test(text);
    
    if(match){
        console.log(reg);
    } else {
        console.log(`${reg} not found!`)
    }
}
stringSubstring('javascript',
'JavaScript is the best programming language'
);