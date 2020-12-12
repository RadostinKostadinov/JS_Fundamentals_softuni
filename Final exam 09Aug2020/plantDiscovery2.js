function ptD(array) {
    let myArr = array.slice();
    let numberOfLines = myArr.shift();
    let assocArrOfPlants = {};
    for (let i = 0; i < numberOfLines; i++) {
        let [plantName, rarity] = myArr.shift().split('<->');
        assocArrOfPlants[plantName] = {
            rarity: Number(rarity),
            ratings: [],
            avgRating: 0
        }
    }

    let [command, args] = myArr.shift().split(': ');
    while (command != 'Exhibition') {
        switch (command) {
            case 'Rate': {
                [plant, rating] = args.split(' - ');
                if (assocArrOfPlants.hasOwnProperty(plant)) {
                    assocArrOfPlants[plant].ratings.push(Number(rating));
                } else {
                    console.log('error');
                }
            } break;
            case 'Update': {
                [plant, new_rarity] = args.split(' - ');
                if (assocArrOfPlants.hasOwnProperty(plant)) {
                    assocArrOfPlants[plant].rarity = Number(new_rarity);
                } else {
                    console.log('error');
                }
            } break;
            case 'Reset': {
                plant = args;
                if (assocArrOfPlants.hasOwnProperty(plant)) {
                    assocArrOfPlants[plant].ratings = [];
                } else {
                    console.log('error');
                }
            } break;
            default: {
                console.log('error');
            } break;
        }
        [command, args] = myArr.shift().split(': ');
    }

    getAvgRating();
    sortAssocArr();
    printAssocArr();
    function printAssocArr() {
        console.log(`Plants for the exhibition:`);
        let keys = Object.keys(assocArrOfPlants);
        for (const key of keys) {
            console.log(`- ${key}; Rarity: ${assocArrOfPlants[key].rarity}; Rating: ${assocArrOfPlants[key].avgRating.toFixed(2)}`);
        }
    }


    function sortAssocArr() {
        let sorted = Object.entries(assocArrOfPlants).sort((a, b) => {
            if (a[1].rarity != b[1].rarity) {
                return b[1].rarity - a[1].rarity;
            } else {
                return a[1].avgRating - b[1].avgRating;
            }
        });
        assocArrOfPlants = Object.fromEntries(sorted);

    };

    function getAvgRating() {
        //--------------PURVI NACHIN----------------
        // let keys = Object.keys(assocArrOfPlants);
        // for (const key of keys) {
        //     const rating = assocArrOfPlants[key].ratings.reduce((acc, val) => acc + val, 0) / assocArrOfPlants[key].ratings.length;
        //     if (Number.isNaN(rating)) {
        //         assocArrOfPlants[key].avgRating = 0;
        //     } else {
        //         assocArrOfPlants[key].avgRating = rating;
        //     }
        // }
        //----------------------VTORI NACHIN============
        // let keys = Object.keys(assocArrOfPlants);
        // keys.forEach(key => {
        //     let counter = 0;
        //     for (const rate of assocArrOfPlants[key].ratings) {
        //         assocArrOfPlants[key].avgRating += rate;
        //         counter++;
        //     }
        //     if(counter != 0) assocArrOfPlants[key].avgRating /= counter;
        // });
        //-------------------------TRETI NACHIN--------------
        let keys = Object.keys(assocArrOfPlants);
        for (const key of keys) {
            let rating = 0;
            let counter = 0;
            let isZero = false;
            for (const rateval of assocArrOfPlants[key].ratings) {
                rating += rateval;
                counter++;
            }
            if (counter === 0) {
                assocArrOfPlants[key].avgRating = 0;
            } else {
                rating /= counter;
                assocArrOfPlants[key].avgRating = rating;
            }
        }
    }
}


ptD([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
]
);

ptD([
    '2',
    'Candelabra<->10',
    'Oahu<->10',
    'Rate: Oahu - 7',
    'Rate: Candelabra - 6',
    'Exhibition'
])