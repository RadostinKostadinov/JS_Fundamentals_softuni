function makeAdict(array){
    let myArr = array.slice();
    let myObject = {};
    for (let jsonString of myArr) {
        let parsedJSON = JSON.parse(jsonString);
        let key = Object.keys(parsedJSON);
        let value = Object.values(parsedJSON);
        myObject[key[0]] = value[0];
    }
    let objArr = Object.entries(myObject);
    objArr.sort((a, b) => a[0].localeCompare(b[0]));
    for (const element of objArr) {
        console.log(`Term: ${element[0]} => Definition: ${element[1]}`);
    }
}
makeAdict([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )