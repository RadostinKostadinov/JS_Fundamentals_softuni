function printMatrixNxN(n){
    let char = Number(n); 
    let sideLength = Number(n);
    for(let i = 0; i < sideLength; i++){
        let printRow = '';
        for(let j = 0; j < sideLength; j++){
            printRow += `${char} `;
        }
        console.log(printRow);
    }
}
printMatrixNxN(2);