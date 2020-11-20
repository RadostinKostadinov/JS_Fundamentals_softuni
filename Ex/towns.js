function towns(array){
    let townsObj = {};    
    let arrayOfTowns = [];
    let myArr = array.slice();
    while(myArr.length != 0){
        let [town, latitude, longitude] = myArr.shift().split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        townsObj = {town, latitude, longitude};
        console.log(townsObj);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)