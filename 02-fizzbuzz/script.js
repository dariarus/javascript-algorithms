/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
    // Напишите код здесь
    for (let number = 1; number <= num; number++) {
        if (number % 3 === 0 && number % 5 === 0) {
            console.log('fizzbuzz');
        }
        else if (number % 3 === 0) {
            console.log('fizz');
        }
        else if (number % 5 === 0) {
            console.log('buzz');
        }
        else {
            console.log(number);
        }
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

//console.log(fizzBuzz(3));