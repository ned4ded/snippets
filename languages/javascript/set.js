const set = new Set();

set.add(5);
set.add('some text');
set.size; // 2
set.has(5); //true
set.has('some text'); //true

set.delete(5);
set.has(5); //false

set.keys();
set.forEach(value => ());

const set = new Set([1, 2, 10, 10]);
Array.from(set); // [1, 2, 10]

const stopWords = new Set(['one', 'two', 'four']);
const stopWords2 = ['one', 'two', 'four']
const words = [
  'one',
  'five',
  'six',
  'seven',
  'two',
  'four',
  'nine',
];

const testSet = () => words.filter(word => !stopWords.has(word));
const testFilter = () => words.filter(word => !stopWords2.includes(word));

console.time();
(()=> {
  const rec = (acc) => {
    if(acc >= 10000) return;

    testSet(); // or testFilter();
    return rec(acc + 1);
  }

  return rec(0);
})()
console.timeEnd();

// Avarage value for Set filtration (based on 10 calls in node env): 10.205ms;
// With the same parameters for .includes filtration: 11.445ms;
