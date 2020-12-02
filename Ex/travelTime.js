function travelTime(array){
    let myArr = array.slice();
    let Countries = {};

    while(myArr.length > 0){
        let [country, town, cost] = myArr.shift().split(' > ');
        cost = Number(cost);
        if(!Countries.hasOwnProperty(country)) Countries[country] = {};
        if(Countries[country].hasOwnProperty(town)){
            if(Countries[country][town] > cost) Countries[country][town] = cost;
        } else {
            Countries[country][town] = cost;
        }
    }

    sortTowns(Countries);
    sortContries(Countries);

    for (const country in Countries) {
        if (Countries.hasOwnProperty(country)) {
            const towns = Countries[country];
            let prntLine = country + ' ->';
            for (const town in towns) {
                if (towns.hasOwnProperty(town)) {
                    const cost = towns[town];
                    prntLine += ' ' + town + ' -> ' + cost;
                }
            }
            console.log(prntLine);
        }
    }

    function sortContries(assocArrayOfCountries){
        let sorted = Object.entries(assocArrayOfCountries).sort((a, b) => a[0].localeCompare(b[0]));
        for (const country of sorted) {
            delete assocArrayOfCountries[country[0]];
            assocArrayOfCountries[country[0]] = country[1];
        }
    }

    function sortTowns(assocArrayOfCountries){
        for (const country in assocArrayOfCountries) {
            if (assocArrayOfCountries.hasOwnProperty(country)) {
                let towns = assocArrayOfCountries[country];
                let sorted = Object.entries(towns).sort((a, b) => a[1] - b[1]);
                assocArrayOfCountries[country] = {};
                for (const town of sorted) {
                    town[1] = Number(town[1]);
                    assocArrayOfCountries[country][town[0]] = town[1];
                }
            }
        }
    }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    );