/*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
   Create a variable test that contains a string.
*/
const test = "string";
/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20.
*/
const sum = 10 + 20;
/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution).
*/
let random = Math.floor(Math.random() * 21 + 0);

/* Ex.D
    Create a variable me containing and object with the current information: name = your name, surname = your surname, age = your age.
*/
let me = {
  name: "luca",
  surname: "perullo",
  age: 20,
};
/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
delete me.age;
/* Ex.F 
   Programmatically add to the object me an array "skills" that contains the programming languages that you know.
*/
me.skills = ["JavaScript"];
/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object.
*/
me.skills.pop();
// JS Functions
/* Ex.1
    Write the function dice that randomize an integer number between 1 and 6.
*/
const dice = () => {
  const dicerolls = Math.floor(Math.random() * 6 + 1);
  return dicerolls;
};

/* Ex.2 
    Write the function whoIsBigger that receives 2 numbers and returns the bigger of the two.
*/
const whoIsBigger = (x, y) => {
  if (x < y) {
    return y;
  } else {
    return x;
  }
};

/* Ex.3
    Write the function splitMe that receives a string and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns [ "I","Love","Coding"]
*/
const splitMe = (string) => {
  const nString = string.split(" ");
  return nString;
};

/* Ex.4
    Write the function deleteOne that receives a string and a boolean. If the boolean is true it should return the string without the first letter, otherwise it should remove the last one.
*/
const deleteOne = (string, bol) => {
  bol === true
    ? console.log(string.substring(1))
    : console.log(string.substring(0, string.lenght - 1));
};

/* Ex.5
   Write the function onlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: onlyLetters("I love 123 whatever")  => returns "I love whatever"
*/
const onlyLetters = (string) => {
  let nString = string.replace(/[0-9]/g, "");
  return nString;
};
/* Ex.6 
   Write the function isThisAnEmail that receives a string and returns true if the string is a valid email.
*/
const isThisAnEmail = (mail) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(mail).toLowerCase());
};
// console.log(isThisAnEmail("lucaperullo@outlook.com"));
/* Ex.7
   Write the function whatDayIsIt that should return the current day of the week.
*/
const whatDayIsIt = () => {
  const today = new Date().getDate();
  return today;
};
// console.log(whatDayIsIt());
/* Ex.8
    Write the function rollTheDices that receives a numeric input.
    It should use the Dice function defined in Ex1 and return an object that contains both the sum of all values extracted and the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/
const rollTheDices = (x) => {
  let res = {
    sum: 0,
    value: [],
  };
  for (let i = 0; i < x; i++) {
    let number = dice();
    res.value.push(number);
    res.sum += number;
  }
  return res;
};
// console.log(rollTheDices(10));
/* Ex.9
   Write the function howManyDays that receives a date and returns the number of days that has passed since that day.
*/
const howManyDays = (selectedDate) => {
  let today = new Date();
  return (today - selectedDate) / (1000 * 3600 * 24);
};
/* Ex.10
   Write the function isTodayMyBDay that returns true if it's your birthday, false otherwise.
*/
const isTodayMyBDay = (myBD) => {
  const toDate = new Date();
  const birthdaytoDate = new Date(myBD);
  birthdaytoDate.getDate() === toDate.getDate() &&
  birthdaytoDate.getMonth() === toDate.getMonth()
    ? console.log("happy birthday")
    : console.log("fk u");
};
// isTodayMyBDay("02/5/2021");

// JS Arrays // Objs
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

// NOTE: movies array is defined at the end of the file!

/* Ex.11
   Write the function deleteProp that receives an object and a string, and returns the object after deleting the property with that given name.
*/
const deleteProp = (object, string) => {
  delete object[string];
  return object;
};
// console.log(
//   deleteProp(
//     {
//       name: "Giulio",
//       surname: "Perullo",
//     },
//     "ciaos"
//   )
// );
/* Ex.12 
    Write the function olderMovie that finds the older movie in the array.
*/

const olderMovie = () => {
  let oldMovie = [];
  movies.forEach((movies) => {
    parseInt(movies.Year);
    oldMovie.push(movies.Year);
    console.log(oldMovie);
    let oldestMovie = Math.min(...oldMovie);
    console.log(oldestMovie);
  });
};
// console.log(olderMovie());
/* Ex.13
    Write the function countMovies that returns the number of movies into the array.
*/
const countMovies = () => {
  return movies.length;
};
console.log(countMovies());
/* Ex.14
    Write the function onlyTitles that creates an array with only the titles of the movies.
*/
const onlyTitles = () => {
  let result = [];
  movies.forEach((movie) => {
    result.push(movie.Title);
  });
  return result;
};
console.log(onlyTitles());
/* Ex.15
   Write the function onlyThisMillennium that returns only the movies produced in this millennium.
*/
const onlyThisMillennium = () => {
  for (let i = 0; i < movies.length; i++) {
    if (parseInt(movies[i].Year) >= 2000) {
      console.log(movies[i]);
    }
  }
};
// onlyThisMillennium();
/* Ex.16 
    Write the function getMovieById that receives an id and returns the movie with the given id.
*/
const getMovieById = (x) => {
  return movies.find((movie) => movie.imdbID === x);
};
console.log(getMovieById("tt1731697"));
/* Ex.17
    Write the function sumYears that returns the sum of the years the movie has been produced.
*/
const sumYears = () => {
  let summedY = [];
  movies.forEach((movie) => {
    summedY.push(parseInt(movie.Year));
    const sum = summedY.reduce(function (a, b) {
      return a + b;
    });
    console.log(sum);
  });
};
// sumYears();
/* Ex.18
    Write the function searchMovie that receives a string and returns all the movies with that string in the title.
*/

/* Ex.19
    Write the function searchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the given string in the title, and another array "nonMatch" with all the other movies.
*/

/* Ex.20
   Write the function deleteX that receives a number and returns an array without the element in the given position.
*/

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function halfTree that recives the height creates an "*" half tree with that height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

/* Ex.22 
  Create a function tree that receives the height and creates an "*" tree with that height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function isItPrime that receives a number and returns true if the number is a prime number.
*/

/* Movies array is an example array, used for the exs. Don't change it :)  */
