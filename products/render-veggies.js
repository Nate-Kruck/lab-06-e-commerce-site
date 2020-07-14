export function renderVeggies(veggie) {

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
    button.value = veggie.code;
    p.append(button);

    // nests the add button in the 'p' element so it appears on the same line
    liEl.append(p);

    return liEl;
}

export default renderVeggies;