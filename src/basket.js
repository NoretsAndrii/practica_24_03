import { totalProducts } from './main';

const basketList = document.querySelector('.basket-list');
console.log(totalProducts);

basketList.append(...totalProducts);
