function matchDates(array){
    let pattern = /(?<Day>\d{2})([\.\-\/])(?<Month>[A-Z][a-z]{2})\2(?<Year>\d{4})\b/g;
    let matches = pattern.exec(array[0]);
    let matchesArr = [];


    while(matches != null){
        matchesArr.push(matches);
        matches = pattern.exec(array[0]);
        
    }
    for (const arrEl of matchesArr) {
        console.log(`Day: ${arrEl.groups.Day}, Month: ${arrEl.groups.Month}, Year: ${arrEl.groups.Year}`);
    }
}
matchDates(["13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"]);