function plantDiscovery(array) {
    let length = Number(array.shift());
    let plantsArr = {};
    for (let i = 0; i < length; i++) {
        let [name, rarity] = array.shift().split('<->');
        plantsArr[name] = {
            rarity: Number(rarity),
            rating: [],
            avgRating: 0
        };
    }
    let commands = {
        Rate(arguments) {
            let [plant, rate] = arguments.split(' - ');
            if (plantsArr.hasOwnProperty(plant)) {
                plantsArr[plant].rating.push(Number(rate));
            }
        },
        Update(arguments) {
            let [plant, new_rarity] = arguments.split(' - ');
            if (plantsArr.hasOwnProperty(plant)) {
                plantsArr[plant].rarity = Number(new_rarity);
            }
        },
        Reset(plant) {
            if (plantsArr.hasOwnProperty(plant)) plantsArr[plant].rating = [];
        },
        Exhibition() {
            let keys = Object.keys(plantsArr);
            keys.forEach(key => {
                let counter = 0;
                for (const rate of plantsArr[key].rating) {
                    plantsArr[key].avgRating += rate;
                    counter++;
                }
                if(counter != 0) plantsArr[key].avgRating /= counter;
            });
            sortAssocArr(plantsArr);
            keys = Object.keys(plantsArr);
            console.log(`Plants for the exhibition:`);
            keys.forEach(key => {
                console.log(`- ${key}; Rarity: ${plantsArr[key].rarity}; Rating: ${plantsArr[key].avgRating.toFixed(2)}`)
            })

        },
        OtherCommand() {
            console.log('error');
        }
    }
    while (array.length > 0) {
        let [command, arguments] = array.shift().split(': ');
        commands[command](arguments);
    }

     function sortAssocArr(assocArr){
        let sorted = Object.entries(assocArr);
        sorted.sort((a, b) => {
            if(a[1].rarity != b[1].rarity){
                return b[1].rarity - a[1].rarity;
            } else {
                return b[1].avgRating - a[1].avgRating;
            }
        })
        plantsArr = Object.fromEntries(sorted);
    }

}
plantDiscovery([
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