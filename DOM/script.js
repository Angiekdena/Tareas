/* La empresa perfumes latinos premiará a su empleado del mes (quien más dinero recaude en ventas) con una comisión y requiere un programa que almacene y muestre:
Qué cantidad de cada productos vendió cada vendedor.
La suma total de dinero recolectada por cada vendedor.
Nombre del empleado del mes, en caso de haber vendido lo mismo indicar que fue un empate.
La empresa actualmente cuenta con los siguientes 4 productos que tienen los siguientes nombres y precios:
Aqua: 200 usd.
Emoción: 180 usd.
Alegría: 160 usd.
Frescura: 150 usd.
Y dos vendedores Juana y Pedro.
Notas.
Los resultados deben visualizarse en consola y deben activarse a través de botones.
El programa debe validar y mostrar un mensaje de error si no se ingresa un valor numérico.(Opcional).
Debe hacer uso de funciones, arrays y estructuras de control para resolver el ejercicio.
Realizar el ejercicio por medio de cualquiera de los métodos de salidas en JS (console, alert o document). */

let vendedor;
let producto;

let ventas = [];

function registrar() {
  let selectElement = document.getElementById("vendedor");

  let selectedIndex = selectElement.selectedIndex;

  let vendedor = selectElement.options[selectedIndex];

  let vendedorValue = vendedor.value;
  selectElement.selectedIndex = 0;

  selectElement = document.getElementById("producto");

  selectedIndex = selectElement.selectedIndex;

  producto = selectElement.options[selectedIndex];

  productoValue = producto.value;
  selectedText = producto.text;
  selectElement.selectedIndex = 0;

  let input = document.getElementById("cantidad");
  let cantidad = parseInt(input.value);

  if (cantidad < 1) {
    alert("Debes ingresar una cantidad valida");
    return false;
  }
  input.value = "";

  let venta = {
    vendedor: vendedorValue,
    producto: productoValue,
    cantidad: cantidad,
    ventaTotal: valorVenta(productoValue, cantidad),
  };
  ventas.push(venta);
  console.log(ventas);

  llenarTabla();
}

function valorVenta(producto, cantidad) {
  let valorUnitario = 0;

  if (producto === "Aqua") {
    valorUnitario = 200;
  } else if (producto === "Emocion") {
    valorUnitario = 180;
  } else if (producto === "Alegria") {
    valorUnitario = 160;
  } else if (producto === "Frescura") {
    valorUnitario = 150;
  }

  return valorUnitario * cantidad;
}

function llenarTabla() {
  let data = "";

  for (index = 0; index < ventas.length; index++) {
    data += `<tr><td>${ventas[index].vendedor}</td><td>${ventas[index].producto}</td><td>${ventas[index].cantidad}</td><td>${ventas[index].ventaTotal}</td></tr>`;
  }

  let tabla = document.getElementById("tabla");
  tabla.innerHTML = data;
}

function empleadoMes() {
  if (ventas && ventas.length > 0) {
    let ventasPorVendedor = ventas.reduce(function (acumulado, ventaActual) {
      if (acumulado[ventaActual.vendedor]) {
        acumulado[ventaActual.vendedor] += ventaActual.ventaTotal;
      } else {
        acumulado[ventaActual.vendedor] = ventaActual.ventaTotal;
      }
      return acumulado;
    }, {});

    let ventasArray = Object.keys(ventasPorVendedor).map(function (vendedor) {
      return {
        vendedor: vendedor,
        ventaTotal: ventasPorVendedor[vendedor],
      };
    });

    ventasArray.sort(function (a, b) {
      return b.ventaTotal - a.ventaTotal;
    });
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El vendedor del mes es ${ventasArray[0].vendedor} con un total de ${ventasArray[0].ventaTotal} dolares`;
  } else {
    alert("No hay informacion para procesar");
  }
}
