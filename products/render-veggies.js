function renderVeggies(veggie) {
    const li = document.createElement('li');
    li.className = veggie.category;
    li.title = veggie.description;

    const img = document.createElement('img');
    img.src = '../assets/' + veggie.image;
    img.alt = veggie.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    p.textContent = 'price ';

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = veggie.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderVeggies;