//creamos un array vacío para guardar los nombres de los amigos
let listaDeAmigos = [];

// Función que se ejecuta al hacer click en el botón "Agregar amigo"
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();
// Si el nombre está vacío, se acciona un alert
    if (nombre === '') {
        alert('por favor, ingrese un nombre');
        return;
    }
// Agrega el nombre a la lista de amigos
    listaDeAmigos.push(nombre);
// Limpiar la caja de texto
    input.value = '';
    actualizarlista();
}
//funcion para actualizar la lista de amigos
function actualizarlista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < listaDeAmigos.length; i++) {
        lista.innerHTML += `<li>${listaDeAmigos[i]}</li>`;

    }

}
