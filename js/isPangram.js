function isPangram(sentence) {
    // Приводим все буквы к нижнему регистру для удобства сравнения
    const lowercasedSentence = sentence.toLowerCase();
    
    // Создаем объект для отслеживания встреченных букв
    const alphabetMap = {};

    // Перебираем каждый символ в строке
    for (let char of lowercasedSentence) {
        // Если символ является буквой алфавита, записываем его в объект
        if (/[a-z]/.test(char)) {
            alphabetMap[char] = true;
        }
    }

    // Проверяем, есть ли все буквы алфавита в объекте
    return Object.keys(alphabetMap).length === 26;
}

// Пример использования функции
const sentence1 = "The quick brown fox jumps over the lazy dog";
console.log(isPangram(sentence1)); // Вернет true

const sentence2 = "Hello world";
console.log(isPangram(sentence2)); // Вернет false
