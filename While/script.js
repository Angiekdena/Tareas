// // 1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

// let numero = parseInt(prompt("Introduzca un numero"));

// let contador = 1;

// while (contador <= numero) {
//   if (contador % 5 === 0) {
//     console.log(contador);
//   }
//   contador++;
// }

// 2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50,
//pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.

// let num1 = parseInt(prompt("Introduzca un numero entre 1 y 50"));

// let num2 = parseInt(prompt("Introduzca un numero entre 1 y 50"));

// let contador = 1;

// while (contador <= 50) {

//     if (contador === num1 || contador === num2) {
//         console.log(contador + " ¡Lotería!")
//     } else {
//         console.log(contador);
//     }
//     contador = contador + 1;
// }

// 3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo.
//Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla
//o en la consola.

// let arreglo = [];

// while (true) {
//   let numeros = prompt("Introduzca un numero, para terminar ingresa 0");
 
//   if (numeros == 0) {
//     break;
//   }

//   if (!isNaN(parseInt(numeros))) {
//     arreglo.push(numeros);
//   }
// }

// console.log(arreglo);


// 4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario
//no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.

// let arreglo = [];

// while (true) {
//   let letras = prompt("Introduzca letras o palabras, para terminar dejar vacio");
 
//   if (letras == "") {
//     break;
//   }

//   if (isNaN(parseInt(letras))) {
//     arreglo.push(letras);
//   }
// }
// console.log(arreglo.join());

// 5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje
//personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que 
//el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.


while (true) {
    let semana = prompt("Introduzca un día de la semana, ej: lunes, jueves, domingo, etc");

semana = semana.toUpperCase()

    if (semana == "LUNES") {
          alert("Lunes: Es lunes y no tenía nada que ponerme. Por eso me puse una gran sonrisa.");
        } else if (semana == "MARTES") {
          alert("Martes: Una semana feliz se consigue día a día.")
        }else if (semana == "MIERCOLES") {
          alert("Miercoles: Sonríe hoy más fuerte que ayer, que la alegría de un nuevo día te pertenece.")
        }else if (semana == "JUEVES") {
          alert("Jueves: Soy optimista… No parece muy útil ser cualquier otra cosa.")
        } else if (semana == "VIERNES") {
          alert("Viernes: Hoy tienes permiso de ir a Celebrar")
        }else if (semana == "SABADO") {
          alert("Sabado: Una semana feliz se consigue día a día.")
        } else if (semana == "DOMINGO") {
          alert("Domingo: Ve a descansar")
          break;
        } else {
         alert("El dia escogido no corresponde a ninguno de la semana")
        }

    }