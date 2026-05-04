/*Выбор элемента на странице.*/
//1.1 - Выбор по ID
let header = document.getElementById('title');
console.log(header);
//1.2 - Выбор по селектору
const container = document.querySelector('.container');
console.log(container);
//1.3 - Выбор по селектору (несколько)
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

/*Работа с контентом.*/
//2.1 Вывод в консоль
console.log(header.textContent); //текст
console.log(header.innerHTML); //текст с тегами для него
console.log(header.outerHTML); //весь элемент 
console.log(header.innerText); // то же, что и .textContent
console.log(header.outerText); // то же, что и .textContent
//2.2 Добавление на сайт
header.textContent = 'Новый заголовок <i class="bi bi-playstation"></i>'; //изменение текста (теги как html)
header.innerHTML = 'Новый заголовок <i class="bi bi-playstation"></i>'; //изменение html (теги как теги)
header.outerHTML = '<h3>Новый заголовок <i class="bi bi-playstation"></i></h3>'; // перезапись содержимого и тега

/*Работа с классами (class).*/
const h2 = document.querySelector('h2');
//3.1 Добавление
h2.classList.add('big');
h2.classList.add('purple');
//3.2 Удаление
h2.classList.remove('purple');
//3.3 Проверка наличия класса у элемента
console.log(h2.classList.contains('purple'));
//3.4 Переключение
for (let elem of paragraphs){
    elem.classList.toggle('text');
    /*if (elem.classList.contains('text')){
        elem.classList.remove('text');
    } else (
        elem.classList.add('text');
    )*/
}

/*Работа со стилями (style).*/
const btn = document.querySelector('input[type=submit]');
console.log(btn);
//4.1 Добавление
btn.style.color = 'blue';
btn.style.background = 'lime';
btn.style.fontSize = '24px';
btn.style.border = '1px solid red';

/*Работа с атрибутами*/
let link = document.querySelector('li:nth-child(1) a')
console.log(link);
//5.1 Считывание
console.log(link.getAttribute('href'));
//5.2 Установка/изменение
link.setAttribute('href', 'https://midis.ru/');
link.setAttribute('target','_blank');
//5.3 Удаление
btn.removeAttribute('style');

/*Создание нового элемента.*/
//6.1 Создание
const block = document.createElement('div');
block.classList.add('block');
block.innerHTML = "Новый блок";
//6.2 Добавление
container.append(block);
//6.3 Добавление из папки
const image = document.createElement('img');
image.setAttribute('src','img/1.webp');
image.alt = 'Церебелла'; //Ещё один способ задать атрибут
image.style.width='150px';
//container.append(image); //в конец
//conteiner.prepend(image); //в начало
//container.before(image); //перед блоком
container.after(image); //после блока

/*Выбор потомков элементов.*/
//7.1 Все параграфы
const lorems = document.querySelectorAll('p');
console.log(lorems);
//7.2 Только дочерние параграфы
const content = document.querySelector('.content');
const loremsInContent = content.querySelectorAll('p');
console.log(loremsInContent);

/*Выбор предков.*/
let form = btn.closest('form'); //поиск ближайшего предка по селектору
form.style.border = '2px dotted orange';

/*Обработка событий (нажатие кнопки).*/
btn.addEventListener('click', function(event){
    event.preventDefault(); //отмена поведения по умолчанию (запрет на обновление страницы)
    const body = document.querySelector('body');
    body.style.background = 'darkblue';
    body.style.color = 'white';
    const pass = document.querySelector('input[type=password]').value;
    console.log(pass);
});

/*Удаление тегов.*/
//10.1 Живая коллекция
const texts = document.querySelector('.content').childNodes;
console.log(texts);
const p1 = document.querySelector('p'); //выбор первого параграфа в элементе
p1.outerHTML = ""; //удаление тега - первого параграфа
console.log(paragraphs);