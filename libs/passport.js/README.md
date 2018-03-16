# Passport.js
Table of content:
- [About](#about);
- [Combinations](#combinations);
- [Examples](#examples);
- [Local Strategy](#local-strategy);

## About
[Passport.js](http://www.passportjs.org/docs/) ([GitHub](https://github.com/jaredhanson/passport)) is authentication middleware for Node.js.

It uses Strategies for supporting authentication using a user/pass combo, Facebook, Twitter and other APIs.

## Combinations
Here is presented a list of high-efficient combinations with the other middleware.

- [bcryptt](../bcrypt): encrypting [bcrypt function](https://en.wikipedia.org/wiki/Bcrypt) for hashing passwords before storing in DB;
- [flash](../../frameworks/express/flash.js): send flash messages if authentication fails;
- [connect-ensure-login](../../frameworks/express/connect-ensure-login): ensures that a user is logged in.

## Examples
Used in project [sahalin](https://github.com/ned4ded/sahalin);

Firstly, use proper declaration in main app.js files ([example](./app.js));

#### Strategies
1. [Locale Strategy](#local-strategy);

##### Local Strategy
[Local strategy](./local.js) - strategy for authenticating with a username and password; Local strategy combo examples lie in [local-combo](./local-combo/) folder;

[Github](https://github.com/jaredhanson/passport-local) for more information;

Installation:
``` bash
$ npm i -S passport.js passport-local

# dependencies
$ npm i -S express cookie-parser body-parser express-session

# combo
$ npm i -S bcrypt connect-ensure-login connect-flash
```
