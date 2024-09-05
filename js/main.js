let precioTotal = 0;
let unidadesTotales = 0;
let nombre = "";
let miProducto, cantidadProducto, cantidadCuotas, productoSeleccionado;


const saludo = () => {
    while (nombre === "") {
        nombre = prompt("¡Bienvenido(a)! Ingresa tu nombre completo").trim().toUpperCase();
        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
        } else {
            alert("Hola " + nombre + " :)");
        }
    }
}

let productos = [
    { nombre: "pikachu", precio: 1000, stock: 3 },
    { nombre: "stormtrooper", precio: 2000, stock: 3 },
    { nombre: "harry potter", precio: 3000, stock: 3 },
]

const producto = () => {
    let productoValido = false;

    while (!productoValido) {
        miProducto = prompt("Escoge el producto que deseas comprar: \npikachu \nstormtrooper \nharry potter").toLowerCase();
        productoSeleccionado = productos.find(articulo => articulo.nombre.toLowerCase() === miProducto);
        if (productoSeleccionado) {
            alert(`Tu elección es ${productoSeleccionado.nombre} \nEl precio es $${productoSeleccionado.precio}`);
            productoValido = true;
        } else {
            alert("No contamos con este producto por el momento.");
        }
    }
}

const cantidad = () => {
    let cantidadValida = false;

    while (!cantidadValida) {
        cantidadProducto = parseInt(prompt(`Ingresa la cantidad de unidades que quieres comprar de ${productoSeleccionado.nombre} (1-${productoSeleccionado.stock}):`));
        if (cantidadProducto >= 1 && cantidadProducto <= productoSeleccionado.stock) {
            alert(`Elegiste ${cantidadProducto} ${productoSeleccionado.nombre}`);
            unidadesTotales += cantidadProducto;
            precioTotal += productoSeleccionado.precio * cantidadProducto;
            cantidadValida = true;
        } else {
            alert(`No contamos con suficiente stock. Solo hay ${productoSeleccionado.stock} unidades disponibles.`);
        }
    }
}

const cuotas = () => {
    let opciones = [1, 2, 3];
    let cuotaValida = false;

    while (!cuotaValida) {
        cantidadCuotas = parseInt(prompt(`Puedes pagar hasta en 3 cuotas sin interés. Elige: ${opciones.join(', ')}`));
        if (opciones.includes(cantidadCuotas)) {
            alert(`Pagarás tu compra en ${cantidadCuotas} cuota(s).`);
            cuotaValida = true;
        } else {
            alert("Número de cuotas incorrecto.");
        }
    }
}

const resultado = () => {
    let montoPorCuota = (precioTotal / cantidadCuotas).toFixed(2);
    alert(`${nombre}, el monto a pagar es $${montoPorCuota} por cada cuota.`);

    let seguirComprando = confirm("¿Quieres seguir comprando?");
    if (seguirComprando) {
        producto();
        cantidad();
        cuotas();
        resultado();
    } else {
        alert(`¡Gracias por visitar la página! El total de tu compra es $${precioTotal} por ${unidadesTotales} producto(s).`);
    }
}

saludo();
producto();
cantidad();
cuotas();
resultado();
