/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   forEach([1, 2, 3], (el) => console.log(el))
 */
/* function forEach(array, fn) {} */

let array = [1, 2, 3];

let fnArray = anyArray =>{
for(let i =0; i< anyArray.length; i++){
console.log(`Элемент ${anyArray[i]} Индекс ${i} Массив ${anyArray}`)
 }
}

console.log(fnArray(array))

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   map([1, 2, 3], (el) => el ** 2) // [1, 4, 9]
 */
/* function map(array, fn) {} */


let array = [1, 2, 3];

let fnArray = anyArray =>{
let extracted = [];
for(let i =0; i< anyArray.length; i++){
let currentEl = anyArray[i]
extracted.push(currentEl)
 }
 return extracted
}
console.log(fnArray(array))

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   reduce([1, 2, 3], (all, current) => all + current) // 6
 */
/* function reduce(array, fn, initial) {} */

let reduceArr = (array, amount = 0) =>{
  for(let i = 0; i< array.length; i++ ){
  amount += array[i];
  }
  return amount
  }
  console.log(reduceArr(array));

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
/* function upperProps(obj) {} */

let obj = { name: 'Сергей', lastName: 'Петров' };

let objFn = obj =>{
let extracted = []
for( let key in obj){
extracted.push(key.toUpperCase())
}
return extracted
}

console.log(objFn(obj))





/*
 Задание 5 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат

 Пример:
   const obj = createProxy({});
   obj.foo = 2;
   console.log(obj.foo); // 4
 */
function createProxy(obj) {}

export { forEach, map, reduce, upperProps, createProxy };
