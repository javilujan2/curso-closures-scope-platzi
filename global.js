// variables

var a; // estamos declarando la variable a

var b = 'b'; // esatmos declarando y asignando el valor de b (es la forma mas comun)

b = 'bb'; // estamos reasignando el valor de b

var a = 'aa'; //Estamos REDECLARANDO el valor de a


// Global Scope, cualquier varaible que se encuentre dentro del documento, pasa a ser variables globales. 

var fruit = 'apple';

function bestFruit () {
    console.log (fruit);
}

bestFruit();

