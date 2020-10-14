function solve(n){
    n = +n;
    let sum = 0;
    let p = 1;
    for(let i = 1; i <= n; i++){
        if(p == 1){
            console.log(p);
            sum += p;
            p += 2;
        } else {
            console.log(p);
            sum += p;
            p += 2;
        }
        
    }
    console.log(`Sum: ${sum}`);
}
solve(5);