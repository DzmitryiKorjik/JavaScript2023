'use strict';

/* function amountOfPages(summary){
    let result = '';
    let n = 0;

    for (let i = 1; i <= summary; i++) {
        result += i;
        if (result.length === summary) {
            n = i;
            break;
        }
    }
    return n;
} */

function amountOfPages(summary) {
    let n = 0;  // Инициализируем переменную для хранения количества страниц
    let totalDigits = 0;  // Инициализируем переменную для хранения суммы цифр

    // Функция для вычисления суммы цифр числа
    function sumOfDigits(number) {
        return String(number).split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }

    // Перебираем возможные значения n, пока сумма цифр не станет равной summary
    while (totalDigits !== summary) {
        n++;
        totalDigits += sumOfDigits(n);
    }

    return n;
}

// Пример использования функции
const summaryExample = 20;
const result = amountOfPages(summaryExample);
console.log(`Для summary=${summaryExample} количество страниц n: ${result}`);
