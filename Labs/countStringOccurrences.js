function countStr(string, searchingFor){
    let arrOfWords = string.split(' ');
    let counter = 0;
    for (const word of arrOfWords) {
        if(word === searchingFor) counter++;
    }
    console.log(counter);
}