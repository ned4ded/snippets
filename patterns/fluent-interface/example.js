class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  select(fn) {
    this.collection = this.collection.map(fn);
    return this;
  }

  orderBy(fn, direction = 'asc') {
    const compare = (a, b) => {
      const aRes = fn(a);
      const bRes = fn(b);

      const compareResult = direction === 'asc' ? 1 : -1;

      if (aRes > bRes) {
        return compareResult;
      } else if (aRes < bRes) {
        return -compareResult;
      }

      return 0;
    };
    this.collection = this.collection.slice().sort(compare);
    return this;
  }

  where(fn) {
    this.collection = this.collection.filter(fn);
    return this;
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

coll.where(car => car.brand === 'kia');

console.log(coll.toArray());
// Output is mutated collection:
// [ { brand: 'kia', model: 'sorento', year: 2014 },
//   { brand: 'kia', model: 'rio', year: 2010 },
//   { brand: 'kia', model: 'sportage', year: 2012 } ]
