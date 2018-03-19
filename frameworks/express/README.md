# Express
Web framework for Node.js, [official site](http://expressjs.com/), [API docs](http://expressjs.com/en/4x/api.html).

Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

## Installation
``` bash
  $ npm install express --save
```

## Middleware
Look in [middleware folder](./middleware);

- [connect-ensure-login](./middleware/connect-ensure-login): Login session ensuring middleware;
- [flash](./middleware/flash): Flash message middleware;

## Routing
Routing examples and project structure presented in [routing folder](./routing); Such approach for organizing routes could provide more controllable code maintenance.
