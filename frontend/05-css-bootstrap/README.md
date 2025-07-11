# 🚀 Bootstrap 5 - Guía Express para Bootcamp 

> **⏰ URGENTE:** Esta guía contiene TODO lo que necesitas saber de Bootstrap en 2 horas. Enfócate en los conceptos marcados con 🔥 - son los más importantes para conseguir tu primer trabajo.

## 📋 Contenido Express

1. [🎯 ¿Qué es Bootstrap y por qué lo necesitas?](#qué-es-bootstrap)
2. [⚡ Setup rápido](#setup-rápido)
3. [🔥 Sistema de Grid - EL MÁS IMPORTANTE](#sistema-de-grid)
4. [💪 Componentes esenciales](#componentes-esenciales)
5. [🎨 Utilidades que debes conocer](#utilidades-esenciales)
6. [📱 Responsive automático](#responsive)
7. [🛠️ Proyecto práctico](#proyecto-práctico)
8. [❌ Errores que debes evitar](#errores-comunes)

---

## 🎯 ¿Qué es Bootstrap?

**Bootstrap = CSS + JavaScript pre-construido**

### ✅ **Ventajas:**
- **Rapidez:** Creas layouts en minutos, no horas
- **Responsive:** Funciona en todos los dispositivos automáticamente
- **Profesional:** Diseño consistente y moderno
- **Empleo:** Lo usan el 90% de las empresas

### ❌ **Desventajas:**
- Todos los sitios se parecen (si no lo personalizas)
- Archivo pesado (si no lo optimizas)

### 🎯 **¿Cuándo usarlo?**
- ✅ Prototipos rápidos
- ✅ Proyectos con poco tiempo
- ✅ Equipos grandes (consistencia)
- ✅ Cuando no tienes diseñador

---

## ⚡ Setup rápido

### 🔥 **Opción 1: CDN (Más rápido)**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi App Bootstrap</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    
    <!-- Tu contenido aquí -->
    
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### 🔥 **Opción 2: NPM (Para proyectos reales)**

```bash
npm install bootstrap
```

```html
<!-- En tu HTML -->
<link href="node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
```

---

## 🔥 Sistema de Grid - EL MÁS IMPORTANTE

### 🎯 **Concepto clave:** Bootstrap usa 12 columnas

```
[1] [2] [3] [4] [5] [6] [7] [8] [9] [10] [11] [12]
```

### 🔧 **Estructura básica:**

```html
<div class="container">        <!-- Contenedor principal -->
  <div class="row">           <!-- Fila -->
    <div class="col">         <!-- Columna -->
      Contenido
    </div>
  </div>
</div>
```

### 💪 **Ejemplos prácticos:**

#### **2 columnas iguales:**
```html
<div class="container">
  <div class="row">
    <div class="col-6">Columna 1</div>
    <div class="col-6">Columna 2</div>
  </div>
</div>
```

#### **3 columnas iguales:**
```html
<div class="container">
  <div class="row">
    <div class="col-4">Columna 1</div>
    <div class="col-4">Columna 2</div>
    <div class="col-4">Columna 3</div>
  </div>
</div>
```

#### **Columnas desiguales:**
```html
<div class="container">
  <div class="row">
    <div class="col-8">Contenido principal</div>
    <div class="col-4">Sidebar</div>
  </div>
</div>
```

#### **Columnas automáticas:**
```html
<div class="container">
  <div class="row">
    <div class="col">Auto 1</div>
    <div class="col">Auto 2</div>
    <div class="col">Auto 3</div>
  </div>
</div>
```

### 🔥 **Responsive Grid (MUY IMPORTANTE):**

```html
<div class="container">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">
      <!-- Móvil: 100% ancho -->
      <!-- Tablet: 50% ancho -->
      <!-- Desktop: 33% ancho -->
    </div>
  </div>
</div>
```

#### **Breakpoints que debes memorizar:**
- `col-` = Móvil (siempre)
- `col-md-` = Tablet (768px+)
- `col-lg-` = Desktop (992px+)
- `col-xl-` = Desktop grande (1200px+)

---

## 💪 Componentes esenciales

### 🔥 **1. Navbar (Navegación)**

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">Mi Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sobre</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

### 🔥 **2. Cards (Tarjetas)**

```html
<div class="card" style="width: 18rem;">
  <img src="imagen.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Título</h5>
    <p class="card-text">Descripción del producto...</p>
    <a href="#" class="btn btn-primary">Comprar</a>
  </div>
</div>
```

### 🔥 **3. Buttons (Botones)**

```html
<!-- Colores principales -->
<button class="btn btn-primary">Primario</button>
<button class="btn btn-secondary">Secundario</button>
<button class="btn btn-success">Éxito</button>
<button class="btn btn-danger">Peligro</button>
<button class="btn btn-warning">Advertencia</button>

<!-- Tamaños -->
<button class="btn btn-primary btn-lg">Grande</button>
<button class="btn btn-primary">Normal</button>
<button class="btn btn-primary btn-sm">Pequeño</button>

<!-- Estilos -->
<button class="btn btn-outline-primary">Outline</button>
```

### 🔥 **4. Forms (Formularios)**

```html
<form>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" placeholder="tu@email.com">
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="password">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="remember">
    <label class="form-check-label" for="remember">Recordarme</label>
  </div>
  <button type="submit" class="btn btn-primary">Enviar</button>
</form>
```

### 🔥 **5. Modal (Ventana emergente)**

```html
<!-- Botón para abrir modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#miModal">
  Abrir Modal
</button>

<!-- Modal -->
<div class="modal fade" id="miModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Título del Modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <p>Contenido del modal aquí...</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>
```

---

## 🎨 Utilidades esenciales

### 🔥 **Spacing (Espaciado)**

```html
<!-- Margin -->
<div class="m-0">Sin margin</div>
<div class="m-1">Margin pequeño</div>
<div class="m-3">Margin normal</div>
<div class="m-5">Margin grande</div>

<!-- Padding -->
<div class="p-0">Sin padding</div>
<div class="p-1">Padding pequeño</div>
<div class="p-3">Padding normal</div>
<div class="p-5">Padding grande</div>

<!-- Direcciones específicas -->
<div class="mt-3">Margin top</div>
<div class="mb-3">Margin bottom</div>
<div class="ms-3">Margin start (izquierda)</div>
<div class="me-3">Margin end (derecha)</div>
<div class="mx-3">Margin horizontal</div>
<div class="my-3">Margin vertical</div>
```

### 🔥 **Text (Texto)**

```html
<p class="text-start">Texto izquierda</p>
<p class="text-center">Texto centrado</p>
<p class="text-end">Texto derecha</p>

<p class="text-uppercase">MAYÚSCULAS</p>
<p class="text-lowercase">minúsculas</p>
<p class="text-capitalize">Primera Letra Mayúscula</p>

<p class="fw-bold">Texto en negrita</p>
<p class="fw-normal">Texto normal</p>
<p class="fst-italic">Texto en cursiva</p>
```

### 🔥 **Colors (Colores)**

```html
<!-- Colores de texto -->
<p class="text-primary">Texto primario</p>
<p class="text-secondary">Texto secundario</p>
<p class="text-success">Texto éxito</p>
<p class="text-danger">Texto peligro</p>
<p class="text-warning">Texto advertencia</p>
<p class="text-info">Texto información</p>
<p class="text-light">Texto claro</p>
<p class="text-dark">Texto oscuro</p>

<!-- Fondos -->
<div class="bg-primary">Fondo primario</div>
<div class="bg-secondary">Fondo secundario</div>
<div class="bg-success">Fondo éxito</div>
<div class="bg-danger">Fondo peligro</div>
```

### 🔥 **Display & Flexbox**

```html
<!-- Display -->
<div class="d-none">Oculto</div>
<div class="d-block">Bloque</div>
<div class="d-inline">En línea</div>
<div class="d-flex">Flex</div>

<!-- Flexbox -->
<div class="d-flex justify-content-center">Centrado horizontal</div>
<div class="d-flex align-items-center">Centrado vertical</div>
<div class="d-flex justify-content-between">Separado</div>
<div class="d-flex justify-content-around">Con espacio</div>
```

---

## 📱 Responsive automático

### 🔥 **Clases responsive:**

```html
<!-- Ocultar en móvil, mostrar en desktop -->
<div class="d-none d-md-block">Solo desktop</div>

<!-- Mostrar en móvil, ocultar en desktop -->
<div class="d-block d-md-none">Solo móvil</div>

<!-- Texto responsive -->
<h1 class="display-1 display-md-3">Título responsive</h1>

<!-- Spacing responsive -->
<div class="p-2 p-md-5">Padding responsive</div>
```

### 🔥 **Grid responsive completo:**

```html
<div class="container">
  <div class="row">
    <!-- Móvil: 1 columna, Tablet: 2 columnas, Desktop: 3 columnas -->
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Producto 1</h5>
          <p class="card-text">Descripción...</p>
          <a href="#" class="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>
    
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Producto 2</h5>
          <p class="card-text">Descripción...</p>
          <a href="#" class="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>
    
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Producto 3</h5>
          <p class="card-text">Descripción...</p>
          <a href="#" class="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

## 🛠️ Proyecto práctico - Landing Page

### 🎯 **Estructura completa:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Landing Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="#">MiApp</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#inicio">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#servicios">Servicios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="inicio" class="bg-light py-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h1 class="display-4 fw-bold">Bienvenido a MiApp</h1>
                    <p class="lead">La mejor solución para tu negocio. Rápido, seguro y fácil de usar.</p>
                    <a href="#servicios" class="btn btn-primary btn-lg">Comenzar ahora</a>
                </div>
                <div class="col-lg-6">
                    <img src="https://via.placeholder.com/500x300" class="img-fluid rounded" alt="Hero">
                </div>
            </div>
        </div>
    </section>

    <!-- Servicios -->
    <section id="servicios" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Nuestros Servicios</h2>
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <h5 class="card-title">Desarrollo Web</h5>
                            <p class="card-text">Creamos sitios web modernos y responsive.</p>
                            <a href="#" class="btn btn-outline-primary">Más info</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <h5 class="card-title">Aplicaciones Móviles</h5>
                            <p class="card-text">Apps nativas para iOS y Android.</p>
                            <a href="#" class="btn btn-outline-primary">Más info</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <h5 class="card-title">Consultoría</h5>
                            <p class="card-text">Asesoramiento técnico especializado.</p>
                            <a href="#" class="btn btn-outline-primary">Más info</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contacto -->
    <section id="contacto" class="bg-light py-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <h2 class="text-center mb-4">Contáctanos</h2>
                    <form>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="nombre" class="form-label">Nombre</label>
                                <input type="text" class="form-control" id="nombre" required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" required>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="mensaje" class="form-label">Mensaje</label>
                            <textarea class="form-control" id="mensaje" rows="5" required></textarea>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-primary btn-lg">Enviar Mensaje</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white py-4">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h5>MiApp</h5>
                    <p>La mejor solución para tu negocio.</p>
                </div>
                <div class="col-md-6 text-md-end">
                    <p>&copy; 2024 MiApp. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

---

## ❌ Errores comunes y cómo evitarlos

### 🚫 **Error 1: Olvidar el viewport**

```html
<!-- ❌ MAL -->
<meta charset="UTF-8">
<title>Mi sitio</title>

<!-- ✅ BIEN -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Mi sitio</title>
```

### 🚫 **Error 2: No usar container**

```html
<!-- ❌ MAL -->
<div class="row">
  <div class="col-6">Contenido</div>
</div>

<!-- ✅ BIEN -->
<div class="container">
  <div class="row">
    <div class="col-6">Contenido</div>
  </div>
</div>
```

### 🚫 **Error 3: Columnas que no suman 12**

```html
<!-- ❌ MAL -->
<div class="row">
  <div class="col-5">Columna 1</div>
  <div class="col-5">Columna 2</div>
  <!-- 5 + 5 = 10, sobran 2 columnas -->
</div>

<!-- ✅ BIEN -->
<div class="row">
  <div class="col-6">Columna 1</div>
  <div class="col-6">Columna 2</div>
  <!-- 6 + 6 = 12, perfecto -->
</div>
```

### 🚫 **Error 4: Usar CSS inline innecesario**

```html
<!-- ❌ MAL -->
<div style="margin-top: 20px; text-align: center;">Contenido</div>

<!-- ✅ BIEN -->
<div class="mt-3 text-center">Contenido</div>
```

### 🚫 **Error 5: No usar clases responsive**

```html
<!-- ❌ MAL -->
<div class="col-3">Siempre 3 columnas</div>

<!-- ✅ BIEN -->
<div class="col-12 col-md-6 col-lg-3">Responsive</div>
```

---

## 🎯 Cheat Sheet - Memoriza esto

### 🔥 **Grid System:**
```
col-12 = 100% ancho
col-6 = 50% ancho
col-4 = 33% ancho
col-3 = 25% ancho
```

### 🔥 **Responsive Breakpoints:**
```
sm = 576px+ (móvil grande)
md = 768px+ (tablet)
lg = 992px+ (desktop)
xl = 1200px+ (desktop grande)
```

### 🔥 **Spacing:**
```
m-0 = margin: 0
m-1 = margin: 0.25rem
m-2 = margin: 0.5rem
m-3 = margin: 1rem
m-4 = margin: 1.5rem
m-5 = margin: 3rem
```

### 🔥 **Button Colors:**
```
btn-primary = azul
btn-secondary = gris
btn-success = verde
btn-danger = rojo
btn-warning = amarillo
btn-info = celeste
```

### 🔥 **Display Classes:**
```
d-none = display: none
d-block = display: block
d-flex = display: flex
d-inline = display: inline
```

---

## 🚀 Próximos pasos después de estas 2 horas

### 📚 **Practica con:**
1. **Recrea sitios famosos** (Twitter, Facebook, Netflix)
2. **Copia layouts** de sitios que te gusten
3. **Combina Bootstrap con CSS personalizado**
4. **Aprende a customizar Bootstrap** con SASS

### 🛠️ **Herramientas útiles:**
- **[Bootstrap Examples](https://getbootstrap.com/docs/5.3/examples/)** - Ejemplos oficiales
- **[Bootsnipp](https://bootsnipp.com/)** - Snippets de código
- **[Bootstrap Cheatsheet](https://bootstrap-cheatsheet.themeselection.com/)** - Referencia rápida

### 💡 **Recuerda:**
- **Bootstrap es una herramienta, no una solución mágica**
- **Aprende CSS básico** para customizar cuando necesites
- **No uses Bootstrap para TODO** - a veces CSS puro es mejor
- **Mantente actualizado** - Bootstrap evoluciona constantemente

---

> **🎯 ¡Felicidades!** Has aprendido lo esencial de Bootstrap en 2 horas. Ahora tienes las herramientas para crear sitios web profesionales y responsive. ¡Ve y construye algo increíble! 🚀

**¡El mercado laboral te está esperando! 💼**