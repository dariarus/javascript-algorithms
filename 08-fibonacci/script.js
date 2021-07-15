/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci(n) {
    let previousNum = 1;
    let currentNum = 1;
    let result = 0;
    if (n === 0 || n === 1)  {
        result = 0;
    }
    else if (n === 2 || n === 3) {
        result = 1;
    }
    else {
        for (let i = 4; i <= n; i++) {
            result = previousNum + currentNum;
            previousNum = currentNum;
            currentNum = result;
        };
    }
    return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)
console.log(fibonacci(0));
console.log(fibonacci(2));
console.log(fibonacci(3));