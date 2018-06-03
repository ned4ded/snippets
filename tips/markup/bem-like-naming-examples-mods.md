# BEM Naming Examples
[Основная статья про названия](./bem-like-naming.md).

## Название блоков

## Название элементов

## Названия модификаторов


 _Модификация общего отображения:_
  - ключ - `view`;
  - значения:
    - `action`,
    - `etc`;

``` html
<button type="button" name="button" class="button button--view--action"></button>
```
_Модификация отображения по типу кнопки:_
- ключ - `type`;
- значения:
  - `submit`,
  - `link`,
  - `dropdown`,
  - `etc`.

``` html
<button type="submit" name="button" class="button button--type--submit"></button>

<a href="#" type="submit" name="button" class="button button--type--link"></a>

```

_Модификация отображения по размеру:_
- ключ - `size`;
- значения:
  - `xs`,
  - `sm`,
  - `md`,
  - `lg`,
  - `xl`.

``` html
<button type="submit" name="button" class="button button--size--sm"></button>
```

_Модификация отображения по используемой теме:_
- ключ - `theme`;
- значения:
  - `islands`,
  - `sandstorm`,
  - `etc`.

``` html
<button type="submit" name="button" class="button button--theme--sandstorm"></button>
```

_Модификация отображения по семантическому значению блока:_
- ключ - `#{some_name}`;
- значения - `#{some_sub_name}`;

``` html
<a href="//www.google.com" class="icon icon--socials--google"></a>
```
[More example](./semantic-block-naming.md) on this topic;

_Модификация отображения по расположению в потоке:_
- ключ - `order`;
- значения:
  - `first`,
  - `last`,
  - `even`,
  - `etc`.

``` html
<p class="text text--order--first"></p>
<p class="text"></p>
<p class="text"></p>
```
