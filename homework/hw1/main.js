// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10,
// -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну
// змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// та вивести в консоль

// Task 1
let a = 'hello'
let b = 'owu'
let c = 'com'
let d = 'ua'
let e = 1
let f = 10
let g = -999
let h = 123
let i = 3.14
let j = 2.7
let k = 16
let l = true
let m = false

console.log(a, b, c, d, e, f, g, h, i, j, k, l, m)

// Task 2

let firstName = 'Yehor'
let middleName = ''
let lastName = 'Polyhalov'
let person = firstName + ' ' + middleName + lastName
console.log(person)


//Task 3

let a1 = 100;
let b1 = '100';
let c1 = true;

console.log(typeof(a1), typeof(b1), typeof(c1))

// Task 4

let promptName = prompt('If u r that curious my name is:', 'Yehor')
let promptSurname = prompt('If u r curious more, then my surname is:', 'Polyhalov')
let promptYear = prompt('If u r super curious, year I was born is:', '2002')

