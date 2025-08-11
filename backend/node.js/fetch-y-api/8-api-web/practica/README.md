# PokeAPI + Fetch + localStorage

## 📌 Enunciado

Desarrollar una aplicación web sencilla que permita **consultar información de Pokémon** desde la [PokeAPI](https://pokeapi.co/) utilizando **fetch** y almacenar los resultados en el **Web Storage (localStorage)** para reutilizarlos sin necesidad de hacer una nueva petición.

## 🎯 Objetivos

- Practicar el uso de **fetch API** para realizar solicitudes HTTP.
- Implementar **manejo de errores** con `try...catch` y validación de `response.ok`.
- Aprender a **utilizar localStorage** para guardar y recuperar datos.
- Diseñar una interfaz básica con **Bootstrap 5**.

## 📋 Requisitos

La aplicación debe:

1. Permitir ingresar el nombre de un Pokémon y obtener sus datos (nombre, altura, tipos y sprite).
2. Validar si el Pokémon ya está almacenado en **localStorage**.
   - Si existe, mostrarlo directamente indicando que viene de la cache.
   - Si no existe, consultarlo en la API, mostrarlo y guardarlo en cache.
3. Incluir manejo de errores claros para:
   - Respuestas HTTP no exitosas (ej. Pokémon no encontrado).
   - Errores de red.
4. Incluir botones para:
   - **Buscar Pokémon** (consulta con cache).
   - **Cargar desde cache** (sin llamar a la API).
   - **Borrar cache** para el Pokémon indicado.

## 🛠 Tecnologías

- **HTML5**
- **JavaScript (fetch API)**
- **Bootstrap 5**
- **localStorage API**

## 📦 Entregables

- Un archivo HTML que contenga:
  - Formulario para ingresar el nombre del Pokémon.
  - Botones de acción (buscar, cargar desde cache, borrar cache).
  - Zona para mostrar resultados.
  - Estilos con Bootstrap 5.
- Código JavaScript embebido o en archivo separado (`app.js`) que:
  - Implemente `fetch` y manejo de errores.
  - Gestione cache con `localStorage`.
  - Renderice la información en la interfaz.

## 💡 Ejemplo de uso

1. El usuario escribe "pikachu" y presiona **Buscar Pokémon**.
2. Si no está en cache, la app consulta a la PokeAPI, muestra la información y la guarda.
3. Si vuelve a buscar "pikachu", la app lo carga desde cache sin llamar a la API.
4. El usuario puede borrar el cache con el botón correspondiente.

---
