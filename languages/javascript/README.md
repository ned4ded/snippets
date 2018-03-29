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
