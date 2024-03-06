// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const s = (a, b) => a * b;

const sR = s(10, 5);
console.log(sR);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const circle = (r) => Math.PI * r ** 2;

const rCircle = circle(10);
console.log(rCircle);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const cil = (r, h) => Math.PI * 2 * r * h;

const rCil = cil(10, 5);
console.log(rCil);

// - створити функцію яка приймає масив та виводить кожен його елемент
const array = [1, 2345, 'aaa', true];

const arrPrinter = (arr) => {
    for (const item of arr) {
        console.log(`item: ${item}`)
    }
}

arrPrinter(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const p = (text, esad) => {
    document.write(`<${esad}>${text}</${esad}>`);
}

p('HELLO!!', 'h1');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const ulCreator1 = (text) => {
    document.write(`
        <ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>
    `);
}

ulCreator1('HELLO!!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const ulCreator2 = (text, count) => {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}

ulCreator2('HELLO!!', 2);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const array2 = [1, 2345, 'aaaa', true, 'bbb', 'ccc'];

const ulCreator3 = (arr) => {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`);
}

ulCreator3(array2);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
];

const usersPrinter = (arr) => {
    for (const user of arr) {
        document.write(`<div>id: ${user.id} &nbsp; name: ${user.name} &nbsp; age: ${user.age}</div>`);
    }
}

usersPrinter(users);

// - створити функцію яка повертає найменьше число з масиву
const arrayOfNumbers = [234, -23, 55, 0, -99, 3455];

const arrayMin = (arr) => {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (result > arr[i]) {
            result = arr[i];
        }
    }
    return result;
}

console.log(arrayMin(arrayOfNumbers));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = (arr) => {
    let result = 0;
    for (const number of arr) {
        result += number;
    }
    return result;
}

console.log(sum([1, 2, 10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap1 = (arr, index1, index2) => {
    const value1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = value1;
    return arr;
}

console.log(swap1([11, 22, 33, 44], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return sumUAH / item.value;
        }
    }
}

const result = exchange(
    10000,
    [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}],
    'USD'
);
console.log(result);