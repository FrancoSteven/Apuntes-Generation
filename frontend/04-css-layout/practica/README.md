# README - Galería de Ejemplos CSS

Este proyecto contiene 18 ejemplos visuales que demuestran técnicas fundamentales y avanzadas de CSS para el diseño moderno de interfaces web. Cada sección incluye una explicación detallada del código y la intención de diseño.

---

## 🔢 Estilos Generales

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

* Se asegura de que los `padding` y `border` no alteren el tamaño real de los elementos.
* Se eliminan los espacios por defecto del navegador.

```css
body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f4f4f9;
  color: #333;
  line-height: 1.6;
}
```

* Tipografía legible y moderna.
* Fondo claro y texto oscuro para contraste.
* Espaciado entre líneas para mejorar la legibilidad.

```css
.page-header, .page-footer {
  text-align: center;
  background: #222;
  color: white;
  padding: 2rem 1rem;
}
```

* Encabezado y pie de página oscuros para destacar.
* Centrado de texto y espaciado generoso.

```css
.examples-container {
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
}
```

* Espaciado general para todo el contenido.
* Límite de ancho para mejor lectura.

```css
.ejemplo {
  margin-bottom: 3rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  padding: 1.5rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}
```

* Cada ejemplo se muestra en una "tarjeta" clara, con borde, radio y sombra.

---

## Ejemplos de Código y Explicación

### 01 - Flexbox dirección

```css
.ejemplo-01 .content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
```

* Los elementos se alinean en columna.
* Espaciado uniforme con `gap`.
* `align-items: center` centra los elementos horizontalmente.

### 02 - Grid con áreas

```css
.ejemplo-02 .content {
  display: grid;
  grid-template-areas: "a b c" "a b c";
  gap: 10px;
}
```

* Se crean tres columnas con áreas nombradas `a`, `b` y `c`.
* Imágenes posicionadas por área.

### 03 - Position Absolute

```css
.ejemplo-03 .content {
  position: relative;
}
.ejemplo-03 img {
  position: absolute;
}
```

* Se superponen las imágenes.
* Cada una con coordenadas distintas (`top`, `left`).

### 04 - Float

```css
.ejemplo-04 img {
  float: left;
  margin-right: 10px;
}
```

* Las imágenes se alinean horizontalmente con `float`.
* `overflow: auto` permite contenerlas correctamente.

### 05 - Transform al hover

```css
.ejemplo-05 img:hover {
  transform: scale(1.2) rotate(10deg);
}
```

* Al pasar el mouse, la imagen gira y aumenta de tamaño.

### 06 - Grid responsive

```css
.ejemplo-06 .content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
}
```

* Las columnas se ajustan según el ancho disponible.

### 07 - Flex-wrap

```css
.ejemplo-07 .content {
  display: flex;
  flex-wrap: wrap;
}
```

* Las imágenes se acomodan en líneas nuevas cuando no caben.

### 08 - object-fit

```css
.ejemplo-08 img {
  object-fit: cover;
}
```

* Las imágenes llenan su espacio sin distorsionarse.

### 09 - clip-path

```css
.ejemplo-09 img {
  clip-path: circle(50%);
}
```

* Imágenes recortadas en forma de círculo.

### 10 - aspect-ratio

```css
.ejemplo-10 img {
  aspect-ratio: 1 / 1;
}
```

* Mantiene proporción cuadrada automáticamente.

### 11 - Sticky Header

```css
.page-header {
  position: sticky;
  top: 0;
}
```

* El encabezado se mantiene visible al hacer scroll.

### 12 - Grid con fracciones

```css
.ejemplo-12 .content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}
```

* Se crean columnas que crecen proporcionalmente.

### 13 - Flex grow / shrink / basis

```css
.ejemplo-13 img {
  flex: 1 1 0;
}
```

* Las imágenes se expanden para llenar el espacio.

### 14 - Keyframes Animation

```css
@keyframes fadeIn { from {opacity:0;} to {opacity:1;} }
```

* Hace que las imágenes aparezcan con transición suave.

### 15 - Hover + Transition

```css
.ejemplo-15 img:hover {
  background-color: lightblue;
  transform: scale(1.1);
}
```

* Cambia color y escala al pasar el cursor.

### 16 - Media Queries

```css
@media screen and (min-width: 768px) {
  .ejemplo-16 img {
    width: 120px;
  }
}
```

* Las imágenes cambian de tamaño en pantallas grandes.

### 17 - Z-index

```css
.ejemplo-17 img:nth-child(3) {
  z-index: 3;
}
```

* Controla qué imagen queda por encima.

### 18 - Variables CSS

```css
:root {
  --color-bg: #e0f7fa;
}
.ejemplo-18 {
  background-color: var(--color-bg);
}
```

* Permite definir y reutilizar colores globales.

---

Cada ejemplo ha sido diseñado para enseñar una técnica puntual de CSS, aplicable a proyectos reales y con enfoque en UX/UI moderna.
