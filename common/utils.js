export function findById(veggies, id) {
    //conditional statement to loop the array
    for (let i = 0; i < veggies.length; i++){
        const veggie = veggies[i];

            // checking id against veggies.id
        if (veggie.id === id) {
            return veggie;
        }
    }
    // returns null if nothing was found in the loop
    return null;
}

export function calcLineItem(quantity, price) {
    const amount = quantity * price;
    return roundCurrency(amount);
}

export function roundCurrency(price) {
    return Math.round(price * 100) / 100;
}

export function calcOrderTotal(cart, veggies) {
    let totalCost = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const veggie = findById(veggies, lineItem.id);
        const lineTotal = calcLineItem(lineItem.quantitiy, veggie.price);
        totalCost += lineTotal;
    }
    
    return roundCurrency(totalCost);
}


// took this function from the example code
export function usDollar(number) {
    return number.toLocalString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}