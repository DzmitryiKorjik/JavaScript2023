"use srtict";

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof str !== 'string') {
        return 'Ошибка!';
    }
    const reversedString = str
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .reverse()
    .join(' ');

    return reversedString;
}
const reversedString = reverse(someString);
console.log(reversedString);


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }        
    });
    return str;
}

const result = availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');
console.log(result);