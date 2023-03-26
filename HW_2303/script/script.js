// Решить следующие задачи:

// 1. Написать программу, которая через prompt считывает число и выводит в консоль число, равное 10% от введенного числа

// console.log("Task 1");
// const num = +prompt("Enter a number")
// if (isNaN(num)) alert("It's not a number")
// console.log(`Number is: ${num}\n10% of ${num} is : ${num*0.1}`);



// 2. Написать программу, которая получает два числа и выводит наименьшее

// let num1 = +prompt("Enter a first number");
// for (; isNaN(num1); ) {
//   num1 = +prompt("It's not a number. Enter a number");
// }
// let num2 = +prompt("Enter a second number");
// for (; isNaN(num2); ) {
//   num2 = +prompt("It's not a number. Enter a second number");
// }
// if (num1 < num2) alert(`Your numbers are: ${num1}, ${num2}.\nThe smallest number is ${num1}`);
// if (num2 < num1) alert(`Your numbers are: ${num1}, ${num2}.\nThe smallest number is ${num2}`);
// else alert(`Your numbers are: ${num1}, ${num2}.\nThere is no smallest number`);



// 3. Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’

// let num3 = +prompt("Введите число")
// for (; isNaN(num3); ) num3 = +prompt("Это не число. Введите число");
// if (num3 < 100) alert(`Число меньше 100`);
// else if (num3 > 100) alert(`Число больше 100`);
// else alert(`Число равно ${num3}`);



// 4. Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если пользователь несовершеннолетний.

// const usersName = prompt("Enter your name")
// let usersAge = +prompt("Enter your age")
// for (; isNaN(usersAge); ) {
//     usersAge = +prompt("It's not a number. Enter a number")
// }
// if (usersAge >= 18) console.log(`Hello, ${usersName}`);
// else console.log(`Hi, ${usersName}`);