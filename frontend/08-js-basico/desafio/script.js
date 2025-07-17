// === CLASE PRINCIPAL POKÉDEX ===
class Pokedex {
    constructor() {
        this.pokemonList = [];
        this.favorites = this.loadFavorites();
        this.contadorPokemon = 1;
        this.filtroActual = '';
        this.mostrandoSoloFavoritos = false;
        this.inicializarEventos();
        this.actualizarEstadisticas();
    }

    // === GESTIÓN DE DATOS ===
    loadFavorites() {
        const saved = localStorage.getItem('pokemonFavorites');
        return saved ? JSON.parse(saved) : [];
    }

    saveFavorites() {
        localStorage.setItem('pokemonFavorites', JSON.stringify(this.favorites));
    }

    // === API POKÉMON ===
    async obtenerPokemon(id) {
        try {
            this.showToast('Buscando Pokémon...', 'info');
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

            if (!res.ok) {
                throw new Error(`Pokémon no encontrado: ${id}`);
            }

            const data = await res.json();
            const speciesRes = await fetch(data.species.url);
            const speciesData = await speciesRes.json();

            return {
                id: data.id,
                nombre: data.name,
                imagen: data.sprites.other["official-artwork"].front_default || data.sprites.front_default,
                tipo: data.types.map(t => t.type.name).join(", "),
                tipos: data.types.map(t => t.type.name),
                experiencia: data.base_experience || 0,
                peso: data.weight,
                altura: data.height,
                habilidades: data.abilities.map(a => a.ability.name).join(", "),
                stats: data.stats.map(s => ({
                    name: s.stat.name,
                    value: s.base_stat
                })),
                descripcion: this.obtenerDescripcionEspanol(speciesData)
            };
        } catch (error) {
            this.showToast(`Error: ${error.message}`, 'error');
            return null;
        }
    }

    obtenerDescripcionEspanol(speciesData) {
        const espanol = speciesData.flavor_text_entries.find(entry => entry.language.name === 'es');
        return espanol ? espanol.flavor_text.replace(/\n/g, ' ') : 'Descripción no disponible';
    }

    // === CREAR ELEMENTOS DOM ===
    crearCarta(pokemon) {
        const div = document.createElement("div");
        div.classList.add("col");
        div.setAttribute('data-pokemon-id', pokemon.id);
        div.setAttribute('data-tipos', pokemon.tipos.join(','));

        const tipoPrincipal = pokemon.tipos[0];
        const tipoClase = tipoPrincipal ? `bg-${tipoPrincipal}` : "bg-normal";
        const esFavorito = this.favorites.includes(pokemon.id);

        div.innerHTML = `
            <div class="pokemon-card h-100 position-relative">
                <button class="favorite-btn ${esFavorito ? 'active' : ''}" onclick="pokedex.toggleFavorito(${pokemon.id})">
                    <i class="fas fa-heart"></i>
                </button>
                <img src="${pokemon.imagen}" class="pokemon-image" alt="${pokemon.nombre}" loading="lazy">
                <div class="card-body">
                    <h5 class="pokemon-name">${pokemon.nombre}</h5>
                    <p class="pokemon-info"><strong>ID:</strong> #${pokemon.id}</p>
                    <div class="mb-2">
                        ${pokemon.tipos.map(tipo => `<span class="type-badge ${tipoClase}">${tipo}</span>`).join('')}
                    </div>
                    <p class="pokemon-info"><strong>Exp:</strong> ${pokemon.experiencia}</p>
                    <p class="pokemon-info"><strong>Peso:</strong> ${pokemon.peso / 10} kg | <strong>Altura:</strong> ${pokemon.altura / 10} m</p>
                    <div class="d-flex gap-2 mt-2">
                        <button class="btn btn-primary btn-sm" onclick="pokedex.mostrarDetalles(${pokemon.id})">
                            <i class="fas fa-info-circle"></i> Detalles
                        </button>
                        <button class="btn btn-danger btn-sm" onclick="pokedex.eliminarPokemon(${pokemon.id})">
                            <i class="fas fa-trash"></i> Eliminar
                        </button>
                    </div>
                </div>
            </div>
        `;

        return div;
    }

    // === OPERACIONES CRUD ===
    async agregarPokemon(id = null) {
        const pokemonId = id || this.contadorPokemon;

        // Verificar si ya existe
        if (this.pokemonList.find(p => p.id === pokemonId)) {
            this.showToast('Este Pokémon ya está en tu colección', 'warning');
            return;
        }

        const pokemon = await this.obtenerPokemon(pokemonId);
        if (pokemon) {
            this.pokemonList.push(pokemon);
            this.renderizarPokemon();
            this.actualizarEstadisticas();
            if (!id) this.contadorPokemon++;
            this.showToast(`${pokemon.nombre} agregado a tu Pokédex!`, 'success');
        }
    }

    eliminarPokemon(id) {
        const index = this.pokemonList.findIndex(p => p.id === id);
        if (index !== -1) {
            const pokemon = this.pokemonList[index];
            this.pokemonList.splice(index, 1);
            this.favorites = this.favorites.filter(fav => fav !== id);
            this.saveFavorites();
            this.renderizarPokemon();
            this.actualizarEstadisticas();
            this.showToast(`${pokemon.nombre} eliminado de tu Pokédex`, 'info');
        }
    }

    quitarUltimo() {
        if (this.pokemonList.length > 0) {
            const ultimo = this.pokemonList.pop();
            this.favorites = this.favorites.filter(fav => fav !== ultimo.id);
            this.saveFavorites();
            this.renderizarPokemon();
            this.actualizarEstadisticas();
            this.contadorPokemon--;
            this.showToast(`${ultimo.nombre} eliminado`, 'info');
        } else {
            this.showToast('No hay Pokémon para quitar', 'warning');
        }
    }

    limpiarTodo() {
        if (this.pokemonList.length === 0) {
            this.showToast('La Pokédex ya está vacía', 'warning');
            return;
        }

        if (confirm('¿Estás seguro de que quieres limpiar toda tu Pokédex?')) {
            this.pokemonList = [];
            this.favorites = [];
            this.saveFavorites();
            this.contadorPokemon = 1;
            this.renderizarPokemon();
            this.actualizarEstadisticas();
            this.showToast('Pokédex limpiada completamente', 'success');
        }
    }

    // === FAVORITOS ===
    toggleFavorito(id) {
        const index = this.favorites.indexOf(id);
        if (index === -1) {
            this.favorites.push(id);
            this.showToast('Agregado a favoritos', 'success');
        } else {
            this.favorites.splice(index, 1);
            this.showToast('Removido de favoritos', 'info');
        }
        this.saveFavorites();
        this.renderizarPokemon();
        this.actualizarEstadisticas();
    }

    // === FILTROS Y BÚSQUEDA ===
    filtrarPokemon() {
        const contenedor = document.getElementById("pokedex");
        const cartas = contenedor.querySelectorAll(".col");
        let cartasVisibles = 0;

        cartas.forEach(carta => {
            const tipos = carta.getAttribute('data-tipos').split(',');
            const pokemonId = parseInt(carta.getAttribute('data-pokemon-id'));

            let mostrar = true;

            // Filtro por tipo
            if (this.filtroActual && !tipos.includes(this.filtroActual)) {
                mostrar = false;
            }

            // Filtro por favoritos
            if (this.mostrandoSoloFavoritos && !this.favorites.includes(pokemonId)) {
                mostrar = false;
            }

            if (mostrar) {
                carta.style.display = 'block';
                cartasVisibles++;
            } else {
                carta.style.display = 'none';
            }
        });

        this.toggleMensajeVacio(cartasVisibles === 0);
    }

    async buscarPokemon(termino) {
        if (!termino.trim()) {
            this.showToast('Ingresa un nombre o ID para buscar', 'warning');
            return;
        }

        await this.agregarPokemon(termino.toLowerCase());
    }

    // === RENDERIZADO ===
    renderizarPokemon() {
        const contenedor = document.getElementById("pokedex");
        contenedor.innerHTML = '';

        this.pokemonList.forEach(pokemon => {
            const carta = this.crearCarta(pokemon);
            contenedor.appendChild(carta);
        });

        this.filtrarPokemon();
    }

    toggleMensajeVacio(mostrar) {
        const mensaje = document.getElementById("mensajeVacio");
        if (mostrar) {
            mensaje.classList.remove('d-none');
        } else {
            mensaje.classList.add('d-none');
        }
    }

    // === ESTADÍSTICAS ===
    actualizarEstadisticas() {
        const total = this.pokemonList.length;
        const favoritos = this.favorites.length;

        // Tipo más común
        const tipoCount = {};
        this.pokemonList.forEach(pokemon => {
            pokemon.tipos.forEach(tipo => {
                tipoCount[tipo] = (tipoCount[tipo] || 0) + 1;
            });
        });

        const tipoMasComun = Object.keys(tipoCount).reduce((a, b) =>
            tipoCount[a] > tipoCount[b] ? a : b, '-'
        );

        // Experiencia promedio
        const promedioExp = total > 0 ?
            Math.round(this.pokemonList.reduce((sum, p) => sum + p.experiencia, 0) / total) : 0;

        document.getElementById('totalPokemon').textContent = total;
        document.getElementById('favoritos').textContent = favoritos;
        document.getElementById('tipoMasComun').textContent = tipoMasComun;
        document.getElementById('promedioExp').textContent = promedioExp;
    }

    // === DETALLES MODAL ===
    mostrarDetalles(id) {
        const pokemon = this.pokemonList.find(p => p.id === id);
        if (!pokemon) return;

        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <div class="row">
                <div class="col-md-4 text-center">
                    <img src="${pokemon.imagen}" class="img-fluid mb-3" alt="${pokemon.nombre}">
                    <h4 class="text-capitalize">${pokemon.nombre}</h4>
                    <p class="text-muted">#${pokemon.id}</p>
                </div>
                <div class="col-md-8">
                    <h5>Información Básica</h5>
                    <p><strong>Descripción:</strong> ${pokemon.descripcion}</p>
                    <p><strong>Tipos:</strong> ${pokemon.tipos.map(tipo => `<span class="badge bg-primary me-1">${tipo}</span>`).join('')}</p>
                    <p><strong>Experiencia:</strong> ${pokemon.experiencia}</p>
                    <p><strong>Peso:</strong> ${pokemon.peso / 10} kg</p>
                    <p><strong>Altura:</strong> ${pokemon.altura / 10} m</p>
                    <p><strong>Habilidades:</strong> ${pokemon.habilidades}</p>
                    
                    <h5 class="mt-4">Estadísticas</h5>
                    <div class="row">
                        ${pokemon.stats.map(stat => `
                            <div class="col-6 mb-2">
                                <div class="d-flex justify-content-between">
                                    <span class="text-capitalize">${stat.name.replace('-', ' ')}:</span>
                                    <strong>${stat.value}</strong>
                                </div>
                                <div class="progress" style="height: 5px;">
                                    <div class="progress-bar" role="progressbar" style="width: ${(stat.value / 255) * 100}%"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        const modal = new bootstrap.Modal(document.getElementById('detallesModal'));
        modal.show();
    }

    // === SISTEMA DE TOASTS ===
    showToast(mensaje, tipo = 'info') {
        const toastContainer = document.querySelector('.toast-container');
        const toastId = 'toast-' + Date.now();

        const colores = {
            success: 'bg-success',
            error: 'bg-danger',
            warning: 'bg-warning',
            info: 'bg-info'
        };

        const iconos = {
            success: 'fas fa-check-circle',
            error: 'fas fa-exclamation-circle',
            warning: 'fas fa-exclamation-triangle',
            info: 'fas fa-info-circle'
        };

        const toastHTML = `
            <div id="${toastId}" class="toast align-items-center text-white ${colores[tipo]} border-0" role="alert">
                <div class="d-flex">
                    <div class="toast-body">
                        <i class="${iconos[tipo]} me-2"></i>
                        ${mensaje}
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
                </div>
            </div>
        `;

        toastContainer.insertAdjacentHTML('beforeend', toastHTML);

        const toastElement = document.getElementById(toastId);
        const toast = new bootstrap.Toast(toastElement, {
            delay: 3000
        });

        toast.show();

        // Eliminar el toast del DOM después de que se oculte
        toastElement.addEventListener('hidden.bs.toast', () => {
            toastElement.remove();
        });
    }

    // === INICIALIZAR EVENTOS ===
    inicializarEventos() {
        // Botones principales
        document.getElementById('agregarBtn').addEventListener('click', () => this.agregarPokemon());
        document.getElementById('quitarBtn').addEventListener('click', () => this.quitarUltimo());
        document.getElementById('limpiarBtn').addEventListener('click', () => this.limpiarTodo());

        // Búsqueda
        document.getElementById('buscarBtn').addEventListener('click', () => {
            const termino = document.getElementById('buscador').value;
            this.buscarPokemon(termino);
        });

        // Búsqueda con Enter
        document.getElementById('buscador').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const termino = e.target.value;
                this.buscarPokemon(termino);
            }
        });

        // Filtro por tipo
        document.getElementById('filtroTipo').addEventListener('change', (e) => {
            this.filtroActual = e.target.value;
            this.filtrarPokemon();
        });

        // Filtro de favoritos
        document.getElementById('mostrarFavoritos').addEventListener('click', () => {
            this.mostrandoSoloFavoritos = !this.mostrandoSoloFavoritos;
            const boton = document.getElementById('mostrarFavoritos');

            if (this.mostrandoSoloFavoritos) {
                boton.innerHTML = '<i class="fas fa-heart"></i> Mostrar Todos';
                boton.classList.remove('btn-warning-custom');
                boton.classList.add('btn-primary-custom');
            } else {
                boton.innerHTML = '<i class="fas fa-heart"></i> Mostrar Solo Favoritos';
                boton.classList.remove('btn-primary-custom');
                boton.classList.add('btn-warning-custom');
            }

            this.filtrarPokemon();
        });
    }
}

// === INICIALIZAR APLICACIÓN ===
document.addEventListener('DOMContentLoaded', () => {
    window.pokedex = new Pokedex();
});