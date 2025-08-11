// app.js

const getPokemon = async (name) => {
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        if(!response.ok) throw new Error(`HTTP ${response.status} - ${response.statusText} || 'Pokémon no encontrado'`)
        const data = await response.json()
        console.log(`Nombre:  ${data.name}`);
        console.log(`Altura: ", ${data.height}`);
        console.log(`Tipo:", ${data.types.map(t => t.type.name).join(', ')}`);
        return data
    }catch(error){
        console.error("Error: ", error)
    }
};


const mainParallel = async () => {
  try {
    console.log("▶️ Inicio paralelo");
    // Lanzamos SIN await inmediato
    const p1 = getPokemon("charmander");
    const p2 = getPokemon("bulbasaur");
    const p3 = getPokemon("squirtle");

    // Esperamos todas juntas (más rápido que 3 awaits seguidos)
    const [charmander, bulbasaur, squirtle] = await Promise.all([p1, p2, p3]);

    console.log("✅", charmander.name, charmander.types.map(t => t.type.name).join(", "));
    console.log("✅", bulbasaur.name, bulbasaur.types.map(t => t.type.name).join(", "));
    console.log("✅", squirtle.name, squirtle.types.map(t => t.type.name).join(", "));
    console.log("🏁 Fin paralelo");
  } catch (err) {
    console.error("❌ Error (paralelo):", err.message);
  }
};

mainParallel();


// Cuándo así: cuando no hay dependencia entre las peticiones. Ganas tiempo.