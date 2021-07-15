/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку, каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    // Напишите код здесь
    let words = str.split(' ');
    let resultStr = '';
    words.forEach(function (item) {
        const wordLowerCase = item.slice(0, 1).toUpperCase() + item.slice(1);
        if (resultStr !== '') {
            resultStr += ' ' + wordLowerCase;
        }
        else {
            resultStr = wordLowerCase;
        }
    });
    return resultStr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"