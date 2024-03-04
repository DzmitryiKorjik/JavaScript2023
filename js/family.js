'use strict';

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length === 0) {
        return 'Семья пуста';
    }
    const familyMessage = 'Семья состоит из: ' + arr.join(' ');
    return familyMessage;
}
const familyResult = showFamily(family);
console.log(familyResult);



const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].toLowerCase());
    }   
}
standardizeStrings(favoriteCities);