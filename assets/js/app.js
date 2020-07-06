// Variables
const listaTwetts = document.getElementById('lista-tweets');



// EventListeners
eventListeners();

function eventListeners() {
    //cuando se envía el formulario
    let formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', agregarTweet)


}


// Funciones

function agregarTweet(e) {
    e.preventDefault();
    // Leer el valor del textArea
    let tweetArea = document.querySelector('#tweetArea');
    const tweetText = tweetArea.value;
    console.log(tweetText);
    
    // Crear boton eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = "borrarTweet"
    botonBorrar.innerText = "X"

    // Crear elemento y añadirlo a la lista
    const li = document.createElement('li');
    li.innerText = tweetText;
    li.appendChild(botonBorrar);
    listaTwetts.appendChild(li);


    tweetArea.value = '';
}