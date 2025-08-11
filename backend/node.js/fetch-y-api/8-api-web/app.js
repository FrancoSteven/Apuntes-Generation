// Ejemplo: Guardar y recuperar Pokémon en localStorage
// Queremos: Buscar un Pokémon en la PokeAPI. 
// Guardarlo en localStorage.
// Si ya está guardado, leerlo desde allí sin llamar a la API.

// app.js
// Función para obtener un Pokémon, primero intentando desde localStorage
async function getPokemonCached(name) {
  const key = `pokemon_${name.toLowerCase()}`;

  // 1️⃣ Verificamos si está en localStorage
  const cached = localStorage.getItem(key);
  if (cached) {
    console.log(`📦 Cargando ${name} desde localStorage`);
    const data = JSON.parse(cached);
    mostrarPokemon(data);
    return;
  }

  // 2️⃣ Si no está en cache, lo pedimos a la API
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} - Pokémon no encontrado`);
    }
    const data = await response.json();

    // 3️⃣ Guardamos en localStorage
    localStorage.setItem(key, JSON.stringify(data));
    console.log(`💾 Guardado ${name} en localStorage`);

    // 4️⃣ Mostramos datos
    mostrarPokemon(data);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
  }
}

// Función auxiliar para mostrar datos del Pokémon
function mostrarPokemon(data) {
  console.log(`✅ Nombre: ${data.name}`);
  console.log(`Altura: ${data.height}`);
  console.log(`Tipos: ${data.types.map(t => t.type.name).join(', ')}`);
}

// Ejemplo correcto
getPokemonCached("pikachu");

// Ejemplo forzando otro Pokémon
getPokemonCached("ditto");

// Si lo llamas otra vez, se cargará desde localStorage
setTimeout(() => getPokemonCached("pikachu"), 2000);
