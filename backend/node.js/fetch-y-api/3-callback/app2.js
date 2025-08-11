// app.js

const getPokemonArrow = (name, onSuccess, onError) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.json();
    })
    .then(data => onSuccess(data))
    .catch(err => onError(`No se pudo obtener ${name}: ${err.message}`));
};

// Uso:
getPokemonArrow(
  "ditto",
  data => console.log("✅", data.name, data.weight, data.types.map(t => t.type.name)),
  msg  => console.error("❌", msg)
);
