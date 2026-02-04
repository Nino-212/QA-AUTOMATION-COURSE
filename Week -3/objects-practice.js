//🧱 Task 1: Object Creation
//⚙ Task 2: Description Method
// 🎬 Task 1: Object Creation

// 🎬 Task 1: Object Creation
const movie = {
  title: "Melania",
  year: 2026,
  rating: 1,
  budget: 500000000000,
  details: {
    genre: "Drama",
    director: "Unknown"
  },
  // Task 2: Description Method
  describe: function () {
    return "Movie " + this.title + " released in " + this.year;
  },
  // Task 3: Update Method
  updateRating: function (newRating) {
    this.rating = newRating;
    return this.rating;
  },
  //Task 4  Calculation Method
 calculateRating: function (){
    return this.budget /this.rating;
 }
};

console.log(movie.describe()); //Movie Melania released in 2026
console.log(movie.updateRating(3)); //3
console.log(movie.rating); //3
//Task 5 Dot vs Bracket
console.log(movie.title);        // dot notation
console.log(movie["year"]);     // bracket notation

//Task 6: Property Checker

function hasProperty(obj, prop) {
  return prop in obj;
}

console.log(hasProperty(movie, "title")); //true
console.log(hasProperty(movie, "actor")); // false

// 🔄 Task 7: Method Calls
const descriptionResult = movie.describe();
const updatedRating = movie.updateRating(3);
const calculateRating = movie.calculateRating();

console.log(descriptionResult);//Movie Melania released in 2026
console.log(updatedRating); //3
console.log(movie.calculateRating()); //166666666666.66666

//Task 8: Add a New Property


// Task 8: Add a New Property
movie.actor = "Unknown actor";

console.log(movie); // actor: 'Unknown actor'

// Task 9: Update a Property Directly

movie.rating = 0,1;
console.log(movie.rating); //0

//Task 10: Delete a Property 

delete movie.budget;
console.log(movie);

// Task 11: List Object Keys
const movieKeys = Object.keys(movie);

// Task 12: List Object Values
const movieValues = Object.values(movie);
console.log(movieValues);

//🛠 Task 13: List Object Entries
const movieEntries = Object.entries(movie);
const flatEntries = movieEntries.flat();

console.log(movieEntries);
console.log(flatEntries);


//🏗 Task 14: Access Nested Properties

movie.details.genre
movie.details.director

console.log(movie.details.genre);
console.log(movie.details.director);

// 🏗 Task 15: Access Nested Properties

const{title, year } = movie;

console.log(title);
console.log (year);
