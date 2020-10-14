function findCommonEl(myArr1, myArr2){
    let value = 0;
    for(let elementArr1 of myArr1){
        for(let elementArr2 of myArr2){
            if(elementArr1 === elementArr2){
                console.log(elementArr1);
            }
        }
    }
}

findCommonEl(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)