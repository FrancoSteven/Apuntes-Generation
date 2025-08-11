// app.js

// Función asíncrona para pedir un Pokémon y manejar errores
const getPokemon = async (name) => {
  try {
    // 1️⃣ Esperar la respuesta del fetch
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    // 2️⃣ Validar si la respuesta fue correcta
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} - Pokémon no encontrado`);
    }

    // 3️⃣ Convertir a JSON (también se espera porque es asíncrono)
    const data = await response.json();

    // 4️⃣ Usar los datos
    console.log(`✅ Nombre: ${data.name}`);
    console.log(`Altura: ${data.height}`);
    console.log(`Tipos: ${data.types.map(t => t.type.name).join(', ')}`);

  } catch (error) {
    // 5️⃣ Manejo de errores
    console.error(`❌ Error al obtener datos: ${error.message}`);
  }
};

// Ejemplo correcto
getPokemon("pikachu");

// Ejemplo que forza error HTTP 404
getPokemon("pikachuuu");
