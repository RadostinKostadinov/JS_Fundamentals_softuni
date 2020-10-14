function triangleOfNumbers(input){
    input = +input;
    let line = '';
    for(let i = 1; i <= input; i++){
        for(let j = 0; j < i; j++){
            line += i + " ";
        }
        console.log(line);
        line = '';
    }
}

triangleOfNumbers(6);