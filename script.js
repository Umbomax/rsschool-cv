hljs.initHighlightingOnLoad();


let burgerMenu = document.querySelector(".burger-menu");

let changes  = document.querySelectorAll('.change-vilibility')

function burgerClick() {
  if (burgerMenu.classList.contains("burger-menu-active")) {
    burgerMenu.classList.remove("burger-menu-active");
  }else{
    burgerMenu.classList.add("burger-menu-active")
  }
}
burgerClick();

changes.forEach((change) => change.addEventListener("click", burgerClick));


console.log(`

Самооценка: 150/160 (отсутствует видео)

вёрстка валидная +10
- [x]вёрстка семантическая +20 (footer, header, main, time, summary, nav)
- [x]для оформления СV используются css-стили +10
 контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10
 вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10
- [x] есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. +10
- [x]на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10
- [x] контакты для связи и перечень навыков оформлены в виде списка ul > li +10
- [x]CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10
- [x]CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода может использоваться js-библиотека, например, highlight.js +10
- [x]CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10
- [x]CV выполнено на английском языке +10
- [x]выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10
- []есть видеорезюме автора CV на английском языке. Видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки. Продолжительность видео 3-5 минут (±15 секунд). В описание видео на YouTube добавлена ссылка на его транскрипцию на английском языке (например, в документе Google Docs).
- [x]дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) +10`)
