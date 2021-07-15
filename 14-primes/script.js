/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/


function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    for (let divider = 2; divider < n; divider++) {
        if (n % divider === 0) {
            return false;
        }
    }
    return true;
}


function primes(num) {
    // Напишите код здесь
    let primeNums = [];

    if (num === 1 || num === 2) {
        primeNums.push(num);
    }
    else {
        for (let number = 2; number <= num; number++) {
            if (isPrime(number)) {
                primeNums.push(number);
            }
        }
    }
    return primeNums;
}


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(isPrime(9)); // [2, 3, 5]

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]