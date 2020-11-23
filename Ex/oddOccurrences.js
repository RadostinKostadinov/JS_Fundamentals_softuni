function oddOcc(string){
    let myArr = string.toLowerCase().split(' ');
    let myMap = new Map();
    while(myArr.length > 0){
        let word = myArr.shift();
        if(!myMap.has(word)) myMap.set(word, 0);
        let currVal = myMap.get(word);
        currVal++;
        myMap.set(word, currVal);
    }
    
    let log = '';
    for (const element of myMap) {
        if(element[1] % 2 == 1) log += element[0] + ' ';
    }
    console.log(log);
}
oddOcc('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');