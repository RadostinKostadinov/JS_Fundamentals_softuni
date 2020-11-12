function jsonToObj(jsonString){
    let myObj = JSON.parse(jsonString);

    for (const key of Object.keys(myObj)) {
        console.log(`${key}: ${myObj[key]}`);
    }
}
jsonToObj('{"name": "George", "age": 40, "town": "Sofia"}');