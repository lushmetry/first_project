// Задание 1
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

// Задание 2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// Задание 3
let firstFilmName = prompt("Один из последних просмотренных фильмов?", ""),
    firstFilmRating = prompt("На сколько оцените его?", ""),
    secondFilmName = prompt("Один из последних просмотренных фильмов?", ""),
    secondFilmRating = prompt("На сколько оцените его?", "");

personalMovieDB.movies[firstFilmName] = firstFilmRating;
personalMovieDB.movies[secondFilmName] = secondFilmRating;

console.log(personalMovieDB);