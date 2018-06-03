const waterfall = (functions, finalCallback) => {
  if(!functions.length) return finalCallback();

  const next = ([head, ...rest], prevResult) => {
    const cb = (err, ...args) => {
      if(err || !rest.length) {
        return finalCallback(err, ...args);
      } else {
        return next(rest, args);
      }
    };

    head(...prevResult, cb);
  }

  next(functions, []);
}

const funcs = [
  cb => cb(null, 'one'),
  (result1, cb) => cb(null, result1, 'two'),
  (result1, result2, cb) => cb(null, result2, result1),
];

const fns = [
  cb => cb(new Error('Test Error'), 'one'),
  (result1, cb) => cb(null, result1, 'two'),
  (result1, result2, cb) => cb(null, result2, result1),
];

waterfall(funcs, (err, ...result) => {
  console.log(result); // [ 'two', 'one' ]
});

waterfall(fns, (err, ...result) => {
  console.log(err); // Error: Test Error
  console.log(result); // [ 'one' ]
});
