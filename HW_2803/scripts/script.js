// Решить следующие задачи:

//  Напишите цикл for, который выводит в консоль каждое второе число от 0 до 10

for (let index = 0; index < 11; index+=2) {
    console.log(index);
}
// for (let index = 0; index < 6; index++) {
//    console.log(index*2);
// }

//  Напишите цикл for, который выводит в консоль  все числа от 55 до 20

for (let index = 55; index >19; index--){
    console.log(index);
} 
// for (let index = 0; index < 36; index++){
//    console.log(55-index);
//}


//  Дан массив numbers. Вывести в консоль все числа из массива
//  Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат

const numbers = [3, 5, 11, 2, 8, 1, 6];
for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}

let numbers_squared = []
for (let index = 0; index < numbers.length; index++) {
    numbers_squared.push(numbers[index]**2)
}
console.log(numbers_squared);

// Создать переменную last_elem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу)

const last_elem = numbers_squared.at(-1)
console.log(last_elem);

// Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’

const user = {
    first_name: 'Ivan', 
    last_name: 'Ivanov', 
    age: 20, 
    salary: 500
    }
console.log(`User’s name is ${user.first_name} ${user.last_name}. He is ${user.age}. His salary is: ${user.salary}.`);    
