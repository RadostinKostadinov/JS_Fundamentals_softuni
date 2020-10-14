function printAndSum(a, b){
    a = +a;
    b = +b;
    let sum = 0;
    let line = '';
    for(let i = a; i <= b; i++){
        sum += i;
        line += i + " ";
    }
    console.log(line);
    console.log(`Sum: ${sum}`);
}

printAndSum(5,10)