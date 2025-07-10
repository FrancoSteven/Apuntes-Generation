# Semana 8 - HTML Avanzado

Ahora que ya sabemos estructurar una página HTML básica, vamos a llevarlo al siguiente nivel: **hacer código más organizado, más semántico, con formularios reales, tablas informativas y mejores prácticas para el manejo de imágenes**.

Y como siempre, lo haremos con ejemplos que se puedan ver, tocar y jugar.

---

## 📦 Ejemplo 1: Todo junto, todo mal (la mala práctica más común)

Imagina este proyecto:

```
/mi-proyecto/
├── index.html
```

Y dentro del `index.html`, todo así:

```html
<h1 style="color: red; text-align: center;">Bienvenidos</h1>
<p style="font-size: 18px; background-color: yellow;">
  Este párrafo está quemando mis ojos...
</p>
```

Este es el clásico error de principiante: **escribir todos los estilos directamente en las etiquetas** (lo que se llama **estilos inline**).

### 🚫 ¿Por qué es una mala práctica?

- Es difícil de mantener: si tienes 40 párrafos y quieres cambiar el color, debes hacerlo uno por uno.
- El código se vuelve sucio y largo.
- No puedes reutilizar estilos fácilmente.
- Afecta la accesibilidad y el rendimiento.

### ✅ ¿Entonces qué deberíamos hacer?

Separar las responsabilidades. Primero con un bloque `<style>` en el head:

```html
<head>
  <style>
    h1 {
      color: red;
      text-align: center;
    }
    p {
      font-size: 18px;
      background-color: yellow;
    }
  </style>
</head>
```

Pero eso sigue estando "dentro del HTML".

---

## ✨ Ejemplo 2: Estructura correcta

La buena práctica es **separar el HTML del CSS**. Por eso usamos una estructura como esta:

```
/mi-proyecto-semántico/
├── index.html
└── assets/
    ├── images/
    ├── styles.css
    └── scripts.js
```

Y en `index.html`:

```html
<head>
  <link rel="stylesheet" href="assets/styles.css" />
</head>
```

Esto te permite reutilizar estilos, mantener todo limpio, y trabajar en equipo sin enredos.

> La carpeta **`assets`** agrupa todo lo visual y funcional externo al HTML (imágenes, CSS, JS).

---

## 🧠 ¿Qué es HTML semántico y por qué importa?

Cuando usamos etiquetas como `<div>` o `<span>` para todo, estamos escribiendo lo que se llama **HTML no semántico**. Funciona, sí, pero no le dice nada al navegador ni a otros desarrolladores sobre el propósito de ese contenido.

En cambio, si usamos etiquetas como `<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`, estamos usando **HTML semántico**, que sí **describe el significado del contenido**.

> La semántica en HTML mejora la accesibilidad, el SEO, el rendimiento, y hace que tu código sea más fácil de entender.

### Mira la diferencia entre HTML no semántico y semántico:

![Comparación entre HTML no semántico y semántico](https://www.godaddy.com/resources/br/wp-content/uploads/sites/5/2024/10/html-nao-semantico-html-semantico.png?size=3840x0)

- A la izquierda, puro `<div>` y `<span>`. Es como leer un libro sin títulos ni párrafos.
- A la derecha, usamos etiquetas que indican claramente la función de cada parte de la página.

**Entonces... ¿qué prefieres leer tú? ¿Un muro de texto, o una estructura clara con capítulos?**

> Usar HTML semántico no solo es una buena práctica: es una muestra de respeto por quien leerá tu código después… y por ti mismo en 2 semanas cuando no recuerdes qué hacía ese `<div>` número 47.

---

## 🤖 Pregunta detonante

> ¿Cuál crees que es la diferencia entre escribir esto:
>
> ```html
> <div>Menú</div>
> ```
>
> y esto otro:
>
> ```html
> <nav>Menú</nav>
> ```
>
> Spoiler: ambos funcionan... pero **solo uno es semántico** 😉

---

## 📄 Organización del Código HTML

Ya no solo se trata de "que funcione", sino de **escribir HTML que tenga sentido**.

### Ventajas de organizar bien tu HTML:

1. **SEO amigable**: Motores como Google valoran la estructura semántica.
2. **Velocidad**: Navegadores cargan más rápido cuando el HTML está limpio.
3. **Mantenimiento**: Otros desarrolladores (o tú en 1 semana) podrán entender mejor lo que hiciste.

---

### Práctica en vivo: Anatomía de un proyecto HTML semántico

Veamos el siguiente ejemplo:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Proyecto etiquetas semánticas" />
    <meta name="keywords" content="html, etiquetas, semánticas" />
    <meta name="author" content="Poochie" />
    <title>Syntax Terror</title>
  </head>
  <body>
    <header>
      <h1>Syntax Terror</h1>
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#lista">Lista</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="inicio">
        <h2>Bienvenid@ a mi página</h2>
        <p>Esta es la sección de inicio</p>
      </section>

      <section id="lista">
        <h2>Lista de Estudiantes</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Dato curioso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Martin</td>
              <td>23</td>
              <td>Tiene marcas de nacimiento</td>
            </tr>
            <tr>
              <td>Pablo</td>
              <td>26</td>
              <td>Le gustan las matemáticas</td>
            </tr>
            <tr>
              <td>Carolina</td>
              <td>27</td>
              <td>Le gusta el Techno</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3">Total de estudiantes: 3</td>
            </tr>
          </tfoot>
        </table>
      </section>

      <section id="contacto">
        <h2>Formulario de Contacto</h2>
        <form action="/api/estudiantes/nuevo" method="post">
          <label for="nombre">Nombre</label>
          <input type="text" name="nombre" id="nombre" required />

          <label for="edad">Edad</label>
          <input type="number" name="edad" id="edad" />

          <label for="dato">Dato Curioso</label>
          <input type="text" name="dato" id="dato" />

          <label for="password">Password</label>
          <input type="password" name="password" id="password" />

          <button type="submit">Guardar</button>
        </form>
      </section>
    </main>

    <footer>
      <p>
        &copy; 2025 C20 Raices Digitales. Todos los derechos e Izquierdos
        reservados.
      </p>
    </footer>
  </body>
</html>
```

---

## 🚀 Imágenes: no solo es poner <img>

```html
<img src="assets/images/logo.png" alt="Logo de Syntax Terror" width="300" />
```

### Buenas prácticas:

- Usa `alt` siempre.
- Usa `width` para ayudar a que cargue más rápido.
- Comprime y optimiza la imagen antes de subirla.
- Usa WebP o SVG si puedes.
- Usa nombres de archivo descriptivos: `perro-jugando.jpg` ❌ vs `DSC00012.JPG` ❌

---

## 🔢 Tablas con propósito

- `<table>` para mostrar datos tabulados
- Usa `<thead>`, `<tbody>`, `<tfoot>`
- Combina columnas con `colspan`, filas con `rowspan`

### Bonus: ¡Dale estilo con CSS! 🧙‍♂️

```html
<style>
  table {
    width: 100%;
    margin: 1rem 0;
    border-collapse: collapse;
  }
  th,
  td {
    border: 1px solid #ccc;
    padding: 0.5rem;
    text-align: left;
  }
  th {
    background-color: #009688;
    color: white;
  }
</style>
```

---

## 📅 Formularios modernos

- Usa `required`, `placeholder`, `type`, y asocia con `<label>`
- Usa `radio`, `checkbox`, `file`, `submit`, `password`, `number`

### Ejemplo:

```html
<form>
  <label for="email">Correo:</label>
  <input
    type="email"
    id="email"
    name="email"
    placeholder="tucorreo@ejemplo.com"
    required
  />

  <label for="archivo">Sube tu CV:</label>
  <input type="file" id="archivo" name="archivo" />

  <button type="submit">Enviar</button>
</form>
```

✅ ¡Nivel desbloqueado! Ahora no solo sabes HTML, sabes cómo organizarlo como un profesional.

Próximo paso: **CSS moderno y responsive para brillar visualmente** ✨
