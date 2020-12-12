function worldTour(array) {
    let myString = array.shift();
    let line = array.shift();
    let maxValidIndex = 0;
    let pattern = '';
    let index = 0;
    while (line != 'Travel') {
        let [command, firstParam, scndParam] = line.split(':');
        switch (command) {
            case 'Add Stop': 
                firstParam = Number(firstParam); 
                maxValidIndex = myString.length;
                if (firstParam >= 0 && firstParam < maxValidIndex) {
                    myString = myString.substring(0, firstParam) + scndParam + myString.substring(firstParam);
                }
                console.log(myString);
            break;
            case 'Remove Stop':
                maxValidIndex = myString.length;
                firstParam = Number(firstParam); 
                scndParam = Number(scndParam);
                if (firstParam >= 0 && scndParam < maxValidIndex) {
                    myString = myString.substring(0, firstParam) + myString.substring(scndParam + 1,);
                }
                console.log(myString);
                break;
 
            break;
            case 'Switch':
                pattern = new RegExp(firstParam, 'g');
                if (pattern.test(myString)) myString = myString.replace(pattern, scndParam);
                console.log(myString);
            break;
        }
        line = array.shift()
    }
    console.log(`Ready for world tour! Planned stops: ${myString}`);
}
worldTour([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
  ]);