"use stricte";

function fib(n) {
    // Проверка, является ли аргумент положительным целым числом
    if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
        return "";
    }

    // Инициализация переменных для чисел Фибоначчи
    let result = "";
    let a = 0;
    let b = 1;

    // Цикл, который выполняется n раз
    for (let i = 0; i < n; i++) {
        result += `${a} `;
        const temp = a + b;
        a = b;
        b = temp;
    }

    // Удаление последнего пробела и возврат результата
    return result.trim();
}

// Примеры использования:
console.log(fib(4));  // "0 1 1 2"
console.log(fib(7));  // "0 1 1 2 3 5 8"
console.log(fib('7')); // ""
console.log(fib(1));  // "0"
console.log(fib(0));  // ""
