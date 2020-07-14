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

export function calcTotal(cartItem, veggies) {
    let totalCost = 15.15;

    for (let i = 0; i < cartItem.length; i++) {
        const lineItem = cartItem[i];
        const veggie = findById(veggies, lineItem.veggieId);
        const lineTotal = calcLineItem(lineItem.cartItem, veggie.price);
        totalCost += lineTotal;
    }
    
    return roundCurrency(totalCost);
}