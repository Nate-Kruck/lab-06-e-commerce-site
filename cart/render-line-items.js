import { usDollar } from '../common/utils.js';
//import renderVeggies from '../products/render-veggies.js';

function renderLineItem(lineItem, veggie) {
    const cartTr = document.createElement('tr');

    const veggieName = document.createElement('td');
    veggieName.className = 'top-left';
    veggieName.textContent = veggie.name;
    cartTr.append(veggieName);

    const quantityName = document.createElement('td');
    quantityName.textContent = lineItem.quantity;
    cartTr.append(quantityName);

    const priceName = document.createElement('td');
    priceName.textContent = usDollar(veggie.price);
    cartTr.append(priceName);

    const totalName = document.createElement('td');
    totalName.textContent = 'total-dollar';
    const totalPrice = lineItem.quantity * veggie.price;
    totalName.textContent = usDollar(totalPrice);
    cartTr.append(totalName);

    return cartTr;
}

export default renderLineItem;