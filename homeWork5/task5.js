/**
 * **Задание 5**
Дано 2 массива 
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
```


Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.
 */

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
const daysOfWeek = {};

for (let i = 0; i < en.length; i++) {
    daysOfWeek[en[i]] = ru[i];
}
console.log(daysOfWeek);

//const arr = [1, 23, 45,-45, 0, 67, 100, 45];
//const arrUp = arr.map(item => item*2); ///применение метода map
//const arrUp = arr.filter(item => item >= 10);///применение метода filter
//const arrUp = arr.reduce((a,b) => a+b)/arr.length; ///применение метода reduce считает среднее арифмитическое


//console.log('Старый массив:' + arr);
//console.log('Новый массив:' + arrUp);

//const user = {
//  name: "Igor",
//  surname: "Kul",
//  patronymic: function enterPatronymic() {
//    this.patronymic = prompt('Введите свое отчество'); 
//  },
//  age: 44  
//}
//delete user.surname;
//user.patronymic();
//console.log(user);
//console.log(`${user.name} - ${user.surname} - ${user.patronymic} - ${user.age}`);
//const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
//const arr2 = [1, 2, 3, 4, 5, 6, 7];

//const daysOfWeek = {};

//for (let i = 0; i < arr1.length; i++) {
//  daysOfWeek[arr1[i]] = arr2[i]; // добавление через присвоение значения по ключу //object[key] = value;
//}

//console.log(daysOfWeek);
//const obj = { x: 1, y: 2, z: 3 };
//const arr1 = Object.keys(obj);
//const arr2 = Object.values(obj);
//for (let i = 0; i < arr2.length; i++) {
//  arr2[i] = Math.pow(arr2[i], 2);  
//}
//let newObject = {};
//for (let i = 0; i < arr1.length; i++) {
//  newObject[arr1[i]] = arr2[i];
//}
//console.log(newObject);