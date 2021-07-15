/*
 * Задача 3: «Развернуть слова в предложении»
 *
 * Напишите функцию reverseWords(str), принимающую на вход строку.
 * Функция должна вернуть новую строку, расставив слова в обратном
 * порядке.Если в строке есть знаки препинания, их можно удалить
 * или оставить — на ваше усмотрение.
 *
*/

function reverseWords(str) {
    // Напишите код здесь
    let words = str.split(' ');
    let resultStr = '';
    for (let wordIndex = words.length - 1; wordIndex >= 0; wordIndex--) {
        if (wordIndex !== words.length - 1) { // все итерации, когда строка уже не пустая
            resultStr = resultStr + ' ' + words[wordIndex];
        }
        else {
            resultStr = words[wordIndex]; // первая итерация, когда строка пустая
        }
    }
    return resultStr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(reverseWords('всегда много путей достичь цель есть')); // "есть цель достичь путей много всегда"
console.log(reverseWords('испробовать их все должны вы')); // "вы должны все их испробовать"