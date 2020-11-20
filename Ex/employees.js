function employees(array){
    let myArr = array.slice();
    let myArrLength = myArr.length;
    let employees = {};
    for(let i = 0; i < myArrLength; i++){
        let empName = myArr.shift();
        let empPN = empName.length;
        employees[empName] = empPN;
    }
    for (const empName in employees) {
        const empPN = employees[empName];
        console.log(`Name: ${empName} -- Personal Number: ${empPN}`);
    }
    
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );