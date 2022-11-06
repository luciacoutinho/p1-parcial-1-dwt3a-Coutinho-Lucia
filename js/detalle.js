let urlData = new URL(location.href) // TODO Obtengo los datos de la URL
console.log(new URL(location.href))
let pokemonId = urlData.searchParams.get('id') // TODO De la URL le digo que me traiga lo que se encuentra en el id
console.log(urlData.searchParams.get("id"))

// Pregunto si tengo un valor valido
if (!(pokemonId >= 0)) {
 pokemonId = 0;
}
console.log('Id validado:', pokemonId)

// Genero la url
const servidor = 'https://pokeapi.co/api/v2/pokemon/' + pokemonId;

// Obtengo los datos
fetch(servidor)
 .then(res => res.json())
 .then(res => {
  console.log(res);
  document.getElementById('app').innerHTML = `
     <div class="titulo">
      <h2>${res.name}</h2>
     </div>
     <div class="w-100 text-center">
      <img src="${res.sprites.front_default}" alt="Pokemon"
       class="img-fluid">
     </div>
     <div class="atributos">
      <p><strong>Experiencia base:</strong> ${res.base_experience}</p>
      <p><strong>Altura: </strong> ${res.height}</p >
      <p><strong>Peso:</strong> ${res.weight}</p>
      <p style="text-transform: capitalize"><strong>Especie: </strong> ${res.species.name}</p>
      <p><strong>Atributo 5:</strong> Atributo</p>

     </div>

            
        `
 })

// Genero la URL

// const btn = document.querySelector('button');
// const contenedor = document.querySelector('#app');
// const titulo = document.querySelector('h1');
// let url = location.search;
// let id = location.search.split('=')[1];
//
//
// btn.addEventListener('click', () => {
//  location.href = 'index.html';
// })
//
//
// let pokemones
// console.log('id ' + id);
// const endPoint = servidor + 'pokemones/' + id;
//
// fetch(endPoint)
//  .then(respuesta => respuesta.json())
//  .then(respuestaJSON => {
//   // pokemones = respuestaJSON.results;
//
//   // obtenerPokemones(respuestaJSON.results);
//   pokemones = respuestaJSON.results;
//   renderizar(pokemones)
//
//  })
//
// // async await aqui
// // const obtenerPokemones = function (lista) {
// //  lista.forEach(pokemon => {
// //   fetch(pokemon.url)
// //    .then(res => res.json())
// //    .then(res => {
// //     pokemones.push(res);
// //     console.log("array pokemones" + pokemones)
// //    })
// //  })}
//
//
//
//
// function renderizar(pokemon) {
//  console.log("Lista ", pokemon)
//  let html = '<div class="row">';
//  console.log(pokemon)
//  html += `
//         <li class="col-6 px-3 py-3">
//
//
//             <div class="detalle" >
//                 <img src="${pokemon.sprites.front_default}" alt="">
//                 <p>${pokemon.name}</p>
//                 </div>
//
//
//         </li>
//         `;
//
//
//
//  html += '</div>';
//
//  contenedor.innerHTML = html;
// }