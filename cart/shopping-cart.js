//import cart from '../data/cart.js';
import veggieData from '../data/veggies.js';
import { findById, calcOrderTotal, toUSD, getCart } from '../common/utils.js';
import renderLineItem from './render-line-items.js';

const tableBody = document.querySelector('#insert-rows');
const totalCostInput = document.getElementById('#total-cost');
const orderButton = document.getElementById('#order-button');


const cart = getCart();

for (let i = 0; i < cart.length; i++) {
    
    const lineItem = cart[i];
    const veggies = findById(veggieData, lineItem.id);
    const dom = renderLineItem(lineItem, veggies);

    tableBody.append(dom);
}

const totalCost = calcOrderTotal(cart, veggieData);
totalCostInput.textContent = toUSD(totalCost);

// empty cart
if (cart.length === 0) {

    orderButton.disabled = true;
}


// took this code from the example code
else {
    orderButton.addEventListener('click', () => {
        localStorage.removeItem('CART');
        alert('Order placed:\n' + JSON.stringify(cart, true, 2));
        window.location = '../';
    });

}
