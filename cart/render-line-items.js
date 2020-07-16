export default function renderLineItem(lineItem, veggie) {
    const tableRow = document.createElement('tr');

    
    const veggieName = document.createElement('td');
    veggieName.classList.add('top-left');
    veggieName.textContent = veggie.name;
    tableRow.append(veggieName);
 
    const imgEl = document.createElement('img');
    imgEl.src = '../assets/' + veggie.image;
    imgEl.alt = veggie.name + ' tomato';
    tableRow.append(imgEl);

    const quantityData = document.createElement('td');
    quantityData.textContent = lineItem.quantity;
    tableRow.append(quantityData);

    const priceData = document.createElement('td');
    priceData.textContent = `$${veggie.price.toFixed(2)}`;
    tableRow.append(priceData);

    const totalName = document.createElement('td');
    totalName.classList.add('total-dollar');
    totalName.textContent = '$' + Number(lineItem.quantity * veggie.price).toFixed(2);
    tableRow.append(totalName);

    return tableRow;
}

// creating this commentso I can create a dev branch