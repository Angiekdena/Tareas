// Deberas realizar un semáforo utilizando JS.
// El semáforo deberá cambiar de luz de Verde a Amarilla y de Amarilla a Roja y luego de nuevo a Verde.
// Puedes mostrar la imagen del semáforo cambiando, hacer el cambio con console.log o con alert.
// Se debe respetar el orden de los colores:

// De rojo pasa a Verde.
// De amarillo puede pasar a Rojo.
// De Verde pasa a Amarillo.

const arreglo = ["#009900", "#ffd700", "#ff0000"];
let actual = 0;

function cambiarColor(inicial) {
  let color = arreglo[0];
  let elemento = document.getElementsByClassName("verde");

  if (inicial == 0) {
    actual = 1;
    document.getElementsByClassName("rojo")[0].style.backgroundColor = "rgb(255, 0, 0, 0.3)";
  } else if (inicial == 1) {
    actual = 2;
    elemento = document.getElementsByClassName("amarillo");
    document.getElementsByClassName("verde")[0].style.backgroundColor = "rgb(0, 153, 0, 0.3)";
  } else {
    actual = 0;
    elemento = document.getElementsByClassName("rojo");
    document.getElementsByClassName("amarillo")[0].style.backgroundColor = "rgb(255, 215, 0, 0.3)";
  }

  color = arreglo[inicial];

  elemento[0].style.backgroundColor = color;
}

setInterval(() => {
  cambiarColor(actual);
}, 3000);
