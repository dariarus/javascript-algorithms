/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    // Напишите код здесь
    const str1LowerCase = str1.toLowerCase();
    const str2LowerCase = str2.toLowerCase();
    if (str1LowerCase.length !== str2LowerCase.length) {
        return false;
    };
    if (str1LowerCase === str2LowerCase) {
        return false;
    };
    for (let str1CharIndex = 0; str1CharIndex < str1LowerCase.length; str1CharIndex++) {
        const symbol = str1LowerCase[str1CharIndex];
        // replaceAll заменяет входящий символ на что угодно ('' - пустота, то есть символ м/б удален, если заменить его на пустоту).
        // replaceAll возвращает новую строку с замененными символами. И если к-л символ удален, ДЛИНА новой строки станет отличной от ДЛИНЫ входящей
        // т.о. можно, узнав разницу между длинами строк, выяснить, сколько раз входил в изначальную строку тот символ, что был полностью удален методом replaceAll со всеми его повторениями
        // если надо проверить две входящие строки на совпадение символов (или на анаграмму), можно применить replaceAll для обеих. И после сравнить разность между 
        //              длинами обеих строк и их результатов после replaceAll с удалением всех повторяющихся символов.
        // ЕСЛИ разницы НЕ равны, значит, входящие в функцию строки НЕ являются анаграммами, т.к. один и тот же символ в к-л из строк повторяется еще раз, а во второй - нет
        // т.о. возвращаем false
        const str1SymbolCount = str1LowerCase.length - str1LowerCase.replaceAll(symbol, '').length;
        const str2SymbolCount = str2LowerCase.length - str2LowerCase.replaceAll(symbol, '').length;
        
        if (str1SymbolCount !== str2SymbolCount) {
            return false;
        }
    }
    return true;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
console.log(anagram('up', 'UP')); // false
console.log(anagram('ffinder', 'Friendd')); // false
console.log(anagram('ffinder', 'Friendf')); // true
