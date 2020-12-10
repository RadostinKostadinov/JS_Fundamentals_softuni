function pascalCaseSplitter(string){
    let myString = string;
    let pattern = /[A-Z][a-z]*/g;
    let matches = myString.match(pattern);
    console.log(matches.join(', '))
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');