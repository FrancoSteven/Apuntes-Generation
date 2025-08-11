// app.js

// getPokemon: usa fetch por dentro, pero expone un API con callbacks.
// onSuccess(data): se llama cuando todo sale bien.
// onError(errorMessage): se llama si hay error HTTP (404, 500, etc.) o de red.
function getPokemon(name, onSuccess, onError) {
  // 1) Iniciar la petición HTTP con fetch
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    // 2) El primer .then recibe un Response (HTTP)
    .then(function(response) {
      // Verificamos que la respuesta sea 2xx:
      if (!response.ok) {
        // Lanzamos un error para que salte al .catch
        throw new Error(`HTTP ${response.status} - ${response.statusText || 'Error'}`);
      }
      // 3) Convertimos el cuerpo a JSON (esto también es asíncrono)
      return response.json();
    })
    // 4) Ya tenemos los datos reales (objeto JS)
    .then(function(data) {
      // Llamamos al callback de éxito con los datos
      onSuccess(data);
    })
    // 5) Cualquier error (HTTP o de red) cae aquí
    .catch(function(err) {
      // Llamamos al callback de error con un mensaje legible
      onError(`No se pudo obtener el Pokémon (${name}): ${err.message}`);
    });
}

// Uso con callbacks (funciones tradicionales):
getPokemon(
  "pikachu",
  function onSuccess(data) {
    console.log("✅ Éxito:", data.name, data.height, data.types.map(t => t.type.name));
  },
  function onError(msg) {
    console.error("❌ Error:", msg);
  }
);

// Práctica guiada
// - Llama a getPokemon("pikachuuu", ...) para forzar error y verifica que onError se ejecute.
// - Extiende getPokemon para aceptar un callback de loading (por ejemplo onLoading(true/false)) que avise antes/después del fetch.
// - Llama a getPokemon dos veces en secuencia (por ejemplo, "pikachu" y luego "ditto") 
// y muestra cómo el código se empieza a anidar cuando haces lógica dependiente (introducción a callback hell). Luego comparamos con async/await en el punto 5.