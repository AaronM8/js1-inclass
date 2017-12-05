// var myString = new String("hello world");
// // console.log(Object.getPrototypeOf(varname));
//
// var myObj = {
//   firstName: "",
//   lastName: ""
// };
//
//  // myObj.firstName = prompt("What's your firstname?")
//
// let number = 13;
// let arr = [1, 'foo', 'cheese'];
// let bool = false;


function Movie(tittle, releaseYear, IMDBRating, director) {
  this.title = tittle;
  this.releaseYear = releaseYear;
  this.IMDBRating = IMDBRating;
  this.director = director;
};

// brick.snoodyLevel = 100;
// brick.redditRating = "10/10";
// console.log(brick);

Movie.prototype.sayThings = function() { // Add method to prototype
  return `The movie ${this.tittle} was relased in ${this.releaseYear} and was directored by ${this.director}`
};

var brick = new Movie("Brick", 2004, 10, "Ryan Johnson");

function Arthouse(tittle, releaseYear, IMDBRating, director, snoodyLevel, redditRating) {
  Movie.call(this, releaseYear, IMDBRating, director);
  this.snoodyLevel = snoodyLevel;
  this.redditRating = redditRating;
};

var snoodyMovie = new Arthouse("The Room", 2002, 0, "Tommy Wiesoau", "10/10", 0);
// console.log(snoodyMovie);


// function Arthouse(snoodyLevel, redditRating) {
//
// }

// function User(name, pw) {
//   this.name = name;
//   this.password = pw;
// };
//
// var newUser = new user("Aaron", "00000");
// console.log(newUser);



var sayHello = function() {
  // alert('Hey there, customer');
};

var interval = setInterval(sayHello, 2000);

function removeInt() {
  // clearInterval(interval);
};
