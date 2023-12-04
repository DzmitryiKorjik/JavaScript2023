"use stricte";

let result = "";
const length = 7;

for (let i = 1; i < length; i++) { 
    for (let j = 0; j < i; j++) {
        result += "*";
    }
    result += "\n"; // перенос строки
}

console.log(result);

// Место для первой задачи
function firstTask() {
    for (let i = 5; i < 11; i++) {
        console.log(i);
    }
}

// Место для второй задачи
function secondTask() {
    for(let i = 20; i > 9; i--) {
        if (i === 13){
        break;        
        }
        console.log(i);
    }
}

// Место для третьей задачи
function thirdTask() {
    for(let i = 2; i <= 10; i+=2) {
        console.log(i)
    }
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    let i = 2;

    while (i <= 16) {
        if (i % 2 !== 0) {
            console.log(i);
        }
        i++
    }
}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers.push(i);
    }
    // Не трогаем
    return arrayOfNumbers;
}
const resultArray = fifthTask();
console.log(resultArray);

// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result [i] = arr [i];
    }
    // Не трогаем
    return result;
}
const newArray = firstTask();
console.log(newArray);

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'number') {
            data[i] *= 2; // Увеличиваем числа в 2 раза
        } else if (typeof data[i] === 'string') {
            data[i] += ' - done'; // Добавляем " - done" к строкам
        }
    }
    // Не трогаем
    return data;
}
console.log(secondTask());

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = data.length - 1; i >= 0; i--) {
        result.push(data[i]);
    }
    // Не трогаем
    return result;
}
console.log(thirdTask());


const lines = 5;
let result = "";

    for (let i = 0; i <= lines; i++) {
        for (let j = 0; j < lines - i; j++) {
            result += " ";
        }
        for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
        result += "\n";
}
console.log(result);

