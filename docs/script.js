let datos = [
  { nombre: "Angie", password: "1234", saldo: 200 },
  { nombre: "Luis", password: "5678", saldo: 290 },
  { nombre: "Emma", password: "9034", saldo: 67 },
];

let passwordDigitado = "";
let cuentaSeleccionada = "";
let opcionSeleccionada = 0;//Opcion 1 es password, opcion 2 - consultar saldo, opcion 3 - recibir monto, opcion 4 - retirar monto.

function escogerUsuario(usuario) {
  cambiarTextoPrincipal(
    "textoMostrar",
    `Bienvenido ${usuario}, por favor digita tu password`
  );
  cuentaSeleccionada = usuario;
  opcionSeleccionada = 1;
}

function recibeNumero(numero) {
  if (opcionSeleccionada === 1) {
    cambiarTextoPrincipal("password", "*", "si");
    passwordDigitado += numero;
  } else if (opcionSeleccionada === 3) {
    cambiarTextoPrincipal("password", numero, "si");
  } else if (opcionSeleccionada === 4) {
    cambiarTextoPrincipal("password", numero, "si");
  }
}

function enter() {
  let usuario = datos.find((user) => user.nombre === cuentaSeleccionada);

  if (opcionSeleccionada === 1) {
    if (usuario) {
      if (passwordDigitado === usuario.password) {
        cambiarTextoPrincipal("textoMostrar", `Escoge una opcion:`);
        cambiarTextoPrincipal("password", "");
        document.getElementById("opciones").hidden = false;
      } else {
        cambiarTextoPrincipal(
          "textoMostrar",
          `Password Incorrecto, digite nuevamente:`
        );
        password.innerText = "";
        passwordDigitado = "";
      }
    }
  } else if (opcionSeleccionada === 3) {
    let montoIngresado = parseInt(
      document.getElementById("password").innerText
    );
    if (montoIngresado + usuario.saldo >= 990) {
      cambiarTextoPrincipal(
        "textoMostrar",
        `No te podemos recibir $${montoIngresado}, porque supera el tope de cuenta de $990.`
      );
      cambiarTextoPrincipal("password", "");
    } else {
      usuario.saldo = montoIngresado + usuario.saldo;
      cambiarTextoPrincipal(
        "textoMostrar",
        `El monto ingresaro fue de $${montoIngresado}, su saldo actualmente es de $${usuario.saldo}`
      );
      cambiarTextoPrincipal("password", "");
    }
  } else if (opcionSeleccionada === 4) {
    let retirarMonto = parseInt(document.getElementById("password").innerText);
    if (usuario.saldo - retirarMonto <= 10) {
      cambiarTextoPrincipal(
        "textoMostrar",
        `No puedes retirar $${retirarMonto}, tope minimo de la cuenta debe ser de $10.`
      );
      cambiarTextoPrincipal("password", "");
    } else {
      usuario.saldo = usuario.saldo - retirarMonto;
      cambiarTextoPrincipal(
        "textoMostrar",
        `El monto retirado fue de $${retirarMonto}, su saldo actualmente es de $${usuario.saldo}`
      );
      cambiarTextoPrincipal("password", "");
    }
  }
}

function escogerOpcion(seleccion) {
  let usuario = datos.find((user) => user.nombre === cuentaSeleccionada);

  if (seleccion === 1) {
    opcionSeleccionada = 2;
    cambiarTextoPrincipal(
      "textoMostrar",
      `El saldo de su cuenta actualmente es de $${usuario.saldo}`
    );
    document.getElementById("opciones").hidden = true;
  } else if (seleccion === 2) {
    opcionSeleccionada = 3;
    document.getElementById("opciones").hidden = true;
    cambiarTextoPrincipal("textoMostrar", `Digite el monto a ingresar:`);
  } else if (seleccion === 3) {
    opcionSeleccionada = 4;
    document.getElementById("opciones").hidden = true;
    cambiarTextoPrincipal("textoMostrar", `Digite el monto a retirar:`);
  }
}

function cambiarTextoPrincipal(elemento, textoRecibido, concatenar) {
  let texto = document.getElementById(elemento);

  if (concatenar) {
    texto.innerText += textoRecibido;
  } else {
    texto.innerText = textoRecibido;
  }
}

function volver() {
  let usuario = datos.find((user) => user.nombre === cuentaSeleccionada);
  if (usuario) {
    if (passwordDigitado === usuario.password) {
      cambiarTextoPrincipal("textoMostrar", `Escoge una opcion:`);
      cambiarTextoPrincipal("password", "");
      document.getElementById("opciones").hidden = false;
    }
  }
}

function cancelar() {
  cambiarTextoPrincipal("textoMostrar", "Escoge un usuario");
  passwordDigitado = "";
  cuentaSeleccionada = "";
  opcionSeleccionada = 0;
  document.getElementById("opciones").hidden = true;
}

function borrar() {
  
  if(opcionSeleccionada===1){
    passwordDigitado = passwordDigitado.slice(0,-1);
    let valor= document.getElementById("password").innerText;
    valor = valor.slice(0,-1);
    cambiarTextoPrincipal("password", valor);
  }else if(opcionSeleccionada===3){
    let montoIngresado = document.getElementById("password").innerText;
    montoIngresado = montoIngresado.slice(0,-1);
    cambiarTextoPrincipal("password", montoIngresado);
  }else if(opcionSeleccionada===4){
    let retirarMonto = document.getElementById("password").innerText;
    retirarMonto = retirarMonto.slice(0,-1);
    cambiarTextoPrincipal("password", retirarMonto);
  }
  
}

