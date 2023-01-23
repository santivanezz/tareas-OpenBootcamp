// Crea un archivo llamado objetos.js que contenga las siguientes líneas
// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
// - Una variable que obtenga tu edad a partir del objeto anterior
// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const datosPersonales = {
  nombre: "Sergio",
  apellido: "Santivanez",
  edad: 27,
  altura: 1.71,
  eresDesarrolador: true,
};

let edad = datosPersonales.edad;

console.log(edad);

const datos = [
  {
    nombre: "Sergio",
    apellido: "Santivanez",
    edad1: 23,
    altura: 1.71,
    eresDesarrolador: true,
  },
  {
    nombre: "Diego",
    apellido: "Hernani",
    edad1: 25,
    altura: 1.6,
    eresDesarrolador: false,
  },
  {
    nombre: "Cristiano",
    apellido: "Ronaldo",
    edad1: 46,
    altura: 1.85,
    eresDesarrolador: false,
  },
];

datos.sort((a, b) => b.edad1 - a.edad1);
console.log(datos);
