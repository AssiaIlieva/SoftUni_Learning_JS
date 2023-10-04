function movieRating(input){
    let numberOfMovies = Number(input[0]);
    let movie = "";
    let rating = 0;
    let bestMovie = "";
    let bestRating = 0;
    let worstMovie = "";
    let worstRating = 11;
    let ratingSum = 0;

    for(i = 1; i <= numberOfMovies * 2; i++){
        movie = input[i];
        i++;
        rating = Number(input[i]);
        ratingSum += rating;
        if(rating > bestRating){;
        bestRating = rating;
        bestMovie = movie;}
        if(rating < worstRating){
        worstRating = rating;
        worstMovie = movie;
        }
    }
    let averageRating = ratingSum / numberOfMovies;
    console.log(`${bestMovie} is with highest rating: ${bestRating.toFixed(1)}`);
    console.log(`${worstMovie} is with lowest rating: ${worstRating}`);
    console.log(`Average rating: ${averageRating.toFixed(1)}`);
}
movieRating(["3",
"Interstellar",
"8.5",
"Dangal",
"8.3",
"Green Book",
"8.2"])