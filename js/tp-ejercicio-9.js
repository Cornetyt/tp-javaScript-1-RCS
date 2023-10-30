let frase = prompt("Escribí tu frase y se extraerán las vocales");

for (i = 0; i < frase.length; i++) {
  if (
    frase[i] === "a" ||
    frase[i] === "e" ||
    frase[i] === "i" ||
    frase[i] === "o" ||
    frase[i] === "u"
  ) {
    document.write(frase[i]);
  }
}
