const btn = document.querySelector('button');
const contenedor = document.querySelector('#app');
const servidor = 'https://pokeapi.co/api/v2/pokemon'

let pokemones = []

btn.addEventListener('click', function () {
    fetch(servidor)
        .then(res => res.json())
        .then(async res => { // TODO Le digo que esta función es async para poder usar await
            // Recorro todos los pokemones.
            // console.log("Resultados obtenidos de la API: ", res.results)
            // console.log("Pokemones cuando recién obtenemos la respuesta: ", pokemones)
            for (const pokemon of res.results) {
                // Espero hasta que la petición se complete
                let pokemonData = await ObtenerPokemonData(pokemon.url) // Con await, espero a que la solicitud me de una respuesta en lugar de seguir de largo en el código
                // console.log("Pokemon data:", pokemonData);
                // Cuando ya tengo los datos, lo guardo
                pokemones.push(pokemonData)
            }
            // console.log("Pokemones con todas las respuestas");
            // console.table(pokemones);

            // Como ya tengo mis pokemones, Ejecuto la función Mostrar para listarlos
            Mostrar(pokemones);
        })
})
const ObtenerPokemonData = function (url) {
    // Retorno lo que me devuelve la URL de cada Pokemon
    return fetch(url).then(res => res.json());
}


function Mostrar(pokemones) {
    let html = ''; // Declaro variable que va a tener la lista de los pokemones

    // Genero la lista de pokemones
    html += '<ul class="row justify-content-center">';

    for (const pokemon of pokemones) {
        html += `
       <li class="col-6 col-md-4 col-lg-3 px-3 py-3">
        
            <a href="detalles.html?id=${pokemon.id}" data-pokeid="${pokemon.id}">
            <div class = "pokemones-items" >
                <img src="${pokemon.sprites.front_default}" alt="">
                <p>${pokemon.name}</p>
                </div>
            </a>
            
        </li>
        `
    }

    html += '</ul>';
    contenedor.innerHTML = html; // Agrego al HTMl el listado

    // agregarEventos()
}

const agregarEventos = (e) => {
    let enlaces = document.querySelectorAll('a');

    // console.log(enlaces)

    enlaces.forEach((a, i) => {
        // console.log(a, i)
        a.addEventListener('click', async (e) => {
            // console.log(e);
            e.preventDefault()
            let pokemonId = parseInt(a.getAttribute('data-pokeid'));

            console.log(pokemonId)
        })
    })
}