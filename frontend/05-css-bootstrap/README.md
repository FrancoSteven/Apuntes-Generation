# Bootstrap y Librerías CSS

## 🎯 ¿Qué es Bootstrap?

Bootstrap es un framework CSS creado por Twitter que te permite crear interfaces responsivas, estéticas y funcionales rápidamente, sin escribir todo desde cero. Es como tener un "kit de herramientas" con componentes prediseñados.

### 📊 Estadísticas importantes:

- Usado por más del 22% de sitios web a nivel mundial
- Más de 150,000 estrellas en GitHub
- Compatible con todos los navegadores modernos

## ✅ ¿Cuándo CONVIENE usarlo?

- Cuando necesitas prototipar rápido
- En equipos sin diseñador UX/UI
- Cuando buscas compatibilidad multiplataforma inmediata
- Para formularios, layouts, botones, cards, modales, etc. listos para usar
- En proyectos con deadlines ajustados
- Para mantener consistencia visual en equipos grandes

## ❌ ¿Cuándo NO conviene usarlo?

- Cuando necesitas un diseño personalizado o 100% distinto a lo predefinido
- En sitios que requieren máxima optimización y ligereza
- Si ya usas otro framework como Tailwind CSS o Material UI
- Para sitios web muy simples (landing pages básicas)
- Cuando el cliente exige un diseño único y diferenciador

## 🧠 Buenas prácticas

| ✅ Hacer esto                                             | ❌ No hacer esto                                             |
| --------------------------------------------------------- | ------------------------------------------------------------ |
| Usar clases predefinidas como btn, container, row, col    | Sobreescribir clases Bootstrap directamente                  |
| Crear una clase personalizada para ajustes                | Modificar el archivo bootstrap.css original                  |
| Leer la documentación oficial antes de usar un componente | Usar componentes al azar sin saber cómo funcionan            |
| Incluir Bootstrap por CDN para pruebas / prototipos       | Incluir Bootstrap desde varias fuentes o versiones distintas |
| Usar npm install bootstrap en proyectos escalables        | Cargar desde CDN en producción sin control de versiones      |

## 🔧 Cómo incluir Bootstrap

### 👉 Opción rápida (CDN)

```html
<head>
  <!-- CSS -->
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
</head>
<body>
  <!-- Tu contenido aquí -->

  <!-- JS al final del body -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
```

### 👉 Opción profesional (npm)

```bash
npm install bootstrap
```

En tu archivo JS/SCSS:

```js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
```

## 🧩 Componentes más usados (con ejemplos)

### ✅ Botones (.btn)

```html
<button class="btn btn-primary">Aceptar</button>
<button class="btn btn-danger">Eliminar</button>
<button class="btn btn-outline-secondary">Cancelar</button>
<button class="btn btn-success btn-lg">Botón Grande</button>
<button class="btn btn-warning btn-sm">Botón Pequeño</button>
```

### ✅ Sistema de columnas (.container, .row, .col)

```html
<div class="container">
  <div class="row">
    <div class="col-6">Columna 1</div>
    <div class="col-6">Columna 2</div>
  </div>
  <div class="row">
    <div class="col-md-4">Responsive 1</div>
    <div class="col-md-4">Responsive 2</div>
    <div class="col-md-4">Responsive 3</div>
  </div>
</div>
```

**📌 Tip:** Usa `container-fluid` si necesitas que el contenido ocupe todo el ancho de pantalla.

### ✅ Formulario básico

```html
<form>
  <div class="mb-3">
    <label class="form-label">Correo</label>
    <input type="email" class="form-control" placeholder="tu@email.com" />
  </div>
  <div class="mb-3">
    <label class="form-label">Contraseña</label>
    <input type="password" class="form-control" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="check1" />
    <label class="form-check-label" for="check1">Recordarme</label>
  </div>
  <button type="submit" class="btn btn-success">Enviar</button>
</form>
```

### ✅ Alerta (.alert)

```html
<div class="alert alert-warning" role="alert">
  ¡Este es un mensaje de advertencia!
</div>
<div class="alert alert-success alert-dismissible fade show" role="alert">
  ¡Operación exitosa!
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>
```

### ✅ Card (Tarjeta)

```html
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Título de la tarjeta</h5>
    <p class="card-text">Descripción del contenido.</p>
    <a href="#" class="btn btn-primary">Ir a algún lugar</a>
  </div>
</div>
```

### ✅ Modal (requiere JS de Bootstrap)

```html
<!-- Botón -->
<button
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#miModal"
>
  Abrir modal
</button>

<!-- Modal -->
<div class="modal fade" id="miModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Título del modal</h5>
        <button class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">Contenido del modal.</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Cerrar
        </button>
        <button type="button" class="btn btn-primary">Guardar cambios</button>
      </div>
    </div>
  </div>
</div>
```

## 🧱 Tabla COMPLETA de clases Bootstrap 5

### 📐 Layout y Contenedores

| Clase                       | Descripción                          | Ejemplo                         |
| --------------------------- | ------------------------------------ | ------------------------------- |
| `container`                 | Contenedor con márgenes fijos        | `<div class="container">`       |
| `container-fluid`           | Contenedor sin márgenes (100% ancho) | `<div class="container-fluid">` |
| `container-sm/md/lg/xl/xxl` | Contenedores responsivos             | `<div class="container-md">`    |
| `row`                       | Fila del sistema de grillas          | `<div class="row">`             |
| `col-*`                     | Columnas (1-12)                      | `<div class="col-6">`           |
| `col-sm/md/lg/xl/xxl-*`     | Columnas responsivas                 | `<div class="col-md-4">`        |

### 🎨 Botones

| Clase                                                          | Descripción             | Ejemplo                                    |
| -------------------------------------------------------------- | ----------------------- | ------------------------------------------ |
| `btn`                                                          | Botón base              | `<button class="btn">`                     |
| `btn-primary/secondary/success/danger/warning/info/light/dark` | Colores de botón        | `<button class="btn btn-primary">`         |
| `btn-outline-*`                                                | Botones con borde       | `<button class="btn btn-outline-primary">` |
| `btn-lg/sm`                                                    | Tamaños de botón        | `<button class="btn btn-lg">`              |
| `btn-block`                                                    | Botón de ancho completo | `<button class="btn btn-block">`           |

### 📝 Formularios

| Clase              | Descripción                  | Ejemplo                            |
| ------------------ | ---------------------------- | ---------------------------------- |
| `form-control`     | Input básico                 | `<input class="form-control">`     |
| `form-label`       | Etiqueta de formulario       | `<label class="form-label">`       |
| `form-check`       | Contenedor de checkbox/radio | `<div class="form-check">`         |
| `form-check-input` | Checkbox o radio             | `<input class="form-check-input">` |
| `form-check-label` | Etiqueta de checkbox/radio   | `<label class="form-check-label">` |
| `form-select`      | Select dropdown              | `<select class="form-select">`     |
| `form-floating`    | Labels flotantes             | `<div class="form-floating">`      |

### 🎯 Posicionamiento

| Clase                                            | Descripción        | Ejemplo                                            |
| ------------------------------------------------ | ------------------ | -------------------------------------------------- |
| `position-static/relative/absolute/fixed/sticky` | Tipos de posición  | `<div class="position-fixed">`                     |
| `top-0/50/100`                                   | Posición superior  | `<div class="position-absolute top-0">`            |
| `bottom-0/50/100`                                | Posición inferior  | `<div class="position-absolute bottom-0">`         |
| `start-0/50/100`                                 | Posición izquierda | `<div class="position-absolute start-0">`          |
| `end-0/50/100`                                   | Posición derecha   | `<div class="position-absolute end-0">`            |
| `translate-middle`                               | Centrar elemento   | `<div class="position-absolute translate-middle">` |

### 📱 Display y Visibilidad

| Clase                                        | Descripción             | Ejemplo                         |
| -------------------------------------------- | ----------------------- | ------------------------------- |
| `d-none/block/inline/inline-block/flex/grid` | Tipos de display        | `<div class="d-flex">`          |
| `d-sm/md/lg/xl/xxl-*`                        | Display responsivo      | `<div class="d-md-none">`       |
| `visible/invisible`                          | Visibilidad             | `<div class="invisible">`       |
| `overflow-hidden/auto/scroll`                | Comportamiento overflow | `<div class="overflow-hidden">` |

### 🔄 Flexbox

| Clase                                                    | Descripción              | Ejemplo                                       |
| -------------------------------------------------------- | ------------------------ | --------------------------------------------- |
| `d-flex/d-inline-flex`                                   | Activar flexbox          | `<div class="d-flex">`                        |
| `flex-row/column/row-reverse/column-reverse`             | Dirección flex           | `<div class="d-flex flex-column">`            |
| `flex-wrap/nowrap/wrap-reverse`                          | Wrapping                 | `<div class="d-flex flex-wrap">`              |
| `justify-content-start/center/end/between/around/evenly` | Justificación horizontal | `<div class="d-flex justify-content-center">` |
| `align-items-start/center/end/baseline/stretch`          | Alineación vertical      | `<div class="d-flex align-items-center">`     |
| `align-content-start/center/end/between/around/stretch`  | Alineación de contenido  | `<div class="d-flex align-content-center">`   |
| `flex-fill/grow-0/grow-1/shrink-0/shrink-1`              | Comportamiento flex      | `<div class="flex-fill">`                     |

### 📏 Spacing (Márgenes y Padding)

| Clase                | Descripción                                 | Ejemplo                 |
| -------------------- | ------------------------------------------- | ----------------------- |
| `m-0/1/2/3/4/5/auto` | Margen en todos los lados                   | `<div class="m-3">`     |
| `mt/mb/ms/me-*`      | Margen superior/inferior/izquierda/derecha  | `<div class="mt-2">`    |
| `mx/my-*`            | Margen horizontal/vertical                  | `<div class="mx-auto">` |
| `p-0/1/2/3/4/5`      | Padding en todos los lados                  | `<div class="p-4">`     |
| `pt/pb/ps/pe-*`      | Padding superior/inferior/izquierda/derecha | `<div class="pt-3">`    |
| `px/py-*`            | Padding horizontal/vertical                 | `<div class="px-2">`    |

### 🎨 Colores

| Clase                                                           | Descripción       | Ejemplo                                  |
| --------------------------------------------------------------- | ----------------- | ---------------------------------------- |
| `bg-primary/secondary/success/danger/warning/info/light/dark`   | Colores de fondo  | `<div class="bg-primary">`               |
| `text-primary/secondary/success/danger/warning/info/light/dark` | Colores de texto  | `<p class="text-success">`               |
| `text-muted/white`                                              | Texto especial    | `<p class="text-muted">`                 |
| `bg-opacity-10/25/50/75`                                        | Opacidad de fondo | `<div class="bg-primary bg-opacity-50">` |

### 📝 Texto

| Clase                                         | Descripción             | Ejemplo                                 |
| --------------------------------------------- | ----------------------- | --------------------------------------- |
| `text-start/center/end`                       | Alineación de texto     | `<p class="text-center">`               |
| `text-uppercase/lowercase/capitalize`         | Transformación de texto | `<p class="text-uppercase">`            |
| `fw-bold/normal/light/lighter/bolder`         | Peso de fuente          | `<p class="fw-bold">`                   |
| `fs-1/2/3/4/5/6`                              | Tamaño de fuente        | `<p class="fs-3">`                      |
| `fst-italic/normal`                           | Estilo de fuente        | `<p class="fst-italic">`                |
| `text-decoration-underline/line-through/none` | Decoración de texto     | `<p class="text-decoration-underline">` |

### 🎭 Efectos Visuales

| Clase                                                             | Descripción        | Ejemplo                               |
| ----------------------------------------------------------------- | ------------------ | ------------------------------------- |
| `rounded/rounded-circle/rounded-pill`                             | Bordes redondeados | `<div class="rounded">`               |
| `rounded-top/bottom/start/end`                                    | Bordes específicos | `<div class="rounded-top">`           |
| `shadow/shadow-sm/shadow-lg/shadow-none`                          | Sombras            | `<div class="shadow">`                |
| `border/border-0`                                                 | Bordes             | `<div class="border">`                |
| `border-top/bottom/start/end`                                     | Bordes específicos | `<div class="border-top">`            |
| `border-primary/secondary/success/danger/warning/info/light/dark` | Colores de borde   | `<div class="border border-primary">` |

### 🔔 Alertas

| Clase                                                            | Descripción                | Ejemplo                                 |
| ---------------------------------------------------------------- | -------------------------- | --------------------------------------- |
| `alert`                                                          | Alerta base                | `<div class="alert">`                   |
| `alert-primary/secondary/success/danger/warning/info/light/dark` | Colores de alerta          | `<div class="alert alert-success">`     |
| `alert-dismissible`                                              | Alerta que se puede cerrar | `<div class="alert alert-dismissible">` |
| `alert-link`                                                     | Enlaces dentro de alertas  | `<a class="alert-link">`                |

### 🃏 Cards

| Clase                      | Descripción          | Ejemplo                      |
| -------------------------- | -------------------- | ---------------------------- |
| `card`                     | Tarjeta base         | `<div class="card">`         |
| `card-body/header/footer`  | Partes de la tarjeta | `<div class="card-body">`    |
| `card-title/subtitle/text` | Contenido de tarjeta | `<h5 class="card-title">`    |
| `card-img-top/bottom`      | Imágenes en tarjeta  | `<img class="card-img-top">` |
| `card-group/deck/columns`  | Grupos de tarjetas   | `<div class="card-group">`   |

### 🧭 Navegación

| Clase            | Descripción           | Ejemplo                           |
| ---------------- | --------------------- | --------------------------------- |
| `nav`            | Navegación base       | `<nav class="nav">`               |
| `nav-link`       | Enlaces de navegación | `<a class="nav-link">`            |
| `nav-tabs/pills` | Estilos de navegación | `<nav class="nav nav-tabs">`      |
| `navbar`         | Barra de navegación   | `<nav class="navbar">`            |
| `navbar-brand`   | Logo/marca            | `<a class="navbar-brand">`        |
| `navbar-toggler` | Botón de hamburguesa  | `<button class="navbar-toggler">` |
| `navbar-nav`     | Lista de navegación   | `<ul class="navbar-nav">`         |

### 🎪 Componentes Interactivos

| Clase                                     | Descripción          | Ejemplo                            |
| ----------------------------------------- | -------------------- | ---------------------------------- |
| `modal`                                   | Modal base           | `<div class="modal">`              |
| `modal-dialog/content/header/body/footer` | Partes del modal     | `<div class="modal-dialog">`       |
| `dropdown`                                | Dropdown base        | `<div class="dropdown">`           |
| `dropdown-toggle/menu/item`               | Partes del dropdown  | `<button class="dropdown-toggle">` |
| `collapse`                                | Contenido colapsable | `<div class="collapse">`           |
| `accordion`                               | Acordeón             | `<div class="accordion">`          |

## 🔎 Cómo leer la documentación oficial

1. Ir a [getbootstrap.com](https://getbootstrap.com)
2. Elegir el componente que necesitas: navbar, card, form, etc.
3. Leer primero la descripción
4. Usar los ejemplos de código listos para copiar y adaptar
5. Probar en Codepen o tu editor
6. Personalizar según tus necesidades

## 🚫 Errores comunes y soluciones

| ❌ Error                                                 | ✅ Corrección                                              |
| -------------------------------------------------------- | ---------------------------------------------------------- |
| Modificar `.btn-primary` en CSS                          | Crear `.btn-custom` y usar `btn btn-custom`                |
| Usar `col-6` sin `row` y `container`                     | Siempre envolver columnas en `.row` dentro de `.container` |
| Pegar scripts de Bootstrap sin saber qué hacen           | Leer primero la doc y usar solo lo necesario               |
| No usar clases de spacing (m-, p-) y sobrecargar con CSS | Aprovechar las utilidades que ya existen                   |
| Mezclar versiones de Bootstrap                           | Usar una sola versión consistente                          |
| No probar en móviles                                     | Siempre usar las herramientas de desarrollador             |

## 🎯 Ejercicios prácticos para estudiantes

### 🏋️ Ejercicio 1: Crear un formulario de contacto

Crea un formulario con:

- Input de nombre
- Input de email
- Select de país
- Textarea de mensaje
- Checkbox de términos y condiciones
- Botón de envío

### 🏋️ Ejercicio 2: Layout de 3 columnas

Crea un layout que:

- En desktop: 3 columnas iguales
- En tablet: 2 columnas + 1 columna debajo
- En móvil: 1 columna

### 🏋️ Ejercicio 3: Tarjetas de productos

Crea 6 tarjetas con:

- Imagen de producto
- Título
- Precio
- Descripción breve
- Botón "Comprar"

## 📱 Breakpoints de Bootstrap 5

| Dispositivo       | Clase | Ancho   |
| ----------------- | ----- | ------- |
| Extra small       | `xs`  | <576px  |
| Small             | `sm`  | ≥576px  |
| Medium            | `md`  | ≥768px  |
| Large             | `lg`  | ≥992px  |
| Extra large       | `xl`  | ≥1200px |
| Extra extra large | `xxl` | ≥1400px |

## 🔧 Personalización avanzada

### Variables CSS personalizadas

```css
:root {
  --bs-primary: #007bff;
  --bs-secondary: #6c757d;
  --bs-success: #28a745;
}
```

### Compilación con SASS

```scss
// Importar funciones y variables
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";

// Personalizar variables
$primary: #007bff;
$secondary: #6c757d;

// Importar Bootstrap
@import "bootstrap";
```

## 🎯 Consejos finales para estudiantes

1. **Práctica constante**: Usa Bootstrap en todos tus proyectos iniciales
2. **Inspecciona el código**: Usa las herramientas de desarrollador para ver cómo funciona
3. **Combina con CSS personalizado**: Bootstrap es la base, no la limitación
4. **Mantente actualizado**: Sigue las versiones y cambios
5. **Comunidad**: Participa en foros y grupos de Bootstrap

## 📚 Recursos adicionales

- [Documentación oficial](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Bootstrap Themes](https://themes.getbootstrap.com/)
- [Ejemplos oficiales](https://getbootstrap.com/docs/5.3/examples/)
- [Codepen Bootstrap](https://codepen.io/collection/DrwPEr/)

¡Ahora estás listo para dominar Bootstrap! 🚀
