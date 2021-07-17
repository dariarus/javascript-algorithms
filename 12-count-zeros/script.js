/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
*/

// считаем кол-во в числе, разбивая его на разряды и проверяя, есть ли среди получившихся цифр 0. Считает получившиеся нули
function countZerosInNumber(n) {
    let resultZeros = 0;
    let reminder = n;

    // извлекаем каждую цифру, из которых состоит входящее число
    do {
        const digit = reminder % 10;
        if (digit === 0) {
            resultZeros++;
        }
        reminder = Math.trunc(reminder / 10);      // применяем метод Math, чтобы забрать только целую часть от остатка от деления
    }
    while (reminder >= 1);
    return resultZeros;
}

function countZeros(n) {
    // Напишите код здесь
    let resultZerosInNum = 0;
    for (let number = 1; number <= n; number++) {
        resultZerosInNum += countZerosInNumber(number);
    }
    return resultZerosInNum;
}


/* альтернативное решение с хитрым способом превращения числа в строку с помощью String

function countZeros(n) {
    let resultZeros = 0;

    for (let number = 1; number <= n; number++) {
        let numberStr = String(number);             // превращаем поступившее число в набор символов (иными словами, в строку)
        let zerosRemoved = numberStr.replaceAll('0', '');

        let zerosCount = numberStr.length - zerosRemoved.length;
        resultZeros = resultZeros + zerosCount;
    }
    return resultZeros;
}
*/

// Протестируйте решение, вызывая функцию с разными аргументами:
countZerosInNumber(102);
console.log(countZeros(342)); //
console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(0)); // 0
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100


