const TOTAL_EJEMPLOS = 18;

// Obtiene un número aleatorio de Pokémon entre 1 y 898
const getRandomPokemonId = () => Math.floor(Math.random() * 898) + 1;

// Función para crear una tarjeta con imagen + nombre
async function crearTarjetaPokemon() {
    const id = getRandomPokemonId();
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    try {
        const res = await fetch(url);
        const data = await res.json();

        const container = document.createElement("div");
        container.style.textAlign = "center";

        const img = document.createElement("img");
        img.src = data.sprites.other["official-artwork"].front_default;
        img.alt = data.name;
        img.width = 100;
        img.height = 100;
        img.loading = "lazy";

        const nombre = document.createElement("p");
        nombre.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        nombre.style.marginTop = "0.5rem";
        nombre.style.fontSize = "0.9rem";
        nombre.style.color = "#555";

        container.appendChild(img);
        container.appendChild(nombre);

        return container;
    } catch (error) {
        console.error("Error cargando Pokémon:", error);
        return null;
    }
}

// Inserta 3 Pokémon aleatorios en cada sección
async function cargarPokemones() {
    for (let i = 1; i <= TOTAL_EJEMPLOS; i++) {
        const section = document.querySelector(`.ejemplo-${String(i).padStart(2, '0')} .content`);
        if (!section) continue;

        for (let j = 0; j < 3; j++) {
            const tarjeta = await crearTarjetaPokemon();
            if (tarjeta) section.appendChild(tarjeta);
        }
    }
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", cargarPokemones);
