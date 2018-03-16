# Connect-ensure-login
This middleware ensures that a user is logged in. If a request is received that is unauthenticated, the request will be redirected to a login page. The URL will be saved in the session, so the user can be conveniently returned to the page that was originally requested.

More info on [Github](https://github.com/jaredhanson/connect-ensure-login);

## Installation
``` bash
$ npm i -S connect-ensure-login
```

## Example
Usage example with Express and passport.js you would find [here](https://github.com/ned4ded/snippets/tree/master/libs/passport.js/local-combo/connect-ensure-login.js);
