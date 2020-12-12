function destinationMapper(string){
    let pattern = /([=\/])(?<name>[A-Z][A-Za-z]{2,})\1/g;
    let match = pattern.exec(string);
    let destinations = [];
    let travelpoints = 0;

    while(match != null){
        destinations.push(match.groups.name);
        travelpoints += match.groups.name.length;
        match = pattern.exec(string);
    } 

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelpoints}`);
}
destinationMapper('ThisIs some InvalidInput');