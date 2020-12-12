function solve(arr) {
    const plantsCount = Number(arr.shift());
    let plants = {};
 
    for (let i = 0; i < plantsCount; i++) {
        let [plant, rarity] = arr.shift().split('<->');
        rarity = Number(rarity);
        plants[plant] = { rarity: rarity, ratings: [] };
    }
 
    let command = arr.shift();
 
    while (command != 'Exhibition') {
        let [action, info] = command.split(': ');
        let [plant, argument] = info.split(' - ');
 
        switch (action) {
            case 'Rate':
                const rating = Number(argument);
 
                if (plants.hasOwnProperty(plant)) {
                    plants[plant].ratings.push(rating);
                } else {
                    console.log('error');
                }
                break;
 
            case 'Update':
                const newRarity = Number(argument);
                if (plants.hasOwnProperty(plant)) {
                    plants[plant].rarity = newRarity;
                } else {
                    console.log('error');
                }
                break;
 
            case 'Reset':
                if (plants.hasOwnProperty(plant)) {
                    plants[plant].ratings = [];
                } else {
                    console.log('error');
                }
                break;
        }
        command = arr.shift();
    }
 
    let entries = Object.entries(plants);
 
    entries.sort((a, b) => {
        const avg1 = a[1].ratings.reduce((acc, val) => acc + val, 0) / a[1].ratings.length;
        const avg2 = b[1].ratings.reduce((acc, val) => acc + val, 0) / b[1].ratings.length;
        return b[1].rarity - a[1].rarity || avg2 - avg1;
    });
 
    console.log(`Plants for the exhibition:`);
 
    entries.forEach((kvp) => {
        let avg = 0;
        const sum = kvp[1].ratings.reduce((acc, val) => acc + val, 0);
        kvp[1].ratings.length > 0 ? (avg = sum / kvp[1].ratings.length) : (avg = 0);
        console.log(`- ${kvp[0]}; Rarity: ${kvp[1].rarity}; Rating: ${avg.toFixed(2)}`);
    });
}

solve([
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

solve([
    '2',
    'Candelabra<->10',
    'Oahu<->10',
    'Rate: Oahu - 7',
    'Rate: Candelabra - 6',
    'Exhibition'
])