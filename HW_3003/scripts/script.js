// 1 Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.

function task1(a, b) {
  if (a > b) console.log(b);
  if (b > a) console.log(a);
  if (a == b) console.log(`Numbers are equal`);
}
task1(5, 12);

// 2 Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

console.log("---------------------------------------------------");

function task2(a2, b2) {
  if (a2 > b2) {
    for (let index = a2; index >= b2; index--) {
      if (index % 2 == 0) console.log(index);
    }
  }
}
task2(23, 11);

// 3 Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

console.log("---------------------------------------------------");

function power(x, y = 2) {
  let powNum = x ** y;
  console.log(powNum);
}
power(6);

// 4 Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

// console.log("---------------------------------------------------");

// function funcN (n) {
//     let funcNum = n*(n+1)/2
//     console.log(funcNum);
// }
// funcN(3)

// 5 Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

console.log("---------------------------------------------------");

let evenN = 0;
let oddN = 0;
function funcSumNM(n, m) {
  for (let index = n; index <= m; index++) {
    if (index % 2 == 0) evenN += index;
    else oddN += index;
  }
}
funcSumNM(2, 8);
console.log(`Sum of even numbers: ${evenN}`);
console.log(`Sum of odd numbers: ${oddN}`);

// 6 Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.
// Пример: [ 'one', 'two', 'three' ] => 'three'

console.log("---------------------------------------------------");

function stringArr(array) {
  if (array.length == 0) return "null";
  let max = 0;
  let longestIndex = null;
  for (let index = 0; index < array.length; index++) {
    if (array[index].length > max) {
      max = array[index].length;
      longestIndex = index;
    }
  }
  return array[longestIndex];
}

let result1 = stringArr([`hi`, `how`, `are`, `you`]);
console.log(result1);

let result2 = stringArr([]);
console.log(result2);
