class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  makeNewOps(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  select(fn) {
    return this.makeNewOps((coll) => coll.map(fn));
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

    return this.makeNewOps((coll) => coll.slice().sort(compare));
  }

  where(fn) {
    return this.makeNewOps((coll) => coll.filter(fn));
  }

  toArray() {
    return this.operations.reduce((coll, fn) => fn(coll), this.collection);
  }
}

const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];

const coll = (new Enumerable(cars)).where(car => car.brand === 'kia').select(car => car.model);

console.log(coll);
// Will return exact copy of original object, but with
// Enumerable {
//   collection:
//    [ { brand: 'bmw', model: 'm5', year: 2014 },
//      { brand: 'bmw', model: 'm4', year: 2013 },
//      { brand: 'kia', model: 'sorento', year: 2014 },
//      { brand: 'kia', model: 'rio', year: 2010 },
//      { brand: 'kia', model: 'sportage', year: 2012 } ],
//   operations: [ [Function], [Function] ] }

coll.operations.forEach(fn => console.log(fn.toString()));
// (coll) => coll.filter(fn)
// (coll) => coll.map(fn)
// Each of this printed functions contains closure function instead of 'fn', used in the declaration of 'coll' instance

console.log(coll.toArray());
// Returns array of filtered car models by executing each method in operations array.
// [ 'sorento', 'rio', 'sportage' ]
