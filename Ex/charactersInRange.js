function charsInRange(char1, char2) {
    let c1 = char1.toString();
    let c2 = char2.toString();

    c1 = c1.charCodeAt(0);
    c2 = c2.charCodeAt(0);

    let start = c1 < c2 ? c1 : c2;
    let end = c2 > c1 ? c2 : c1;

    let result = [];

    for (let i = start + 1; i < end; i++){
        result.push(String.fromCharCode(i));
    }

    return result.join(' ');
}

