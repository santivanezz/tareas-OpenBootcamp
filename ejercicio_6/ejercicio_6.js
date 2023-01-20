// Crea un archivo JS que contenga las siguientes líneas
// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
// - Modifica la lista de la compra y añádele "Aceite de Girasol"
// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
///////////////////////////////////////////////////////////////
const listaCompra = ["leche", "huevos", "mantequilla", "arroz", "carne"];
const listaCompraV2 = listaCompra.push("Aceite de Girasol");
console.log(listaCompra);
const listaCompraV3 = listaCompra.pop(5);
console.log(listaCompra);
////////////////////////////////////////////////////////////////
const peliculasFav = [
  {
    Titulo: "Superman",
    Director: "George",
    Fecha: new Date("01-10-2016"),
  },
  {
    Titulo: "Lobo WallStreet",
    Director: "WaltDisney",
    Fecha: new Date("05-04-1999"),
  },
  {
    Titulo: "Batman",
    Director: "DC",
    Fecha: new Date("04-03-2001"),
  },
];

const newPeliculas = peliculasFav.filter(
  (obj) => obj.Fecha > new Date("01-01-2010")
);
console.log(newPeliculas);

////////////////////////////////////////////////////////
const directores = peliculasFav.map(function (element) {
  return element.Director;
});
console.log(directores);
////////////////////////////////////////////////////////
const peliculas = peliculasFav.map(function (element) {
  return element.Titulo;
});
console.log(peliculas);

///////////////////////////////////////////////////////
const primerConcat = directores.concat(peliculas);

console.log(primerConcat);

//////////////////////////////////////////////////////
const segConcat = new Array(...directores, ...peliculas);

console.log(segConcat);
//////////////////////////////////////////////

//                      GRACIAS OPEN BOOTCAMP
