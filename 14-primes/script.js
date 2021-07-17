/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/


// решение по методу решета Эратосфена
function primes(num) {
    // Напишите код здесь
    const seive = [];
    const primeNums = [];

    for (let number = 2; number <= num; number++) {
        // если число не находится в массиве решета, его надо запушить в массив простых чисел, а дальше вычеркнуть все, что кратно ему
        if (!seive[number]) {
            primeNums.push(number);
            // числа, которые нужно вычеркнуть из массива простых чисел, т.е. они окажутся в массиве решета, чтобы по ним не проходить еще раз, если они уже вычеркнуты
            for (let destroedNumber = number * number; destroedNumber <= num; destroedNumber += number) {
                seive[destroedNumber] = true;
            }
        }
    }
    return primeNums;
}


/* решение с помощью перебора каждого из чисел до входящего числа

function isPrime(n) {
    if (n <= 1) {
        return false;
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
    const primeNums = [];

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
*/

// Протестируйте решение, вызывая функцию с разными аргументами:

// console.log(isPrime(9)); // [2, 3, 5]

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]