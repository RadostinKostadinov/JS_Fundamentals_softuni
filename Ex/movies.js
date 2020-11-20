function movies(array){
    let myArr = array.slice();
    let arrayOfMovies = [];

    class Movie {
        constructor(name){
            this.name = name;
        }
        replaceDate(newDate) {
            this.date = newDate;
        }

        replaceDirector(newDirector) {
            this.director = newDirector;
        }
    };

    let action = {
        addMovie: (name) => {
            let newMovie = new Movie(name);
            arrayOfMovies.push(newMovie);
        },
        replaceDirector: (name, director) => {
            for (const movie of arrayOfMovies) {
                if(movie.name === name){
                    movie.director = director;   
                }
            }
        },
        replaceDate: (name, date) => {
            for (const movie of arrayOfMovies) {
                if(movie.name === name){
                    movie.date = date;
                }
            }
        }
    }

    while(myArr.length > 0){
        let tokens = myArr.shift().split(' ');

        if(tokens[0] === 'addMovie'){ //addMovie
            tokens.shift();
            let name = (tokens.join(' '));
            action.addMovie(name);
        } else if(tokens.indexOf('directedBy') != -1){ //directedBy
            let commandIndex = tokens.indexOf('directedBy');
            let name = tokens.slice(0, commandIndex).join(' ');
            let director = tokens.slice(commandIndex+1).join(' ');
            action.replaceDirector(name, director);
        } else { //onDate
            let commandIndex = tokens.indexOf('onDate');
            let name = tokens.slice(0, commandIndex).join(' ');
            let date = tokens.slice(commandIndex+1).join(' ');
            action.replaceDate(name, date);
        }
    }

    for (const movie of arrayOfMovies) {
        let jsonString = JSON.stringify(movie);
        console.log(jsonString);
    }
    


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