// Variables
const listaTwetts = document.getElementById('listaTweets');

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
    
    //Leer contador
    let contador = obtenerContador();

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
    contador += 1;
    localStorage.setItem('contador', contador);
}

function obtenerContador(){
    if(localStorage.getItem('contador') === null) {
        localStorage.setItem('contador', 1);
        return 1
    } else {
        return Number(localStorage.getItem('contador'));
    }
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
    tweets = obtenerTweets();
    // Añadir el nuevo tweet
    tweets.push(tweet);
    
    //Convertimos de string a arreglo
    tweetsString = JSON.stringify(tweets)

    // Agregar al localStorage
    localStorage.setItem('tweets', tweetsString);

}

function obtenerTweets() {
    let tweets;
    // Revistamos los valores en ls
    if(localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        // LS solo guarda string, JSON lo pasa a arreglo
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets
}