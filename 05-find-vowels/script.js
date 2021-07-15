/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 * 
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
*/

function findVowels(str) {
    // Напишите код здесь
    const vowelsList = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];
    let numberOfVowels = 0;
    for (let charIndex = 0; charIndex < str.length; charIndex++) {
        if (vowelsList.includes(str[charIndex].toLowerCase())) {
            numberOfVowels++;
        }   
    }
    return numberOfVowels;
}

/* альтернативное решение: 

function findVowels(str) {
    const vowelsList = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];
    let numberOfVowels = 0;
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < vowelsList.length; j++) {
                if (str[i].toLowerCase() === vowelsList[j]) {
                    numberOfVowels++;
                    break;
                }
            }
        }  
    return numberOfVowels;
} */   

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels('здравствуй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3