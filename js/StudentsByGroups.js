'use stricte';

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    //Сортировка имен студентов в алфавитном порядке.
    arr.sort();
    //Создание четырех массивов для хранения имен студентов в группах "a", "b", "c" и "rest" (остальные).
    const a = [], b = [], c = [], rest = [];
    //Начало цикла, который проходится по отсортированному массиву студентов.
    for (let i = 0; i < arr.length; i++) {
        //Распределение студентов по группам в зависимости от текущего индекса в цикле. Первые три студента идут в группу "a", следующие три - в группу "b", следующие три - в группу "c", остальные идут в группу "rest".
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    
    const result = [a, b, c];
    
    if (rest.length > 0) {
        result.push(`Оставшиеся студенты: ${rest.join(', ')}`);
    }
    // Возвращение массива, содержащего три массива "a", "b", "c" и строку с оставшимися студентами. Если студентов в группе "rest" нет, возвращается "-". Иначе, возвращается строка с именами студентов из группы "rest", объединенными через запятую.

    return result;
}

const result = sortStudentsByGroups(students);
console.log(result);

