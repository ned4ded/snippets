# bcrypt
Library to help to hash passwords; [Github](https://github.com/kelektiv/node.bcrypt.js);

## Installation
``` bash
$ npm i -S bcrypt
```

## Combinations
Here is presented a list of high-efficient combinations with the other middleware.
- [passport.js](../passport.js): authentication middleware;
- [mongoose](../,,/frameworks/mongoose/): MongoDB ODM framework;

## Examples
Main usage [example file](./example.js) you would find hereby;
With combinations:
- [passport.js](../passport.js/local-combo/bcript.js): comparing passwords on login screen;
- [mongoose](../,,/frameworks/mongoose/User/bcript.model.js): hash user password before saving;
