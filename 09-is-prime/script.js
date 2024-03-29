/*
 * Задача 9: «Простое число»
 *
 * Напишите функцию isPrime(n) для проверки, простое число n или нет.
 * Напомним, что число называют простым, если оно больше 1 и делится
 * без остатка только на 1 и на само себя.
 * 
 * На вход функция должна принимать число n и возвращать true,
 * если n простое, и false — если нет.
*/

function isPrime(n) {
    // Напишите код здесь
    if (n <= 1) {
        return false;
    }
    for (let divider = 2, numSqrt = Math.sqrt(n); divider < numSqrt; divider++) { // проходить можно не до конца, а до квадратного корня из входящего числа
        if (n % divider === 0) {
            return false;
        }
    }
    return true;
}


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(isPrime(0)); // false
console.log(isPrime(1)); // false
console.log(isPrime(3)); // true
console.log(isPrime(6)); // false
console.log(isPrime(17)); // true
console.log(isPrime(9)); // false