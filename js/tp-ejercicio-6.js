let numeroUno = parseInt(prompt("ingrese el primer número"));
let numeroDos = parseInt(prompt("ingrese el segundo número"));
if (numeroUno > numeroDos) {
  alert(numeroUno + " es el número más grande");
} else if (numeroUno < numeroDos) {
  alert(numeroDos + " es el número más grande");
} else if (numeroUno == numeroDos) {
  alert("los dos numeros son iguales");
}
