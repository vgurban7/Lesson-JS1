
/*Задание 2
Запросите у пользователя его имя. Выведите в окошке (с помощью функции alert)
 фразу: Привет, Николай! (вместо Николай должно показываться имя, которое ввел пользователь)*/

// let user = prompt('Ваше имя')
// alert('Привет, ' + user);


/*Задание 3
 Запросите у пользователя число. Затем запросите степень,
  в которую нужно возвести это число. Выведите в консоль результат.*/

// let num = prompt('Введите число')
// let deg = prompt('Введите степень')
// console.log(num ** deg);

/*Задание 5
Создать произвольную переменную, присвоить ей значение.
C помощью if написать условие: если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.*/

// let num = 5;
// if (num === 'hidden') {
//    num = 'visible';
// } else {
//    num = 'hidden';
// }
// console.log(num);

/*Задание 6
Создать переменную и присвоить ей число.
Записать условие:
- если переменная равна нулю, присвоить ей 1;
- если меньше нуля - строку “less then zero”;
- если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).*/

// let num = 5;
// if (num === 0) {
//    num = 1;
// } else if (num < 0) {
//    num = 'less then zero';
// } else if (num > 0) {
//    num = num * 10
// } else {
//    num = 'Неверное значение';
// }
// console.log(num);


/*Задание 7
Запросите у пользователя число и запишите его в переменную.
(Не забывайте, что от пользователя мы всегда получаем строку).
Создайте переменную-результат и присвойте ей значение: если введенное пользователем число меньше 5, то результат будет '0', если больше -  '1'. Выведите результат в консоль.*/

// let num = +prompt('Запишите число');
// let result;
// if (num < 5) {
//    result = 0;
// } else if (num > 5) {
//    result = 1;
// } else {
//    result = 'Неверное значение';
// }
// console.log(result);


/*Задание 8
Попросить пользователя ввести одно число, следом - второе число.Вывести в консоль максимальное из чисел
(наибольшее) с текстом: Большее число: 7(вместо 7 будет максимальное число из введенных пользователем).
* предусмотреть вариант ввода одинаковых чисел*/

// let num = +prompt('Задайте значение');
// let num1 = +prompt('Задайте значение');
// if (num > num1) {
//    console.log('Большее число: ' + num);
// } else if (num < num1) {
//    console.log('Большее число: ' + num1);
// } else {
//    console.log('Числа равны ' + num + ' и ' + num1);
// }


/*Задание 9
Определить, является ли введенное пользователем число num1 кратным введенному числу num2.
Обе переменные запрашиваем у пользователя, ответ выводим в консоль.*/

// let num1 = +prompt('Введите значение: ');
// let num2 = +prompt('Введите значение: ');
// let num3 = num1 % num2;
// if (num3 > 0) {
//    console.log('Число ' + num1 + ' Не кратное числу ' + num2);
// } else {
//    console.log('Число ' + num1 + ' Кратное числу ' + num2);
// }


/*Задание 10
Запросить у пользователя средний балл, записать в переменную.
Если средний балл 1 - 4 - вывести в консоль "Двоечник, иди учись!", если 5 - 8 - "Неплохо, но давай еще
поднажмем!", если 9-10 - "Ого, да ты настоящий отличник!" (можно другие фразы - по желанию).*/


// let num = +prompt('Запишите ваш средний бал ');
// if (num >= 1.0 && num <= 4.0) {
//    console.log('Двоечник, иди учись!')
// } else if (num >= 4.1 && num <= 8.0) {
//    console.log('Неплохо, но давай ещё поднажмём!')
// } else if (num >= 8.1 && num <= 10.0) {
//    console.log('Ого, ты крут!');
// } else {
//    console.log('Не ври !');
// }


/*Задание 11
Запросить у пользователя ответы на 2 вопроса:
- балл за экзамен (от 0 до 100)
- количество выполненных проектов (от 0 и больше)
Вывести в консоль общий выпускной балл в соответствии с этими значениями:
- 100, если балл за экзамен более 90 или количество проектов более 10.
- 90, если балл за экзамен более 75 и количество проектов не менее 5.
- 75, если балл за экзамен более 50 и количество проектов не менее 2.
- 0 во всех других случаях.*/

// let exam = +prompt('Введите бал полученный за экзамен: ');
// let project = +prompt('Введите колтчиство выполненых проектов: ');
// if (exam > 90 || project > 10) {
//    console.log(100);
// } else if (exam >= 75 && project >= 5) {
//    console.log(90);
// } else if (exam >= 50 && project >= 2) {
//    console.log(75);
// } else if (exam <= 50 && project < 2) {
//    console.log(0);
// } else {
//    console.log('Перепроверь данные');
// }



/*Задание 12
День аренды автомобиля стоит $40.При аренде на 7 или больше дней вы получаете общую итоговую скидку $50.
Если вы арендуете авто на 3 или более дней, ваша общая скидка составит $20.
Количество дней, на которые нужно арендовать авто, запрашиваются с помощью prompt.Напишите программу,
рассчитывающую общую стоимость аренды на запрашиваемое количество дней.*/

// let days = +prompt('Введите количество дней');
// let price1 = 40;
// let discount1 = 50;
// let discount2 = 20;
// if (days >= 7) {
//    console.log(days * price1 - discount1);
// } else if (days >= 3) {
//    console.log(days * price1 - discount2);
// } else if (days < 3) {
//    console.log(days * price1);
// } else {
//    console.log();
// }

