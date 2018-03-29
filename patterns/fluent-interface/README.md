# Fluent Interface

The design pattern of API implementation, using [Method Chaining](https://en.wikipedia.org/wiki/Method_chaining) for invoking multiple method calls of one class instance and/or object (depending on language). Differs from Method Chaining with semantic qualities, for example:

``` javascript
  // That's the example of Method Chaining
  SomeObject.setFoo(1).setBar(2).setBaz(3);
```

``` javascript
  // That's the example of Fluent Interface
  SQLBuilder.select('foo')
    .from('bar')
    .where('foo = ?', 42)
    .prepare();
```
[The basic example](./example.js) of fluent interface design has been made using imperative approach and the **object** itself appears to be a **mutable** one.

Methods could be called one by one or in-chain on this object but the whole collection will be the same one and it will be changed, mutated after each step. After first and the others steps you **couldn't extract original input** data. That works badly while you are operating with data collections, but it **could be useful**, for instance, in interactive front-end practices, when your manipulated object is some kind of event-handler or a managing cascade above some interactive feature.

**Mutable version** of this design pattern **returns** the link to object itself (**this**);

## Combinations with other patterns:
- Immutable interface: each step of multiple call returns new instance of the object, see [example](./combo/immutable.js);

- Lazy initialization: each step of calculation is pushed in "operations" array and would be executed when the final data extraction method will be called. [See example](../lazy-initialization/combo/fluent-interface.js);
