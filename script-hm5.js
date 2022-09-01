// Задание 1
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
// Вам понадобятся методы строк.

let string1 = 'sfgjsfkgjksfj'
let string = 'hello world';
const usFirst = (str) => console.log(`${str[0].toUpperCase()}${str.slice(1)}`);;
usFirst(string);



// Задание 2
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.


let longStrin = 'Hello World';
console.log(longStrin.includes('World'));


function checkSpam(str) {
   let lowerStr = str.toLowerCase();

   return console.log(lowerStr.includes('badword') || lowerStr.includes('xxx'));
}

checkSpam('XXX')





// Задание 3

// Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку).
// Пример: «привет Женя» -> «янеЖ тевирп»
// Обратите внимание: метод reverse существует только у массивов.

let string = 'Привет Женя';
let reverse = (str) => {
   let array = str.split('');
   array.reverse();
   return console.log(array.join(''));

}
reverse(string);



// Задание 4

// Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком.

// let stations = [

// 'MAN675847583748sjt567654;Manchester Piccadilly',

// 'GNF576746573fhdg4737dh4;Greenfield',

// 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',

// 'SYB4f65hf75f736463;Stalybridge',

// 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'

// ];

// Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:

// MAN: Manchester Piccadilly

// Вывести эти строки в консоль

// ПОДСКАЗКА:

// 1. Извлеките трёхбуквенный код станции и сохраните его в новой переменной.
// 2. Найдите номер символьного номера точки с запятой.
// 3. Извлеките название для чтения человеком, используя номер индекса точки с запятой в качестве контрольной точки и сохраните его в новой переменной.
// 4. Объедините две новые переменные и строк



let stations = [
   'MAN675847583748sjt567654;Manchester Piccadilly',

   'GNF576746573fhdg4737dh4;Greenfield',

   'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',

   'SYB4f65hf75f736463;Stalybridge',

   'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'

];





let result = 0;
let result1 = 0;
let result2 = 0;
for (let item of stations) {
   result = item.slice(0, 3);
   result1 = item.slice(item.indexOf(';'))
   result2 = result1.slice(1)
   console.log(`${result}:${result2}`);
}



// Задание 5

// Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив,
//  содержащий только уникальные элементы arr.

// Пример

// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

// console.log(unique(strings) ); должен вывести "кришна, харе, :-O"

// ПОДСКАЗКА

// - создать новый массив

// - обойти исходный массив, если элемент отсутствует в новом - добавлять его в новый.
// Таким образом в новый добавятся только уникальные.



let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

let unique = (arr) => {
   let newArray = [];
   for (let item of arr) {
      if (newArray.includes(item) === false) {
         newArray.push(item);
      } else { };
   }
   return newArray
}

console.log(unique(strings));