const once = fn => {
  let called = false;

  return (...args) => {
    if(called) return;
    called = true;
    fn(...args);
  };
};

const printConsole = (string) => console.log(string);

const oncedFn = once(printConsole);

oncedFn('HEY!!!'); // HEY!!!

oncedFn('WOuldnt be called'); // nothing will be done
