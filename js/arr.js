'use strict';

/* const arr = [1, 2, 3, 4, 5];
/* console.log(arr); */

// сортировать массива
/* arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`);
}); */

// убрать последний элемент массива
/* arr.pop(); */

// добавить элемент в массива
/* arr.push(10); */



// сортировать массива
/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */


// сортировать массива
/* for (let value of arr) {
    console.log(value);
} */

// сортировка массива
const arr = [10, 52, 5, 1, 102, 89];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

