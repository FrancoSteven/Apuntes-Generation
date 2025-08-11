// app.js

// 1️⃣ Usamos fetch para acceder a un endpoint de PokeAPI.
// Esto inicia una petición HTTP GET para obtener información del Pokémon Pikachu.
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')

  // 2️⃣ El primer .then() recibe la respuesta en formato "crudo".
  // Aquí la llamamos "respuesta", que es un objeto Response.
  // Este objeto contiene datos sobre la respuesta HTTP (estado, headers, etc.),
  // pero el cuerpo todavía no está listo para usarse directamente.
  .then(function (respuesta) {
    // Convertimos la respuesta a JSON para poder trabajar con ella como un objeto JavaScript.
    // Este método (.json()) también devuelve una Promise, porque la conversión es asíncrona.
    return respuesta.json();
  })

  // 3️⃣ El segundo .then() recibe los datos ya como objeto JavaScript.
  // Ahora podemos acceder a sus propiedades directamente (por ejemplo: name, height, types).
  .then(function (datos) {
    console.log("Nombre:", datos.name); // 'pikachu'
    console.log("Altura:", datos.height); // Altura en decímetros (1 decímetro = 10 cm)

    // datos.types es un array, así que usamos .map() para obtener solo los nombres de tipo.
    console.log("Tipos:", datos.types.map(function (tipo) {
      return tipo.type.name;
    }));
  })

  // 4️⃣ Si ocurre un error (de red o en el fetch), lo capturamos aquí con .catch().
  // Esto se ejecuta si la promesa fue rechazada por algún motivo.
  .catch(function (error) {
    console.error("Error al obtener datos:", error);
  });

/*
📌 Resumen visual del flujo:
1. fetch(url)              → Hace la solicitud HTTP.
2. .then(respuesta.json()) → Convierte la respuesta a JSON (Promise).
3. .then(datos)            → Usa los datos como objeto JavaScript.
4. .catch(error)           → Maneja errores de red o de la petición.
*/
