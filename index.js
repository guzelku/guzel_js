'use strict';
/**Восстановить порядок книг */
const books = document.querySelectorAll('.book'),
li = document.querySelectorAll('li');

console.log(books);
console.log(li);

books[1].after(books[0]);
books[5].after(books[2]);
books[4].after(books[3]);

li[9].after(li[2]);
li[3].after(li[6]);
li[6].after(li[8]);

li[50].after(li[48]);
li[47].after(li[55]);
li[53].after(li[51]);

const body = document.querySelector('body');
body.style.backgroundImage='url(./image/you-dont-know-js.jpg)';

const adv = document.querySelector('.adv');
adv.remove('adv');

const a = document.querySelectorAll('h2 a');
a[2].textContent = 'Книга 3. this и Прототипы Объектов';

const newElement = document.createElement('li');
newElement.textContent = 'Глава 8: За пределами ES6';



li[25].append(newElement);
