# snippets
Table of Contents:

[Frontend](#frontend):
  - [User interface](#ui):
    1. [Carousel](#carousel);
    2. [Autocomplete](#autocomplete);
    3. [Tabs](#tabs);
    4. [Accordion](#accordion);
    5. [Canvas](#canvas);
    6. [Other](#us-other);
  - [Tips](#tips);

[Backend](#backend):
1. [Authentication](#authentication);
1. [Data parcing](#data-parcing);
1. [Logic Other](#other);
1. [Model](#model);

[Practices](#practices);


## Frontend
### UI
#### Carousel
- [Slick](/libs/slick/) - Carousel-only library:
  - Responsive;
  - Swipe;
  - JQuery;
- [Bootstrap carousel](/frameworks/bootstrap/carousel/) - Bootstrap 4 Feature:
  - Bootstrap 4;
  - jQuery;
  - One slide only;

#### Autocomplete
- Ajax [Autocomplete](/libs/AutoComplete/) for jQuery allows you to easily create autocomplete/autosuggest boxes for text input fields:
  - AJAX;
  - JQuery;

#### Tabs
- [Bootstrap tabs](/frameworks/bootstrap/tabs/):
  - jQuery
  - Bootstrap 4

#### Accordion
- [Bootstrap accordion](/frameworks/bootstrap/accordion/):
  - jQuery
  - Bootstrap 4

#### Canvas
- [Fabric.js](/libs/fabric/):
  - Native JS;
  - Powerful canvas animations;
  - Easel (mylib for paint-like application);

### UI Other
- Lightweight fullscreen presentation slider with animation and AJAX async slides loading; Небольшой файл разработан для бесконечного слайдера, который использовался в проекте [сахалин](https://github.com/ned4ded/sahalin/blob/master/src/scripts/carousel.js); Работает по след принципу: выгружает 3 изображения, при каждом следующем изображении обновляет массив. Работал с бд, используя id.


### Tips
- [Browser Specific Hacks](/tips/browser-hacks/)

## Backend
### Logic
#### Authentication
- [Passport.js](/libs/passport.js/) - Authentication library. Require:
  - Express;
  - Express-session;
  - Body-parser;
- [Bcrypt](/libs/bcrypt/) - Password hashing;
- [Connect-ensure-login](/frameworks/express/connect-ensure-login/) - Check if user is logged in. Require:
  - Express;
  - Express-session;
  - Body-parser;

#### Data parsing
- [Formidable](/libs/formidable/) - A Node.js module for parsing form data, especially file uploads:
  - Express / Node.js;

#### Other
- [Flash](/frameworks/express/flash/) - Flash messages with cookies.
### Model
- [Mongoose](/frameworks/mongoose/);

## Practices
- JS bilateral animation: code snippet [example](/practices/JS-bilateral-animation) of organizing forward and backward animation with callbacks:
    - jQuery;
