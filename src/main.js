import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);
//console.log (data.films[0].poster)

const prueba = document.getElementById("prueba")
//prueba.innerHTML = ` 
//<div class= "prueba"> ${data.films[0].director} ${data.films[0].title}</div>
//<img src="${data.films[0].poster}" />`

let cards = document.getElementById("cards")
document.getElementById("pantalla1").style.visibility = "visible";
document.getElementById("pantalla2").style.visibility = "hidden";


data.films.forEach(element => {

    let newDiv = document.createElement("div")
    newDiv.className = "card"
    cards.appendChild(newDiv)

    newDiv.innerHTML += `
    <div><img id="poster" src="${element.poster}"/></div>
    <div>
    <article id="title" class="title"> Título: ${element.title} </article>
    <article id="director"> Director: ${element.director} </article>
    <article id="releaseDate"> Año: ${element.releaseDate} </article>
    <article id="rtScore"> Puntaje: ${element.rt_score}</article>
    <article id="description"> Descripción ${element.description}</article>
    </div>
     `

})

let inicio = document.getElementById("peliculas");
inicio.addEventListener("click", Mostrarpantalla2);
function Mostrarpantalla2() {
    document.getElementById("pantalla1").style.visibility = "hidden"
    document.getElementById("pantalla2").style.visibility = "visible"
}

//console.log (data.films.forEach(element => console.log(element)))