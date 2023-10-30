function movies(array){
    let movies = [];
    for(let command of array){
        if(command.includes('addMovie')){
            let movieName = command.split('addMovie ')[1];
            let newMovie = {name: movieName}
            movies.push(newMovie);
        }else if(command.includes('directedBy')){
            let [movieName, director] = command.split(' directedBy ');
            let movie = movies.find(movie => movie.name == movieName);
                if(movie){
                movie.director = director
                }
        }else if(command.includes('onDate')){
            let [movieName, date] = command.split(' onDate ');
            let movie = movies.find(movie => movie.name == movieName);
                if(movie){
                movie.date = date
                }
        }
    }
   
    for(let movie of movies){
        if(movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie));
        }
    }
}
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    )