function race(array){
    let helpVar = array.shift().split(', ');
    let players = {};
    for (const player of helpVar) {
        players[player] = 0;
    }
    let namePattern = /[A-Za-z]/g;
    let distancePattern = /\d/g;
    for (const line of array) {
        let name = line.match(namePattern).join('');
        let distance = 0; 
        if(distancePattern.test(line)) line.match(distancePattern).forEach( x => {
            distance += Number(x);
        })
        if(players.hasOwnProperty(name)){
            players[name] += distance;
        }
    }
    let playersTuple = Object.entries(players);
    playersTuple.sort((a,b) => b[1] - a[1]);
    if(playersTuple[0] != null){
        console.log(`1st place: ${playersTuple[0][0]}`);
    }
    if(playersTuple[1] != null){
        console.log(`2nd place: ${playersTuple[1][0]}`);
        }
    if(playersTuple[2] != null){
        console.log(`3rd place: ${playersTuple[2][0]}`);
    }
}
race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
  ]
);