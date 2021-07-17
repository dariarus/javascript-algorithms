/*
 * Задача 1: «Палиндром»
 *
 * Палиндром — это слово, предложение или последовательность символов,
 * которая читается слева направо так же, как и справа налево. Например,
 * «топот» и «Анна» — палиндромы, а «привет» и «Витя» — нет.
 *
 * Напишите функцию palindrome(str), принимающую как аргумент строку.
 * Функция должна вернуть true, если строка — палиндром, и false, если нет.
 * 
 * Считайте, что на вход всегда передаётся слово: то есть знаков препинания
 * и пробелов в аргументе быть не может.
 * 
*/

function palindrome(str) {
    // Напишите код здесь
    const strLowerCase = str.toLowerCase();
    // split - разделить слово/строку на массив символов, reverse - вернуть символы в обратном порядке, 
    // join('') - соединить все символы обратно в слово/строку, используя разделитель '' вместо стандартной запятой
    const strReversed = strLowerCase.split('').reverse().join(''); 
    return strLowerCase === strReversed; // сравнение вне if в любом случае возвращает true или false
}


/* альтернативное решение с for и if

function palindrome(str) {
    const strLowerCase = str.toLowerCase();
    let strReversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        strReversed += strLowerCase[i]; // сложение символов строки по-новой справа налево
    }
    if (strLowerCase === strReversed) {
        return true;
    }
    else {
        return false;
    }
*/

// Протестируйте решение, вызывая функцию с разными аргументами:

// console.log(palindrome('топот')); // должно быть true
// console.log(palindrome('Saippuakivikauppias')); // true
// console.log(palindrome('привет')); // false

/*
 * Бонус. Задача для любознательных. Пусть функция принимает на вход любую строку,
 * но пробелы и знаки препинания не учитывает. Например:
 *
 * palindrome('О, лета тело!'); // true
 *
*/