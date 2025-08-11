// app.js

// 1️⃣ Hacemos la petición para obtener los primeros 10 Pokémon.
// fetch() es la función nativa de JavaScript que permite hacer solicitudes HTTP.
// Aquí estamos solicitando a la API los primeros 10 Pokémon usando el parámetro ?limit=10
fetch('https://pokeapi.co/api/v2/pokemon?limit=10')

  // 2️⃣ Convertimos la respuesta en JSON.
// .then() recibe el objeto Response. 
// Primero verificamos si la respuesta fue correcta usando response.ok.
// Luego usamos .json() para convertir el cuerpo de la respuesta en un objeto JavaScript.
  .then(function(respuesta) {
    if (!respuesta.ok) { 
      throw new Error('Error HTTP: ' + respuesta.status);
    }
    return respuesta.json();
  })

  // 3️⃣ Trabajamos con los datos recibidos.
// Este segundo .then() ya recibe el objeto JavaScript con los datos reales.
// Aquí usamos forEach para recorrer el array "results" y mostrar el nombre de cada Pokémon.
  .then(function(datos) {
    console.log("Lista de Pokémon:");
    datos.results.forEach(function(pokemon, index) {
      console.log(`${index + 1}. ${pokemon.name}`);
    });
  })

  // 4️⃣ Capturamos errores.
// .catch() se ejecuta si ocurre un error de red o si nosotros lanzamos un error manualmente.
  .catch(function(error) {
    console.error("Error al obtener lista de Pokémon:", error);
  });

/*
📌 NOTA IMPORTANTE:
La versión con arrow functions hace exactamente lo mismo.
La única diferencia es la sintaxis más corta:
  function(param) { ... }   →   (param) => { ... }
No hay cambios en el comportamiento, solo en la forma de escribirlo.
*/
