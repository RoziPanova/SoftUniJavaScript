function solve(input) {
  const movies = {};
  input.forEach((line) => {
    if (line.includes("addMovie")) {
      const [_, name] = line.split("addMovie ");
      movies[name] = { name };
    }
    if (line.includes("directedBy")) {
      const [name, director] = line.split(" directedBy ");
      if (movies.hasOwnProperty(name)) {
        movies[name].director = director;
      }
    }
    if (line.includes("onDate")) {
      const [name, date] = line.split(" onDate ");
      if (movies.hasOwnProperty(name)) {
        movies[name].date = date;
      }
    }
  });
  for (const movie in movies) {
    if (Object.keys(movies[movie]).length > 2) {
      console.log(JSON.stringify(movies[movie]));
    }
  }
}
solve([
  "addMovie The Avengers",

  "addMovie Superman",

  "The Avengers directedBy Anthony Russo",

  "The Avengers onDate 30.07.2010",

  "Captain America onDate 30.07.2010",

  "Captain America directedBy Joe Russo",
]);
