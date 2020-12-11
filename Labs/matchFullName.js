function matchFullName(array){
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let matches = array[0].match(pattern);
    console.log(matches.join(' '));
}
matchFullName([
    'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov'
  ]);