function revealWords(words, text){
    let arrOfWords = words.split(', ');
    for (const word of arrOfWords) {
        text = text.replace('*'.repeat(word.length), word)
    }
    console.log(text);
}
revealWords('great',
'softuni is ***** place for learning new programming languages'
);