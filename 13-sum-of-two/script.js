/*
 * Задача 13: «Сумма двух»
 *
 * Напишите функцию sumOfTwo(arr, num). Её аргументы: массив целых чисел arr
 * и целое число num. Функция должна вернуть true, если в переданном массиве
 * есть какие-то два числа, чья сумма равна num. Если же такой пары чисел нет,
 * функция должна вернуть false.
 * 
*/

function sumOfTwo(arr, num) {
    // Напишите код здесь
    for (let currentIndex = 0; currentIndex < arr.length - 1; currentIndex++) { // (length - 1) затем, чтобы не проверять последний элемент при первом проходе, т.к. его уже не счем складывать ( сложение по диалгонали)
        for (let nextIndex = 1 + currentIndex; nextIndex < arr.length; nextIndex++) { // (nextIndex = currentIndex + 1) затем, чтобы не складывать число само с собой, т.е при i = 0 j будет = 1, и тогда сложатся нулевой и первый элементы одного и того же массива
            if (arr[currentIndex] + arr[nextIndex] === num) {
                return true;
            }
        }
    }
    return false;
}

    // Протестируйте решение, вызывая функцию с разными аргументами:

    console.log(sumOfTwo([1, 2, 3, 4, 5], 4)); // true (так как 1 + 3 === 4)
    console.log(sumOfTwo([1, 2, 3, 4, 5], 100)); // false
    console.log(sumOfTwo([1, 3], 4)); // true
