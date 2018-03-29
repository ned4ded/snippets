class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  select(fn) {
    const filtered = this.collection.map(fn);
    return new Enumerable(filtered);
  }

  orderBy(fn, dir = 'asc') {
    const compare = (a, b) => {
      const aRes = fn(a);
      const bRes = fn(b);

      const compareResult = dir === 'asc' ? 1 : -1;

      if(aRes > bRes) {
        return compareResult;
      } else if (aRes < bRes) {
        return -compareResult;
      }

      return 0;
    }

    const sorted = this.collection.slice().sort(compare);
    return new Enumerable(sorted);
  }

  where(fn) {
    const filtered = this.collection.filter(fn);
    return new Enumerable(filtered);
  }

  toArray() {
    return this.collection;
  }
}

const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];

const coll = new Enumerable(cars);
const coll2 = coll.where(car => car.brand === 'kia');

console.log(coll.toArray());
// Original Array
// [ { brand: 'bmw', model: 'm5', year: 2014 },
//   { brand: 'bmw', model: 'm4', year: 2013 },
//   { brand: 'kia', model: 'sorento', year: 2014 },
//   { brand: 'kia', model: 'rio', year: 2010 },
//   { brand: 'kia', model: 'sportage', year: 2012 } ]

console.log(coll2.toArray());
// Filtered Array
// [ { brand: 'kia', model: 'sorento', year: 2014 },
//   { brand: 'kia', model: 'rio', year: 2010 },
//   { brand: 'kia', model: 'sportage', year: 2012 } ]
