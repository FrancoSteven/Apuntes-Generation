# Etiquetas HTML más usadas en 2025

## Contexto
Este documento presenta las etiquetas HTML más utilizadas en el desarrollo web moderno de 2025, categorizadas por su función y estado actual. HTML5 sigue siendo el estándar dominante, con un enfoque en la semántica, accesibilidad y compatibilidad con tecnologías web modernas.

## Etiquetas Estructurales y de Contenido

| Etiqueta | Para qué sirve | Ejemplo |
|----------|----------------|---------|
| `<html>` | Elemento raíz que contiene todo el documento HTML | `<html lang="es">...</html>` |
| `<head>` | Contiene metadatos del documento (no visible) | `<head><title>Mi página</title></head>` |
| `<body>` | Contiene todo el contenido visible de la página | `<body><h1>Hola mundo</h1></body>` |
| `<title>` | Define el título que aparece en la pestaña del navegador | `<title>Mi sitio web</title>` |
| `<meta>` | Proporciona metadatos sobre el documento | `<meta charset="UTF-8">` |
| `<link>` | Vincula recursos externos (CSS, fuentes, etc.) | `<link rel="stylesheet" href="styles.css">` |
| `<script>` | Incluye código JavaScript | `<script src="app.js"></script>` |

## Etiquetas de Encabezados y Texto

| Etiqueta | Para qué sirve | Ejemplo |
|----------|----------------|---------|
| `<h1>` a `<h6>` | Encabezados jerárquicos (h1 más importante, h6 menos) | `<h1>Título principal</h1>` |
| `<p>` | Párrafos de texto | `<p>Este es un párrafo de texto.</p>` |
| `<span>` | Contenedor inline genérico para aplicar estilos | `<span class="destacado">texto</span>` |
| `<strong>` | Texto con importancia semántica (aparece en negrita) | `<strong>Muy importante</strong>` |
| `<em>` | Texto con énfasis (aparece en cursiva) | `<em>Énfasis en esta palabra</em>` |
| `<br>` | Salto de línea | `Línea 1<br>Línea 2` |
| `<hr>` | Línea horizontal divisoria | `<hr>` |

## Etiquetas de Estructura Semántica (HTML5)

| Etiqueta | Para qué sirve | Ejemplo |
|----------|----------------|---------|
| `<header>` | Encabezado de página o sección | `<header><nav>Menu</nav></header>` |
| `<nav>` | Navegación principal del sitio | `<nav><a href="/inicio">Inicio</a></nav>` |
| `<main>` | Contenido principal de la página | `<main><article>...</article></main>` |
| `<section>` | Sección temática del contenido | `<section><h2>Servicios</h2></section>` |
| `<article>` | Contenido independiente y reutilizable | `<article><h2>Noticia</h2>...</article>` |
| `<aside>` | Contenido relacionado pero secundario | `<aside>Publicidad</aside>` |
| `<footer>` | Pie de página o sección | `<footer>&copy; 2025 Mi empresa</footer>` |

## Etiquetas de Listas

| Etiqueta | Para qué sirve | Ejemplo |
|----------|----------------|---------|
| `<ul>` | Lista no ordenada (con viñetas) | `<ul><li>Item 1</li></ul>` |
| `<ol>` | Lista ordenada (numerada) | `<ol><li>Primer paso</li></ol>` |
| `<li>` | Elemento individual de una lista | `<li>Elemento de lista</li>` |
| `<dl>` | Lista de definiciones | `<dl><dt>Término</dt><dd>Definición</dd></dl>` |
| `<dt>` | Término en una lista de definiciones | `<dt>HTML</dt>` |
| `<dd>` | Definición en una lista de definiciones | `<dd>Lenguaje de marcado</dd>` |

## Etiquetas de Enlaces y Multimedia

| Etiqueta | Para qué sirve | Ejemplo |
|----------|----------------|---------|
| `<a>` | Enlaces a otras páginas o recursos | `<a href="https://ejemplo.com">Enlace</a>` |
| `<img>` | Imágenes | `<img src="foto.jpg" alt="Descripción">` |
| `<video>` | Videos embebidos | `<video controls><source src="video.mp4"></video>` |
| `<audio>` | Audio embebido | `<audio controls><source src="audio.mp3"></audio>` |
| `<source>` | Fuentes alternativas para video/audio | `<source src="video.webm" type="video/webm">` |
| `<picture>` | Imágenes responsivas con múltiples fuentes | `<picture><source srcset="imagen.webp"></picture>` |

## Etiquetas de Tablas

| Etiqueta | Para qué sirve | Ejemplo |
|----------|----------------|---------|
| `<table>` | Contenedor principal de una tabla | `<table><tr><td>Celda</td></tr></table>` |
| `<tr>` | Fila de tabla | `<tr><td>Celda 1</td><td>Celda 2</td></tr>` |
| `<td>` | Celda de datos | `<td>Contenido de celda</td>` |
| `<th>` | Celda de encabezado | `<th>Encabezado de columna</th>` |
| `<thead>` | Agrupación del encabezado de tabla | `<thead><tr><th>Columna</th></tr></thead>` |
| `<tbody>` | Agrupación del cuerpo de tabla | `<tbody><tr><td>Dato</td></tr></tbody>` |
| `<tfoot>` | Agrupación del pie de tabla | `<tfoot><tr><td>Total</td></tr></tfoot>` |

## Etiquetas de Formularios

| Etiqueta | Para qué sirve | Ejemplo |
|----------|----------------|---------|
| `<form>` | Formulario para entrada de datos | `<form action="/enviar" method="post">...</form>` |
| `<input>` | Campo de entrada (texto, email, password, etc.) | `<input type="email" name="correo">` |
| `<textarea>` | Área de texto multilínea | `<textarea name="comentario"></textarea>` |
| `<select>` | Lista desplegable | `<select><option>Opción 1</option></select>` |
| `<option>` | Opción en una lista desplegable | `<option value="1">Primera opción</option>` |
| `<button>` | Botón interactivo | `<button type="submit">Enviar</button>` |
| `<label>` | Etiqueta para campos de formulario | `<label for="nombre">Nombre:</label>` |
| `<fieldset>` | Agrupa campos relacionados | `<fieldset><legend>Datos personales</legend></fieldset>` |
| `<legend>` | Título para un fieldset | `<legend>Información de contacto</legend>` |

## Etiquetas de Contenido Genérico

| Etiqueta | Para qué sirve | Ejemplo |
|----------|----------------|---------|
| `<div>` | Contenedor genérico de bloque | `<div class="contenedor">...</div>` |
| `<iframe>` | Incrusta contenido externo | `<iframe src="https://ejemplo.com"></iframe>` |
| `<canvas>` | Área de dibujo para gráficos con JavaScript | `<canvas id="miCanvas"></canvas>` |
| `<svg>` | Gráficos vectoriales escalables | `<svg><circle cx="50" cy="50" r="40"></svg>` |

## Etiquetas de Formateo de Texto

| Etiqueta | Para qué sirve | Ejemplo |
|----------|----------------|---------|
| `<code>` | Código fuente inline | `<code>console.log('Hola');</code>` |
| `<pre>` | Texto preformateado (conserva espacios y saltos) | `<pre>Texto    con espacios</pre>` |
| `<blockquote>` | Cita en bloque | `<blockquote>Esta es una cita larga</blockquote>` |
| `<q>` | Cita corta inline | `<q>Cita corta</q>` |
| `<abbr>` | Abreviatura con expansión | `<abbr title="HyperText Markup Language">HTML</abbr>` |
| `<time>` | Fecha y hora legible por máquinas | `<time datetime="2025-07-05">5 de julio de 2025</time>` |

## Etiquetas Web Components y Modernas

| Etiqueta | Para qué sirve | Ejemplo |
|----------|----------------|---------|
| `<template>` | Plantilla HTML reutilizable | `<template id="mi-template">...</template>` |
| `<slot>` | Punto de inserción en Web Components | `<slot name="contenido"></slot>` |
| `<dialog>` | Diálogo modal o no modal | `<dialog open>Contenido del diálogo</dialog>` |
| `<details>` | Widget desplegable | `<details><summary>Más info</summary>...</details>` |
| `<summary>` | Título visible del elemento details | `<summary>Hacer clic para expandir</summary>` |

---

## Etiquetas Deprecadas (No usar en 2025)

Las siguientes etiquetas han sido deprecadas y no deben usarse en desarrollo web moderno. Se recomienda usar CSS para lograr los mismos efectos visuales:

| Etiqueta | Razón de deprecación | Alternativa recomendada |
|----------|---------------------|-------------------------|
| `<center>` | Presentacional, no semántica | CSS: `text-align: center` |
| `<font>` | Presentacional, no semántica | CSS: `font-family`, `font-size`, `color` |
| `<b>` | Presentacional (usar solo si no hay alternativa semántica) | `<strong>` para importancia, CSS para estilo |
| `<i>` | Presentacional (usar solo si no hay alternativa semántica) | `<em>` para énfasis, CSS para estilo |
| `<u>` | Presentacional, confuso con enlaces | CSS: `text-decoration: underline` |
| `<big>` | Presentacional | CSS: `font-size: larger` |
| `<small>` | Mayormente presentacional | CSS: `font-size: smaller` (o usar semánticamente) |
| `<strike>` | Presentacional | CSS: `text-decoration: line-through` |
| `<tt>` | Presentacional | `<code>` para código, CSS para fuente monoespaciada |
| `<frame>` | Problemas de accesibilidad y SEO | `<iframe>` con buenas prácticas |
| `<frameset>` | Problemas de accesibilidad y SEO | Layouts con CSS Grid/Flexbox |
| `<noframes>` | Obsoleto con frames | No necesario |
| `<applet>` | Tecnología obsoleta | `<object>` o tecnologías web modernas |
| `<bgsound>` | No estándar, solo IE | `<audio>` con controles |
| `<blink>` | Molesto para usuarios | CSS animations con moderación |
| `<marquee>` | Molesto para usuarios | CSS animations |

### Nota sobre etiquetas deprecadas
Aunque algunas etiquetas como `<b>` e `<i>` técnicamente no están completamente deprecadas en HTML5, su uso debe ser limitado a casos específicos donde no hay alternativas semánticas apropiadas. La tendencia moderna es hacia la separación completa de contenido (HTML) y presentación (CSS).