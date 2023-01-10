/* Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)

*/

const array = [
  "Sergio",
  27,
  false,
  new Date("december 01 1995"),
  {
    titulo: "Principios",
    autor: "Ray Dalio",
    fecha: 2018,
    url: "raydalio.com",
  },
];
console.log(array);
