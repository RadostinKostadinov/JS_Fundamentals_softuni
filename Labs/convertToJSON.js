function objToJSON(name, lastName, hairColor){
    let person = {
        name,
        lastName,
        hairColor
    }
    let jsonString = JSON.stringify(person);
    console.log(jsonString);
}
objToJSON(
    'George',
'Jones',
'Brown'
);