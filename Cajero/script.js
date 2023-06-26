let datos = [
  { nombre: "Angie", password: "1234", saldo: 200 },
  { nombre: "Luis", password: "5678", saldo: 290 },
  { nombre: "Emma", password: "9034", saldo: 67 },
];

let passwordDigitado = "";
let cuentaSeleccionada = "";

function escogerUsuario(usuario) {
  let texto = document.getElementById("textoMostrar");
  texto.innerText = `Bienvenido ${usuario}, por favor digita tu password`;
  cuentaSeleccionada = usuario;
}

function recibePassword(numero) {
  console.log(numero);
  let password = document.getElementById("password");
  password.innerText += `*`;
  passwordDigitado += numero;
  console.log(passwordDigitado);
}

function validarPassword() {
  let usuario = datos.find((user) => user.nombre === cuentaSeleccionada);
  
  if(usuario){
    let texto = document.getElementById("textoMostrar");

    if(passwordDigitado === usuario.password){
        texto.innerText = `Ingreso Exitoso`;
    } else {
        texto.innerText = `Password Incorrecto, digite nuevamente`;
    }
  }
}
