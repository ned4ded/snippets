Список приоритетного контента и стилей, которые составляют ядро сайта / приложения.

Кор:
То, что будет работать без js.

Улучшения:
JS, геолокация, тачь ивенты, продвинутый сисс, веб шрифты, виджеты и со он идет вне кора.
Веб шрифты загружаются сначала в хранилище, потом рендерятся.

Остальное:
После все оставшееся - аналитика, реклама, инйо контент, который не нужен юзерам.

Мор https://www.youtube.com/watch?v=_VgwsxuxXqE&t=2032s

Примерный флоу: загрузка кора, на домконтентреди улучшения, на виндоу.длоад остальное.

Разделение запросов к файлам в зависимости от современнсоти браузера? (HTML4 and HTML5 Browsers)
detect:
```JavaScript
if(
  'querySelector' in document &&
  'localStorage' in window &&
  'addEventListener' in window &&
) {
  // HTML5 Browser Detect
}
```

Посылка ассинхронного запроса
<script src="enhanced.js" async defer></scrip>

Critical css inline (first 1000px), full css on load
Avoid JS libs? jQuery->JavaScript
Store Webfont on localStorage + cookies
