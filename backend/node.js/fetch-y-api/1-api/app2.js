// app.js

// 1️⃣ fetch(url) → Hace una solicitud HTTP a la URL indicada
// Aquí se inicia una petición HTTP GET a la URL de la PokeAPI para obtener información de Pikachu.
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')

  // 2️⃣ Retorna una Promise → Significa que la respuesta llegará después. Una Promesa es como un "compromiso" de que algo pasará en el futuro pero no sé cuándo.
  // fetch() devuelve una Promise, lo que significa que la operación es asíncrona (no tenemos la respuesta inmediatamente).
  // Por eso usamos .then() para manejar la respuesta cuando esté lista.

  // 3️⃣ El primer .then() recibe un objeto Response.
  // Este objeto representa la respuesta HTTP.
  // Contiene métodos como .json(), .text(), .blob(), etc.
  // Usamos r.json() para convertir el cuerpo de la respuesta en un objeto JavaScript.
  // Ojo: r.json() también devuelve una Promise, porque la conversión es asíncrona.
  .then(r => r.json())

  // 4️⃣ El segundo .then() recibe los datos reales ya convertidos en un objeto JS.
  // Ahora podemos acceder directamente a las propiedades como name, height y types.
  .then(data => {
    console.log("Nombre:", data.name); // "pikachu"
    console.log("Altura:", data.height); // altura en decímetros
    console.log("Tipos:", data.types.map(t => t.type.name)); // array con nombres de tipos
  })

  // 5️⃣ .catch() se usa para manejar errores de red o de la petición.
  // Si hay error (por ejemplo URL mal escrita o problemas de conexión) se ejecuta esto.
  .catch(err => console.error("Error al obtener datos:", err));

/*
📌 Resumen visual del flujo:
fetch(url)               → Inicia petición HTTP a la URL.
.then(r => r.json())     → Convierte la respuesta (Response) a JSON (otra Promise).
.then(data => {...})     → Usa los datos ya convertidos.
.catch(err => {...})     → Maneja errores si algo falla.
*/
