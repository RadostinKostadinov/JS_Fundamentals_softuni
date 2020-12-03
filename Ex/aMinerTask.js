function solve(array){
    let myArr = array.slice();
    let resources = {};

    while (myArr.length > 0){
        let resource = myArr.shift();
        let quantity = Number(myArr.shift());
        if(!resources.hasOwnProperty(resource)) resources[resource] = 0;
        resources[resource] += quantity;
    }
    for (const resource in resources) {
        if (resources.hasOwnProperty(resource)) {
            const quantity = resources[resource];
            console.log(`${resource} -> ${quantity}`);
        }
    }
}
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]    
    );