// app.js (versión moderna)
fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
  .then(r => {
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return r.json();
  })
  .then(data => {
    console.log("Lista de Pokémon:");
    data.results.forEach((pokemon, i) => console.log(`${i + 1}. ${pokemon.name}`));
  })
  .catch(err => console.error("Error:", err));
