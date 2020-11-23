function neighborhoods(array) {
    let myArr = array.slice();
    let arrWithNeighborhoods = array.shift().split(', ');
    let assocArrOfNeighborhoods = {};
    while (arrWithNeighborhoods.length > 0) {
        let neighborhood = arrWithNeighborhoods.shift();
        assocArrOfNeighborhoods[neighborhood] = [];
    }
    while (myArr.length > 0) {
        let [neighborhood, person] = myArr.shift().split(' - ');
        if (assocArrOfNeighborhoods.hasOwnProperty(neighborhood)) {
            assocArrOfNeighborhoods[neighborhood].push(person);
        }
    }
    let sorted = Object.entries(assocArrOfNeighborhoods).sort((a, b) => {
        return b[1].length - a[1].length;
    })

    for(let i = 0; i < sorted.length; i++) {
        console.log(`${sorted[i][0]}: ${sorted[i][1].length}`);
        for(let y = 0; y < sorted[i][1].length; y++){
            console.log(`--${sorted[i][1][y]}`);
        }
    }
}
neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Abbey Street - Billy2',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Invalid Street - Tommy',
    'Bright Mews - Andrea3',
    'Bright Mews - Andrea4',
    'Abbey Street - Billy']
);