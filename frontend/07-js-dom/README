# El DOM y su Manipulación con JavaScript

## 🌐 ¿Qué es el DOM?

El **DOM (Document Object Model)** es una representación en forma de árbol del documento HTML cargado por el navegador. Cada elemento (etiqueta, texto, comentario) es un **nodo** del árbol.

> 📌 El DOM no es JavaScript, es una **API web** que JavaScript usa para interactuar con la página.

---

## 🌳 Estructura del DOM

```html
<html>
  <head></head>
  <body>
    <h1>Hola mundo</h1>
    <p>Este es un párrafo</p>
  </body>
</html>
```

Se transforma en un árbol de nodos:

```
DOCUMENT
├── HTML
│   ├── HEAD
│   └── BODY
│       ├── H1
│       └── P
```

---

## 🧪 Cómo inspeccionar el DOM

```js
console.log(document); // Muestra todo el árbol DOM
```

> Tip: Usa `F12` > pestaña **Elements** para ver el DOM visualmente en el navegador.

---

## 🔎 Selectores más usados

| Método                           | Uso común                                       | Ejemplo                                      |
| -------------------------------- | ----------------------------------------------- | -------------------------------------------- |
| `getElementById(id)`             | Selecciona por ID                               | `document.getElementById("miId")`            |
| `getElementsByClassName(clase)`  | Todos los elementos con una clase               | `document.getElementsByClassName("miClase")` |
| `getElementsByTagName(etiqueta)` | Todos los elementos por tipo (`p`, `div`, etc.) | `document.getElementsByTagName("p")`         |
| `querySelector(selector)`        | Primer match por selector CSS                   | `document.querySelector(".miClase")`         |
| `querySelectorAll(selector)`     | Todos los matches por selector CSS              | `document.querySelectorAll(".miClase")`      |

### 🧠 Ejemplo práctico

```html
<p class="texto">Hola</p>
<script>
  const parrafo = document.querySelector(".texto");
  parrafo.textContent = "Texto cambiado";
</script>
```

### 🧭 ¿Cuándo usar cada selector?

| Selector                 | Cuándo usarlo                                 | Cuándo evitarlo                                            |
| ------------------------ | --------------------------------------------- | ---------------------------------------------------------- |
| `getElementById`         | Cuando necesitas un único elemento por ID     | Si hay múltiples elementos con el mismo ID (error)         |
| `getElementsByClassName` | Cuando trabajas con una colección por clase   | Si necesitas flexibilidad con selectores complejos         |
| `getElementsByTagName`   | Para aplicar lógica a todos los elementos `p` | Si hay mezcla de etiquetas o estructura anidada            |
| `querySelector`          | Para seleccionar el primer match flexible     | Si necesitas todos los elementos (usar `querySelectorAll`) |
| `querySelectorAll`       | Para recorrer múltiples elementos             | Si solo necesitas el primero                               |

### 🧪 Ejemplos por selector

```html
<!-- HTML -->
<div id="titulo">Hola</div>
<p class="mensaje">Uno</p>
<p class="mensaje">Dos</p>
<section>
  <p>Texto dentro de sección</p>
</section>
<div class="contenedor"><span>Elemento</span></div>

<script>
  // getElementById
  const titulo = document.getElementById("titulo");
  titulo.textContent = "Cambiado por ID";

  // getElementsByClassName
  const mensajes = document.getElementsByClassName("mensaje");
  mensajes[0].textContent = "Mensaje modificado";

  // getElementsByTagName
  const parrafos = document.getElementsByTagName("p");
  parrafos[2].textContent = "Modificado por etiqueta";

  // querySelector
  const primerMensaje = document.querySelector(".mensaje");
  primerMensaje.style.color = "blue";

  // querySelectorAll
  const todosMensajes = document.querySelectorAll(".mensaje");
  todosMensajes.forEach((m) => (m.style.fontWeight = "bold"));

  const segundoMensaje = document.querySelectorAll(".mensaje")[1];
  segundoMensaje.style.color = "yellow";

  const mensajes = document.querySelectorAll(".mensaje");
  mensajes[1].style.color = "red";
</script>
```

---

## 🧰 Propiedades y Métodos esenciales del DOM

| Elemento                     | Tipo      | Qué hace                         | Ejemplo                                                         |
| ---------------------------- | --------- | -------------------------------- | --------------------------------------------------------------- |
| `.innerHTML`                 | Propiedad | Cambia o obtiene HTML interno    | `element.innerHTML = '<strong>Nuevo</strong>';`                 |
| `.textContent`               | Propiedad | Cambia o obtiene texto plano     | `element.textContent = 'Texto plano';`                          |
| `.setAttribute(attr, valor)` | Método    | Modifica o agrega un atributo    | `element.setAttribute('href', 'https://google.com');`           |
| `.style.propiedad = valor`   | Propiedad | Modifica estilos CSS             | `element.style.backgroundColor = 'red';`                        |
| `.classList.add('clase')`    | Método    | Agrega clase                     | `element.classList.add('activo');`                              |
| `.classList.remove('clase')` | Método    | Quita clase                      | `element.classList.remove('oculto');`                           |
| `.classList.toggle('clase')` | Método    | Agrega si no está, quita si está | `element.classList.toggle('visible');`                          |
| `window.alert()`             | Método    | Muestra un cuadro de alerta      | `window.alert('Hola mundo');`                                   |
| `window.scrollTo(x, y)`      | Método    | Hace scroll a una posición       | `window.scrollTo(0, 1000);`                                     |
| `window.location.href`       | Propiedad | Obtiene o cambia la URL actual   | `window.location.href = 'https://google.com';`                  |
| `window.onload`              | Evento    | Ejecuta código tras carga total  | `window.onload = function() { ... }`                            |
| `DOMContentLoaded`           | Evento    | Ejecuta tras cargar el DOM       | `document.addEventListener('DOMContentLoaded', () => { ... });` |

> 📌 Los metodos y propiedades del DOM son **seguros**, no pueden ser usados para realizar acciones que puedan afectar la estructura del DOM.

### 📊 Comparación entre defer, window\.onload y DOMContentLoaded

| Estrategia         | Cuándo se ejecuta                         | Ventajas                                          | Desventajas                                     |
| ------------------ | ----------------------------------------- | ------------------------------------------------- | ----------------------------------------------- |
| `<script defer>`   | Al finalizar el parseo del DOM            | No bloquea carga, funciona en archivos externos   | No funciona con scripts inline                  |
| `window.onload`    | Cuando todo está cargado (DOM + recursos) | Espera hasta que todo (incluyendo img/css) cargue | Puede ser más lento en páginas pesadas          |
| `DOMContentLoaded` | Cuando el DOM ya está listo               | Muy rápido, no espera img/css                     | No garantiza que recursos externos estén listos |

### 🔮 Recomendaciones

- Usa `defer` siempre que cargues archivos externos.
- Usa `DOMContentLoaded` si necesitas que el DOM esté listo pero no dependes de recursos externos.
- Evita `window.onload` salvo que dependas de la carga completa de todo (por ejemplo, para efectos en background con imagen).

---

### ✅ Ejemplos correctos y errores comunes

```html
<div id="caja">Contenido original</div>

<script>
  // ❌ MAL USO: reemplazar todo el HTML sin verificar contenido externo
  document.getElementById("caja").innerHTML =
    "<img src='x' onerror='alert(1)'>";

  // ✅ BUEN USO: usar textContent si no necesitas HTML
  const caja = document.getElementById("caja");
  caja.textContent = "Nuevo texto seguro";

  // ✅ Estilo en línea seguro
  caja.style.backgroundColor = "lightblue";

  // ✅ Manipulación de clases de forma segura
  caja.classList.add("resaltado");
  caja.setAttribute("title", "Caja actualizada");

  // ✅ Uso del objeto window
  window.alert("Mensaje de alerta");
</script>
```

> 🧠 Usa `textContent` si no necesitas insertar HTML, es más seguro contra inyecciones. Solo usa `innerHTML` si necesitas realmente insertar etiquetas como `<strong>`, `<a>`, etc. de forma controlada.

> 🌍 El objeto `window` representa la ventana del navegador y es el contexto global en JavaScript en el navegador. Muchos métodos como `alert()`, `setTimeout()`, `scrollTo()` o `location` son parte de `window`.

---

## 🎯 Crear, Reemplazar y Eliminar Elementos

### Crear

```js
const nuevoP = document.createElement("p");
nuevoP.textContent = "Soy nuevo";
document.body.appendChild(nuevoP);
```

### Reemplazar

```js
const nuevoH2 = document.createElement("h2");
const viejo = document.getElementById("antiguo");
viejo.parentNode.replaceChild(nuevoH2, viejo);
```

### Eliminar

```js
const nodo = document.getElementById("elemento");
nodo.remove();
```

---

## 🧠 Eventos del DOM (Interactividad)

| Evento                   | Uso típico                |
| ------------------------ | ------------------------- |
| `click`                  | Clic del usuario          |
| `mouseover` / `mouseout` | Hover de mouse            |
| `keydown` / `keyup`      | Teclado                   |
| `submit`                 | Envío de formulario       |
| `input`                  | Cambio en campos de texto |

### Ejemplo: Botón que cambia texto

```html
<button id="boton">Haz clic</button>
<p id="mensaje">Texto original</p>

<script>
  const btn = document.getElementById("boton");
  const p = document.getElementById("mensaje");

  btn.addEventListener("click", () => {
    p.textContent = "Texto actualizado por JS";
  });
</script>
```

---

## ✅ Buenas prácticas

| Hacer esto                                         | Por qué                                      |
| -------------------------------------------------- | -------------------------------------------- |
| Usar `addEventListener`                            | Evita conflictos y permite múltiples eventos |
| Usar `const` para nodos estáticos                  | Mejora legibilidad y evita errores           |
| Usar `textContent` si no necesitas HTML            | Evita inyecciones de código                  |
| Agregar lógica JS al final del HTML o usar `defer` | Para asegurar que el DOM esté cargado        |

## ⚡ defer vs. Script al final del HTML

### ⏳ ¿Por qué agregar lógica JS al final del HTML o usar `defer`?

Porque asegura que todo el DOM esté cargado antes de que se ejecute el código JavaScript.

### 🧪 Ejemplo con `defer`

```html
<head>
  <script src="main.js" defer></script>
</head>
```

- ✅ **Ventaja**: El script no bloquea la carga del HTML. El navegador sigue cargando el DOM y ejecuta JS al final.
- 📌 Equivale a poner `<script>` justo antes de cerrar `</body>`.

### 🧪 Ejemplo sin `defer` y con error

```html
<head>
  <script src="main.js"></script>
  <!-- ❌ Esto puede ejecutarse antes de que el DOM esté disponible -->
</head>
```

### 🧪 Alternativa: JS al final del body

```html
<body>
  <script>
    // ✅ Esto se ejecuta cuando el DOM ya fue construido
  </script>
</body>
```

> 💡 Recomendación: Usa `defer` si enlazas un archivo `.js`. Usa `<script>` al final si escribes código JS embebido.

---

---

## 🚫 Errores comunes

| ❌ Error                                  | ✅ Corrección                                     |
| ----------------------------------------- | ------------------------------------------------- |
| Usar `onclick="..."` en HTML              | Usar `addEventListener` en JS                     |
| Seleccionar un elemento que aún no existe | Ejecutar el JS al final o usar `DOMContentLoaded` |
| Usar `innerHTML` para texto plano         | Usar `textContent`                                |
| Olvidar los selectores CSS correctos      | Verificar `#id`, `.clase`, etc.                   |

---

## 🧠 Preguntas frecuentes

| Pregunta                                                     | Respuesta breve                                      |
| ------------------------------------------------------------ | ---------------------------------------------------- |
| ¿Por qué usar `querySelector` si ya existe `getElementById`? | Porque es más flexible y permite usar selectores CSS |
| ¿Qué diferencia hay entre `innerHTML` y `textContent`?       | `innerHTML` interpreta etiquetas, `textContent` no   |
| ¿Se puede manipular cualquier parte del HTML con JS?         | Sí, si el elemento existe en el DOM                  |
| ¿Qué pasa si intento modificar un elemento que no existe?    | Obtendrás `null` y puede lanzar error                |
| ¿Puedo usar `addEventListener` en varios botones?            | Sí, con `querySelectorAll` + `forEach`               |

---

# Formularios, Validación y UX con JavaScript

## 🧱 Estructura básica de un formulario HTML

```html
<form id="loginForm">
  <label for="email">Correo:</label>
  <input type="email" id="email" required />

  <label for="password">Contraseña:</label>
  <input type="password" id="password" required />

  <button type="submit">Ingresar</button>
</form>
```

> 📌 Siempre usar `for` en `<label>` vinculado al `id` del `<input>` para accesibilidad.

---

## 🎯 Acceder a datos del formulario

```js
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
```

> 📌 Esto solo funcionará **después** que el usuario interactúe o cuando se dispare un evento (`submit`, `input`).

---

## 🔄 Validación básica en JS

```js
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Todos los campos son obligatorios");
    return;
  }

  if (!email.includes("@")) {
    alert("Ingresa un correo válido");
    return;
  }

  alert("Formulario enviado con éxito");
});
```

---

## ✅ Buenas prácticas para formularios

| Hacer esto                                           | Por qué                                                      |
| ---------------------------------------------------- | ------------------------------------------------------------ |
| Usar `required`, `type="email"`, `maxlength`         | Validación HTML5 rápida y accesible                          |
| Escuchar el evento `submit`, no el `click` del botón | Así también funciona si el usuario presiona ENTER            |
| Usar `.value.trim()`                                 | Para evitar espacios vacíos al principio o final             |
| Validar en el cliente Y servidor                     | JS mejora la experiencia, pero la seguridad va en el backend |
| Mostrar mensajes de error amigables                  | Mejora la conversión y comprensión                           |

---

## 🚫 Errores comunes

| ❌ Error                                                               | ✅ Corrección                                     |
| ---------------------------------------------------------------------- | ------------------------------------------------- |
| Solo validar con HTML5 (`required`)                                    | También validar en JS para control personalizado  |
| Capturar `click` del botón en lugar de `submit` del formulario         | Siempre validar el formulario completo            |
| Modificar estilos directamente sin clase (`element.style.color = ...`) | Usar `.classList.add()` para estilos consistentes |
| Enviar el formulario sin prevenir `e.preventDefault()`                 | Detener el envío para validar correctamente       |
| Usar `innerHTML` para insertar mensajes                                | Usar `textContent` o manipular nodos              |

---

## ✨ Mostrar mensajes de error en pantalla (UX)

```html
<form id="contactForm">
  <input type="text" id="name" placeholder="Tu nombre" />
  <span id="nameError" class="error-msg"></span>

  <button type="submit">Enviar</button>
</form>

<style>
  .error-msg {
    color: red;
    font-size: 0.9em;
  }
</style>

<script>
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name");
      const error = document.getElementById("nameError");

      if (name.value.trim() === "") {
        error.textContent = "El nombre es obligatorio";
        name.classList.add("input-error");
      } else {
        error.textContent = "";
        name.classList.remove("input-error");
        alert("Formulario enviado correctamente");
      }
    });
</script>
```

---

## 👥 UX para formularios: tips reales

- Muestra mensajes **cerca del campo** con error.
- No uses `alert()` para errores, solo para éxito o pruebas.
- Usa colores consistentes para estados (`.error`, `.success`).
- Usa `focus()` para llevar al usuario directamente al campo con error.
- En móviles, asegúrete de que los inputs tengan el `type` correcto (`email`, `tel`, etc.).

---

## 🧠 Preguntas frecuentes de estudiantes

| Pregunta                                                  | Respuesta clara                                                                |
| --------------------------------------------------------- | ------------------------------------------------------------------------------ |
| ¿Qué diferencia hay entre validar con HTML y con JS?      | HTML es básico y declarativo. JS es dinámico y personalizado. Se complementan. |
| ¿Por qué `submit` en lugar de `click`?                    | Porque captura cualquier forma de enviar (botón o ENTER).                      |
| ¿Se puede prevenir el envío sin alertas?                  | Sí, puedes mostrar mensajes visuales sin alertas.                              |
| ¿Cómo limpio el formulario luego de enviarlo?             | Usando `.reset()`: `form.reset()`                                              |
| ¿Debo validar en el backend si ya lo hice en el frontend? | ¡Sí! El frontend es vulnerable, el backend es quien valida de verdad.          |

---

## 📌 Checklist de validación final

- ✅ Todos los campos tienen `id` y `name`
- ✅ Hay validación HTML5 básica (`required`, `type`, etc.)
- ✅ Se usa JS para validación adicional y mensajes claros
- ✅ Se evita el envío si hay errores (`preventDefault()`)
- ✅ Se usan clases para mostrar/ocultar mensajes
- ✅ El backend también valida antes de aceptar los datos

---
