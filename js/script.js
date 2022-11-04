const btn = document.querySelector('button');
const contenedor = document.querySelector('#app');
const servidor = 'https://pokeapi.co/api/v2/pokemon?limit=10'

let pokemones = [];

btn.addEventListener('click', function () {
 console.log('Se hizo click en el boton');
 const endPoint = servidor + 'pokemon';

 fetch(endPoint)
  .then(respuesta => respuesta.json())
  .then(respuestaJSON => {
   // pokemones = respuestaJSON.results;

   obtenerPokemones(respuestaJSON.results)
  })
})

//async await aqui
const obtenerPokemones = function (lista) {
 lista.forEach(pokemon => {
  fetch(pokemon.url)
   .then(res => res.json())
   .then(res => {
    pokemones.push(res);
    console.log("array pokemones" + pokemones)
   })
 })

 renderizar(pokemones)
}


function renderizar(lista) {
 console.log("Lista ", lista)
 let html = '<ul class="row justify-content-center">';

 lista.forEach(pokemon => {
  console.log(pokemon)
  html += `
        <li class="col-6 col-md-4 col-lg-3 px-3 py-3">
        
            <a href="detalles.html">
            <div class = "pokemones-items" >
                <img src="${pokemon.sprites.front_default}" alt="">
                <p>${pokemon.name}</p>
                </div>
            </a>
            
        </li>
        `
 })

 for (const indice in lista) {
  console.log('Hola mundo')
 }

 html += '</ul>';

 contenedor.innerHTML = html;
}