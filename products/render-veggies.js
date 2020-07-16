import { getCart, findById } from '../common/utils.js';
import veggieData from '../data/veggies.js';

export default function renderVeggies(veggie) {

    // creating vegetable list for html
    const liEl = document.createElement('li');
    const category = veggie.category;
    liEl.classList.add(category);
    const title = veggie.description;
    liEl.title = title;

    // adding images to each element
    const imgEl = document.createElement('img');
    imgEl.src = '../assets/' + veggie.image;
    imgEl.alt = veggie.name + ' tomato';
    liEl.append(imgEl);

    // add p element to contain the price and add button
    const p = document.createElement('p');
    p.className = 'price';

    const money = '$' + veggie.price.toFixed(2);

    // adds price text to rendered page
    p.textContent = money + ' ';

    // this is for the add button on the rendered page
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = veggie.id;
    button.addEventListener('click', () => {
        
        const cart = getCart();

        const veggieInCart = findById(cart, veggie.id);

        if (veggieInCart) {
            veggieInCart.quantity++; 
        } else {
            const newVeggie = {
                id: veggie.id,
                quantity: 1
            };

            cart.push(newVeggie);
        }
        console.log(cart);
        
        const stringCart = JSON.stringify(cart);
        localStorage.setItem('CART', stringCart);

        alert('1 ' + veggie.name + ' added to cart');
    });

    p.append(button);

    // nests the add button in the 'p' element so it appears on the same line
    liEl.append(p);

    return liEl;
}

