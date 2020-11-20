function solve(array) {
    let myArr = array.slice();
    let numberOfSongs = myArr.shift();
    let typeToPrint = myArr.pop();
    let arrOfSongs = [];


    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

    }

    for (let i = 0; i < numberOfSongs; i++) {
        let song = myArr.shift().split('_');
        arrOfSongs.push(new Song(song[0], song[1], song[2]));
    }

    if (typeToPrint === 'all') {
        arrOfSongs.forEach(song => {
            console.log(song.name);
        });
    } else {
        arrOfSongs.forEach(song => {
            if (song.typeList === typeToPrint) console.log(song.name);
        });
    }

}
solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    );