// IMPORT MODULES under test here:
import renderVeggies from '../products/render-veggies.js';
import { findById, calcLineItem, calcOrderTotal } from '../common/utils.js';
import veggies from '../data/veggies.js';
import cart from '../data/cart.js';

const test = QUnit.test;

QUnit.module('Render Veggies');

test('should match static example', (assert) => {
    //Arrange
    // Set up your arguments and expectations
    const cherryTom = {
        id: 'cherry-tom',
        name: 'cherry',
        image: 'cherry.jpg',
        description: 'A small, juicy treat',
        category: 'confused-fruit',
        price: 2.00,
        cost: 1.00
    };
    
    const expected = '<li class="confused-fruit" title="A small, juicy treat"><img src="../assets/cherry.jpg" alt="cherry tomato"><p class="price">$2.00 <button value="cherry-tom">Add</button></p></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderVeggies(cherryTom);
    const html = dom.outerHTML;
    //Expect
    // Make assertions about what is expected versus the actual result
    assert.equal(html, expected);
    
});

test('find the product id', (assert) => {
    //Arrange
    const veggieId = 'tomatoes';
    const expected = 'Cherry Tomato';

    //Act
    const veggieFound = findById(veggies, veggieId);

    //Assert
    assert.ok(veggieFound);
    assert.equal(veggieFound.name, expected);
});


test('calculate the total by multiplying quantity and price for veggie', (assert) => {

    //Arrange
    const quantity = 10;
    const price = 2.50;
    const expected = 25;

    //Act
    const total = calcLineItem(quantity, price);

    //Assert
    assert.equal(total, expected);
});

test('this should calculate order total', assert => {
    
    const expected = 15.15;

    const totalCost = calcOrderTotal(cart, veggies);

    assert.equal(totalCost, expected);
});









