const btn = document.querySelector('button');
const contenedor = document.querySelector('#app');
const titulo = document.querySelector('h1');
const servidor = 'https://pokeapi.co/api/v2/pokemon?limit=10'
let url = location.search;
let id = location.search.split('=')[1];


btn.addEventListener('click', () => {
 location.href = 'index.html';
})


let pokemones
console.log('id ' + id);
const endPoint = servidor + 'pokemones/' + id;

fetch(endPoint)
 .then(respuesta => respuesta.json())
 .then(respuestaJSON => {
  // pokemones = respuestaJSON.results;

  // obtenerPokemones(respuestaJSON.results);
  pokemones = respuestaJSON.results;
  renderizar(pokemones)

 })

// async await aqui
// const obtenerPokemones = function (lista) {
//  lista.forEach(pokemon => {
//   fetch(pokemon.url)
//    .then(res => res.json())
//    .then(res => {
//     pokemones.push(res);
//     console.log("array pokemones" + pokemones)
//    })
//  })}




function renderizar(pokemon) {
 console.log("Lista ", pokemon)
 let html = '<div class="row">';
 console.log(pokemon)
 html += `
        <li class="col-6 px-3 py-3">
        
            
            <div class="detalle" >
                <img src="${pokemon.sprites.front_default}" alt="">
                <p>${pokemon.name}</p>
                </div>
            
            
        </li>
        `;



 html += '</div>';

 contenedor.innerHTML = html;
}