const Movie = require("./movie");

let forrestGump = new Movie("Forrest Gump", Movie.genres.DRAMA, 1994);
forrestGump.title = 5;
forrestGump.genre = 7;
forrestGump.year = 1500;
console.log(forrestGump);
console.log(`The ${forrestGump.genre} movie "${forrestGump.title}" was released in ${forrestGump.year}"`);

console.log();

let blackPanther = Movie.createActionMovie("Black Panther", 2018);
console.log(blackPanther);
console.log(`The ${blackPanther.genre} movie "${blackPanther.title}" was released in ${blackPanther.year}"`);

console.log();

console.log(`Number of Movies: ${Movie.getCounter()}`);