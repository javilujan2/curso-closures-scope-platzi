/*Las variables definidas dentro de un bloque, solo pueden ser utilizadas dentro de ese bloque. */

/* Para este concepto en particular vamos a poder utilizar let y const, pero para acceder desde todos los contextos que necesitemos usaremos var*/
//Aclaramos que var, practicamente está en desuso. Y por ello debemos de dejar de utilizarla.

function fruits() {
    if (true) {
        var fruit1 = 'apple'; //function scope
        let fruit2 = 'kiwi'; //block scope
        const fruit3 = 'bannana'; //block scope
    }

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
}

fruits();

function otherFruits() {
    if (true) {
        var fruit1 = 'strawberry';
        let fruit2 = 'pear'; 
        const fruit3 = 'watermelon'; 
        console.log(fruit2); /*De esta manera, como estan dentro del mismo bloque (entre dos llaves {}), si que podremos acceder a las variables let y const */
        console.log(fruit3);
    }
    console.log(fruit1);
}

otherFruits();