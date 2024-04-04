"use strict";

// Array / list / массив / список

// const list = new Array(); // конструктор
// const list = []; // литеральны или просто // 99%
// const list = [1, 2, 'jwkenew', [1, 2, ], false, {name: 'Bob'}]; // литеральны или просто // 99%

// const obj = {
//     zIndex: 6,
//     name: 'Bob',
//     age: 30,
// }

// obj.fewfwefwefe // undefined

// obj.zIndex = 88;

// const list = ['zIndex', 'name', 'age'];
// const listIsObject = {
//     0: 'zIndex',
//     1: 'name',
//     3: 'age',
// }

// console.log(list[0]);
// console.log(listIsObject[0]);
// console.log(obj['zIndex']); // obj.zIndex

// console.log(obj, list);

// const list = [1, 2, 'jwkenew', [1, 2, ], false]; // литеральны или просто // 99%

// const list = ['zIndex', 'width', 'height'];
// // list.length - 1;
// // console.log(list[1]);
// // console.log(list[44]); // undefined
// // console.log(list[list.length - 1]); // получить последний элемент массива
// // console.log(list.at(-1)); // получить последний элемент массива

// // push(...items)добавляет items в конец массива. // используем как правило его
// // pop() удаляет элемент в конце массива и возвращает его. // используем как правило его
// // shift() удаляет элемент в начале массива и возвращает его.
// // unshift(...items) добавляет items в начало массива.

// console.log(list);
// list.push('color'); // добавить в конец массива
// console.log(list);
// list.push('font-size', 'font-family');
// console.log(list);

// list.unshift('background');  // добавить в начало массива
// console.log(list);

// list.pop(); // удалить последнее занчение из массива
// const deletedArrayItem = list.pop(); // удалить последнее занчение из массива и сохранить его в переменно deletedArrayItem
// console.log(list);
// console.log(list);

// list.shift();  // удалить первое занчение из массива
// const newDeletedArrayItem = list.shift(); // удалить последнее занчение из массива и сохранить его в переменно deletedArrayItem
// console.log(list);

// const list = ['zIndex', 'width', 'height']; // 6000 

// list.push('font-size'); // все ок
// list.unshift('font-size'); // ['font-size', 'zIndex', 'width', 'height'];

// const userList = [
//     {
//         firstName: 'Anna',
//         secondName: 'Milligan',
//         age: 20,
//     },
//     {
//         firstName: 'Igor',
//         secondName: 'Mask',
//         age: 43,
//     },
//     {
//         firstName: 'Billi',
//         secondName: 'Tramp',
//         age: 16,
//     },
// ];

// const emailsList = [];

// // for (let i = 0; i < userList.length; ++i) {
// //     console.log(userList[i]);
// //     console.log(userList[i].toLowerCase() + '@gmail.com');
// // }

// for (let i = 0; i < userList.length; ++i) { // есть index элемента
//     const user = userList[i];
//     const email = `${user.firstName.toLowerCase()}${user.secondName.toLowerCase()}${user.age}@gmail.com`;
//     emailsList.push(email);
// }

// // console.log(emailsList);

// // console.log(userList);

// // for(key in obj) {} //  цикл in только для ОБЪЕКТОВ!!!!!!!!!!
// for(const key of emailsList) {
//     console.log(key);
// } //  цикл in только для МАССИВОВ!!!!!!!!!!

// const array = [[1, 2, 3], [5, 7, 15], [22, 12, 14]];
// console.log(array[0][1])

// const cloneArray = array;

// const array = ['Jon', 'Bil', 'Smit'];
// console.log(array);

// // array.splice(1, 2); // удалить из массива значение (первый аргумент - с какого индекса (1), второй аргумент - сколько значений (2))
// // console.log(array); //['Jon'];

// // array.splice(1, 2, 'Ivan', 'Evgen'); // удалить два элемента и вставить на их место еще два строковых значения
// // console.log(array);

// const newArray = array.splice(0, 2);

// console.log(array);
// console.log(newArray);

// const array = ['Jon', 'Bil', 'Smit'];

// console.log(array.slice(1, 2)) // скопировал от и до как и для строк
// console.log(array.slice(-2)) // скопировал два с конца
// console.log(array.slice(0, 3)) // скопировал 0 (включая) и до 3 (не включая)

// const num_1 = [1, 2];
// const num_2 = [3, 4];
// const num_3 = [5, 6];

// console.log(num_1.concat(num_2, num_3)); // собирает все массивы в один

// const str = 'Женя-очень-любит-печенье';
// // const splitStr = str.split(''); // создаст массив, который будет содержать каждую символ нашей строки
// const splitStr = str.split('-'); // создаст массив, который будет содержать фрагменты строк между "-"
// const result = splitStr.join(' ');
// console.log(splitStr);
// console.log(str.split('-').join(' '));

// const userList = ['Ivan', 'Bob', 'Jon'];
// const cloneUserList = [...userList]; // поверхностное копирование

// const emailsList = [];

// for (let i = 0; i < userList.length; ++i) {
//     console.log(userList[i]);
// }

// for(const key of userList) {
//     console.log(key);
// }

// userList.forEach((item, i) => {
//     console.log(i);
//     // ... какие-то действия
//     // const user = userList[i];
//     // const email = `${user.firstName.toLowerCase()}${user.secondName.toLowerCase()}${user.age}@gmail.com`;
//     // emailsList.push(email);
// });

// const forEach = (item, i, array) => {
//     console.log(item, i, array);
// }

// for (let i = 0; i < userList.length; ++i) {
//     // forEach(userList[i], i, userList)
// }

// function getSum(argument_1, argument_2) {
//     return argument_1 + argument_2;
// }

// const num_1 = 1;
// const num_2 = 5;

// getSum(1, 5);
// getSum(num_1, num_2);

// const userList = ['Evgen', 'Bob', 'Jon'];

// const newArry = userList.map((user) => { // возвращает новый массив
//     return `${user.toLowerCase()}@gmail.com`;
// });
// console.log(userList, newArry);

const numbers = [0, -1, 458, -64328254];

const isEveryItemMoreThenZero = numbers.every((item, index, array) => {
    // if (item > 0) {
    //     return true;
    // } else {
    //     return false;
    // }

    // return item > 0 ? true : false;

    return item > 0;
});

console.log(isEveryItemMoreThenZero);

const isSomeItemMoreThenZero = numbers.some((item) => {
    return item > 0;
});

console.log(isSomeItemMoreThenZero);

// userList.find();
// userList.filter();
// userList.reduce();
// userList.includes('');
// userList.sort();
// userList.reverse();
