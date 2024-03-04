"use strict"; 

function linearSearch(arr, target) {
  // Проходим по каждому элементу массива
  for (let i = 0; i < arr.length; i++) {
      // Если текущий элемент равен искомому элементу, возвращаем индекс
      if (arr[i] === target) {
          return i;
      }
  }
  // Если элемент не найден, возвращаем -1
  return -1;
}

// Пример использования
const myArray = [1, 3, 5, 7, 9, 11];
const targetElement = 7;
const result = linearSearch(myArray, targetElement);

if (result !== -1) {
  console.log(`Элемент ${targetElement} найден в массиве, его индекс: ${result}`);
} else {
  console.log(`Элемент ${targetElement} не найден в массиве.`);
}

