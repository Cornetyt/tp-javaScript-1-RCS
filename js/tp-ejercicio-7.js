let numeroUno = parseInt(prompt("Ingrese el primer número"));
let numeroDos = parseInt(prompt("Ingrese el segundo número"));
let numeroTres = parseInt(prompt("Ingrese el tercer número"));

if (numeroUno > numeroDos && numeroUno > numeroTres) {
  alert("El " + numeroUno + " es el número más grande");
} else if (numeroDos > numeroUno && numeroDos > numeroTres) {
  alert("El " + numeroDos + " es el número más grande");
} else if (numeroTres > numeroUno && numeroTres > numeroDos) {
  alert("El " + numeroTres + " es el número más grande");
} else if ((numeroUno == numeroDos) == numeroTres) {
  alert("Los tres números son iguales");
}
