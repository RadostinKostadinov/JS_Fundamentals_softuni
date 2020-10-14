function solve(a,b){
    a = +a;
    b = +b;
    if(b <= 15){
        console.log(parseFloat(a.toFixed(b)));
    } else {
        console.log(parseFloat(a.toFixed(15)));
    }
}