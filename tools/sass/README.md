# SASS

Sass — это метаязык на основе CSS, предназначенный для увеличения уровня абстракции CSS кода и упрощения файлов каскадных таблиц стилей.

Существует в двух вариациях: sass, scss. Отличаются друг от друга уровнем абстракции синтаксиса, sass - без скобок, базируется на отступах, scss - со скобками:

``` CSS
/* SASS */
nav
  ul
    margin: 0
    padding: 0
    list-style: none

  li
    display: inline-block

  a
    display: block
    padding: 6px 12px
    text-decoration: none

/* SCSS */
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

## Миксины
- Миксины для брейкпоинтов адаптивных экранов:
  - [Mobile-first example](./mixins/breakpoints-mobile-first.scss) (used bootstrap breakpoints);
- Миксин для возврата `background-image: linear-gradient()` с замыканием: [gradient image closure example](./gradients.md);
- Миксин для создания одинаковых аттрибутов разным классам:
  - [Each passed class](./mixins/each-passed-class.scss);
  - [Each passed class with postfix](./mixins/each-passed-class.scss);

## Functions
- Функция для возврата линейного градиента с замыканием: [gradient image closure example](./gradients.md);
