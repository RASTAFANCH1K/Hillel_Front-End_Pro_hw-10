// ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))

// ЗАДАНИЕ №0
// есть переменные, нужно создать обьект с ключом date и значением 17-04-2012 используя эти переменные
// Заметка!!!! использовать синтаксис квадратные скобки для задания ключа в обьекте!!!!!!!!!!!!!
// РЕШЕНИЕ
    
const a = 'date';

const aValue = '17-04-2012';

let obj = {
  [a]: aValue,
}

console.log(obj);

// ЗАДАНИЕ №1
// Вывести все значения свойств обьектов в массиве
// РЕШЕНИЕ

var arr = [
  { author: 'Sergei', book: 'Sergei\'s book', },
  { author: 'Ivan', book: 'Ivan\'s book', },
  { author: 'Dmitrii', book: 'Dmitrii\'s book', },
];

function getBookByAuthor() {
  return `${this.author} - ${this.book}`;
}

arr.forEach(el => {
  let res = getBookByAuthor.bind(el)
  console.log( res() )
});

// ЗАДАНИЕ №2
// есть пустой обьект obj и три переменные k m n! добавить свойства к obj c ключами имена которых совпадают со значениями переменных 
// k, m, n и и значениями такими же как имя ключа!
// РЕШЕНИЕ

var k = 'book';

var m = 'apartment';

var n = 'table';

var obj = {
  [k]: k,
  [m]: m,
  [n]: n,
};

console.log(obj);

// ЗАДАНИЕ №3
// Есть массив с обьектов claims нужно привести к такому виду чтобы получить один обьект с ключами id и со значением весь обьект
// Например 
const newObj = {
  '1234': {
    id: 1234,
    model: 'MC7',
    status: 'Open',
  },
  '3453': {
    id: 3453,
    model: 'MC7',
    status: 'Open',
  }
  // и так далее
}
// РЕШЕНИЕ

var claims = [
  {
    id: 1234,
    model: 'MC7',
    status: 'Open',
  },
  {
    id: 3453,
    model: 'MC7',
    status: 'Open',
  },
  {
    id: 6343,
    model: 'Gran Tour',
    status: 'Closed',
  },
  {
    id: 7644,
    status: 'In Progress',
  },
  {
    id: 7686,
    model: 'City Bike',
    status: 'Closed',
  },
  {
    id: 8356,
    model: 'Bike',
    status: 'Closed',
  },
  {
    id: 9745,
    model: 'Bicycle',
    status: 'Closed',
  },
  {
    id: 10253,
    model: 'Bicycle',
    status: 'Closed',
  },
  {
    id: 14234,
    model: 'Bike',
    status: 'Closed',
  }
];

// Способ №1
function getNewObj(key, id, model, status) {
  return {
    [key]: { id, model, status }
  }
}

let result = {};

for (let i = 0; i < claims.length; i++) {
  let res = getNewObj(claims[i].id, claims[i].id, claims[i].model, claims[i].status);
  result = { ...result, ...res};
}

// Способ №2
function getNewObj() {
  return { 
    [this.id]: { id: this.id, model: this.model, status: this.status } 
  };
}

let result = {};

for (let i = 0; i < claims.length; i++) {
  let f = getNewObj.bind(claims[i]);
  result = { ...result, ...f() };
}

// Способ №3
function getNewObj() {
  return { 
    [this.id]: { id: this.id, model: this.model, status: this.status } 
  };
}

let result = claims.reduce((prev, item) => {
  let f = getNewObj.bind(item);
  return { ...prev, ...f()}
}, {});

console.log(result);

// ЗАДАНИЕ №4
// Дан массив arr! Вернуть те которые в квадрате меньше самого большого значения
// РЕШЕНИЕ

const arr = [10, 6, 3, 5, 6, 2, 12, 64];

let max = Math.max(...arr);

let result = arr.filter(item => item ** 2 < max) 

console.log(result);

// ЗАДАНИЕ №5
// Написать свой собственный some! Функция должна принимать два параметра массив и функцию!!
// РЕШЕНИЕ

function some(array, f) {
  let arrOfBoolean = [];
  let res;
  array.forEach(item => {
    if (f(item) === true) {
      arrOfBoolean.push(true);
    } else {
      arrOfBoolean.push(false);
    }
  });
  arrOfBoolean.includes(true) ? res = true : res = false;
  return res;
}

some([5, 2, 5, 1, 6, 3, 6], (el) => el > 5);

// Собственный Every
function every(array, f) {
  let res = array.reduce((prev, item) => f(item) === true && prev ? true : false);
  return res;
}

every([5, 2, 5, 1, 6, 3, 6], (el) => el > 5);

// ЗАДАНИЕ №6
// Переопределить toString функции getArrayClone и обьекта iron
// РЕШЕНИЕ

function getArrayClone(arr) {
  return arr.slice();
}

getArrayClone.toString = function() {
  return "getArrayClone";
}

getArrayClone.toString();

const iron = {
  power: 2000,
  price: 2500
};

iron.toString = function() {
  return 'iron';
}

iron.toString();

// ЗАДАНИЕ №7
// Написать функцию которая записывает элементы из массива arr2 в новый массив которых нет в arr1!
// РЕШЕНИЕ

// Способ №1
var arr1 = [5, 2, 'a'];

var arr2 = [6, 5, 2, 4, 'a'];

function f(arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  let result = [];
  for (item of arr3) {
    if (arr3.lastIndexOf(item) === arr3.indexOf(item)) {
      result.push(item);
    }
  }
  return result;
}

f(arr1, arr2);

// Способ №2
var arr1 = [5, 2, 'a'];

var arr2 = [6, 5, 2, 4, 'a'];

function f(arr1, arr2) {
  let arr3 = arr2.filter(item => arr1.indexOf(item) == -1);
  return arr3;
}

f(arr1, arr2);

// ЗАДАНИЕ №8
// Какой контекст имеет первый и второй массив?
// РЕШЕНИЕ

// Если задание состояло в объяснении, то...

var arr1 = [5, 2, 'a'];

var arr2 = [6, 5, 2, 4, 'a'];

// Оба массива имеют контекст "Window", т.к. они хранятся в переменных,
// которые были объявленны с помощью "var" - а для него не существует
// блочной области видимости
// Это можно проверить вызвовом функции

var arr1 = [5, 2, 'a'];

function a() {
  console.log(this.arr1);
}

a();

// вернёт массив

// Например если массив arr2 поместить в переменную "let"

let arr2 = [6, 5, 2, 4, 'a'];

function b() {
  console.log(this.arr2);
}

b();

// вернёт undefind, т.к. у переменных "let" есть блочная область видимости в отличии от "var"

// ЗАДАНИЕ №9
// Есть два обьекта! Вызвать getSpeed1() с контекстом car2 и getSpeed2 с контекстом car1
// РЕШЕНИЕ

var car1 =  {
  speed: 200,
  getSpeed1() {
    return this.speed;
  },
};

var car2 = {
  speed: 220,
  getSpeed2() {
    return `${this.speed}km`;
  }, 
};

let a = car1.getSpeed1.bind(car2);

let b = car2.getSpeed2.bind(car1);

console.log( a() );

console.log( b() );

// ЗАДАНИЕ №10
// Есть массив из обьектов нужно отфильтровать только те у которых цена больше 40000 и где model не равна Mercedes с помощью filter!
// РЕШЕНИЕ

const car = [
  {
    model: 'BMW',
    price: 45000,
    year: 2015,
    country: 'Germany',
  },
  {
    model: 'Audi',
    price: 75000,
    year: 2017,
    country: 'Germany',
  },
  {
    model: 'Mercedes',
    price: 80000,
    year: 2019,
    country: 'Germany',
  },
  {
    model: 'Volkswagen',
    price: 35000,
    year: 2019,
    country: 'Germany',
  },
];

let result = car.filter(item => item.price > 40000 && item.model !== 'Mercedes');

console.log(result);

//  необязательные

// ЗАДАНИЕ №11
// Есть массив claims если хотя бы один обьект имеет в поле статус значение Open то вернуть true! Ипользовать метод массива some!
// РЕШЕНИЕ

claims = [
  {
    id: 1234,
    model: 'MC7',
    status: 'Open',
  },
  {
    id: 3453,
    model: 'MC7',
    status: 'Open',
  },
  {
    id: 6343,
    model: 'Gran Tour',
    status: 'Closed',
  },
  {
    id: 7644,
    status: 'In Progress',
  },
  {
    id: 7686,
    model: 'City Bike',
    status: 'Closed',
  },
  {
    id: 8356,
    model: 'Bike',
    status: 'Closed',
  },
  {
    id: 9745,
    model: 'Bicycle',
    status: 'Closed',
  },
  {
    id: 10253,
    model: 'Bicycle',
    status: 'Closed',
  },
  {
    id: 14234,
    model: 'Bike',
    status: 'Closed',
  }
];

let result = claims.some(item => item.status === 'Open' ? true : false);

console.log(result);

// ЗАДАНИЕ №12
// Дан массив arr! Используя пробежаться по массиву и если все больше или равны 2 то вернуть true! Использовть every метод!
// РЕШЕНИЕ

const arr = [10, 6, 3, 5, 6, 2, 12, 64];

let result = arr.every(item => item >= 2 ? true : false);

console.log(result);

// ЗАДАНИЕ №13
// Используя claims переменную выше!! Удилить все элементы у которых статус isClosed!! Подсказка! удалить не значит брать и явно удалять можно использовать метод массивов и вернуть новый и перезаписать!!
// РЕШЕНИЕ

claims = [
  {
    id: 1234,
    model: 'MC7',
    status: 'Open',
  },
  {
    id: 3453,
    model: 'MC7',
    status: 'Open',
  },
  {
    id: 6343,
    model: 'Gran Tour',
    status: 'Closed',
  },
  {
    id: 7644,
    status: 'In Progress',
  },
  {
    id: 7686,
    model: 'City Bike',
    status: 'Closed',
  },
  {
    id: 8356,
    model: 'Bike',
    status: 'Closed',
  },
  {
    id: 9745,
    model: 'Bicycle',
    status: 'Closed',
  },
  {
    id: 10253,
    model: 'Bicycle',
    status: 'Closed',
  },
  {
    id: 14234,
    model: 'Bike',
    status: 'Closed',
  }
];

let result = claims.reduce((prev, item) => {
  if (item.status !== 'Closed') prev.push(item);
  return prev;
}, []);

console.log(result);

// ЗАДАНИЕ №14
// Написать свой собственный filter! Функция должна принимать два параметра массив и функцию!!
// РЕШЕНИЕ

function filter(array, f) {
  let newArray = [];
  array.forEach(item => f(item) === true ? newArray.push(item) : item);
  return newArray;
}

filter([5, 2, 5, 1, 6, 3, 6], function (el) { return el > 2 });