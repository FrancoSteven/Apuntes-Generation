# Semana 8 - Introducción a HTML

Vamos a aprender HTML **de forma práctica, curiosa y hasta un poco juguetona**. Aquí no venimos solo a leer etiquetas, venimos a entender cómo funcionan las páginas web desde cero.

---

## 🧪 ¿Qué es realmente una página web?

Imagina que abres un **Bloc de notas** y escribes:

```
hola esta es mi pagina web
```

¿Eso ya es una página web? 🤔
Probablemente todos dirían: _“¡No! Eso es solo texto”_.

Pero ahora... ¿y si lo guardamos como `miweb.txt`, lo renombramos a `miweb.html` y lo abrimos con Google Chrome? 😮

¡Sorpresa! El navegador lo muestra igual. Porque **una página web es solo contenido multimedia** (texto, imágenes, enlaces, audio...). El navegador ya está preparado para mostrar muchas cosas **aunque no uses etiquetas HTML**.

Entonces, ¿por qué usar HTML?

Porque HTML es el lenguaje que usamos para **darle estructura** y **significado** a ese contenido.

Ejemplo: le decimos al navegador qué es un título, qué es una imagen, qué es un enlace. HTML le da orden a todo.

Y aquí entra un punto clave:

> Sabemos que existen filosofías en la programación o mentalidades, y siempre hablamos de **buenas prácticas**.
> Aunque hoy por hoy los navegadores pueden interpretar varias cosas sin necesidad de algunas etiquetas, **nuestro deber y responsabilidad como developers** es escribir el código **bien estructurado y con sentido semántico**.

Esto no solo ayuda a que el navegador entienda mejor, sino también a personas con discapacidad, a motores de búsqueda (SEO), y a otros programadores que leerán tu código.
👉 _Este concepto de "semántica" lo veremos más adelante con calma._

---

## ✨ Qué es HTML (y qué no es)

HTML **no es un lenguaje de programación**, porque **no tiene lógica**:

- No puedes hacer decisiones como “si esto ocurre, haz esto otro” (no tiene `if`, `for`, ni variables).
- Solo describe cómo debe organizarse la información.

Es un **lenguaje de marcado** o **etiquetado**, donde usamos "etiquetas" para indicar qué tipo de contenido estamos mostrando.

### ¿Qué es una etiqueta?

Una etiqueta es una instrucción que le dice al navegador cómo debe mostrar cierta parte del contenido.

Ejemplo:

```html
<h1>Hola Mundo</h1>
<p>Este es mi primer sitio web.</p>
```

- `<h1>` significa "esto es un título principal".
- `<p>` significa "esto es un párrafo".

En general, **cada etiqueta que abrimos debe cerrarse**:

```html
<p>Hola!</p>
```

Pero hay **algunas etiquetas que no se cierran** porque **no envuelven contenido**, simplemente colocan algo directo en la página. Estas se llaman _etiquetas vacías_ o _self-closing_.

Ejemplos:

```html
<img src="foto.jpg" alt="Mi foto" />
<hr />
<br />
```

### ¿Por qué no se cierran?

- Técnicamente, porque no necesitan contenido dentro. Su trabajo se hace solitos. 😎
- Y humorísticamente… porque son tan independientes que no necesitan pareja. ¡Son los solteros del HTML! 💁‍♂️

---

## 🧱 ¿Cómo funciona HTML?

HTML organiza el contenido como un **árbol jerárquico** (padres, hijos, ramas y hojas).
Esta jerarquía ayuda a que el navegador entienda qué mostrar primero, qué está dentro de qué, etc.

Y eso nos lleva a…

---

## 📖 Estructura básica de una página HTML

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Mi Primera Web</title>
  </head>
  <body>
    <h1>Bienvenidos</h1>
    <p>Este es el inicio de mi portafolio web.</p>
  </body>
</html>
```

### ¿Qué significa cada parte?

- `<!DOCTYPE html>`: Le dice al navegador que usaremos **HTML5**, la versión moderna. Existen versiones anteriores (HTML 1, 2, 3, 4), pero HTML5 fue el gran salto para hacer webs más interactivas, accesibles y multimedia. Si en el futuro surge un HTML6, también se declarará aquí.

- `<html lang="es">`: Indica que el contenido está escrito en español.

- `<head>`: Contiene metadatos, es decir, **información que el navegador necesita**, pero que el usuario no ve directamente.

  - `<meta charset="UTF-8">`: Le dice al navegador cómo interpretar los caracteres (para que los acentos se vean bien).

  - `<title>`: Es el texto que aparecerá en la pestaña del navegador.

- `<body>`: Contiene **todo lo que se mostrará visualmente** en la página (títulos, textos, imágenes, etc).

  - `<h1>`: Título principal de la página.
  - `<p>`: Un párrafo de texto.

---

## 💡 Tip: ¿Por qué HTML5?

HTML evolucionó en varias versiones:

- HTML 1.0, 2.0, 3.2, 4.01
- Luego llegó XHTML (una mezcla con XML)
- Pero **HTML5 trajo audio, video, canvas, etiquetas semánticas** como `<header>`, `<footer>`, y muchas mejoras.

HTML5 es **más flexible, moderno y potente** para construir sitios web dinámicos y accesibles.

---

---
## 💡 Tip: ¿Por qué el archivo principal se llama `index.html`?

Cuando subes tu sitio web a un servidor, la mayoría de los navegadores y servidores web buscan automáticamente un archivo llamado `index.html` en la carpeta principal. Si existe, lo muestran como la página de inicio del sitio, sin necesidad de escribir el nombre del archivo en la URL.  
Por eso, siempre nombramos el archivo principal como `index.html`: es el punto de entrada estándar para cualquier sitio