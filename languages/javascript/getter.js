class Example {
  constructor(array) {
    this.array = array;
  }

  get length() {
    return this.toArray().length;
  }

  get last() {
    if(!this.length) return undefined;

    return this.toArray()[this.length - 1];
  }

  toArray() {
    return this.array.slice();
  }
}

const arr = [
  'Something',
  'Something',
  'Something',
  'Last Something',
]

const coll = new Example(arr);

console.log(coll.length); // 4
console.log(coll.last); // 'Last Something'
