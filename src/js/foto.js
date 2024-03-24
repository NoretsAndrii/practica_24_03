import { fetchData } from './api';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallary = document.querySelector('.gallary');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  gallary.innerHTML = '';
  const search = form.elements.searchQuery.value.trim();
  fetchData(search).then(data => {
    if (data.results.length === 0)
      return iziToast.error({
        message: 'За вашим запитом нічого не знайдено',
        title: 'Error',
        position: 'topRight',
      });
    renderMarkup(data.results);
  });
  form.reset();
}

function renderMarkup(arr) {
  const markup = arr
    .map(
      elem => `<li>
    <img src="${elem.urls.small}" alt="${elem.description}">
</li>`
    )
    .join('');
  gallary.insertAdjacentHTML('beforeend', markup);
}
