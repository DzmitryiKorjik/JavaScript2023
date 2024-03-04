/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");

const personalMovieDB = {
      count: numberOfFilms,
      movies: { },
      actors: { },
      genres: [ ],
      privat: false || true,
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", " "),
          b = prompt("На сколько оцените его?", " ");

        // null это кнопка отмены, " " это пустая строка; 
        if(a != null && b != null && a != " " && b != " " && a.length < 50 ) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("Error");
            i--;
        } 
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
    console.log("Вы классический зритель");       
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);

// Место для первой задачи
function sayHello(name) {
    return "Привет, " + name + "!.";
}
    console.log(sayHello('Антон'));

// Место для второй задачи
function returnNeighboringNumbers(number) {
    return [number -1, number, number +1];
}

console.log(returnNeighboringNumbers(5));

// Место для третьей задачи
function getMathResult(base, repetitions) {
    if (typeof repetitions !== 'number' || repetitions <= 0) {
        return base;
    }

    let result = '';
    for (let i = 0; i < repetitions; i++) {
        result += (base + base * i) + '---';
    }

    // Убираем последние три дефиса
    return result.slice(0, -3);
}

console.log(getMathResult(5, 3)); // Выведет: 5---10---15
console.log(getMathResult(3, 10)); // Выведет: 3---6---9---12---15---18---21---24---27---30
console.log(getMathResult(10, 5)); // Выведет: 10---20---30---40---50
console.log(getMathResult(10, '5')); // Выведет: 10
console.log(getMathResult(10, 0)); // Выведет: 10
console.log(getMathResult(20, -5)); // Выведет: 20
