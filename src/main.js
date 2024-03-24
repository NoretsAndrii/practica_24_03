// Створіть годинник, який відображає поточний реальний час
// і оновлюється кожну секунду.Виведіть час у форматі
// "години:хвилини:секунди" на веб - сторінці.  Поряд з годинником
// потріно відобразити поточну дату.

// const clock = document.querySelector('#clock');

// function updateClock() {
//   const date = new Date();
//   const hours = String(date.getHours()).padStart(2, '0');
//   const minutes = String(date.getMinutes()).padStart(2, '0');
//   const seconds = String(date.getSeconds()).padStart(2, '0');
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const data = String(date.getDate()).padStart(2, '0');
//   clock.textContent = `${hours}:${minutes}:${seconds} ${year}/${month}/${data}`;
// }

// setInterval(updateClock, 1000);

// Посилання на API https://unsplash.com/documentation
// Отримати дані з API по ключовому слову і відрендерити галерею зображень
// Параметри запиту зібрати за допомогою SearchParams

import './js/api';
import './js/foto';
