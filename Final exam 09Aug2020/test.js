function solve(myString){
    let pattern = new RegExp('1', 'g');
    if (pattern.test(myString)) myString = myString.replace(pattern, '12');
    console.log(myString);
}
solve("11121311");

//•	Remove Stop:{start_index}:{end_index}
//  – remove the elements of the string from the starting index to the end index (inclusive) if both indices are valid