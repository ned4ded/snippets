# JavaScript Syntax
The topic designed for revealing examples of JS Syntax and providing short description of possible usage.
1. [Associative array](#associative-array);
1. [Set](#set);


## Associative array
Ассоциативный массив в js является `объектом`, но имеет ряд важных отличий:
- `Объект` имеет прототип, что означает наличие стандартных значений в ассоциативном массиве.
- В `объекте` ключи должны быть строками, когда в `Map` они могут иметь любой тип.
- Вы можете легко получить размер `Map`, в то время как в объекте необходимо самостоятельно его учитывать.

Основная причина использовать `Map` в JS, заключается в том, что обычный `объект` содержит внутри себя множество служебных свойств, которые содержат важную информацию и функции. Если эти функции случайно перезапишут, то программа может просто сломаться. С `Map` такое не пройдет. Все свойства записывающиеся через `set` попадают в такую область, где ничего нельзя сломать. Другими словами, `Map` полезен тогда, когда нет контроля над свойствами, то есть когда они могут динамически заполняться пользовательскими данными.

Так же можно использовать ассоциативный массив вместо `объекта` когда тип ключей не известен до момента исполнения, либо тип всех ключей и тип всех значений одинаковый.

``` JavaScript
  const map = new Map();

  map instanceof Object // true
  map instanceof Map // true

  map.set('key', 'value');
  map.get('key'); // value
  map.has('key'); // true

  map.get('unkown'); // undefined
  map.has('unkown'); // false
```

## Set
`Set` является реализацией математического объекта множество. Организация свойств внутри объекта `Set` позволяет намного быстрее проверять вхождение элемента в массив свойств `Set`, повышая производительность. Объекты Set (множество) позволяют вам сохранять уникальные значения любого типа, как примитивы, так и другие типы объектов. Значение элемента в Set может присутствовать только в одном экземпляре, что обеспечивает его уникальность в рамках коллекции Set.

**Features**:
- повышение производительности при обходе множества;
- только уникальные значения.

[See Example](./set.js);

## Getter
Getter позволяет создавать динамические свойства у объектов. Синтаксис get связывает свойство объекта с функцией, которая будет вызываться при обращении к этому свойству. Динамическое свойство вычисляется внутри объекта и обязательно не имеет параметров. Является, по сути, синтаксическим сахаром.

[See Example](./getter.js);

**Features**:
- доступ снаружи объекта как к свойству;
- повышает читабельность;
- поддержка старого кода: нпр, если для описания объекта User бфло использовано свойство `age`, а в дальнейшем было решено, что целесообразнее использовать `birthdayDate`, то не обязательно переписывать все места, где используется `age`, достаточно добавить getter, вычисляет возраст из даты рождения.

**Combinations**:
- Memoization technic [example](https://github.com/ned4ded/snippets/tree/master/optimization/program/memoization/)

## Rest Operator
Рест оператор принимает оставшиеся параметры функции в виде массива.

``` JavaScript
const SomeFunction = (a, b, ...rest) => {
  console.log(a, b);
  console.log(rest);
  return;
}

SomeFunction('first', 'second', 'third', 'fourth');

// 'first', 'second'
// [ 'third', 'fourth' ]

SomeFunction('first');

// 'first', undefined
// []
```

## Spread

Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

``` JavaScript
const parts = ['shoulders', 'knees'];
const body = ['head', ...parts, 'toes'];

console.log(body); // ['head', 'shoulders', 'knees', 'toes'];

const obj = { key: 'value' };
console.log({ ...obj, port: 80 }); // { key: 'value', port: 80 }

const obj2 = { key: 'value3', type: 'string' };
console.log({ ...obj, ...obj2 });
// Если во время применения растягивания,
// повторяются ключи,
// то в результирующий объект записывается самое правое значение
// { key: 'value3', type: 'string' }
```

The spread operator used on `Map` object will lead to converting `Map` object to plain `Array`.

## Destructuring assignment

Синтаксис деструктурирующего присваивания в выражениях JavaScript позволяет извлекать данные из массивов или объектов при помощи синтаксиса, подобного объявлению массива или литералов в объекте.

``` JavaScript
const arr = [1, 2, 3, 4, 5];

const [one, two, ...rest] = arr;

console.log(one); // 1
console.log(two); // 2
console.log(rest); // [3, 4, 5];

// Default value
const [y = 5, z = 7] = [1];
console.log(y); // 1;
console.log(z); // 7;

const { a, b: v } = { a: 7, b: 8 };
console.log(a); // 7
console.log(v); // 8

const animals = [
  { age: 5, type: 'cat' },
  { age: 10, type: 'dog' },
];

const reault = animals.filter(({ age }) => age > 7);
console.log(result); // [{ age: 10, type: 'dog' }];

const metadata = {
  title: "Scratchpad",
  translations: [
    { locale: 'de', title: 'Javascript-Umgebund' }
  ],
  url: '/en-US/docs/Tools/Scratchpad',
};

const {
  title: englishTitle,
  translations: [{ title: localeTitle }]
} = metadata;

console.log(englishTitle); // 'Scratchpad'
console.log(localeTitle); // 'Javascript-Umgebund'

```
## Binding
This paragraph explains JS `this` binding in functions. In global execution context (outside a function), `this` refers to the global object (ex. `window` in browser); Inside a function, the value of `this` depends on how the function is called and moreover on the mode in which the program or function behaves.

For example:
``` JavaScript
// executes in Browser
function f1() {
  return this;
}

f1() === window; // true

function f2() {
  'use strict'; // see strict mode
  return this;
}

f2() === undefined; // true
```

In strict mode, if `this` was not defined by the execution context, it remains undefined.

`call` and `apply` function methods is used to pass the value of `this` from one context to another:

``` JavaScript
// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = {a: 'Custom'};

// This property is set on the global object
var a = 'Global';

function whatsThis() {
  return this.a;  // The value of this is dependent on how the function is called
}

whatsThis();          // 'Global'
whatsThis.call(obj);  // 'Custom'; function.call(thisArg, arg1, arg2, ...)
whatsThis.apply(obj); // 'Custom'; func.apply(thisArg, [argsArray])
```

The `bind` method creates a new function with the same body and scope as function, on which this method was called, but where `this` occurs in the original function, in the new function it is permamentlty bound to the first argument of `bind` method, regardless of how the function is being used;

Sum it up, the **early binding** allows referring to `this` context of the object where the original function was created in, but the **late binding**, otherwise, lets referring to `this` context of the entity where the function is called from.

### Late binding

Late binding is working by default using original function syntax `function() {}`. When the function is called inside another function or object, then `this` context is referring the place-of-calling context (**call side**).

``` Javascript
const getName = function() {
  return this.name;
};

const f = name => {
  return {
    name,
    getName
  }
};

const a = {
  name: 'another thing',
  getName
};

const g = f('something');

getName(); // TypeError: cannot read property of undefined
g.getName(); // something
a.getName(); // another thing

const c = {
  name: 'dope name',
  getName() {
    return this.name;
  }
}

const func = c.getName;

const m = {
  name: 'awesome name',
  getName: c.getName
}

c.getName(); // dope name
func(); // TypeError: cannot read property of undefined
m.getName(); // awesome name
```

JS check function context (`this`) at the moment of its calling. So, it is possible to refer to the same function in different objects and get a completely different result in return.

``` JavaScript
function setName(name) {this.name = name};

const obj1 = {setName};
const obj2 = {setName};

obj1.setName = obj2.setName; // true

obj1.setName('marting');
obj2.setName('mike');

console.log(obj1)
console.log(obj2)

// { setName: [Function: setName], name: 'martin' }
// { setName: [Function: setName], name: 'mike' }
```

### Early Binding
Arrow functions (`() => {}`) use early binding, so that, `this` context of arrow functions are referring to declaration side. They will be equal to the function producing after calling `bind(this)` method on it;

``` Javascript
const f = (name) => {
  return {
    name,
    getName: (function() {
      return this.name; // `this` now is equal to `f` function this, which is undefined
    }).bind(this)
  }
}

const func = (name) => {
  return {
    name,
    getName: () => {
      return this.name;
    }
  }
}

f(); // TypeError
func(); // TypeError


const fn = (name) => {
  this.name = name;

  return {
    name: 'cool name',
    getName: () => {
      return this.name;
    }
  }
}


const c = fn('another name');
c.getName(); // another name

const t = {
  name: 'dope name',
  getName: c.getName,
}

t.getName(); // another name
```

## Event Emitter

## Async approaches
JS could be used in event-driven programming and has concurrency model based on an `event loop`. Mostly, JS Runtimes (for ex., based on v8 engine and used in chrome and node.js) are a single-threaded non-blocking asynchronous concurrent. This means, for instance, that JavaScript can process a mouse click while waiting for a database query to return information.

Note, that async code couldn't be caught with `exception` statement. Moreover, no returning value is specified in async functions. Late binding doesn't work properly in async (well, it does, but you should keep this process in mind).

```JavaScript
const user = {
  name: 'Tony',
  printName() {
    console.log(this.name);
  },
};

setTimeout(user.printName, 100); // undefined

// Wrapper
setTimeout(() => user.printName(), 100); // 'Tony'

// Bind manually
setTimeout(user.printName.bind(user)), 100); // 'Tony'
```

src:
- [video about Event loop](https://www.youtube.com/watch?v=8cV4ZvHXQL4);

### Callbacks

Cons:
- callback hell;

``` JavaScript
const fs = require('fs');

fs.readFile('somefile.txt', (err, content) => {
  if(err) throw new Error('...');

  console.log(content);
})
```
### Promises
``` JavaScript
```
### Coroutine
``` JavaScript
```
### Async/await
``` JavaScript
```
### Actor model
``` JavaScript
```
