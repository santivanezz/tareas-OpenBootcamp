//  factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
const dato = 10;
let r = 1;
for (let i = dato; i > 0; i--) {
  console.log(i);
  r = r * i;
}
console.log(r);

// 10!=10 * (10-1)
// 10*9*8*7*6*5*4*3*2*1
