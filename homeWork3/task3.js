/**
 * Задание 3
 * Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
 */

console.log('Задание 3.');
let userNumber1 = Number(prompt('Введите первое число:'));
let userNumber2 = Number(prompt('Введите второе число:'));
let userNumber3 = Number(prompt('Введите третье число:'));

const getMax = (num1, num2, num3) => { // 1 3 2
    let max = num1;
    if (num1 < num2) { max = num2; }
    if (max < num3) { max = num3; }
    console.log(`Из чисел ${num1}, ${num2}, ${num3} максимальное число ${max}`);};
getMax(userNumber1, userNumber2, userNumber3);
