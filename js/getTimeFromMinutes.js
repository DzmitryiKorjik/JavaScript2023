'use strict';

function getTimeFromMinutes(minutes) {
    if (!Number.isInteger(minutes) || minutes < 0 || minutes > 600) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutes / 60);
    const remainderMinutes = minutes % 60;

    const hoursText = formatTimeUnit(hours, 'час');
    const minutesText = formatTimeUnit(remainderMinutes, 'минута');

    return `Это ${hoursText} и ${minutesText}`;
}

function formatTimeUnit(value, unit) {
    const endings = {
        'час': ['час', 'часа', 'часов'],
        'минута': ['минута', 'минуты', 'минут']
    };

    if (value === 0) {
        return `0 ${endings[unit][2]}`;
    }

    const lastDigit = value % 10;
    const twoLastDigits = value % 100;

    if (twoLastDigits >= 11 && twoLastDigits <= 19) {
        return `${value} ${endings[unit][2]}`;
    } else if (lastDigit === 1) {
        return `${value} ${endings[unit][0]}`;
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        return `${value} ${endings[unit][1]}`;
    } else {
        return `${value} ${endings[unit][2]}`;
    }
}

// Примеры использования:
console.log(getTimeFromMinutes(150));  // "Это 2 часа и 30 минут"
console.log(getTimeFromMinutes(60));   // "Это 1 час и 0 минут"
console.log(getTimeFromMinutes(250));  // "Это 4 часа и 10 минут"




// Место для второй задачи
function findMaxNumber(a, b, c, d) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || typeof d !== 'number') {
        return 0; // Если хотя бы один аргумент не является числом, возвращаем 0
    }
    return Math.max (a, b, c, d);
}
console.log(findMaxNumber(1, 3, 7, 9));
console.log(findMaxNumber(5, 12, 7, 9));
console.log(findMaxNumber(12, 7, 9));
