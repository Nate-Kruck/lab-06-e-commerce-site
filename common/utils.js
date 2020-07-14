export default function findById(veggies, id) {
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