/*Vamos a crear una funcion con una variable dentro de ella. y comprobaremos desde donde podemos acceder a la variable. */

function greeting() {
    let userName = 'Ana';
    console.log (userName);

    if (userName === 'Ana') {
        console.log(`Hello ${userName}`);
    }
}

greeting();

console.log(userName); /*A esta variable no podemos acceder fuera de la function. Por eso tenemos un function scope. o local scope*/