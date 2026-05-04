//1
const testTextContent = document.querySelector('.test-text');
testTextContent.innerHTML = "Привет, <b>мир!</b> Меня зовут <i>Алексей</i>.";
testTextContent.classList.add('test-text');
//2
let emailValue = document.getElementById('email');
emailValue.value = 'mail@mail.ru';
emailValue.readOnly = true;
let checkbox = document.getElementById('remember');
checkbox.checked = true;
const btn = document.querySelector('input[type=submit]');
btn.value = 'Войти';
//3
const link_wrapper = document.querySelector('.link_wrapper');
const link = document.createElement('a');
link_wrapper.append(link);
link.textContent = 'ссылка на сайт';
link.setAttribute('href', 'https://midis.ru/')
link.setAttribute('target','_blank');