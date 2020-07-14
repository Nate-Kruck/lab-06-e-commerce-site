// IMPORT MODULES under test here:
import renderVeggies from '../products/render-veggies.js';

const test = QUnit.test;

QUnit.module('Render Veggies');

test('should match static example', assert => {
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







/* 

<li class="confused-fruit" title="A small, juicy treat.">
<img src="../assets/cherry.jpg" alt="Cherry Tomato image">
<p class="price">$2.00 <button value="undefined">Add</button>
</p> 
</li>

*/