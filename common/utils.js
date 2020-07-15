export function findById(someArray, someId) {
    let match = null;
    //conditional statement to loop the array
    for (let i = 0; i < someArray.length; i++){
        if (someId === someArray[i].id) {
            match = someArray[i];
        }
    }

    // returns null if nothing was found in the loop
    return match;

}

export function calcLineItem(quantity, price) {
    const total = quantity * price;
    return Math.round(total * 100) / 100;
}



export function calcOrderTotal(cart, veggies) {
    let totalCost = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const veggie = findById(veggies, lineItem.id);
        const lineTotal = calcLineItem(lineItem.quantity, veggie.price);
        totalCost += lineTotal;
    }
    
    return Math.round(totalCost);
}


