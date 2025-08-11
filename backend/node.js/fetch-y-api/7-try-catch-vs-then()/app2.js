// Ejemplo comparativo
// Queremos obtener un Pokémon y mostrar su nombre, altura y tipos. Si hay error, mostrarlo claramente.

// app.js
// Versión con async/await + try…catch

async function getPokemonTryCatch(name) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} - Pokémon no encontrado`);
    }
    const data = await response.json();

    console.log(`✅ Nombre: ${data.name}`);
    console.log(`Altura: ${data.height}`);
    console.log(`Tipos: ${data.types.map(t => t.type.name).join(', ')}`);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
  }
}

// Uso:
getPokemonTryCatch("pikachu");
getPokemonTryCatch("pikachuuu"); // Forzamos error
