// Peticiones HTTP
// XMLHttpRequest (XHR) - El método antiguo


///2. Fetch API - El estándar moderno

fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(response => {
    if (!response.ok) throw new Error('Error HTTP: ' + response.status);
    return response.json();
  })
  .then(data => console.log("Datos:", data))
  .catch(error => console.error("Error:", error));


  // Axios - La librería popular
  axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(response => console.log("Datos:", response.data))
  .catch(error => console.error("Error:", error));


  // 4. async/await - Sintaxis moderna
  async function getPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    if (!response.ok) throw new Error('Error HTTP');
    const data = await response.json();
    console.log("Datos:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getPokemon();