// Variables
const listaTwetts = document.getElementById('listaTweets');
let contador = 1;

// EventListeners
eventListeners();

function eventListeners() {
    // Cuando se envía el formulario
    let formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', agregarTweet)

    // Click en borrar Tweet
    listaTwetts.addEventListener('dblclick', borrarTweet);
}

// Funciones

function agregarTweet(e) {
    e.preventDefault();
    
    // Leer el valor del textArea
    let tweetArea = document.querySelector('#tweetArea');
    const tweetText = `Tweet ${contador}: ${tweetArea.value}`;
    
    // Crear boton eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = "borrarTweet";
    botonBorrar.id = "botoncito";
    botonBorrar.innerText = "X";

    // Crear elemento y añadirlo a la lista
    const li = document.createElement('li');
    li.innerText = tweetText;
    li.appendChild(botonBorrar);
    listaTwetts.appendChild(li);

    // Agregar tw al local storage
    almacenarTweet(tweetText);

    tweetArea.value = ``;
    contador += 2;
}

function borrarTweet(e) {
    e.preventDefault;
    if(e.target.classList.contains('borrarTweet')) {
        let tweetText = e.target.parentElement.innerText
        e.target.parentElement.remove();
        alert('Tweet eliminado');
    }
}

function almacenarTweet(tweet) {
    let tweets;
    
    // Agregar al localStorage
    localStorage.setItem('tweets', tweet);

}