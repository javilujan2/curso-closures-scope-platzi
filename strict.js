/*El modo estricto es una funcionalidad que le permite al motor de JavaScript cambiar la manera en que ejecuta el código. En este modo, se reduce las cosas que podemos hacer, esto es bueno porque permite manejar errores que son poco perceptibles o que el motor de JavaScript sobreentiende y ayuda a su compilación para corregirlos.*/

pi = 3.1416;
console.log(pi);

'use strict'
pi = 3.1416;
console.log(pi); //En este caso nos devolveria error, porque pi no esta declarada, solo asignada.

function myFunction() {
    return pi = 3.1416;
}

console.log(myFunction())