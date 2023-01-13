// - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break*/
let uno = 1;
let x = 10;
while (x > 0) {
  console.log(x);
  uno *= x;
  x--;
  if (x === uno) {
    break;
  }
}

console.log(uno);
