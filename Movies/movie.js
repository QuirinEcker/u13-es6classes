class Movie {

    constructor(title, genre, year) {
        this._title = title;
        this._genre = genre;
        this._year = year;
        counter++;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value == "string") {
            this._title = value;
        } else {
            console.error(`Invalid title: ${value} (keeping "${this._title}")`);
        }
    }

    get genre() {
        return this._genre;
    }

    set genre(value) {
        let isValid = 0;

        for (let property of Object.values(Movie.genres)) {
            if (value == property) {
                isValid++;
                this._genre = value;
            }
        }

        if (isValid === 0) {
            console.error(`Invalid genre: ${value} (keeping ${this._genre})`);
        }
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (value < 1888) {
            console.error(`Invalid year: ${value} (keeping ${this._year})`)
        } else {
            this._year = value;
        }
    }

    static createActionMovie(title, year) {
        return new Movie(title, Movie.genres.ACTION, year);
    }

    static getCounter() {
        return counter;
    }
}

let counter = 0;


Movie.genres = {
    ACTION: "action",
    ACTION_COMEDY: "action comedy",
    COMEDY: "comedy",
    CRIME: "crime",
    DRAMA: "drama"
};

module.exports = Movie;

