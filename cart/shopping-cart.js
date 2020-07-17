//import cart from '../data/cart.js';
import veggieData from '../data/veggies.js';
import { findById, getCart, calcOrderTotal } from '../common/utils.js';
import renderLineItem from './render-line-items.js';

const tableBody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total');

// What is the difference between querySelector and getElementById? 
const orderButton = document.querySelector('button');
//const totalCostInput = document.getElementById('#total-cost');


const cart = getCart();

for (let i = 0; i < cart.length; i++) {
    
    const lineItem = cart[i];
    const veggies = findById(veggieData, lineItem.id);
    const dom = renderLineItem(lineItem, veggies);
    
    tableBody.append(dom);
}

const totalCost = calcOrderTotal(cart, veggieData);
orderTotalCell.textContent = '$ ' + Number(totalCost);

//


// empty cart
if (cart.length === 0) {
    
    orderButton.disabled = true;
}

// took this code from the example code
else {
    orderButton.addEventListener('click', () => {
        alert('Thanks for supporting our farm!' + (cart, true, ''));
        localStorage.removeItem('CART');
        window.location = '../index.html';
    });

}
