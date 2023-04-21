// 1. Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

// const divElem = document.querySelector("div")
// divElem.classList.add("numbers")
// for (let index = 100; index >= 50; index = index - 10) {
//     const pElement = document.createElement("p")
//     pElement.innerText = index
//     divElem.append(pElement)
// }

// 2. Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

// const divElem = document.querySelector("div")
// divElem.classList.add("strings_container")

// array = ["hello", "my", "friend"]
// for (let index = 0; index < array.length; index++) {
//     const pElement = document.createElement("p")
//     pElement.innerText = array[index];
//     divElem.append(pElement)
// }

// 3. Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

const divElem = document.querySelector("div");
divElem.classList.add("users_container");

function createCard(text) {
  const info = document.createElement("p");
  info.innerText = text;
  return info;
}

const arrayWithObjects = [
  {
    first_name: "Wednesday",
    last_name: "Addams",
    age: 17,
  },
  {
    first_name: "Gomez",
    last_name: "Addams",
    age: 150,
  },
  {
    first_name: "Morticia",
    last_name: "Addams",
    age: 140,
  },
];

for (let index = 0; index < arrayWithObjects.length; index++) {
  const { first_name, last_name, age } = arrayWithObjects[index];
  if (arrayWithObjects[index].age < 18) {
    continue;
  }
  const divCard = document.createElement("div");
  divCard.classList.add("card");
  divElem.append(divCard);
  const firstN = createCard(`First name of adult - ${first_name}`);
  const lastN = createCard(`Last name of adult - ${last_name}`);
  const age1 = createCard(`Age of adult - ${age} years`);
  divCard.append(firstN, lastN, age1);
}
