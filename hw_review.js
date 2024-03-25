// ДЗ!!!!!!!!!!
// Задачи разделять комментом с номером задачи
// Соблюдать стили написания кода (пробелы, лишние скобки, абзацы и т.д.)

// // 2 
// let secForMinet = 60;
// let minetForHour = 60;
// let hourForDay = 24;
// let dayForYear = 365;
// // let myAgeInSecond =((((31*dayForYear)*hourForDay)*minetForHour)*secForMinet);
// // прбелы и без скобок
// let myAgeInSecond = 31 * dayForYear * hourForDay * minetForHour * secForMinet;
// console.log(myAgeInSecond);

// // 3

// // не надо так
// // let count = 42 + String;
// // let numberFromString = String (count);
// // console.log (typeof count);
// // console.log (typeof numberFromString);

// // let countee = '42' - Number;
// // let numberFromString = String (count);
// // console.log (typeof countee);
// // console.log (typeof numberFromString);

// // 4

// let a = 1
// let b = 2
// let c = 'белых медведей'

// // такой варик
// // const result = a + '' + b + ' ' + c;

// // такой варик let sumABC = String(`${a}${b} ${c}`); - здесь не нужно в строку ктак как и так строка
// const result = `${a}${b} ${c}`;
// console.log(result);

// // 5

// //нэйминг
// // let h = 'доступ';
// // let j = 'морпех';
// // let k = 'наледь';
// // let l = 'попрек';
// // let g = 'рубило';
// // let lengthWords = (h+j+k+l+g).length;

// const access = "доступ";
// const marine = "морпех";
// const ice = "наледь";
// const reproach = "попрек";
// const chopped = "рубило";

// // const lengthWords = access.length + marine.length + ice.length + reproach.length + chopped.length;
// const lengthWords = (access + marine + ice + reproach + chopped).length;
// console.log(lengthWords)

// // Продвинутый уровень
// // 1
// let aa = 4;
// let bb = 3;

// aa = aa + bb; 
// bb = aa - bb; 
// aa = aa - bb; 

// // Можно так но мы это еще не проходили
// // let a = 1;
// // let b = 2;
// // [a, b] = [b, a];
// // a; // => 2
// // b; // => 1

// console.log(aa); 
// console.log(bb); 
// // 2
// let codeWord1 = "обернись";
// let codeWord2 = "неужели";
// let codeWord3 = "огурцы";
// let codeWord4 = "липкие";
// let codeWord5 = "?!";


// const cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];

// console.log(cipher); 
let name = "Kostya";
let age = 25;
let question = false;
console.log ("Variable: ${namee} has type: ${typeof name}");
console.log ("Variable: ${age} has type: ${typeof age}");
console.log ("Variable: ${question} has type: ${typeof question}");