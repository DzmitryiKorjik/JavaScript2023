const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(films => films.rating >= 8);
}
showGoodFilms(films);

console.log(showGoodFilms(films));

function showListOfFilms(arr) {
    return arr.reduce((acc, curr) => typeof acc === 'object' ? `${acc.name}, ${curr.name}` : `${acc}, ${curr.name}`);
}

showListOfFilms(films);

console.log(showListOfFilms(films));

function setFilmsIds(arr) {
    return arr.map((film, i) => {
        film.id = i;
        return film;
    });
}

const tranformedArray = setFilmsIds(films);
setFilmsIds(films);

console.log(setFilmsIds(films));

function checkFilms(arr) {
    return arr.every(film => film.id || film.id === 0 ? true : false)
}

checkFilms(films);

console.log(checkFilms(films));
