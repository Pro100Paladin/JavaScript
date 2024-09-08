/**
 * Задание 4
 * Необходимо от пользователя получить число.
 * Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.
 */

console.log('Задание 4.');
let x = Number(prompt('Введите целое положительное число:'));
console.log(`Вы ввели ${x}`);
let ones = x % 10;
let temp = parseInt(x / 10);
let tens = temp % 10;
temp = parseInt(temp / 10);
let hundreds = temp % 10;
console.log(`В числе ${x} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${ones}`);