// Mini-práctica
// Cambia uno de los nombres en mainParallel a "pikachuuu" para ver cómo Promise.all rechaza si una falla.
// Implementa Promise.allSettled para listar cuáles salieron bien y cuáles fallaron.

// app.js

// 1️⃣ Función para obtener un Pokémon con manejo de error HTTP
const getPokemon = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} - ${name} no encontrado`);
  }
  return await response.json();
};

// 2️⃣ Función principal que prueba con varios nombres, algunos correctos y uno con error
const mainAllSettled = async () => {
  // Lista de nombres, uno está mal escrito para simular error
  const nombres = ["pikachu", "ditto", "pikachuuu"];

  // Creamos un array de promesas llamando getPokemon para cada nombre
  const tareas = nombres.map(getPokemon);

  // Promise.allSettled espera a TODAS, sin detenerse por errores
  const resultados = await Promise.allSettled(tareas);

  // Recorremos los resultados y mostramos el estado de cada uno
  resultados.forEach((resultado, i) => {
    const nombre = nombres[i];
    if (resultado.status === "fulfilled") {
      console.log(`✅ ${nombre} cargado correctamente: ID #${resultado.value.id}`);
    } else {
      console.warn(`❌ ${nombre} falló: ${resultado.reason.message}`);
    }
  });
};

// 3️⃣ Ejecutamos la prueba
mainAllSettled();


// Muestra tres casos:
// pikachu → éxito.
// ditto → éxito.
// pikachuuu → error HTTP 404.
// El flujo no se interrumpe aunque haya un fallo.
// La salida en consola deja claro qué salió bien y qué falló.