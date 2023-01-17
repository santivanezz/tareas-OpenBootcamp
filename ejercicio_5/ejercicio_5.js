/*Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga tu altura en centímetros (entero)

- Una variable que contenga tu altura en metros (número de coma flotante)

- Una variable que contenga tu peso en kilogramos (número de coma flotante)

- Una variable que contenga tu altura en metros redondeada hacia arriba

- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript*/

let alturaCem = 170;
let alturaMet = 1.73;
let kilogramos = 88.5;
let alturaRed = Math.ceil(alturaMet);
let pesoRed = Math.floor(kilogramos);
let maxNum = Number.MAX_VALUE + 1 === Number.MAX_VALUE;

console.log(alturaCem);
console.log(alturaMet);
console.log(kilogramos);
console.log(alturaRed);
console.log(pesoRed);
console.log(maxNum);
