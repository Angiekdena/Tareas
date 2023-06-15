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

let helado = 50;
let oreo = 10;
let kitkat = 15;
let brownie = 20;

function sabor() {
  let topping;
  let seleccion = document.querySelector('input[name="status"]:checked');
  if (seleccion) {
    topping= seleccion.value;
    seleccion.checked = false;
  } else {
    alert("Debes seleccionar un items");
  }

  console.log(topping)

  if (topping == "oreo") {
    alert(
      `El topping de oreo cuesta 10 MXN. El valor a pagar es ${
        oreo + helado
      } MXN`
    );
  } else if (topping == "kitkat") {
    alert(
      `El topping de KitKat cuesta 15 MXN. El valor a pagar es ${
        kitkat + helado
      } MXN`
    );
  } else if (topping == "brownie") {
    alert(
      `El topping de brownie cuesta 20 MXN. El valor a pagar es ${
        brownie + helado
      } MXN`
    );
  } else if (topping == "sinTopping") {
    alert("El helado sin topping cuesta 50 MXN");
  }
}
