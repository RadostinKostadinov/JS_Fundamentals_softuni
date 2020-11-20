function movies(array) {
    let movies = [];
    for (const line of array) {
        if (line.includes('addMovie')) {
            let currentMovie = {};
            let name = line.substring(9);
            currentMovie.name = name;
            movies.push(currentMovie);
        } else if (line.includes('directedBy')) {
            let commands = line.split(' directedBy ');
            let [movie, movieDirector] = commands;
            let myMovie = movies.find(x => x.name == movie);
            if(myMovie){
                myMovie.director = movieDirector;
            }
        } else {
            let [movie, movieDate] = line.split(' onDate ');
            let myMovie = movies.find(x => x.name == movie);
            if(myMovie){
                myMovie.date = movieDate;
            }
        }
    }

    movies.forEach( movie => {
        if(movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie));
        }
    });
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);