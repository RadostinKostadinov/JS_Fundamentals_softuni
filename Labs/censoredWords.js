function censoredWords(string, word){
    while(string.includes(word)){
        string = string.replace(word, '*'.repeat(word.length));
    }
    console.log(string);
}
censoredWords("A small sentence with some words", "small");