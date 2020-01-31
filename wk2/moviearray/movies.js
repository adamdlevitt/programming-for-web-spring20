myMoviesArray = [ 'airplane' , 'no country for old men' , 'night of the hunter' , 'the thing' , 'rear window'];
console.log(myMoviesArray);

//adding user input with array manipulation
let inputMovie = prompt('What is your favorite movie? Type your answer in lowercase in the space below.');
myMoviesArray.push(inputMovie);
console.log(myMoviesArray);

//toString
console.log(myMoviesArray.toString());
const allMovies = myMoviesArray.toString();
alert('Here is a list of my favorite movies and yours: ' + allMovies);