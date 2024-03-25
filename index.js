"use strict"; // !!!!!!!!! СПРАШИВАЮТ НА СОБЕСАХ !!!!!!!!!!!

// num = 5;
// console.log(num);

// !!!!!!!!! СПРАШИВАЮТ НА СОБЕСАХ !!!!!!!!!!!
// var - глобальная изменяемая переменная // Очень старое и НЕ ИСПОЛЬЗОВАТЬ
// let - локальная изменяемая переменная
// const - локальная неизменяемая переменная

// var name = 'Hello'; VAR - это зло во плоти
// let name = 'Hello';
// const newName = 'loli';

// console.log(name, newName);

// name = 25;
// newName = 55

// console.log(name, newName);

// let a = 15; !!!!!!!!! не надо
// let v = 'tonny'; !!!!!!!!! не надо

// let name_1 = 'Женя';
// let age = 57;
// let wef_fw = 45;
// let _ = 'ewge';
// let $ = 'ewge';

// let name = 15; // !!!очень хорошо
// let lowwerCase = 15; // !!!очень хорошо
// const userInfo = 'Belarus'; //очень хорошо
// const PERMITTED_AGE = 18; //очень хорошо


// string
const name = 'To"m';
const userName = "John'y";
const userCountry = `Belar'u"s`; // очень мощный инструмент
const userCountryNew = `Belar'u"s ${name}`; // очень мощный инструмент

// number
const num = 0;
const age = 33230923942; //num < 2^53
const newAge = -34 + 2;
const rate = 0.515; // только точка!!!!

// boolean
const isMan = true;
const isAuth = false;

// undefined
let city; // undefined
// let unReal = undefined;

// null
let sum = null;
// sum = 55;
// sum = 150;

// object
const userInfo = {
    name: 'Tom', // name - называют поле или ключ, 'Tom' - значение
    age: 33,
    isAuth: false,
    sum: sum,
}; // называем "объект"
const count = ['tom', 348.55, false, sum, city]; // МАССИВ/список/лист

// NaN
// console.log('tom' / 2 - 1); //NaN
// console.log(NaN + 1); // NaN

// bigInt //num > 2^53
const bigIntNumber = 23423425235346346346345345345345346346435n;

// Symbol - уникальный идентификатор
// const symbolvar = Symbol('32525235235235');

// typeof - позволяет узнать тип
// console.log(typeof name); //string
// console.log(typeof num); //number
// console.log(typeof isMan); // boolean
// console.log(typeof city); //undefined
// console.log(typeof sum); // sum === null но тип все равно object!!!!
// console.log(typeof userInfo); //object

// Преобразование типов из числа в строку
// const number = 5; // '5'
// // const stringFromNumber = String(number); //'5'
// // const stringFromNumber = number.toString(); //'5'
// // const stringFromNumber = number + ''; //'5'
// const stringFromNumber = `Мой возраст: ${number} лет!`; //'5'


// console.log(typeof number, number);
// console.log(typeof stringFromNumber, stringFromNumber);

// const rateDollar = 3.2;
// const belSumm = 20;

// const result = belSumm / rateDollar;

// const cost = 1000;
// const symbol = 'р.';

// const result = `от ${cost}${symbol}`;
// console.log(result);

// Преобразование типов из строки в число
// const string = '5';
// // const numberFromString = Number(string);
// // const numberFromString = +string;
// const paddingTop = '10px';
// const numberFromString = parseInt(paddingTop) * 3;

// console.log(paddingTop, numberFromString)

// Преобразование типов из строки или числа в булевое значени
const string = '5';
const number = 5;
const bool_1 = Boolean(string); // true
const bool_2 = Boolean(number); // true
const bool_3 = !!number; // true

// !!!!!!!!!! ЭТО ЗАПОМНИТЬ 100% !!!!!!!!!!!!
// Значением false будут: 0, '', false, null, undefined;
// Значением true будут: 1, -15, '324 525324 4', true, [], {};

// Взаимодействие с пользователем через браузер:
// alert: показывает сообщение и пока не согласимся ничего не дает сделать
// prompt: запрашивает инфу
// confirm: запрашивает одобрение или отказ

// Выводит сообщение, и ждет когда пользователь нажмет кнопку ОК.
// alert('Вы принимаете условия посещения данного сайта'); 

// const newUserName = prompt('Укажите Ваше имя:', 'пишите на русском');
//Выводит сообщение с полем в которое пользователь
// alert(newUserName); 

// const aprove = confirm('Хотите посмотреть рекламу?');
// alert(`Здесь реклама. Пользователь нажал: ${aprove}`);

// console.log(String('Hello')) // Hello
// console.log(String(5)) //5
// console.log(String(-2)) // -2
// console.log(String(0)) // 0
// console.log(String(undefined)) //undefined
// console.log(String(null)) //null
// console.log(String(NaN)) //NaN

// console.log(Boolean('Some string')) // true
// console.log(Boolean('')) //false
// console.log(Boolean(' ')) // true
// console.log(Boolean(1)) // true
// console.log(Boolean(0)) //false
// console.log(Boolean(-25)) // true
// console.log(Boolean(undefined)) //false
// console.log(Boolean(null)) //false
// console.log(Boolean(NaN)) //false

// console.log(Number(false)) //0
// console.log(Number(true)) //1
// console.log(Number('Hi')) //NaN
// console.log(Number('')) //0
// console.log(Number(' ')) //0
// console.log(Number('111')) // 111
// console.log(Number('    32325235     ')) // 32325235
// console.log(Number(' \n \t ')) //0
// console.log(Number(undefined)) //NaN
// console.log(+null) //0
// console.log(+' ') //0
// console.log( "6" / "2" ) // 3

// const text = 12 + ' ' // "12 " 
// const newText = 12 + ' ' + 'hello' + true; // "12 hellotrue";
// const varLength = newText.length; // узнать длинну строки

// // если длина строки === 0 то ты, JS, убери фокус с инпута

// console.log(varLength);