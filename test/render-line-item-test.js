import veggies from '../data/veggies.js';
import { findById } from '../common/utils.js';
import renderLineitem from '../cart/render-line-items.js';

const test = QUnit.test;

QUnit.module('Render Line');

test('should match static example', (assert) => {
    //Arrange
    //Set up arguments and expectations
    const lineItem = {
        id: 'tomatoes',
        quantity: 4
    };

    const tomatoes = findById(veggies, lineItem.id);
    const expected = '<tr><th>class="top-left">Veggies</th><th>Qty</th><th>Price</th><th>Total</th></tr>';

    //Act
    //Call the function being tested and set result to a const
    const dom = renderLineitem(lineItem, tomatoes);
    const html = dom.outerHTML;
    
    //Expect
    //Make assertions about what is expected versus the actual result
    assert.equal(html, expected);
});

    //
