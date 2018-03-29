# Lazy Initialization

 Lazy initialization is the tactic of delaying the creation of an object, the calculation of a value, or some other expensive process until the first time it is needed. It is a kind of [lazy evaluation](https://en.wikipedia.org/wiki/Lazy_evaluation) that refers specifically to the instantiation of objects or other resources.

 ## Combinations:
 - with [fluent-interface pattern](../fluent-interface): each step of calculation is pushed in "operations" array and would be executed when the final data extraction method will be called. [See example](./combo/fluent-interface.js);

 ## Optimization:
 - Memoization:  store a calculated value in `this.memo` property, when execution is called once, this property will be 'memorized' by the object (in other words, will be saved dynamically in the object) and will be presented instead of executing all the evaluations again ([example](https://github.com/ned4ded/snippets/tree/master/optimization/program/memoization));
