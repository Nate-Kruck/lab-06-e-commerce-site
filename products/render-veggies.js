function renderVeggies(veggie) {

    // creating vegetable list for html
    const li = document.createElement('li');
    li.className = veggie.category;
    li.title = veggie.description;

    // adding images to each element
    const img = document.createElement('img');
    img.src = '../assets/' + veggie.image;
    img.alt = veggie.name + ' image';
    li.appendChild(img);

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
    p.appendChild(button);

    // nests the add button in the 'p' element so it appears on the same line
    li.appendChild(p);

    return li;
}

export default renderVeggies;