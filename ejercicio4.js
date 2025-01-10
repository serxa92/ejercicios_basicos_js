//Dado el siguiente array:

const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

//4.1 - Saca a "Tendo" por consola atacando su posición.

console.log(aldeanos[3]);

//4.2 - Coloca en el último lugar de este array a "Cervasio".

aldeanos.push("Cervasio");


//4.3 - Cambia el primer elemento de este array por "Bambina".

aldeanos.unshift("Bambina");


//4.4 - Dale la vuelta a este array.
aldeanos.reverse();


//4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.

aldeanos.splice(4, 1, "Canela");

console.log(aldeanos);


//4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente

//solucion 1
console.log(aldeanos.slice(-1)[0]);
//solucion 2
console.log(aldeanos[aldeanos.length - 1])
