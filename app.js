function guardarNombre() {
const nombre = document.getElementById("nombreGuardar").value.trim();
if (nombre === "") {
        alert("Por favor ingrese el nombre");
        return;
}

const listaNombres = JSON.parse(localStorage.getItem("nombre")) || [];
listaNombres.push(nombre);
localStorage.setItem("nombre", JSON.stringify(listaNombres));
document.getElementById("nombreGuardar").value = "";
document.getElementById("resultadoGuardar").textContent =
    `Nombre guardado: ${nombre} · Total nombres: ${listaNombres.length}`;
}

function mostrarNombres() {
const resultado = document.getElementById("resultadoMostrar");
const listaNombres = JSON.parse(localStorage.getItem("nombre")) || [];
resultado.replaceChildren();

if (listaNombres.length === 0) {
    resultado.textContent = "Todavía no hay nombres guardados.";
        return;
    }

const lista = document.createElement("ol");
lista.className = "result-list";
listaNombres.forEach(nombre => {
    const elemento = document.createElement("li");
    elemento.textContent = nombre;
    lista.appendChild(elemento);
});
resultado.appendChild(lista);
}

function editarNombre() {
const campoPosicion = document.getElementById("posicionEditar");
const campoNombre = document.getElementById("nuevoNombre");
const posicionIngresada = campoPosicion.value;
const nuevoNombre = campoNombre.value.trim();
const listaNombres = JSON.parse(localStorage.getItem("nombre")) || [];

if (posicionIngresada === "" || nuevoNombre === "") {
        alert("Complete todos los campos");
        return;
    }

const posicion = Number(posicionIngresada) - 1;
if (!Number.isInteger(posicion) || posicion < 0 || posicion >= listaNombres.length) {
    alert("La posición no existe");
    return;
}

listaNombres[posicion] = nuevoNombre;
localStorage.setItem("nombre", JSON.stringify(listaNombres));
document.getElementById("resultadoEditar").textContent = "Nombre actualizado correctamente.";
campoPosicion.value = "";
campoNombre.value = "";

if (document.getElementById("resultadoMostrar").querySelector("ol")) {
    mostrarNombres();
}
}

function eliminarNombres() {
    localStorage.removeItem("nombre");
document.getElementById("resultadoEliminar").textContent = "Se eliminaron todos los nombres.";
document.getElementById("resultadoMostrar").textContent = "";
}

function guardarMascota() {
const mascota = {
        nombre: document.getElementById("mascota").value.trim(),
        raza: document.getElementById("raza").value.trim(),
        edad: Number(document.getElementById("edad").value)
    };

    localStorage.setItem("mascota", JSON.stringify(mascota));
    document.getElementById("resultadoMascota").textContent =
    "Mascota guardada correctamente.";
}


