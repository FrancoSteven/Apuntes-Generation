// Referencias al DOM
const contenedor = document.getElementById("pokedex");
const agregarBtn = document.getElementById("agregarBtn");
const quitarBtn = document.getElementById("quitarBtn");

let contadorPokemon = 1; // Empezamos desde el ID 1

// Función para obtener datos de la PokéAPI
async function obtenerPokemon(id) {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const datos = await respuesta.json();

    return {
        nombre: datos.name,
        imagen: datos.sprites.other["official-artwork"].front_default,
        tipo: datos.types.map(t => t.type.name).join(", "),
        experiencia: datos.base_experience
    };
}

// Función para crear la carta con Bootstrap
function crearCarta(pokemon) {
    const div = document.createElement("div");
    div.classList.add("col");

    div.innerHTML = `
    <div class="card h-100 shadow-sm">
      <img src="${pokemon.imagen}" class="card-img-top bg-white" style="object-fit: contain; height: 200px;" alt="${pokemon.nombre}">
      <div class="card-body">
        <h5 class="card-title text-capitalize">${pokemon.nombre}</h5>
        <p class="card-text"><strong>Tipo:</strong> ${pokemon.tipo}</p>
        <p class="card-text"><strong>Experiencia:</strong> ${pokemon.experiencia}</p>
      </div>
    </div>
  `;

    return div;
}

// Evento: Agregar nuevo Pokémon
agregarBtn.addEventListener("click", async () => {
    const pokemon = await obtenerPokemon(contadorPokemon);
    const carta = crearCarta(pokemon);
    contenedor.appendChild(carta);
    contadorPokemon++;
});

// Evento: Quitar el último Pokémon
quitarBtn.addEventListener("click", () => {
    const cartas = contenedor.querySelectorAll(".col");
    if (cartas.length > 0) {
        cartas[cartas.length - 1].remove();
        contadorPokemon--;
    }
});
