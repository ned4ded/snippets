const map = new Map();

map instanceof Object // true
map instanceof Map // true

map.set('key', 'value');
map.get('key'); // value
map.has('key'); // true

map.get('unkown'); // undefined
map.has('unkown'); // false
