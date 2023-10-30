let numero = parseInt(prompt("ingrese el número que quieras ingresar"));

if (numero % 2 == 0) {
  alert("el " + numero + " si es divisible por 2");
} else if (numero % 3 == 0) {
  alert("el " + numero + " es divisible por 3");
} else if (numero % 5 == 0) {
  alert("el " + numero + " es divisible por 5");
} else if (numero % 7 == 0) {
  alert("el " + numero + " es divisible por 7");
} else {
  alert("el " + numero + " no es divisible ni por 2, 3, 5, 7");
}
