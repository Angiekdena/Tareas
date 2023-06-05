// 1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en
// caso de contestar sí, responder “Ciertamente”, en caso de contestar no,
// responder: “No te creo”.

// let respuestaEjercicio1 = prompt("Eres bellisimo/a?");

// if (respuestaEjercicio1 === "si"){
// console.log("Ciertamente");
// } else if (respuestaEjercicio1 === "no"){
// console.log("No te creo");
// }

// 2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x número no es divisible entre 2”

// let variableText = prompt("Escribe un numero");
// let variableNumero = parseFloat(variableText);

// if (variableNumero % 2 === 0){
// alert("x número es divisible entre 2");
// } else {
//     alert("x número no es divisible entre 2");
// }

// 3. Crear un programa que determine si un número introducido en un Prompt
// es par o no, la respuesta será mostrada en un Alert.

// let variablePar = parseInt(prompt("Escribe un numero"));

// if (variablePar % 2 === 0){
// alert("Es un numero par");
// } else {
// alert("No es un numero par");
// }

// 4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir
// "Ganaste un premio", en caso contrario mostrar el número y el mensaje
// “Lo sentimos, sigue participando”

// let numeroCliente = parseInt(prompt("Cual es tu numero de cliente?"));

// if (numeroCliente === 1000) {
//   alert("Ganaste un Premio");
// } else {
//   alert("Lo sentimos, sigue participando");
// }

// 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es
// menor. No considerar el caso en que ambos números son iguales.

// let varN1 = prompt("Ingrese un numero")
// let varN2 = prompt("Ingrese otro numero")

// if (parseFloat(varN1) < parseFloat(varN2)) {
//     alert(varN1 + " Es el menor.")
// } else {
//     alert(varN2 + " Es el menor.")
// }

// 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es
// el número mayor. Considerar el caso en que 2 números sean iguales.

// let varN1 = prompt("Ingrese un numero");
// let varN2 = prompt("Ingrese otro numero");
// if (parseFloat(varN1) === parseFloat(varN2)) {
//   varN2 = prompt("Numero repetido Ingrese uno nuevo");
// }

// let varN3 = prompt("Ingrese el tercer numero");
// if (
//   parseFloat(varN3) === parseFloat(varN1) ||
//   parseFloat(varN3) === parseFloat(varN2)
// ) {
//   varN3 = prompt("Ingrese otro numero, hay numeros repetidos");
// }
// if (
//   parseFloat(varN1) > parseFloat(varN2) &&
//   parseFloat(varN1) > parseFloat(varN3)
// ) {
//   alert(varN1 + " Es el mayor.");
// } else if (
//   parseFloat(varN2) > parseFloat(varN1) &&
//   parseFloat(varN2) > parseFloat(varN3)
// ) {
//   alert(varN2 + " Es el mayor.");
// } else {'
//   alert(varN3 + " Es el mayor.");
// }

// 7. Requerir al usuario que ingrese un día de la semana e imprimir un
// mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje
// diferente si es sábado o domingo. Si el día ingresado no es ninguno de
// esos, imprimir otro mensaje.

// let diaSemana = prompt("Escoge un dia de la semana: 1. Lunes, 2. Martes, 3. Miercoles, 4. Jueves, 5. Viernes, 6. Sabado, 7. Domingo")

// if (diaSemana == 1) {
//   alert("Lunes: Es lunes y no tenía nada que ponerme. Por eso me puse una gran sonrisa.");
// } else if (diaSemana == 2) {
//   alert("Martes: Una semana feliz se consigue día a día.")
// }else if (diaSemana == 3) {
//   alert("Miercoles: Sonríe hoy más fuerte que ayer, que la alegría de un nuevo día te pertenece.")
// }else if (diaSemana == 4) {
//   alert("Jueves: Soy optimista… No parece muy útil ser cualquier otra cosa.")
// } else if (diaSemana == 5) {
//   alert("Viernes: Hoy tienes permiso de ir a Celebrar")
// }else if (diaSemana == 6) {
//   alert("Sabado: Una semana feliz se consigue día a día.")
// } else if (diaSemana == 7) {
//   alert("Domingo: Recuerda que debes ir a tu encuentro con el señor")
// } else {
//  alert("El dia escogido no corresponde a ninguno de la semana")
// }

// 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe
// comprobar que el número efectivamente esté en ese rango, si no lo está
// imprima un mensaje de error. Si lo está, imprima “reprobado” si la
// calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por
// último, “excelente” si es 10.

// let variableText = prompt("Por favor califique el servicio de 1 a 10");
// let calificacion = parseFloat(variableText);

// if (calificacion < 6) {
//     alert("Reprobado");
//   } else if (calificacion >5 && calificacion <9) {
//     alert("Regular")
//   } else if (calificacion == 9) {
//     alert("Bien")
//   } else if (calificacion == 10) {
//     alert("Excelente")
//   } else {
//     alert("La Calificacion no esta dentro del rango")
//   }

// 9. Escribe un programa que responda a un usuario que quiere comprar un
// helado en una conocida marca de comida rápida cuánto le costará en
// función del topping que elija.
// ● El helado sin topping cuesta 50 MXN.
// ● El topping de oreo cuesta 10 MXN.
// ● El topping de KitKat cuesta 15 MXN.
// ● El topping de brownie cuesta 20 MXN.
// En caso de no disponer del topping solicitado por el usuario, el programa
// le indicará “no tenemos este topping, lo sentimos.” y a continuación le
// informará el precio del helado sin ningún topping.

// let helado = 50
// let oreo = 10
// let kitkat = 15
// let brownie = 20
// let topping = prompt("Eliga un topping para su helado: 1. Oreo 2. KitKat 3. Brownie");

// if (topping == 1) {
//   alert(`El topping de oreo cuesta 10 MXN. El valor a pagar es ${oreo+helado} MXN`);
// } else if (topping == 2) {
//   alert(`El topping de KitKat cuesta 15 MXN. El valor a pagar es ${kitkat+helado} MXN`)
// } else if (topping == 3) {
//   alert(`El topping de brownie cuesta 20 MXN. El valor a pagar es ${brownie+helado} MXN`)
// } else {
//   alert("No tenemos este topping, lo sentimos. El helado sin topping cuesta 50 MXN")
// }

// 10. Un conocido portal de educación en tecnología está ofreciendo
// programas para aprender a desarrollar aplicaciones. Escribe un programa
// que le indique a la persona interesada cuánto deberá pagar
// mensualmente de acuerdo a la opción elegida.
// El programa educativo contempla 3 diferentes niveles, cada uno con su
// costo mensual:
// ● Course: $4999 MXN
// ● Carrera $3999 MXN
// ● Master: $2999 MXN
// Adicionalmente preguntar si cuenta con alguna beca y aplicar el
// descuento correspondiente al precio final.
// ● Beca Facebook: 20% de descuento.
// ● Beca Google: 15% de descuento.
// ● Beca Jesua: 50% de descuento.
// Finalmente, además del precio mensual con descuento, indicar al usuario
// cuánto gastaría en total por el curso elegido, tomando en cuenta las
// siguientes duraciones:
// ● Course: 2 meses
// ● Carrera 6 meses
// ● Master: 12 meses

// let course = 4999;
// let carrera = 3999;
// let master = 2999;
// let facebook = 0.2;
// let google = 0.15;
// let jesua = 0.5;
// let valor = 0;
// let beca = 0;
// let valorFinal = 0
// let duracion = 0

// let programa = prompt(
//   "Eliga el programa de su interes: 1. Course 2. Carrera 3. Master"
// );
// let descuento = prompt(
//   "Eliga la beca con que cuenta: 1. Facebbok 2. Google 3. Jesua 4. No aplica"
// );

// if (programa == 1) {
//   valor = course;
//   duracion = 2;
// } else if (programa == 2) {
//   valor = carrera;
//   duracion = 6;
// } else if (programa == 3) {
//   valor = master;
//   duracion = 12;
// }

// if (descuento == 1) {
//   beca = facebook;
// } else if (descuento == 2) {
//   beca = google;
// } else if (descuento == 3) {
//   beca = jesua;
// }

// valorFinal = valor - (valor * beca)

// alert(`El valor a pagar mensualemente es $${valor} MXN, se aplica un descuento del ${beca*100}%, y una duracion de ${duracion} meses; el valor final a pagar $${valorFinal*duracion} MXN`);

// 11.Realizar un programa que ayude a calcular el total a pagar de acuerdo a la
// distancia recorrida por un vehículo con cargo extra por los litros
// consumidos, tomando en consideración lo siguiente:
// Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto”
// ha de ser 0.10 y si es “autobús” 0.5.
// Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo
// total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al
// total. Considere qué:
// total a pagar = (precio kilometro x kms recorridos) + extra por litros
// consumidos

let coche = 0.20;
let moto = 0.10;
let autobus = 0.5;
let valor = 0
let extra = 0

let vehiculo = prompt(
  "Eliga el tipo de Vehiculo: 1. Coche 2. Moto 3. Autobus"
);
let kilometros = parseInt(prompt(
  "Indique la cantidad de kilometros recorridos:"
));

if (vehiculo == 1) {
  valor = coche;
} else if (vehiculo == 2) {
  valor = moto;
} else if (vehiculo == 3) {
  valor = autobus;
}

if (kilometros < 101) {
  extra = 5
} else {
  extra = 10
}

alert(`El valor total a pagar es$${parseFloat(valor*kilometros+extra).toFixed(2)} MXN`);