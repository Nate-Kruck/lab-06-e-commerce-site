import cart from '../data/cart.js';
import veggieData from '../data/veggies.js';
import { findById, calcOrderTotal } from '../common/utils.js';
import renderLineItem from './render-line-items.js';

const tableBody = document.querySelector('#insert-rows');
const totalCostInput = document.querySelector('#total-cost');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const veggies = findById(veggieData, lineItem.id);
    const dom = renderLineItem(lineItem, veggies);

    tableBody.append(dom);
}

const totalCost = calcOrderTotal(cart, veggieData);
totalCostInput.textContent = `$${totalCost}.00`;