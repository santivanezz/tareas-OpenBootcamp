// Crea un archivo llamado fechas.js que contenga las siguientes líneas
// - La fecha de hoy
// - La fecha de tu nacimiento
// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
// - Una variable que contenga el día de tu nacimiento
// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let hoy = new Date();
console.log(hoy);

let nacimiento = new Date("December 1,1995");
console.log(nacimiento);

let comparacion = hoy.getTime > nacimiento.getTime;
console.log(comparacion);

let diaNac = nacimiento.getDate();
console.log(diaNac);

let mesNac = nacimiento.getMonth() + 1;
console.log(mesNac);

let anoNac = nacimiento.getFullYear();
console.log(anoNac);
