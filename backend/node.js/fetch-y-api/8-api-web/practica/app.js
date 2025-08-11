// Selección de elementos
const form = document.getElementById("form");
const inputName = document.getElementById("name");
const btnDesdeCache = document.getElementById("btnDesdeCache");
const btnBorrar = document.getElementById("btnBorrar");
const statusBox = document.getElementById("status");
const resultBox = document.getElementById("result");

// Función para mostrar mensajes
function mostrarStatus(mensaje, tipo = "info") {
  statusBox.textContent = mensaje;
  statusBox.className = `alert alert-${tipo}`;
  statusBox.classList.remove("d-none");
}

// Función para renderizar Pokémon
function mostrarPokemon(pokemon, desdeCache = false) {
  const tipos = pokemon.types.map(t => t.type.name).join(", ");
  resultBox.innerHTML = `
    <div class="card">
      <div class="card-body d-flex align-items-center">
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="me-3">
        <div>
          <h5 class="card-title text-capitalize">${pokemon.name}</h5>
          <p class="mb-1"><strong>Altura:</strong> ${pokemon.height}</p>
          <p class="mb-0"><strong>Tipos:</strong> ${tipos}</p>
        </div>
      </div>
    </div>
  `;
  mostrarStatus(desdeCache ? "Cargado desde cache ✅" : "Cargado desde API 🌐", "success");
}

// Obtener Pokémon desde la API
async function fetchPokemon(nombre) {
  try {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`);
    if (!respuesta.ok) throw new Error("Pokémon no encontrado");
    const datos = await respuesta.json();
    localStorage.setItem(nombre.toLowerCase(), JSON.stringify(datos));
    mostrarPokemon(datos, false);
  } catch (error) {
    mostrarStatus(error.message, "danger");
    resultBox.innerHTML = "";
  }
}

// Cargar Pokémon desde cache
function cargarDesdeCache(nombre) {
  const datos = localStorage.getItem(nombre.toLowerCase());
  if (!datos) {
    mostrarStatus("No encontrado en cache", "warning");
    resultBox.innerHTML = "";
    return;
  }
  mostrarPokemon(JSON.parse(datos), true);
}

// Borrar Pokémon del cache
function borrarCache(nombre) {
  localStorage.removeItem(nombre.toLowerCase());
  mostrarStatus("Cache borrado", "info");
  resultBox.innerHTML = "";
}

// Eventos
form.addEventListener("submit", e => {
  e.preventDefault();
  if (!inputName.value.trim()) return mostrarStatus("Ingresa un nombre", "warning");
  const nombre = inputName.value.trim();
  const enCache = localStorage.getItem(nombre.toLowerCase());
  if (enCache) {
    mostrarPokemon(JSON.parse(enCache), true);
  } else {
    fetchPokemon(nombre);
  }
});

btnDesdeCache.addEventListener("click", () => {
  if (!inputName.value.trim()) return mostrarStatus("Ingresa un nombre", "warning");
  cargarDesdeCache(inputName.value.trim());
});

btnBorrar.addEventListener("click", () => {
  if (!inputName.value.trim()) return mostrarStatus("Ingresa un nombre", "warning");
  borrarCache(inputName.value.trim());
});
