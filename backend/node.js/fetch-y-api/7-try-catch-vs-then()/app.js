// Ejemplo comparativo
// Queremos obtener un Pokémon y mostrar su nombre, altura y tipos. Si hay error, mostrarlo claramente.

// app.js
// Versión con .then()
function getPokemonThen(name) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} - Pokémon no encontrado`);
      }
      return response.json();
    })
    .then(data => {
      console.log(`✅ Nombre: ${data.name}`);
      console.log(`Altura: ${data.height}`);
      console.log(`Tipos: ${data.types.map(t => t.type.name).join(', ')}`);
    })
    .catch(error => {
      console.error(`❌ Error: ${error.message}`);
    });
}

// Uso:
getPokemonThen("pikachu");
getPokemonThen("pikachuuu"); // Forzamos error
