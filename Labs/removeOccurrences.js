function removeOccurrences(word, text){
    let pattern = new RegExp(`${word}`);
    let match = pattern.exec(text);
    while(match != null) {
        text = text.slice(0, match.index) + text.slice(match.index + word.length);
        match = pattern.exec(text);
    }
    console.log(text);
}
removeOccurrences(['ice', 'kicegiciceeb']);