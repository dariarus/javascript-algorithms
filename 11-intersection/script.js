/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/


// чтобы отфильтровать два массива с повторяющимися значениями, нужно удалить повторки из каждого из них, т.е. создать массивы с уникальными элементами
function uniq(arr) {
    const filteredArr = arr.filter((item, position, array) => {
        return array.lastIndexOf(item) === position;
    });
    return filteredArr;
}

function intersection(arr1, arr2) {
    // создание массива с уникальными элементами
    const uniqArr1 = uniq(arr1);

    const arrFiltered = uniqArr1.filter(item1 => {
        return arr2.includes(item1);
    });
    return arrFiltered;
}


/* альтернативное решение с однократным фильтрованием

function intersection(arr1, arr2) {
    let result = arr1.filter((item, position, array) => {
        return arr2.includes(item) && array.lastIndexOf(item) === position;
    });
    return result;
} */


/* альтернативное решение с for

function uniq(arr) {
    const filteredArr = arr.filter((item, position, array) => {
        return array.lastIndexOf(item) === position;
    });
    return filteredArr;
}

function intersection(arr1, arr2) {
    // создание массивов с уникальными элементами
    const uniqArr1 = uniq(arr1);
    const uniqArr2 = uniq(arr2);

    let arrFiltered = uniqArr1.filter(item1 => {
    for (let i = 0; i < uniqArr2.length; i++) {
            if (item1 === uniqArr2[i]) {
                return true;
            }
        }
    });
    return arrFiltered;
} */

    // Протестируйте решение, вызывая функцию с разными аргументами:

    console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
    console.log(intersection([1, 5, 4, 2], [7, 12])); // []
    console.log(intersection([1, 1, 5, 4, 2], [8, 91, 4, 1, 1, 3]));