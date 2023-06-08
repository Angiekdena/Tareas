// 1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.

var numerosAleatorios = [];

for (var i = 0; i < 10; i++) {
  var numeroAleatorio = Math.floor(Math.random() * 100);
  numerosAleatorios.push(numeroAleatorio);
}

console.log(numerosAleatorios);

// 2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.

let palabras = prompt("Debe ingresar un string con varias palabras separadas por coma ");

let resultado = palabras.split(",");

console.log(resultado);

// 3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.

let orden = [10, 40, 30, 20, 15, 5];

orden.sort(function (a, b) {
  return a - b;
});

console.log(orden);

var mayor = Math.max(...orden);
console.log(mayor);

var menor = Math.min(...orden);
console.log(menor);
