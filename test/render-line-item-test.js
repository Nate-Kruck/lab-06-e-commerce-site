import veggieData from '../data/veggies.js';
import { findById } from '../common/utils.js';
import renderLineitem from '../cart/render-line-items.js';

const test = QUnit.test;

QUnit.module('Render Line');

test('should match static example number 2', (assert) => {
    //Arrange
    //Set up arguments and expectations
    const lineItem = {
        id: 'tomatoes',
        quantity: 4
    };

    const tomatoes = findById(veggieData, lineItem.id);
    const expected = '<tr><td class="align-left">Cherry Tomato</td><img src="../assets/cherry.jpg" alt="Cherry Tomato tomato"><td>4</td><td>$2.00</td><td class="total-dollar">$8.00</td></tr>';

    //Act
    //Call the function being tested and set result to a const
    const dom = renderLineitem(lineItem, tomatoes);
    const html = dom.outerHTML;
    
    //Expect
    //Make assertions about what is expected versus the actual result
    assert.equal(html, expected);
});

