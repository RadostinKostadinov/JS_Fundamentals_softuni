function searchHashtagged(text) {
    let arrOfWords = text.split(' ');
    for (let word of arrOfWords) {
        if (word[0] === '#' && word.length > 1) {
            word = word.slice(1);
            let isInvalid = false;
            for (let i = 0; i < word.length; i++) {
                if (!((word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) || (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122)) ) isInvalid = true;
            }
            if(!isInvalid) console.log(word);
        }
    }
}
searchHashtagged('Nowadays everyone uses # to tag a #special word in #socialMedia');