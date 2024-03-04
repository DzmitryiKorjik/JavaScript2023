function deepCount(arr) {
    let count = 0;

    // Функция для рекурсивного подсчета элементов
    function countElements(element) {
        count++;  // Увеличиваем счетчик для текущего элемента

        // Если текущий элемент является массивом, вызываем функцию для его элементов
        if (Array.isArray(element)) {
            for (let subElement of element) {
                countElements(subElement);
            }
        }
    }

    // Перебираем каждый элемент в массиве и вызываем функцию для подсчета
    for (let element of arr) {
        countElements(element);
    }

    return count;
}

// Примеры использования функции
console.log(deepCount([1, 5, 3])); // Вернет 3
console.log(deepCount(["1", 5, "3", ["10"]])); // Вернет 5
console.log(deepCount([1, 2, [3, 4, [5]]])); // Вернет 7
console.log(deepCount([])); // Вернет 0
console.log(deepCount([[[[[[[[[]]]]]]]]])); // Вернет 8
