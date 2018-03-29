class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  get length() {
    return this.toArray().length;
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  select(fn) {
    return this.build(coll => coll.map(fn));
  }

  orderBy(fn, direction = 'asc') {
    const comparator = (a, b) => {
      const a1 = fn(a);
      const b1 = fn(b);

      const compareResult = direction === 'asc' ? 1 : -1;

      if (a1 > b1) {
        return compareResult;
      } else if (a1 < b1) {
        return -compareResult;
      }

      return 0;
    };
    return this.build(coll => coll.sort(comparator));
  }

  where(fn) {
    return this.build(coll => coll.filter(fn));
  }

  toArray() {
    if(!this.memo) {
      this.memo = this.operations.reduce((coll, fn) => fn(coll), this.collection);
    }

    return this.memo;
  }
}

const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];

const coll = (new Enumerable(cars)).where(car => car.brand == 'kia');

console.log(coll);
// The object has only original input and the array of functions to be operated with this input:
// Enumerable {
//   collection:
//    [ { brand: 'bmw', model: 'm5', year: 2014 },
//      { brand: 'bmw', model: 'm4', year: 2013 },
//      { brand: 'kia', model: 'sorento', year: 2014 },
//      { brand: 'kia', model: 'rio', year: 2010 },
//      { brand: 'kia', model: 'sportage', year: 2012 } ],
//   operations: [ [Function] ] }

console.log(coll.toArray());
// Enumerables executed all operations and returns an array
// [ { brand: 'kia', model: 'sorento', year: 2014 },
//   { brand: 'kia', model: 'rio', year: 2010 },
//   { brand: 'kia', model: 'sportage', year: 2012 } ]

console.log(coll);
// The object has saved the calculated value and the 'memo' property is available now.
// The next `coll.toArray()` won't execute all the operations, but will instantly return saved memo   
// Enumerable {
//   collection:
//     [ { brand: 'bmw', model: 'm5', year: 2014 },
//       { brand: 'bmw', model: 'm4', year: 2013 },
//       { brand: 'kia', model: 'sorento', year: 2014 },
//       { brand: 'kia', model: 'rio', year: 2010 },
//       { brand: 'kia', model: 'sportage', year: 2012 } ],
//    operations: [ [Function] ],
//    memo:
//     [ { brand: 'kia', model: 'sorento', year: 2014 },
//       { brand: 'kia', model: 'rio', year: 2010 },
//       { brand: 'kia', model: 'sportage', year: 2012 } ] }
