/* 1. Luke Skywalker cumple años:
 Modifica el siguiente código JavaScript para actualizar la edad de Luke Skywalker a 25 años.*/


 const jedi = {nombre: "Luke Skywalker", edad: 19};

// Tu código para cambiar la edad aquí...

jedi.edad = 20;

/*Imprimo la edad de Luke Skywalker*/

console.log("La edad de Luke Skywalker es: " + jedi.edad);

/*Imprimo el objeto jedi para verificar que lo ha cambiado*/

console.log(jedi);

/*2. Presentación al estilo Leia Organa:

- Crea tres variables con la siguiente información:

nombre: "Leia"
apellido: "Organa"
edad: 20

- Muestra un mensaje por consola que siga la siguiente estructura:

"Soy Leia Organa, tengo 20 años y soy una princesa de Alderaan."

- Utiliza la concatenación para ello.*/

/*Creo las variables con la información de Leia Organa*/

const nombre = "Leia";
const apellido = "Organa";
const edad = 20;

/*Muestro el mensaje por consola utilizando la concatenación*/

console.log("Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.");

/*3. Calculando el coste total de sables de luz:

- Obtén el precio total de dos sables de luz: "Shoto de Yoda" y "sable de Darth Vader".

- Imprime el resultado por consola utilizando console.log.*/

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

// Tu código para calcular el precio total aquí...

/*Calculo el precio total de los sables de luz*/

let precioTotal = sable1.precio + sable2.precio;

console.log("El precio total de los sables de luz es: " + precioTotal);

/*4. Actualizando el precio final de las naves:

- Modifica el valor de la variable global precioBaseGlobal a 25.000 créditos.

- Actualiza el precio final (precioFinal) de dos naves ("Ala-X" y "Halcón Milenario") sumando el valor de precioBaseGlobal a su precio base (precioBase).*/


let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable

/*cambio el valor de precioBaseGlobal a 25000*/

precioBaseGlobal = 25000;

/*Creo las naves con sus precios base y finales*/

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

// Tu código para actualizar el precio final de cada nave aquí...

/*Actualizo el precio final de cada nave sumando el precio base global a su precio base*/

nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

/*Imprimo el precio final de cada nave por consola*/

console.log("El precio final de la nave " + nave1.nombre + " es: " + nave1.precioFinal);
console.log("El precio final de la nave " + nave2.nombre + " es: " + nave2.precioFinal);