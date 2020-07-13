import renderVeggies from './render-veggies.js';
import veggies from '../data/veggies.js';

const list = document.getElementById('veggies');

for (let i = 0; i < veggies.length; i++) {
    const veggie = veggies[i];
    const dom = renderVeggies(veggie);
    list.appendChild(dom);
}