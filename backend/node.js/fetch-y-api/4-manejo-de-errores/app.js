// app.js

// Crear una función getPokemon(nombre) que consulte la PokeAPI usando fetch, valide si la respuesta es correcta (response.ok), 
// convierta el resultado a JSON y muestre en consola el nombre, altura y tipos del Pokémon. 
// Si ocurre un error HTTP o de red, debe capturarlo y mostrar un mensaje de error claro.


// Función para pedir un Pokémon y manejar errores
function getPokemon(name) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    // Primer .then → convertir a JSON solo si la respuesta fue correcta
    .then(response => {
      if (!response.ok) {
        // Lanzamos un error con el código HTTP
        throw new Error(`HTTP ${response.status} - Pokémon no encontrado`);
      }
      return response.json();
    })
    // Segundo .then → usamos los datos reales
    .then(data => {
      console.log(`✅ Nombre: ${data.name}`);
      console.log(`Altura: ${data.height}`);
      console.log(`Tipos: ${data.types.map(t => t.type.name).join(', ')}`);
    })
    // .catch → errores de red o los que lanzamos arriba
    .catch(error => {
      console.error(`❌ Error al obtener datos: ${error.message}`);
    });
}

// Ejemplo correcto
getPokemon("pikachu");

// Ejemplo que forza error HTTP 404
getPokemon("pikachuuu");
