# JavaScript DOM - Manipulación e Interactividad

## ¿Qué es el DOM?

El **DOM (Document Object Model)** es una representación estructurada de un documento HTML como un árbol de objetos. Cada elemento HTML se convierte en un **nodo** que JavaScript puede manipular.

### Conceptos Fundamentales

```
document
    └── html
        ├── head
        │   ├── title
        │   └── meta
        └── body
            ├── h1
            ├── p
            └── div
                ├── span
                └── button
```

**Puntos Clave:**
- El DOM es la **interfaz** entre JavaScript y HTML
- Cada elemento HTML es un **objeto** con propiedades y métodos
- JavaScript puede **leer, modificar, agregar y eliminar** elementos
- Los cambios se reflejan **inmediatamente** en la página

### Ejemplo Básico

```html
<!DOCTYPE html>
<html>
<head>
    <title>Mi Página</title>
</head>
<body>
    <h1 id="titulo">¡Hola Mundo!</h1>
    <p class="descripcion">Esta es una descripción.</p>
    <button onclick="cambiarTitulo()">Cambiar Título</button>
    
    <script>
        function cambiarTitulo() {
            document.getElementById('titulo').textContent = '¡Título Cambiado!';
        }
    </script>
</body>
</html>
```

---

## 1. Selección de Elementos

### Métodos de Selección

```javascript
// Por ID (devuelve 1 elemento o null)
const titulo = document.getElementById('titulo');
const boton = document.getElementById('mi-boton');

// Por clase (devuelve HTMLCollection)
const parrafos = document.getElementsByClassName('parrafo');
const tarjetas = document.getElementsByClassName('tarjeta');

// Por etiqueta (devuelve HTMLCollection)
const todosLosDivs = document.getElementsByTagName('div');
const todasLasImagenes = document.getElementsByTagName('img');

// Por selector CSS (devuelve 1 elemento o null)
const primerParrafo = document.querySelector('p');
const botonPrimario = document.querySelector('.btn-primary');
const formulario = document.querySelector('#formulario-contacto');

// Por selector CSS (devuelve NodeList con todos los elementos)
const todosLosParrafos = document.querySelectorAll('p');
const todosBotones = document.querySelectorAll('.boton');
const linksExternos = document.querySelectorAll('a[href^="http"]');
```

### Diferencias Entre Métodos

```javascript
// getElementsByClassName vs querySelectorAll
const elementosPorClase = document.getElementsByClassName('item'); // HTMLCollection (LIVE)
const elementosPorQuery = document.querySelectorAll('.item');      // NodeList (STATIC)

// HTMLCollection se actualiza automáticamente
const lista = document.getElementById('lista');
lista.innerHTML = '<li class="item">Nuevo item</li>';
console.log(elementosPorClase.length); // Se actualiza automáticamente
console.log(elementosPorQuery.length); // Mantiene el valor original
```

### Ejemplos Prácticos

```html
<div class="contenedor">
    <h2 id="subtitulo">Productos</h2>
    <div class="producto" data-id="1">
        <h3>Laptop</h3>
        <p class="precio">$1000</p>
        <button class="btn-comprar">Comprar</button>
    </div>
    <div class="producto" data-id="2">
        <h3>Mouse</h3>
        <p class="precio">$20</p>
        <button class="btn-comprar">Comprar</button>
    </div>
</div>
```

```javascript
// Selecciones específicas
const subtitulo = document.getElementById('subtitulo');
const productos = document.querySelectorAll('.producto');
const botonesComprar = document.querySelectorAll('.btn-comprar');
const primerProducto = document.querySelector('.producto');

// Selecciones con atributos
const productoPorId = document.querySelector('[data-id="1"]');
const precioAlto = document.querySelector('.precio[data-precio="1000"]');

// Selecciones anidadas
const precioEnPrimerProducto = document.querySelector('.producto .precio');
```

---

## 2. Manipulación de Contenido

### Propiedades de Texto

```javascript
const elemento = document.getElementById('mi-elemento');

// textContent - solo texto, ignora HTML
elemento.textContent = 'Nuevo texto';
console.log(elemento.textContent); // "Nuevo texto"

// innerHTML - interpreta HTML
elemento.innerHTML = '<strong>Texto en negrita</strong>';
console.log(elemento.innerHTML); // "<strong>Texto en negrita</strong>"

// innerText - texto visible (respeta CSS)
elemento.innerText = 'Texto visible';
```

### Diferencias Importantes

```html
<div id="ejemplo">
    <p>Párrafo visible</p>
    <p style="display: none;">Párrafo oculto</p>
</div>
```

```javascript
const div = document.getElementById('ejemplo');

console.log(div.textContent);  // "Párrafo visible\nPárrafo oculto"
console.log(div.innerText);    // "Párrafo visible"
console.log(div.innerHTML);    // "<p>Párrafo visible</p><p style="display: none;">Párrafo oculto</p>"
```

### Manipulación de Atributos

```javascript
const imagen = document.querySelector('img');
const enlace = document.querySelector('a');

// getAttribute y setAttribute
const src = imagen.getAttribute('src');
imagen.setAttribute('src', 'nueva-imagen.jpg');
imagen.setAttribute('alt', 'Descripción de la imagen');

// Propiedades directas (más eficiente)
imagen.src = 'otra-imagen.jpg';
imagen.alt = 'Nueva descripción';
enlace.href = 'https://ejemplo.com';

// Verificar si existe un atributo
if (imagen.hasAttribute('data-id')) {
    console.log('Tiene data-id');
}

// Eliminar atributos
imagen.removeAttribute('data-temp');
```

### Atributos de Datos (Data Attributes)

```html
<div id="producto" data-id="123" data-precio="99.99" data-categoria="electrónica">
    Producto
</div>
```

```javascript
const producto = document.getElementById('producto');

// Acceso a data attributes
console.log(producto.dataset.id);        // "123"
console.log(producto.dataset.precio);    // "99.99"
console.log(producto.dataset.categoria); // "electrónica"

// Modificar data attributes
producto.dataset.id = '456';
producto.dataset.enOferta = 'true';

// Convertir a objetos útiles
const datosProducto = {
    id: parseInt(producto.dataset.id),
    precio: parseFloat(producto.dataset.precio),
    categoria: producto.dataset.categoria,
    enOferta: producto.dataset.enOferta === 'true'
};
```

---

## 3. Manipulación de Estilos y Clases

### Estilos CSS Directos

```javascript
const elemento = document.getElementById('mi-elemento');

// Modificar estilos individuales
elemento.style.color = 'red';
elemento.style.fontSize = '20px';
elemento.style.backgroundColor = 'yellow';
elemento.style.display = 'none';

// Múltiples estilos
elemento.style.cssText = 'color: blue; font-size: 16px; margin: 10px;';

// Obtener estilos computados
const estilos = getComputedStyle(elemento);
console.log(estilos.color);     // Color actual
console.log(estilos.fontSize);  // Tamaño de fuente actual
```

### Manipulación de Clases

```javascript
const elemento = document.querySelector('.mi-clase');

// Agregar clases
elemento.classList.add('nueva-clase');
elemento.classList.add('clase1', 'clase2', 'clase3');

// Eliminar clases
elemento.classList.remove('clase-vieja');
elemento.classList.remove('clase1', 'clase2');

// Alternar clase (toggle)
elemento.classList.toggle('activo'); // Agrega si no existe, elimina si existe

// Verificar si tiene una clase
if (elemento.classList.contains('activo')) {
    console.log('El elemento está activo');
}

// Reemplazar clase
elemento.classList.replace('clase-vieja', 'clase-nueva');

// Obtener todas las clases
console.log(elemento.classList); // DOMTokenList
console.log(elemento.className); // String con todas las clases
```

### Ejemplos Prácticos con Clases

```css
/* CSS */
.tarjeta {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 10px;
    transition: all 0.3s ease;
}

.tarjeta.destacada {
    border-color: #007bff;
    box-shadow: 0 4px 8px rgba(0,123,255,0.3);
}

.tarjeta.oculta {
    display: none;
}

.boton {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.boton.activo {
    background-color: #007bff;
    color: white;
}
```

```javascript
// Interactividad con clases
const tarjetas = document.querySelectorAll('.tarjeta');
const botones = document.querySelectorAll('.boton');

// Función para destacar tarjeta
function destacarTarjeta(tarjeta) {
    // Quitar destacado de todas las tarjetas
    tarjetas.forEach(t => t.classList.remove('destacada'));
    // Destacar la tarjeta actual
    tarjeta.classList.add('destacada');
}

// Función para mostrar/ocultar tarjeta
function toggleTarjeta(tarjeta) {
    tarjeta.classList.toggle('oculta');
}

// Sistema de botones activos
function activarBoton(botonActivo) {
    botones.forEach(b => b.classList.remove('activo'));
    botonActivo.classList.add('activo');
}
```

---

## 4. Creación y Manipulación de Elementos

### Crear Elementos

```javascript
// Crear elementos
const nuevoDiv = document.createElement('div');
const nuevoParrafo = document.createElement('p');
const nuevaImagen = document.createElement('img');
const nuevoEnlace = document.createElement('a');

// Configurar elementos
nuevoDiv.textContent = 'Soy un div nuevo';
nuevoDiv.classList.add('contenedor');

nuevoParrafo.innerHTML = 'Este es un <strong>párrafo</strong>';
nuevoParrafo.id = 'parrafo-dinamico';

nuevaImagen.src = 'imagen.jpg';
nuevaImagen.alt = 'Descripción de la imagen';

nuevoEnlace.href = 'https://ejemplo.com';
nuevoEnlace.textContent = 'Visitar sitio web';
nuevoEnlace.target = '_blank';
```

### Insertar Elementos en el DOM

```javascript
const contenedor = document.getElementById('contenedor');

// appendChild - agrega al final
contenedor.appendChild(nuevoDiv);
contenedor.appendChild(nuevoParrafo);

// insertBefore - inserta antes de un elemento específico
const referencia = document.getElementById('referencia');
contenedor.insertBefore(nuevoEnlace, referencia);

// insertAdjacentHTML - inserta HTML en posiciones específicas
contenedor.insertAdjacentHTML('beforebegin', '<p>Antes del contenedor</p>');
contenedor.insertAdjacentHTML('afterbegin', '<p>Al inicio del contenedor</p>');
contenedor.insertAdjacentHTML('beforeend', '<p>Al final del contenedor</p>');
contenedor.insertAdjacentHTML('afterend', '<p>Después del contenedor</p>');

// insertAdjacentElement - inserta elementos
contenedor.insertAdjacentElement('beforeend', nuevaImagen);
```

### Eliminar Elementos

```javascript
// remove() - elimina el elemento
const elementoAEliminar = document.getElementById('elemento');
elementoAEliminar.remove();

// removeChild() - elimina hijo específico
const padre = document.getElementById('contenedor');
const hijo = document.getElementById('hijo');
padre.removeChild(hijo);

// Eliminar todos los hijos
const lista = document.getElementById('lista');
while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
}

// Forma moderna de limpiar contenido
lista.innerHTML = '';
```

### Ejemplo Práctico: Lista de Tareas

```html
<div id="app">
    <h1>Lista de Tareas</h1>
    <input type="text" id="nueva-tarea" placeholder="Escribe una tarea...">
    <button id="agregar-tarea">Agregar</button>
    <ul id="lista-tareas"></ul>
</div>
```

```javascript
// Variables globales
const input = document.getElementById('nueva-tarea');
const botonAgregar = document.getElementById('agregar-tarea');
const listaTareas = document.getElementById('lista-tareas');

// Función para crear una nueva tarea
function crearTarea(texto) {
    // Crear elementos
    const li = document.createElement('li');
    const span = document.createElement('span');
    const botonEliminar = document.createElement('button');
    
    // Configurar elementos
    span.textContent = texto;
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.classList.add('btn-eliminar');
    
    // Agregar funcionalidad
    botonEliminar.onclick = function() {
        li.remove();
    };
    
    // Agregar al DOM
    li.appendChild(span);
    li.appendChild(botonEliminar);
    listaTareas.appendChild(li);
    
    // Limpiar input
    input.value = '';
}

// Event listeners
botonAgregar.onclick = function() {
    const texto = input.value.trim();
    if (texto !== '') {
        crearTarea(texto);
    }
};

// Agregar tarea con Enter
input.onkeypress = function(e) {
    if (e.key === 'Enter') {
        botonAgregar.click();
    }
};
```

---

## 5. Eventos

### ¿Qué son los Eventos?

Los **eventos** son acciones que ocurren en la página web: clicks, movimientos del mouse, teclas presionadas, etc. JavaScript puede "escuchar" estos eventos y ejecutar código en respuesta.

### Tipos de Eventos Comunes

```javascript
// Eventos del mouse
element.onclick = function() { };          // Click
element.ondblclick = function() { };       // Doble click
element.onmousedown = function() { };      // Botón del mouse presionado
element.onmouseup = function() { };        // Botón del mouse liberado
element.onmouseover = function() { };      // Mouse encima
element.onmouseout = function() { };       // Mouse sale
element.onmousemove = function() { };      // Mouse se mueve

// Eventos del teclado
document.onkeydown = function() { };       // Tecla presionada
document.onkeyup = function() { };         // Tecla liberada
document.onkeypress = function() { };      // Tecla presionada y liberada

// Eventos de formularios
form.onsubmit = function() { };            // Envío de formulario
input.onchange = function() { };           // Cambio en input
input.oninput = function() { };            // Entrada en input
input.onfocus = function() { };            // Input recibe foco
input.onblur = function() { };             // Input pierde foco

// Eventos de ventana
window.onload = function() { };            // Página cargada
window.onresize = function() { };          // Ventana redimensionada
window.onscroll = function() { };          // Scroll en la página
```

### Formas de Manejar Eventos

#### 1. Inline HTML (No recomendado)
```html
<button onclick="alert('¡Hola!')">Hacer Click</button>
```

#### 2. Propiedades del DOM
```javascript
const boton = document.getElementById('mi-boton');
boton.onclick = function() {
    alert('¡Botón clickeado!');
};
```

#### 3. addEventListener (Recomendado)
```javascript
const boton = document.getElementById('mi-boton');

boton.addEventListener('click', function() {
    alert('¡Botón clickeado!');
});

// Con arrow function
boton.addEventListener('click', () => {
    alert('¡Botón clickeado!');
});

// Con función nombrada
function manejarClick() {
    alert('¡Botón clickeado!');
}
boton.addEventListener('click', manejarClick);
```

### Objeto Event

```javascript
const boton = document.getElementById('mi-boton');

boton.addEventListener('click', function(evento) {
    console.log(evento);                    // Objeto Event completo
    console.log(evento.type);               // Tipo de evento: "click"
    console.log(evento.target);             // Elemento que disparó el evento
    console.log(evento.currentTarget);      // Elemento que maneja el evento
    console.log(evento.clientX);            // Coordenada X del mouse
    console.log(evento.clientY);            // Coordenada Y del mouse
    console.log(evento.timeStamp);          // Momento del evento
    
    // Prevenir comportamiento por defecto
    evento.preventDefault();
    
    // Detener propagación
    evento.stopPropagation();
});
```

### Ejemplos Prácticos de Eventos

#### Validación de Formularios
```html
<form id="formulario">
    <input type="email" id="email" placeholder="Email" required>
    <input type="password" id="password" placeholder="Contraseña" required>
    <button type="submit">Enviar</button>
</form>
<div id="mensajes"></div>
```

```javascript
const formulario = document.getElementById('formulario');
const email = document.getElementById('email');
const password = document.getElementById('password');
const mensajes = document.getElementById('mensajes');

// Validación en tiempo real
email.addEventListener('input', function() {
    if (this.value.includes('@')) {
        this.style.borderColor = 'green';
    } else {
        this.style.borderColor = 'red';
    }
});

password.addEventListener('input', function() {
    if (this.value.length >= 8) {
        this.style.borderColor = 'green';
    } else {
        this.style.borderColor = 'red';
    }
});

// Manejo del envío
formulario.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío automático
    
    if (validarFormulario()) {
        mensajes.innerHTML = '<p style="color: green;">Formulario válido</p>';
        // Aquí enviarías los datos
    } else {
        mensajes.innerHTML = '<p style="color: red;">Por favor, corrige los errores</p>';
    }
});

function validarFormulario() {
    return email.value.includes('@') && password.value.length >= 8;
}
```

#### Interactividad con Mouse
```html
<div id="caja" style="width: 200px; height: 200px; background: lightblue; margin: 20px;">
    Mueve el mouse aquí
</div>
<div id="info"></div>
```

```javascript
const caja = document.getElementById('caja');
const info = document.getElementById('info');

caja.addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'lightgreen';
    info.textContent = 'Mouse entró';
});

caja.addEventListener('mouseleave', function() {
    this.style.backgroundColor = 'lightblue';
    info.textContent = 'Mouse salió';
});

caja.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    info.textContent = `Posición: (${x}, ${y})`;
});
```

### Event Delegation (Delegación de Eventos)

```html
<ul id="lista">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
<button id="agregar">Agregar Item</button>
```

```javascript
const lista = document.getElementById('lista');
const botonAgregar = document.getElementById('agregar');

// Delegación de eventos - maneja clicks en elementos futuros
lista.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.style.backgroundColor = 'yellow';
        console.log('Clickeaste:', e.target.textContent);
    }
});

// Agregar nuevos elementos
botonAgregar.addEventListener('click', function() {
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = `Item ${lista.children.length + 1}`;
    lista.appendChild(nuevoItem);
    // Los nuevos elementos también funcionarán con el evento delegado
});
```

### Remover Event Listeners

```javascript
const boton = document.getElementById('mi-boton');

function manejarClick() {
    console.log('Click manejado');
}

// Agregar listener
boton.addEventListener('click', manejarClick);

// Remover listener (debe ser la misma función)
boton.removeEventListener('click', manejarClick);

// No funciona con funciones anónimas
boton.addEventListener('click', function() {
    console.log('No se puede remover');
});
```

---

## 6. Proyecto Práctico: Calculadora Interactiva

Vamos a crear una calculadora completa que combine todos los conceptos aprendidos:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
    <style>
        .calculadora {
            width: 300px;
            margin: 50px auto;
            background: #333;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }
        
        .pantalla {
            width: 100%;
            height: 60px;
            font-size: 24px;
            text-align: right;
            padding: 10px;
            border: none;
            background: #000;
            color: white;
            margin-bottom: 10px;
            border-radius: 5px;
        }
        
        .botones {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }
        
        .boton {
            height: 60px;
            font-size: 18px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        
        .boton:hover {
            opacity: 0.8;
        }
        
        .boton.numero {
            background: #666;
            color: white;
        }
        
        .boton.operador {
            background: #ff9500;
            color: white;
        }
        
        .boton.igual {
            background: #ff9500;
            color: white;
        }
        
        .boton.limpiar {
            background: #a6a6a6;
            color: black;
        }
        
        .boton.cero {
            grid-column: span 2;
        }
    </style>
</head>
<body>
    <div class="calculadora">
        <input type="text" class="pantalla" id="pantalla" readonly>
        <div class="botones">
            <button class="boton limpiar" data-accion="limpiar">C</button>
            <button class="boton limpiar" data-accion="borrar">⌫</button>
            <button class="boton operador" data-accion="dividir">÷</button>
            <button class="boton operador" data-accion="multiplicar">×</button>
            
            <button class="boton numero" data-numero="7">7</button>
            <button class="boton numero" data-numero="8">8</button>
            <button class="boton numero" data-numero="9">9</button>
            <button class="boton operador" data-accion="restar">-</button>
            
            <button class="boton numero" data-numero="4">4</button>
            <button class="boton numero" data-numero="5">5</button>
            <button class="boton numero" data-numero="6">6</button>
            <button class="boton operador" data-accion="sumar">+</button>
            
            <button class="boton numero" data-numero="1">1</button>
            <button class="boton numero" data-numero="2">2</button>
            <button class="boton numero" data-numero="3">3</button>
            <button class="boton igual" data-accion="igual" rowspan="2">=</button>
            
            <button class="boton numero cero" data-numero="0">0</button>
            <button class="boton numero" data-numero=".">.</button>
        </div>
    </div>

    <script>
        class Calculadora {
            constructor() {
                this.pantalla = document.getElementById('pantalla');
                this.numeroActual = '0';
                this.numeroAnterior = '';
                this.operador = '';
                this.iniciarEventos();
            }
            
            iniciarEventos() {
                // Delegación de eventos para todos los botones
                document.querySelector('.botones').addEventListener('click', (e) => {
                    if (e.target.classList.contains('boton')) {
                        this.manejarClick(e.target);
                    }
                });
                
                // Soporte para teclado
                document.addEventListener('keydown', (e) => {
                    this.manejarTeclado(e);
                });
            }
            
            manejarClick(boton) {
                if (boton.dataset.numero !== undefined) {
                    this.ingresarNumero(boton.dataset.numero);
                } else if (boton.dataset.accion) {
                    this.ejecutarAccion(boton.dataset.accion);
                }
            }
            
            manejarTeclado(e) {
                if (e.key >= '0' && e.key <= '9' || e.key === '.') {
                    this.ingresarNumero(e.key);
                } else if (e.key === '+') {
                    this.ejecutarAccion('sumar');
                } else if (e.key === '-') {
                    this.ejecutarAccion('restar');
                } else if (e.key === '*') {
                    this.ejecutarAccion('multiplicar');
                } else if (e.key === '/') {
                    e.preventDefault();
                    this.ejecutarAccion('dividir');
                } else if (e.key === 'Enter' || e.key === '=') {
                    this.ejecutarAccion('igual');
                } else if (e.key === 'Escape') {
                    this.ejecutarAccion('limpiar');
                } else if (e.key === 'Backspace') {
                    this.ejecutarAccion('borrar');
                }
            }
            
            ingresarNumero(num) {
                if (num === '.' && this.numeroActual.includes('.')) {
                    return;
                }
                
                if (this.numeroActual === '0' && num !== '.') {
                    this.numeroActual = num;
                } else {
                    this.numeroActual += num;
                }
                
                this.actualizarPantalla();
            }
            
            ejecutarAccion(accion) {
                switch (accion) {
                    case 'limpiar':
                        this.limpiar();
                        break;
                    case 'borrar':
                        this.borrar();
                        break;
                    case 'sumar':
                    case 'restar':
                    case 'multiplicar':
                    case 'dividir':
                        this.seleccionarOperador(accion);
                        break;
                    case 'igual':
                        this.calcular();
                        break;
                }
            }
            
            limpiar() {
                this.numeroActual = '0';
                this.numeroAnterior = '';
                this.operador = '';
                this.actualizarPantalla();
            }
            
            borrar() {
                if (this.numeroActual.length > 1) {
                    this.numeroActual = this.numeroActual.slice(0, -1);
                } else {
                    this.numeroActual = '0';
                }
                this.actualizarPantalla();
            }
            
            seleccionarOperador(nuevoOperador) {
                if (this.operador && this.numeroAnterior) {
                    this.calcular();
                }
                
                this.operador = nuevoOperador;
                this.numeroAnterior = this.numeroActual;
                this.numeroActual = '0';
            }
            
            calcular() {
                if (!this.operador || !this.numeroAnterior) {
                    return;
                }
                
                const anterior = parseFloat(this.numeroAnterior);
                const actual = parseFloat(this.numeroActual);
                let resultado;
                
                switch (this.operador) {
                    case 'sumar':
                        resultado = anterior + actual;
                        break;
                    case 'restar':
                        resultado = anterior - actual;
                        break;
                    case 'multiplicar':
                        resultado = anterior * actual;
                        break;
                    case 'dividir':
                        if (actual === 0) {
                            alert('No se puede dividir por cero');
                            return;
                            }
                        resultado = anterior / actual;
                        break;
                    default:
                        return;
                }
                
                this.numeroActual = resultado.toString();
                this.numeroAnterior = '';
                this.operador = '';
                this.actualizarPantalla();
            }
            
            actualizarPantalla() {
                this.pantalla.value = this.numeroActual;
            }
        }
        
        // Inicializar la calculadora cuando se carga la página
        document.addEventListener('DOMContentLoaded', function() {
            new Calculadora();
        });
    </script>
</body>
</html>
```

### Explicación del Código de la Calculadora

Esta calculadora demuestra varios conceptos importantes del DOM:

#### 1. **Selección de Elementos**
```javascript
this.pantalla = document.getElementById('pantalla');
```

#### 2. **Delegación de Eventos**
```javascript
document.querySelector('.botones').addEventListener('click', (e) => {
    if (e.target.classList.contains('boton')) {
        this.manejarClick(e.target);
    }
});
```

#### 3. **Uso de Data Attributes**
```html
<button class="boton numero" data-numero="7">7</button>
<button class="boton operador" data-accion="sumar">+</button>
```

```javascript
if (boton.dataset.numero !== undefined) {
    this.ingresarNumero(boton.dataset.numero);
}
```

#### 4. **Manipulación de Contenido**
```javascript
actualizarPantalla() {
    this.pantalla.value = this.numeroActual;
}
```

#### 5. **Eventos de Teclado**
```javascript
document.addEventListener('keydown', (e) => {
    this.manejarTeclado(e);
});
```

---

## 7. Conceptos Avanzados del DOM

### Navegación por el DOM

```javascript
const elemento = document.getElementById('mi-elemento');

// Navegación hacia arriba
console.log(elemento.parentNode);        // Elemento padre
console.log(elemento.parentElement);     // Elemento padre (solo elementos)

// Navegación hacia abajo
console.log(elemento.children);          // Hijos elementos
console.log(elemento.childNodes);        // Todos los nodos hijos
console.log(elemento.firstElementChild); // Primer hijo elemento
console.log(elemento.lastElementChild);  // Último hijo elemento

// Navegación lateral
console.log(elemento.nextElementSibling);     // Siguiente hermano
console.log(elemento.previousElementSibling); // Hermano anterior
```

### Ejemplo Práctico: Navegador de Imágenes

```html
<div class="galeria">
    <h2>Galería de Imágenes</h2>
    <div class="imagen-container">
        <img src="imagen1.jpg" alt="Imagen 1" class="imagen-actual">
        <img src="imagen2.jpg" alt="Imagen 2" class="imagen-oculta">
        <img src="imagen3.jpg" alt="Imagen 3" class="imagen-oculta">
    </div>
    <div class="controles">
        <button id="anterior">← Anterior</button>
        <span id="contador">1 / 3</span>
        <button id="siguiente">Siguiente →</button>
    </div>
</div>
```

```javascript
class GaleriaImagenes {
    constructor() {
        this.imagenes = document.querySelectorAll('.imagen-container img');
        this.imagenActual = 0;
        this.total = this.imagenes.length;
        this.contador = document.getElementById('contador');
        this.iniciarEventos();
        this.actualizarContador();
    }
    
    iniciarEventos() {
        document.getElementById('anterior').addEventListener('click', () => {
            this.imagenAnterior();
        });
        
        document.getElementById('siguiente').addEventListener('click', () => {
            this.imagenSiguiente();
        });
        
        // Navegación con teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.imagenAnterior();
            } else if (e.key === 'ArrowRight') {
                this.imagenSiguiente();
            }
        });
    }
    
    mostrarImagen(indice) {
        // Ocultar todas las imágenes
        this.imagenes.forEach(img => {
            img.classList.remove('imagen-actual');
            img.classList.add('imagen-oculta');
        });
        
        // Mostrar la imagen actual
        this.imagenes[indice].classList.remove('imagen-oculta');
        this.imagenes[indice].classList.add('imagen-actual');
        
        this.actualizarContador();
    }
    
    imagenSiguiente() {
        this.imagenActual = (this.imagenActual + 1) % this.total;
        this.mostrarImagen(this.imagenActual);
    }
    
    imagenAnterior() {
        this.imagenActual = (this.imagenActual - 1 + this.total) % this.total;
        this.mostrarImagen(this.imagenActual);
    }
    
    actualizarContador() {
        this.contador.textContent = `${this.imagenActual + 1} / ${this.total}`;
    }
}

// Inicializar galería
document.addEventListener('DOMContentLoaded', function() {
    new GaleriaImagenes();
});
```

### Animaciones con JavaScript

```javascript
// Función para animar elementos
function animar(elemento, propiedades, duracion = 1000) {
    const inicio = Date.now();
    const valoresIniciales = {};
    
    // Obtener valores iniciales
    for (let prop in propiedades) {
        valoresIniciales[prop] = parseFloat(getComputedStyle(elemento)[prop]) || 0;
    }
    
    function step() {
        const ahora = Date.now();
        const progreso = Math.min((ahora - inicio) / duracion, 1);
        
        // Aplicar valores interpolados
        for (let prop in propiedades) {
            const valorInicial = valoresIniciales[prop];
            const valorFinal = propiedades[prop];
            const valorActual = valorInicial + (valorFinal - valorInicial) * progreso;
            
            elemento.style[prop] = valorActual + 'px';
        }
        
        if (progreso < 1) {
            requestAnimationFrame(step);
        }
    }
    
    requestAnimationFrame(step);
}

// Ejemplo de uso
const caja = document.querySelector('.caja');
animar(caja, {
    left: 200,
    top: 100,
    width: 300,
    height: 200
}, 2000);
```

### Lazy Loading de Imágenes

```javascript
// Implementación de lazy loading
class LazyLoader {
    constructor() {
        this.imagenes = document.querySelectorAll('img[data-src]');
        this.observador = new IntersectionObserver(this.cargarImagen.bind(this));
        this.iniciar();
    }
    
    iniciar() {
        this.imagenes.forEach(img => {
            this.observador.observe(img);
        });
    }
    
    cargarImagen(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                this.observador.unobserve(img);
            }
        });
    }
}

// Uso en HTML
// <img data-src="imagen-real.jpg" src="placeholder.jpg" class="lazy" alt="Descripción">

// Inicializar lazy loading
document.addEventListener('DOMContentLoaded', function() {
    new LazyLoader();
});
```

---

## 8. Mejores Prácticas

### 1. **Separación de Responsabilidades**

```javascript
// ❌ Malo: Lógica mezclada
function crearBoton() {
    const boton = document.createElement('button');
    boton.textContent = 'Click me';
    boton.style.backgroundColor = 'blue';
    boton.style.color = 'white';
    boton.onclick = function() {
        alert('¡Clickeado!');
        this.style.backgroundColor = 'red';
    };
    return boton;
}

// ✅ Bueno: Responsabilidades separadas
function crearBoton() {
    const boton = document.createElement('button');
    boton.textContent = 'Click me';
    boton.classList.add('boton-primario');
    boton.addEventListener('click', manejarClickBoton);
    return boton;
}

function manejarClickBoton(e) {
    mostrarMensaje('¡Clickeado!');
    e.target.classList.add('boton-activo');
}

function mostrarMensaje(mensaje) {
    // Lógica para mostrar mensaje
}
```

### 2. **Uso de Constantes**

```javascript
// ✅ Bueno: Usar constantes para selectores
const SELECTORES = {
    BOTON_AGREGAR: '#agregar-tarea',
    LISTA_TAREAS: '#lista-tareas',
    INPUT_TAREA: '#nueva-tarea'
};

const CLASES = {
    TAREA_COMPLETADA: 'tarea-completada',
    TAREA_ACTIVA: 'tarea-activa',
    BOTON_ELIMINAR: 'btn-eliminar'
};

const botonAgregar = document.querySelector(SELECTORES.BOTON_AGREGAR);
const listaTareas = document.querySelector(SELECTORES.LISTA_TAREAS);
```

### 3. **Manejo de Errores**

```javascript
// ✅ Bueno: Validar existencia de elementos
function inicializarApp() {
    const boton = document.getElementById('mi-boton');
    
    if (!boton) {
        console.error('No se encontró el botón con id "mi-boton"');
        return;
    }
    
    boton.addEventListener('click', manejarClick);
}

// ✅ Bueno: Try-catch para operaciones riesgosas
function cargarDatos() {
    try {
        const datos = JSON.parse(localStorage.getItem('datos'));
        if (datos) {
            mostrarDatos(datos);
        }
    } catch (error) {
        console.error('Error al cargar datos:', error);
        mostrarMensajeError('Error al cargar datos guardados');
    }
}
```

### 4. **Optimización de Performance**

```javascript
// ✅ Bueno: Debouncing para eventos frecuentes
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

const buscarDebounced = debounce(function(termino) {
    realizarBusqueda(termino);
}, 300);

document.getElementById('busqueda').addEventListener('input', function(e) {
    buscarDebounced(e.target.value);
});

// ✅ Bueno: Throttling para scroll
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

const manejarScroll = throttle(function() {
    const scrollTop = window.pageYOffset;
    actualizarBarraProgreso(scrollTop);
}, 100);

window.addEventListener('scroll', manejarScroll);
```

### 5. **Código Modular**

```javascript
// ✅ Bueno: Organizar código en módulos
const AppTareas = {
    // Propiedades
    tareas: [],
    elementos: {
        lista: null,
        input: null,
        boton: null
    },
    
    // Métodos de inicialización
    init() {
        this.cachearElementos();
        this.iniciarEventos();
        this.cargarTareas();
    },
    
    cachearElementos() {
        this.elementos.lista = document.getElementById('lista-tareas');
        this.elementos.input = document.getElementById('nueva-tarea');
        this.elementos.boton = document.getElementById('agregar-tarea');
    },
    
    iniciarEventos() {
        this.elementos.boton.addEventListener('click', () => {
            this.agregarTarea();
        });
        
        this.elementos.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.agregarTarea();
            }
        });
    },
    
    // Métodos de funcionalidad
    agregarTarea() {
        const texto = this.elementos.input.value.trim();
        if (texto) {
            const tarea = {
                id: Date.now(),
                texto: texto,
                completada: false
            };
            this.tareas.push(tarea);
            this.renderizarTareas();
            this.elementos.input.value = '';
            this.guardarTareas();
        }
    },
    
    eliminarTarea(id) {
        this.tareas = this.tareas.filter(tarea => tarea.id !== id);
        this.renderizarTareas();
        this.guardarTareas();
    },
    
    completarTarea(id) {
        const tarea = this.tareas.find(t => t.id === id);
        if (tarea) {
            tarea.completada = !tarea.completada;
            this.renderizarTareas();
            this.guardarTareas();
        }
    },
    
    renderizarTareas() {
        this.elementos.lista.innerHTML = '';
        
        this.tareas.forEach(tarea => {
            const li = this.crearElementoTarea(tarea);
            this.elementos.lista.appendChild(li);
        });
    },
    
    crearElementoTarea(tarea) {
        const li = document.createElement('li');
        li.className = tarea.completada ? 'tarea-completada' : 'tarea-activa';
        
        li.innerHTML = `
            <span onclick="AppTareas.completarTarea(${tarea.id})">${tarea.texto}</span>
            <button onclick="AppTareas.eliminarTarea(${tarea.id})">Eliminar</button>
        `;
        
        return li;
    },
    
    // Persistencia
    guardarTareas() {
        localStorage.setItem('tareas', JSON.stringify(this.tareas));
    },
    
    cargarTareas() {
        const tareasGuardadas = localStorage.getItem('tareas');
        if (tareasGuardadas) {
            this.tareas = JSON.parse(tareasGuardadas);
            this.renderizarTareas();
        }
    }
};

// Inicializar aplicación
document.addEventListener('DOMContentLoaded', function() {
    AppTareas.init();
});
```

---

## 9. Debugging y Herramientas de Desarrollo

### Console Methods

```javascript
// Diferentes tipos de console
console.log('Información general');
console.warn('Advertencia');
console.error('Error');
console.info('Información');

// Agrupar mensajes
console.group('Grupo de mensajes');
console.log('Mensaje 1');
console.log('Mensaje 2');
console.groupEnd();

// Medir tiempo
console.time('Operación');
// ... código a medir ...
console.timeEnd('Operación');

// Mostrar tabla
const usuarios = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 }
];
console.table(usuarios);
```

### Debugging con Breakpoints

```javascript
function procesarDatos(datos) {
    debugger; // Pausa la ejecución aquí
    
    const datosProcesados = datos.map(item => {
        // Procesar cada item
        return {
            ...item,
            procesado: true
        };
    });
    
    return datosProcesados;
}
```

### Inspeccionar Eventos

```javascript
// Función para inspeccionar eventos
function inspeccionarEventos(elemento) {
    const eventos = getEventListeners(elemento);
    console.log('Eventos registrados:', eventos);
}

// Uso en consola del navegador
// inspeccionarEventos(document.getElementById('mi-boton'));
```

---

## 10. Proyecto Final: Dashboard Interactivo

Para consolidar todos los conocimientos, vamos a crear un dashboard completo que integra múltiples funcionalidades:

### Características del Dashboard:
- **Gestión de tareas** con persistencia en localStorage
- **Sistema de estadísticas** en tiempo real
- **Bloc de notas** con auto-guardado
- **Interfaz responsive** y moderna
- **Animaciones CSS** y transiciones
- **Arquitectura orientada a objetos**

### Funcionalidades Implementadas:

#### Gestión de Estado
```javascript
class Dashboard {
    constructor() {
        this.tareas = [];
        this.tiempoInicio = Date.now();
        this.elementos = this.cachearElementos();
        this.inicializar();
    }
}
```

#### Persistencia de Datos
- Uso de localStorage para mantener datos entre sesiones
- Auto-guardado de notas cada 5 segundos
- Carga automática de datos al inicializar

#### Interactividad Avanzada
- Event delegation para elementos dinámicos
- Validación de entrada en tiempo real
- Actualización automática de estadísticas
- Confirmaciones para acciones destructivas

### Código Completo:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Interactivo</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        
        .dashboard {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .header {
            background: white;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 20px;
        }
        
        .stat-card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            text-align: center;
            transition: transform 0.3s ease;
        }
        
        .stat-card:hover {
            transform: translateY(-5px);
        }
        
        .stat-number {
            font-size: 2em;
            font-weight: bold;
            color: #667eea;
        }
        
        .widgets {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        
        .widget {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .task-input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            margin-bottom: 10px;
        }
        
        .task-list {
            max-height: 200px;
            overflow-y: auto;
        }
        
        .task-item {
            padding: 10px;
            border-bottom: 1px solid #eee;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .task-item.completed {
            text-decoration: line-through;
            opacity: 0.6;
        }
        
        .note-area {
            width: 100%;
            min-height: 150px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            resize: vertical;
        }
        
        .btn {
            background: #667eea;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s ease;
        }
        
        .btn:hover {
            background: #5a67d8;
        }
        
        .btn-small {
            padding: 5px 10px;
            font-size: 0.8em;
        }
        
        .btn-danger {
            background: #e53e3e;
        }
        
        .btn-danger:hover {
            background: #c53030;
        }
        
        .progress-bar {
            width: 100%;
            height: 20px;
            background: #f0f0f0;
            border-radius: 10px;
            overflow: hidden;
            margin: 10px 0;
        }
        
        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #667eea, #764ba2);
            border-radius: 10px;
            transition: width 0.3s ease;
        }
    </style>
</head>
<body>
    <div class="dashboard">
        <div class="header">
            <h1>Dashboard Personal</h1>
            <p>Bienvenido, <span id="usuario-nombre">Usuario</span></p>
            <p>Fecha: <span id="fecha-actual"></span></p>
        </div>
        
        <div class="stats">
            <div class="stat-card">
                <div class="stat-number" id="total-tareas">0</div>
                <div>Tareas Totales</div>
            </div>
            <div class="stat-card">
                <div class="stat-number" id="tareas-completadas">0</div>
                <div>Tareas Completadas</div>
            </div>
            <div class="stat-card">
                <div class="stat-number" id="productividad">0%</div>
                <div>Productividad</div>
            </div>
            <div class="stat-card">
                <div class="stat-number" id="tiempo-activo">0</div>
                <div>Tiempo Activo (min)</div>
            </div>
        </div>
        
        <div class="widgets">
            <div class="widget">
                <h3>Gestor de Tareas</h3>
                <input type="text" id="nueva-tarea" class="task-input" placeholder="Nueva tarea...">
                <button id="agregar-tarea" class="btn">Agregar Tarea</button>
                <div id="lista-tareas" class="task-list"></div>
                <div class="progress-bar">
                    <div id="progreso-tareas" class="progress-fill" style="width: 0%"></div>
                </div>
            </div>
            
            <div class="widget">
                <h3>Bloc de Notas</h3>
                <textarea id="notas" class="note-area" placeholder="Escribe tus notas aquí..."></textarea>
                <button id="guardar-notas" class="btn">Guardar Notas</button>
                <button id="limpiar-notas" class="btn btn-danger">Limpiar</button>
            </div>
        </div>
    </div>

    <script>
        class Dashboard {
            constructor() {
                this.tareas = [];
                this.tiempoInicio = Date.now();
                this.elementos = this.cachearElementos();
                this.inicializar();
            }
            
            cachearElementos() {
                return {
                    usuarioNombre: document.getElementById('usuario-nombre'),
                    fechaActual: document.getElementById('fecha-actual'),
                    totalTareas: document.getElementById('total-tareas'),
                    tareasCompletadas: document.getElementById('tareas-completadas'),
                    productividad: document.getElementById('productividad'),
                    tiempoActivo: document.getElementById('tiempo-activo'),
                    nuevaTarea: document.getElementById('nueva-tarea'),
                    agregarTarea: document.getElementById('agregar-tarea'),
                    listaTareas: document.getElementById('lista-tareas'),
                    progresoTareas: document.getElementById('progreso-tareas'),
                    notas: document.getElementById('notas'),
                    guardarNotas: document.getElementById('guardar-notas'),
                    limpiarNotas: document.getElementById('limpiar-notas')
                };
            }
            
            inicializar() {
                this.configurarFecha();
                this.cargarDatos();
                this.iniciarEventos();
                this.actualizarTiempo();
                this.renderizar();
            }
            
            configurarFecha() {
                const fecha = new Date();
                this.elementos.fechaActual.textContent = fecha.toLocaleDateString('es-ES', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
            }
            
            iniciarEventos() {
                this.elementos.agregarTarea.addEventListener('click', () => {
                    this.agregarTarea();
                });
                
                this.elementos.nuevaTarea.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        this.agregarTarea();
                    }
                });
                
                this.elementos.guardarNotas.addEventListener('click', () => {
                    this.guardarNotas();
                });
                
                this.elementos.limpiarNotas.addEventListener('click', () => {
                    this.limpiarNotas();
                });
                
                // Auto-guardar notas cada 5 segundos
                setInterval(() => {
                    this.guardarNotas();
                }, 5000);
            }
            
            agregarTarea() {
                const texto = this.elementos.nuevaTarea.value.trim();
                if (texto) {
                    const tarea = {
                        id: Date.now(),
                        texto: texto,
                        completada: false,
                        fechaCreacion: new Date().toISOString()
                    };
                    
                    this.tareas.push(tarea);
                    this.elementos.nuevaTarea.value = '';
                    this.guardarDatos();
                    this.renderizar();
                }
            }
            
            toggleTarea(id) {
                const tarea = this.tareas.find(t => t.id === id);
                if (tarea) {
                    tarea.completada = !tarea.completada;
                    this.guardarDatos();
                    this.renderizar();
                }
            }
            
            eliminarTarea(id) {
                this.tareas = this.tareas.filter(t => t.id !== id);
                this.guardarDatos();
                this.renderizar();
            }
            
            renderizar() {
                this.renderizarTareas();
                this.actualizarEstadisticas();
            }
            
            renderizarTareas() {
                this.elementos.listaTareas.innerHTML = '';
                
                this.tareas.forEach(tarea => {
                    const div = document.createElement('div');
                    div.className = `task-item ${tarea.completada ? 'completed' : ''}`;
                    
                    div.innerHTML = `
                        <span onclick="dashboard.toggleTarea(${tarea.id})" style="cursor: pointer;">
                            ${tarea.completada ? '✓' : '○'} ${tarea.texto}
                        </span>
                        <button onclick="dashboard.eliminarTarea(${tarea.id})" class="btn btn-small btn-danger">
                            ×
                        </button>
                    `;
                    
                    this.elementos.listaTareas.appendChild(div);
                });
            }
            
            actualizarEstadisticas() {
                const total = this.tareas.length;
                const completadas = this.tareas.filter(t => t.completada).length;
                const productividad = total > 0 ? Math.round((completadas / total) * 100) : 0;
                
                this.elementos.totalTareas.textContent = total;
                this.elementos.tareasCompletadas.textContent = completadas;
                this.elementos.productividad.textContent = productividad + '%';
                
                // Actualizar barra de progreso
                this.elementos.progresoTareas.style.width = productividad + '%';
            }
            
            actualizarTiempo() {
                setInterval(() => {
                    const tiempoTranscurrido = Math.floor((Date.now() - this.tiempoInicio) / 60000);
                    this.elementos.tiempoActivo.textContent = tiempoTranscurrido;
                }, 60000);
            }
            
            guardarNotas() {
                const notas = this.elementos.notas.value;
                localStorage.setItem('dashboard-notas', notas);
            }
            
            limpiarNotas() {
                if (confirm('¿Estás seguro de que quieres limpiar todas las notas?')) {
                    this.elementos.notas.value = '';
                    localStorage.removeItem('dashboard-notas');
                }
            }
            
            cargarDatos() {
                // Cargar tareas
                const tareasGuardadas = localStorage.getItem('dashboard-tareas');
                if (tareasGuardadas) {
                    this.tareas = JSON.parse(tareasGuardadas);
                }
                
                // Cargar notas
                const notasGuardadas = localStorage.getItem('dashboard-notas');
                if (notasGuardadas) {
                    this.elementos.notas.value = notasGuardadas;
                }
                
                // Cargar nombre de usuario
                const nombreUsuario = localStorage.getItem('dashboard-usuario');
                if (nombreUsuario) {
                    this.elementos.usuarioNombre.textContent = nombreUsuario;
                } else {
                    const nombre = prompt('¿Cuál es tu nombre?');
                    if (nombre) {
                        localStorage.setItem('dashboard-usuario', nombre);
                        this.elementos.usuarioNombre.textContent = nombre;
                    }
                }
            }
            
            guardarDatos() {
                localStorage.setItem('dashboard-tareas', JSON.stringify(this.tareas));
            }
        }
        
        // Inicializar dashboard
        let dashboard;
        document.addEventListener('DOMContentLoaded', function() {
            dashboard = new Dashboard();
        });
    </script>
</body>
</html>
```

### Explicación del Código:

#### 1. **Arquitectura de Clases**
- Uso del patrón de diseño orientado a objetos
- Separación clara de responsabilidades
- Cacheo de elementos DOM para mejor rendimiento

#### 2. **Gestión de Estado**
- Estado centralizado en la clase Dashboard
- Persistencia automática con localStorage
- Sincronización entre interfaz y datos

#### 3. **Interactividad Avanzada**
- Event listeners con arrow functions
- Manejo de eventos de teclado (Enter)
- Confirmaciones para acciones destructivas

#### 4. **Optimización de Rendimiento**
- Cacheo de elementos DOM
- Actualización selectiva de la interfaz
- Uso de intervalos para actualizaciones automáticas

---

## 11. Formularios y Validación

### Selección de Elementos de Formulario

Los formularios son una parte crucial de la interactividad web. JavaScript nos permite acceder y manipular elementos de formulario de manera eficiente:

```javascript
// Seleccionar formulario
const formulario = document.getElementById('mi-formulario');

// Seleccionar elementos por tipo
const inputs = document.querySelectorAll('input');
const selects = document.querySelectorAll('select');
const textareas = document.querySelectorAll('textarea');

// Acceder a elementos por nombre
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');

// Usar la propiedad elements del formulario
const nombreInput = formulario.elements['nombre'];
const emailInput = formulario.elements.email;
```

### Validación en Tiempo Real

La validación en tiempo real mejora significativamente la experiencia del usuario:

```javascript
class FormValidator {
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);
        this.rules = {};
        this.init();
    }
    
    init() {
        this.form.addEventListener('input', (e) => {
            this.validateField(e.target);
        });
        
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.validateForm();
        });
    }
    
    addRule(fieldName, validator, message) {
        this.rules[fieldName] = { validator, message };
    }
    
    validateField(field) {
        const rule = this.rules[field.name];
        if (!rule) return;
        
        const isValid = rule.validator(field.value);
        this.showFieldResult(field, isValid, rule.message);
        
        return isValid;
    }
    
    validateForm() {
        let isFormValid = true;
        
        Object.keys(this.rules).forEach(fieldName => {
            const field = this.form.elements[fieldName];
            if (field) {
                const fieldValid = this.validateField(field);
                if (!fieldValid) isFormValid = false;
            }
        });
        
        if (isFormValid) {
            this.onSuccess();
        }
    }
    
    showFieldResult(field, isValid, message) {
        const errorElement = document.querySelector(`#error-${field.name}`);
        
        if (isValid) {
            field.classList.remove('invalid');
            field.classList.add('valid');
            if (errorElement) errorElement.textContent = '';
        } else {
            field.classList.remove('valid');
            field.classList.add('invalid');
            if (errorElement) errorElement.textContent = message;
        }
    }
    
    onSuccess() {
        console.log('Formulario válido');
        // Aquí puedes enviar los datos
    }
}

// Ejemplo de uso
const validator = new FormValidator('#registro-form');

validator.addRule('email', (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
}, 'Email inválido');

validator.addRule('password', (value) => {
    return value.length >= 8;
}, 'La contraseña debe tener al menos 8 caracteres');
```

### Manejo de Eventos de Formulario

```javascript
// Evento submit
formulario.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir envío por defecto
    
    // Obtener datos del formulario
    const formData = new FormData(formulario);
    const datos = Object.fromEntries(formData);
    
    console.log('Datos del formulario:', datos);
});

// Evento change
document.querySelector('select').addEventListener('change', function(e) {
    console.log('Nuevo valor seleccionado:', e.target.value);
});

// Evento input (se dispara con cada cambio)
document.querySelector('input').addEventListener('input', function(e) {
    console.log('Valor actual:', e.target.value);
});

// Evento focus y blur
const input = document.querySelector('input');
input.addEventListener('focus', () => {
    input.classList.add('focused');
});

input.addEventListener('blur', () => {
    input.classList.remove('focused');
});
```

### Validación Personalizada con HTML5 y JavaScript

```javascript
// Validación personalizada con HTML5
const emailInput = document.querySelector('input[type="email"]');

emailInput.addEventListener('input', function() {
    if (this.validity.valueMissing) {
        this.setCustomValidity('Por favor, ingresa tu email');
    } else if (this.validity.typeMismatch) {
        this.setCustomValidity('Por favor, ingresa un email válido');
    } else {
        this.setCustomValidity('');
    }
});

// Validación compleja personalizada
function validarFormulario() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        document.getElementById('confirm-password').setCustomValidity('Las contraseñas no coinciden');
        return false;
    }
    
    return true;
}
```

### Mensajes de Error Dinámicos

```javascript
class ErrorManager {
    constructor() {
        this.errors = {};
    }
    
    addError(field, message) {
        this.errors[field] = message;
        this.showError(field, message);
    }
    
    removeError(field) {
        delete this.errors[field];
        this.hideError(field);
    }
    
    showError(field, message) {
        let errorElement = document.querySelector(`#error-${field}`);
        
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.id = `error-${field}`;
            errorElement.className = 'error-message';
            
            const fieldElement = document.querySelector(`[name="${field}"]`);
            fieldElement.parentNode.insertBefore(errorElement, fieldElement.nextSibling);
        }
        
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    hideError(field) {
        const errorElement = document.querySelector(`#error-${field}`);
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    }
    
    hasErrors() {
        return Object.keys(this.errors).length > 0;
    }
}
```

---

## 12. APIs del Navegador Relacionadas con el DOM

### Intersection Observer API

Esta API permite observar cambios en la intersección de un elemento con su contenedor padre o con el viewport:

```javascript
// Lazy loading básico
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
});

// Observar todas las imágenes lazy
document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// Animaciones al hacer scroll
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    animationObserver.observe(el);
});

// Infinite scroll
const infiniteScrollObserver = new IntersectionObserver((entries) => {
    const lastItem = entries[0];
    if (lastItem.isIntersecting) {
        loadMoreContent();
    }
}, {
    rootMargin: '100px'
});

function loadMoreContent() {
    // Lógica para cargar más contenido
    console.log('Cargando más contenido...');
}
```

### Mutation Observer API

Observa cambios en el DOM y reacciona a ellos:

```javascript
// Observar cambios en el DOM
const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    console.log('Elemento agregado:', node);
                    // Inicializar funcionalidad en nuevos elementos
                    initializeNewElement(node);
                }
            });
        }
        
        if (mutation.type === 'attributes') {
            console.log('Atributo cambiado:', mutation.attributeName);
        }
    });
});

// Configurar observación
mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['class', 'data-state']
});

// Ejemplo: Auto-inicialización de componentes
function initializeNewElement(element) {
    // Buscar elementos que necesiten inicialización
    const buttons = element.querySelectorAll('.dynamic-button');
    buttons.forEach(button => {
        button.addEventListener('click', handleDynamicClick);
    });
}
```

### Resize Observer API

Observa cambios en el tamaño de elementos:

```javascript
// Observar cambios de tamaño
const resizeObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
        const element = entry.target;
        const { width, height } = entry.contentRect;
        
        console.log(`${element.className} - Nuevo tamaño: ${width}x${height}`);
        
        // Ajustar comportamiento según el tamaño
        if (width < 768) {
            element.classList.add('mobile');
        } else {
            element.classList.remove('mobile');
        }
    });
});

// Observar múltiples elementos
document.querySelectorAll('.responsive-component').forEach(el => {
    resizeObserver.observe(el);
});

// Ejemplo: Gráfico responsive
class ResponsiveChart {
    constructor(container) {
        this.container = container;
        this.setupResizeObserver();
    }
    
    setupResizeObserver() {
        const resizeObserver = new ResizeObserver(() => {
            this.redraw();
        });
        
        resizeObserver.observe(this.container);
    }
    
    redraw() {
        // Lógica para redibujar el gráfico
        console.log('Redibujando gráfico...');
    }
}
```

### Web APIs Útiles

#### Geolocation API
```javascript
// Obtener ubicación del usuario
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            
            updateLocationDisplay(lat, lon);
        },
        (error) => {
            console.error('Error obteniendo ubicación:', error);
        }
    );
}

function updateLocationDisplay(lat, lon) {
    const locationElement = document.getElementById('location');
    locationElement.textContent = `Ubicación: ${lat.toFixed(2)}, ${lon.toFixed(2)}`;
}
```

#### Clipboard API
```javascript
// Copiar al portapapeles
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showNotification('Texto copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar:', err);
    }
}

// Leer del portapapeles
async function readFromClipboard() {
    try {
        const text = await navigator.clipboard.readText();
        document.getElementById('paste-area').value = text;
    } catch (err) {
        console.error('Error al leer portapapeles:', err);
    }
}

// Botón de copiar
document.getElementById('copy-btn').addEventListener('click', () => {
    const text = document.getElementById('text-to-copy').value;
    copyToClipboard(text);
});
```

#### Web Storage API
```javascript
// localStorage y sessionStorage
class StorageManager {
    static set(key, value, session = false) {
        const storage = session ? sessionStorage : localStorage;
        storage.setItem(key, JSON.stringify(value));
    }
    
    static get(key, session = false) {
        const storage = session ? sessionStorage : localStorage;
        const item = storage.getItem(key);
        return item ? JSON.parse(item) : null;
    }
    
    static remove(key, session = false) {
        const storage = session ? sessionStorage : localStorage;
        storage.removeItem(key);
    }
    
    static clear(session = false) {
        const storage = session ? sessionStorage : localStorage;
        storage.clear();
    }
}

// Ejemplo de uso
StorageManager.set('user', { name: 'Juan', email: 'juan@email.com' });
const user = StorageManager.get('user');
```

---

## 13. Accesibilidad (A11y) en el DOM

### Atributos ARIA

ARIA (Accessible Rich Internet Applications) proporciona información adicional para tecnologías de asistencia:

```javascript
// Configurar roles y propiedades ARIA
function setupAccessibilityFeatures() {
    // Botón de toggle
    const toggleButton = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.setAttribute('aria-controls', 'menu');
    menu.setAttribute('aria-hidden', 'true');
    
    toggleButton.addEventListener('click', () => {
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
        
        toggleButton.setAttribute('aria-expanded', !isExpanded);
        menu.setAttribute('aria-hidden', isExpanded);
        
        if (!isExpanded) {
            menu.querySelector('a').focus();
        }
    });
}

// Etiquetas dinámicas
function updateAriaLabel(element, text) {
    element.setAttribute('aria-label', text);
}

// Estados de carga
function showLoadingState(button) {
    button.setAttribute('aria-busy', 'true');
    button.setAttribute('aria-label', 'Cargando...');
    button.disabled = true;
}

function hideLoadingState(button, originalLabel) {
    button.setAttribute('aria-busy', 'false');
    button.setAttribute('aria-label', originalLabel);
    button.disabled = false;
}

// Anuncios dinámicos
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}
```

### Navegación por Teclado

```javascript
// Navegación con teclado
class KeyboardNavigation {
    constructor(container) {
        this.container = container;
        this.focusableElements = this.getFocusableElements();
        this.currentIndex = 0;
        
        this.init();
    }
    
    init() {
        this.container.addEventListener('keydown', (e) => {
            this.handleKeydown(e);
        });
        
        // Hacer el contenedor focusable
        if (!this.container.hasAttribute('tabindex')) {
            this.container.setAttribute('tabindex', '0');
        }
    }
    
    getFocusableElements() {
        const selector = 'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';
        return Array.from(this.container.querySelectorAll(selector));
    }
    
    handleKeydown(e) {
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                this.moveFocus(1);
                break;
            case 'ArrowUp':
                e.preventDefault();
                this.moveFocus(-1);
                break;
            case 'Home':
                e.preventDefault();
                this.focusFirst();
                break;
            case 'End':
                e.preventDefault();
                this.focusLast();
                break;
            case 'Escape':
                this.handleEscape();
                break;
        }
    }
    
    moveFocus(direction) {
        this.currentIndex = (this.currentIndex + direction + this.focusableElements.length) % this.focusableElements.length;
        this.focusableElements[this.currentIndex].focus();
    }
    
    focusFirst() {
        this.currentIndex = 0;
        this.focusableElements[0].focus();
    }
    
    focusLast() {
        this.currentIndex = this.focusableElements.length - 1;
        this.focusableElements[this.currentIndex].focus();
    }
    
    handleEscape() {
        this.container.focus();
    }
}

// Implementar skip links
function createSkipLink(target, text) {
    const skipLink = document.createElement('a');
    skipLink.href = `#${target}`;
    skipLink.textContent = text;
    skipLink.className = 'skip-link';
    
    skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById(target).focus();
    });
    
    return skipLink;
}
```

### Screen Readers y JavaScript

```javascript
// Gestión de focus para screen readers
class ScreenReaderSupport {
    constructor() {
        this.liveRegion = this.createLiveRegion();
    }
    
    createLiveRegion() {
        const region = document.createElement('div');
        region.setAttribute('aria-live', 'polite');
        region.setAttribute('aria-atomic', 'true');
        region.className = 'sr-only';
        region.style.cssText = `
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        `;
        document.body.appendChild(region);
        return region;
    }
    
    announce(message, priority = 'polite') {
        this.liveRegion.setAttribute('aria-live', priority);
        this.liveRegion.textContent = message;
        
        // Limpiar después de anunciar
        setTimeout(() => {
            this.liveRegion.textContent = '';
        }, 1000);
    }
    
    // Manejar cambios de página dinámicos
    announcePageChange(newTitle) {
        document.title = newTitle;
        this.announce(`Página cambiada a: ${newTitle}`);
    }
    
    // Anunciar errores de formulario
    announceFormError(field, message) {
        const errorId = `${field.id}-error`;
        let errorElement = document.getElementById(errorId);
        
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.id = errorId;
            errorElement.className = 'error-message';
            errorElement.setAttribute('role', 'alert');
            field.parentNode.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
        field.setAttribute('aria-describedby', errorId);
        field.setAttribute('aria-invalid', 'true');
    }
}
```

### Buenas Prácticas de Accesibilidad

```javascript
// Validador de accesibilidad
class AccessibilityValidator {
    static validateForm(form) {
        const errors = [];
        
        // Verificar labels
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            if (!this.hasLabel(input)) {
                errors.push(`Campo sin label: ${input.name || input.id}`);
            }
        });
        
        // Verificar botones
        const buttons = form.querySelectorAll('button');
        buttons.forEach(button => {
            if (!this.hasAccessibleName(button)) {
                errors.push(`Botón sin nombre accesible`);
            }
        });
        
        return errors;
    }
    
    static hasLabel(input) {
        return input.labels && input.labels.length > 0 ||
               input.getAttribute('aria-label') ||
               input.getAttribute('aria-labelledby');
    }
    
    static hasAccessibleName(element) {
        return element.textContent.trim() ||
               element.getAttribute('aria-label') ||
               element.getAttribute('aria-labelledby') ||
               element.getAttribute('title');
    }
}

// Implementar mejores prácticas
function implementAccessibilityBestPractices() {
    // Gestión de focus visible
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Timeout para sesiones
    let sessionTimer;
    function resetSessionTimer() {
        clearTimeout(sessionTimer);
        sessionTimer = setTimeout(() => {
            alert('Su sesión expirará en 5 minutos');
        }, 25 * 60 * 1000); // 25 minutos
    }
    
    ['keydown', 'mousemove', 'click'].forEach(event => {
        document.addEventListener(event, resetSessionTimer);
    });
    
    resetSessionTimer();
}
```

## 14. Rendimiento y Optimización Avanzada

### Virtual DOM vs Real DOM

```javascript
// Implementación simple de Virtual DOM
class VirtualNode {
    constructor(tag, props = {}, children = []) {
        this.tag = tag;
        this.props = props;
        this.children = children;
    }
    
    render() {
        const element = document.createElement(this.tag);
        
        // Aplicar propiedades
        Object.entries(this.props).forEach(([key, value]) => {
            if (key.startsWith('on')) {
                element.addEventListener(key.slice(2).toLowerCase(), value);
            } else {
                element.setAttribute(key, value);
            }
        });
        
        // Renderizar hijos
        this.children.forEach(child => {
            if (typeof child === 'string') {
                element.appendChild(document.createTextNode(child));
            } else {
                element.appendChild(child.render());
            }
        });
        
        return element;
    }
}

// Comparación y actualización eficiente
class VirtualDOM {
    constructor(container) {
        this.container = container;
        this.previousTree = null;
        this.currentTree = null;
    }
    
    update(newTree) {
        this.currentTree = newTree;
        
        if (!this.previousTree) {
            this.container.appendChild(newTree.render());
        } else {
            this.diff(this.previousTree, newTree, this.container.firstChild);
        }
        
        this.previousTree = newTree;
    }
    
    diff(oldNode, newNode, domNode) {
        if (!newNode) {
            domNode.remove();
            return;
        }
        
        if (!oldNode) {
            domNode.parentNode.appendChild(newNode.render());
            return;
        }
        
        if (this.changed(oldNode, newNode)) {
            domNode.parentNode.replaceChild(newNode.render(), domNode);
            return;
        }
        
        if (newNode.children) {
            this.diffChildren(oldNode, newNode, domNode);
        }
    }
    
    changed(oldNode, newNode) {
        return oldNode.tag !== newNode.tag ||
               JSON.stringify(oldNode.props) !== JSON.stringify(newNode.props);
    }
    
    diffChildren(oldNode, newNode, domNode) {
        const oldChildren = oldNode.children || [];
        const newChildren = newNode.children || [];
        const max = Math.max(oldChildren.length, newChildren.length);
        
        for (let i = 0; i < max; i++) {
            this.diff(oldChildren[i], newChildren[i], domNode.childNodes[i]);
        }
    }
}
```

### Técnicas de Batching

```javascript
// Batching de actualizaciones DOM
class DOMBatcher {
    constructor() {
        this.updates = [];
        this.scheduled = false;
    }
    
    schedule(updateFn) {
        this.updates.push(updateFn);
        
        if (!this.scheduled) {
            this.scheduled = true;
            requestAnimationFrame(() => {
                this.flush();
            });
        }
    }
    
    flush() {
        // Agrupar lecturas y escrituras
        const reads = [];
        const writes = [];
        
        this.updates.forEach(update => {
            if (update.type === 'read') {
                reads.push(update);
            } else {
                writes.push(update);
            }
        });
        
        // Ejecutar todas las lecturas primero
        reads.forEach(read => read.fn());
        
        // Luego todas las escrituras
        writes.forEach(write => write.fn());
        
        this.updates = [];
        this.scheduled = false;
    }
    
    read(fn) {
        this.schedule({ type: 'read', fn });
    }
    
    write(fn) {
        this.schedule({ type: 'write', fn });
    }
}

// Uso del batcher
const batcher = new DOMBatcher();

function updateElements() {
    const elements = document.querySelectorAll('.dynamic-element');
    
    elements.forEach(element => {
        // Agrupar lecturas
        batcher.read(() => {
            const width = element.offsetWidth;
            const height = element.offsetHeight;
            element.dataset.dimensions = `${width}x${height}`;
        });
        
        // Agrupar escrituras
        batcher.write(() => {
            element.style.transform = 'scale(1.1)';
            element.classList.add('updated');
        });
    });
}
```

### Throttling y Debouncing

```javascript
// Implementaciones optimizadas
class PerformanceUtils {
    static throttle(func, wait) {
        let timeout;
        let previous = 0;
        
        return function executedFunction(...args) {
            const now = Date.now();
            const remaining = wait - (now - previous);
            
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                previous = now;
                func.apply(this, args);
            } else if (!timeout) {
                timeout = setTimeout(() => {
                    previous = Date.now();
                    timeout = null;
                    func.apply(this, args);
                }, remaining);
            }
        };
    }
    
    static debounce(func, wait, immediate = false) {
        let timeout;
        
        return function executedFunction(...args) {
            const later = () => {
                timeout = null;
                if (!immediate) func.apply(this, args);
            };
            
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            
            if (callNow) func.apply(this, args);
        };
    }
    
    static requestIdleCallback(callback, options = {}) {
        if (window.requestIdleCallback) {
            return window.requestIdleCallback(callback, options);
        } else {
            const timeout = options.timeout || 0;
            return setTimeout(callback, timeout);
        }
    }
}

// Ejemplos de uso
const optimizedScrollHandler = PerformanceUtils.throttle(() => {
    console.log('Scroll optimizado');
}, 100);

const optimizedSearchHandler = PerformanceUtils.debounce((query) => {
    console.log('Búsqueda:', query);
}, 300);

// Aplicar a eventos
window.addEventListener('scroll', optimizedScrollHandler);
document.getElementById('search').addEventListener('input', (e) => {
    optimizedSearchHandler(e.target.value);
});
```

### Optimización de Reflow y Repaint

```javascript
// Medición y optimización de rendimiento
class PerformanceOptimizer {
    constructor() {
        this.measurements = [];
    }
    
    measure(name, fn) {
        const start = performance.now();
        const result = fn();
        const end = performance.now();
        
        this.measurements.push({
            name,
            duration: end - start,
            timestamp: Date.now()
        });
        
        return result;
    }
    
    // Optimizar cambios de estilo
    optimizeStyleChanges(elements, styles) {
        // Usar DocumentFragment para cambios múltiples
        const fragment = document.createDocumentFragment();
        
        elements.forEach(element => {
            const clone = element.cloneNode(true);
            Object.assign(clone.style, styles);
            fragment.appendChild(clone);
        });
        
        // Reemplazar en batch
        const parent = elements[0].parentNode;
        elements.forEach(element => element.remove());
        parent.appendChild(fragment);
    }
    
    // Lazy loading de imágenes
    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        images.forEach(img => observer.observe(img));
    }
    
    // Virtualización de listas grandes
    virtualizeList(container, items, itemHeight) {
        const containerHeight = container.offsetHeight;
        const visibleItems = Math.ceil(containerHeight / itemHeight);
        const totalItems = items.length;
        
        let startIndex = 0;
        
        const render = () => {
            container.innerHTML = '';
            
            for (let i = startIndex; i < startIndex + visibleItems && i < totalItems; i++) {
                const item = document.createElement('div');
                item.style.height = itemHeight + 'px';
                item.textContent = items[i];
                container.appendChild(item);
            }
        };
        
        container.addEventListener('scroll', PerformanceUtils.throttle(() => {
            startIndex = Math.floor(container.scrollTop / itemHeight);
            render();
        }, 16));
        
        render();
    }
}
```

## 15. Patrones de Diseño en DOM

### Observer Pattern

```javascript
// Implementación del patrón Observer
class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    
    off(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    }
    
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
    
    once(event, callback) {
        const onceCallback = (data) => {
            callback(data);
            this.off(event, onceCallback);
        };
        this.on(event, onceCallback);
    }
}

// Store reactivo con Observer
class ReactiveStore extends EventEmitter {
    constructor(initialState = {}) {
        super();
        this.state = initialState;
        this.subscribers = new Map();
    }
    
    setState(newState) {
        const previousState = { ...this.state };
        this.state = { ...this.state, ...newState };
        
        this.emit('stateChange', {
            previous: previousState,
            current: this.state,
            changes: newState
        });
    }
    
    getState() {
        return { ...this.state };
    }
    
    subscribe(callback) {
        const id = Date.now() + Math.random();
        this.subscribers.set(id, callback);
        
        this.on('stateChange', callback);
        
        return () => {
            this.subscribers.delete(id);
            this.off('stateChange', callback);
        };
    }
}

// Uso del patrón Observer
const store = new ReactiveStore({
    count: 0,
    user: null
});

const unsubscribe = store.subscribe((state) => {
    console.log('Estado actualizado:', state.current);
    updateUI(state.current);
});

function updateUI(state) {
    document.getElementById('count').textContent = state.count;
    document.getElementById('user').textContent = state.user || 'Invitado';
}
```

### Module Pattern

```javascript
// Patrón Module para organizar código
const UIModule = (function() {
    // Variables privadas
    let isInitialized = false;
    const components = new Map();
    
    // Métodos privados
    function validateComponent(name, component) {
        if (!component.render || typeof component.render !== 'function') {
            throw new Error(`Component ${name} must have a render method`);
        }
    }
    
    function createComponent(name, element) {
        return {
            name,
            element,
            render: () => element,
            show: () => element.style.display = 'block',
            hide: () => element.style.display = 'none',
            toggle: () => {
                element.style.display = element.style.display === 'none' ? 'block' : 'none';
            }
        };
    }
    
    // API pública
    return {
        init() {
            if (isInitialized) return;
            
            console.log('Inicializando UI Module');
            this.registerDefaultComponents();
            isInitialized = true;
        },
        
        registerComponent(name, element) {
            const component = createComponent(name, element);
            validateComponent(name, component);
            components.set(name, component);
            return component;
        },
        
        getComponent(name) {
            return components.get(name);
        },
        
        removeComponent(name) {
            return components.delete(name);
        },
        
        getAllComponents() {
            return Array.from(components.values());
        },
        
        registerDefaultComponents() {
            // Registrar componentes por defecto
            const modal = document.getElementById('modal');
            const sidebar = document.getElementById('sidebar');
            
            if (modal) this.registerComponent('modal', modal);
            if (sidebar) this.registerComponent('sidebar', sidebar);
        }
    };
})();

// Módulo de utilidades
const Utils = (function() {
    const cache = new Map();
    
    return {
        debounce: (func, wait) => {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },
        
        memoize: (fn) => {
            return function(...args) {
                const key = JSON.stringify(args);
                if (cache.has(key)) {
                    return cache.get(key);
                }
                const result = fn.apply(this, args);
                cache.set(key, result);
                return result;
            };
        },
        
        clearCache: () => cache.clear()
    };
})();
```

### Singleton Pattern

```javascript
// Singleton para configuración global
class AppConfig {
    constructor() {
        if (AppConfig.instance) {
            return AppConfig.instance;
        }
        
        this.config = {
            theme: 'light',
            language: 'es',
            apiUrl: 'https://api.example.com',
            debug: false
        };
        
        AppConfig.instance = this;
    }
    
    get(key) {
        return this.config[key];
    }
    
    set(key, value) {
        this.config[key] = value;
        this.notifyChange(key, value);
    }
    
    notifyChange(key, value) {
        window.dispatchEvent(new CustomEvent('configChange', {
            detail: { key, value }
        }));
    }
    
    static getInstance() {
        if (!AppConfig.instance) {
            AppConfig.instance = new AppConfig();
        }
        return AppConfig.instance;
    }
}

// Singleton para gestión de DOM
class DOMManager {
    constructor() {
        if (DOMManager.instance) {
            return DOMManager.instance;
        }
        
        this.elements = new Map();
        this.observers = new Map();
        this.eventListeners = new Map();
        
        DOMManager.instance = this;
    }
    
    register(id, element) {
        this.elements.set(id, element);
        return element;
    }
    
    get(id) {
        return this.elements.get(id);
    }
    
    observe(element, callback, options = {}) {
        const observer = new MutationObserver(callback);
        observer.observe(element, {
            childList: true,
            subtree: true,
            attributes: true,
            ...options
        });
        
        this.observers.set(element, observer);
        return observer;
    }
    
    addEventListener(element, event, callback, options) {
        const key = `${element.id || 'anonymous'}-${event}`;
        
        if (this.eventListeners.has(key)) {
            this.removeEventListener(element, event);
        }
        
        element.addEventListener(event, callback, options);
        this.eventListeners.set(key, { element, event, callback });
    }
    
    removeEventListener(element, event) {
        const key = `${element.id || 'anonymous'}-${event}`;
        const listener = this.eventListeners.get(key);
        
        if (listener) {
            element.removeEventListener(event, listener.callback);
            this.eventListeners.delete(key);
        }
    }
    
    cleanup() {
        this.observers.forEach(observer => observer.disconnect());
        this.eventListeners.forEach(({ element, event, callback }) => {
            element.removeEventListener(event, callback);
        });
        
        this.elements.clear();
        this.observers.clear();
        this.eventListeners.clear();
    }
    
    static getInstance() {
        if (!DOMManager.instance) {
            DOMManager.instance = new DOMManager();
        }
        return DOMManager.instance;
    }
}

// Uso de los Singletons
const config = AppConfig.getInstance();
const domManager = DOMManager.getInstance();

config.set('theme', 'dark');
domManager.register('mainButton', document.getElementById('main-button'));
```

### Componentes Reutilizables

```javascript
// Factory para crear componentes
class ComponentFactory {
    static create(type, props = {}) {
        switch (type) {
            case 'button':
                return new ButtonComponent(props);
            case 'modal':
                return new ModalComponent(props);
            case 'dropdown':
                return new DropdownComponent(props);
            default:
                throw new Error(`Unknown component type: ${type}`);
        }
    }
}

// Clase base para componentes
class Component {
    constructor(props = {}) {
        this.props = props;
        this.element = null;
        this.children = [];
        this.eventListeners = [];
    }
    
    render() {
        throw new Error('render method must be implemented');
    }
    
    mount(parent) {
        if (!this.element) {
            this.element = this.render();
        }
        parent.appendChild(this.element);
        this.afterMount();
    }
    
    unmount() {
        if (this.element && this.element.parentNode) {
            this.beforeUnmount();
            this.element.parentNode.removeChild(this.element);
            this.cleanup();
        }
    }
    
    addEventListener(event, callback) {
        this.element.addEventListener(event, callback);
        this.eventListeners.push({ event, callback });
    }
    
    cleanup() {
        this.eventListeners.forEach(({ event, callback }) => {
            this.element.removeEventListener(event, callback);
        });
        this.eventListeners = [];
    }
    
    afterMount() {}
    beforeUnmount() {}
}

// Componente Button reutilizable
class ButtonComponent extends Component {
    constructor(props) {
        super({
            text: 'Button',
            variant: 'primary',
            size: 'medium',
            disabled: false,
            ...props
        });
    }
    
    render() {
        const button = document.createElement('button');
        button.textContent = this.props.text;
        button.className = `btn btn-${this.props.variant} btn-${this.props.size}`;
        button.disabled = this.props.disabled;
        
        if (this.props.onClick) {
            button.addEventListener('click', this.props.onClick);
        }
        
        return button;
    }
    
    setText(text) {
        this.props.text = text;
        if (this.element) {
            this.element.textContent = text;
        }
    }
    
    setDisabled(disabled) {
        this.props.disabled = disabled;
        if (this.element) {
            this.element.disabled = disabled;
        }
    }
}

// Componente Modal reutilizable
class ModalComponent extends Component {
    constructor(props) {
        super({
            title: 'Modal',
            content: '',
            closable: true,
            ...props
        });
    }
    
    render() {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-backdrop"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${this.props.title}</h2>
                    ${this.props.closable ? '<button class="modal-close">&times;</button>' : ''}
                </div>
                <div class="modal-body">
                    ${this.props.content}
                </div>
            </div>
        `;
        
        return modal;
    }
    
    afterMount() {
        if (this.props.closable) {
            const closeBtn = this.element.querySelector('.modal-close');
            const backdrop = this.element.querySelector('.modal-backdrop');
            
            closeBtn.addEventListener('click', () => this.close());
            backdrop.addEventListener('click', () => this.close());
        }
        
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }
    
    handleKeyDown(e) {
        if (e.key === 'Escape' && this.props.closable) {
            this.close();
        }
    }
    
    open() {
        this.element.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    
    close() {
        this.element.style.display = 'none';
        document.body.style.overflow = '';
        
        if (this.props.onClose) {
            this.props.onClose();
        }
    }
    
    beforeUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown.bind(this));
    }
}

// Componente Dropdown reutilizable
class DropdownComponent extends Component {
    constructor(props) {
        super({
            options: [],
            placeholder: 'Seleccionar opción',
            multiSelect: false,
            searchable: false,
            ...props
        });
        this.isOpen = false;
        this.selectedOptions = [];
    }
    
    render() {
        const dropdown = document.createElement('div');
        dropdown.className = 'dropdown';
        dropdown.innerHTML = `
            <div class="dropdown-trigger">
                <span class="dropdown-text">${this.props.placeholder}</span>
                <span class="dropdown-arrow">▼</span>
            </div>
            <div class="dropdown-menu">
                ${this.props.searchable ? '<input type="text" class="dropdown-search" placeholder="Buscar...">' : ''}
                <div class="dropdown-options">
                    ${this.renderOptions()}
                </div>
            </div>
        `;
        
        return dropdown;
    }
    
    renderOptions() {
        return this.props.options.map(option => 
            `<div class="dropdown-option" data-value="${option.value}">
                ${this.props.multiSelect ? '<input type="checkbox">' : ''}
                <span>${option.label}</span>
            </div>`
        ).join('');
    }
    
    afterMount() {
        const trigger = this.element.querySelector('.dropdown-trigger');
        const menu = this.element.querySelector('.dropdown-menu');
        const search = this.element.querySelector('.dropdown-search');
        
        trigger.addEventListener('click', () => this.toggle());
        
        if (search) {
            search.addEventListener('input', (e) => this.filterOptions(e.target.value));
        }
        
        this.element.addEventListener('click', (e) => {
            if (e.target.classList.contains('dropdown-option')) {
                this.selectOption(e.target);
            }
        });
        
        document.addEventListener('click', (e) => {
            if (!this.element.contains(e.target)) {
                this.close();
            }
        });
    }
    
    toggle() {
        this.isOpen ? this.close() : this.open();
    }
    
    open() {
        this.isOpen = true;
        this.element.classList.add('dropdown-open');
    }
    
    close() {
        this.isOpen = false;
        this.element.classList.remove('dropdown-open');
    }
    
    selectOption(optionElement) {
        const value = optionElement.dataset.value;
        const label = optionElement.querySelector('span').textContent;
        
        if (this.props.multiSelect) {
            const checkbox = optionElement.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;
            
            if (checkbox.checked) {
                this.selectedOptions.push({ value, label });
            } else {
                this.selectedOptions = this.selectedOptions.filter(opt => opt.value !== value);
            }
            
            this.updateTriggerText();
        } else {
            this.selectedOptions = [{ value, label }];
            this.element.querySelector('.dropdown-text').textContent = label;
            this.close();
        }
        
        if (this.props.onSelect) {
            this.props.onSelect(this.selectedOptions);
        }
    }
    
    updateTriggerText() {
        const text = this.selectedOptions.length > 0 
            ? this.selectedOptions.map(opt => opt.label).join(', ')
            : this.props.placeholder;
        
        this.element.querySelector('.dropdown-text').textContent = text;
    }
    
    filterOptions(searchTerm) {
        const options = this.element.querySelectorAll('.dropdown-option');
        options.forEach(option => {
            const text = option.querySelector('span').textContent.toLowerCase();
            const show = text.includes(searchTerm.toLowerCase());
            option.style.display = show ? 'block' : 'none';
        });
    }
}

// Ejemplo de uso de componentes
function initializeComponents() {
    const container = document.getElementById('app');
    
    // Crear botón
    const button = ComponentFactory.create('button', {
        text: 'Abrir Modal',
        variant: 'primary',
        onClick: () => modal.open()
    });
    
    // Crear modal
    const modal = ComponentFactory.create('modal', {
        title: 'Mi Modal',
        content: '<p>Este es el contenido del modal</p>',
        onClose: () => console.log('Modal cerrado')
    });
    
    // Crear dropdown
    const dropdown = ComponentFactory.create('dropdown', {
        options: [
            { value: '1', label: 'Opción 1' },
            { value: '2', label: 'Opción 2' },
            { value: '3', label: 'Opción 3' }
        ],
        searchable: true,
        onSelect: (selected) => console.log('Seleccionado:', selected)
    });
    
    // Montar componentes
    button.mount(container);
    modal.mount(container);
    dropdown.mount(container);
}
```

## 16. Testing del DOM

### Unit Testing con Jest

```javascript
// dom-utils.test.js
import { createElement, toggleClass, debounce } from './dom-utils.js';

describe('DOM Utils', () => {
    let container;
    
    beforeEach(() => {
        // Configurar DOM de prueba
        document.body.innerHTML = '';
        container = document.createElement('div');
        container.id = 'test-container';
        document.body.appendChild(container);
    });
    
    afterEach(() => {
        // Limpiar después de cada prueba
        document.body.innerHTML = '';
    });
    
    describe('createElement', () => {
        test('should create element with correct tag', () => {
            const element = createElement('div');
            expect(element.tagName).toBe('DIV');
        });
        
        test('should create element with attributes', () => {
            const element = createElement('div', {
                id: 'test-id',
                className: 'test-class',
                'data-value': '123'
            });
            
            expect(element.id).toBe('test-id');
            expect(element.className).toBe('test-class');
            expect(element.getAttribute('data-value')).toBe('123');
        });
        
        test('should create element with children', () => {
            const child1 = createElement('span', {}, 'Child 1');
            const child2 = createElement('span', {}, 'Child 2');
            const parent = createElement('div', {}, [child1, child2]);
            
            expect(parent.children.length).toBe(2);
            expect(parent.children[0].textContent).toBe('Child 1');
            expect(parent.children[1].textContent).toBe('Child 2');
        });
    });
    
    describe('toggleClass', () => {
        test('should add class if not present', () => {
            const element = createElement('div');
            toggleClass(element, 'active');
            expect(element.classList.contains('active')).toBe(true);
        });
        
        test('should remove class if present', () => {
            const element = createElement('div', { className: 'active' });
            toggleClass(element, 'active');
            expect(element.classList.contains('active')).toBe(false);
        });
    });
    
    describe('debounce', () => {
        test('should delay function execution', (done) => {
            const mockFn = jest.fn();
            const debouncedFn = debounce(mockFn, 100);
            
            debouncedFn();
            debouncedFn();
            debouncedFn();
            
            expect(mockFn).not.toHaveBeenCalled();
            
            setTimeout(() => {
                expect(mockFn).toHaveBeenCalledTimes(1);
                done();
            }, 150);
        });
    });
});

// component.test.js
import { ButtonComponent, ModalComponent } from './components.js';

describe('Components', () => {
    let container;
    
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });
    
    afterEach(() => {
        document.body.innerHTML = '';
    });
    
    describe('ButtonComponent', () => {
        test('should render button with correct text', () => {
            const button = new ButtonComponent({ text: 'Test Button' });
            button.mount(container);
            
            expect(button.element.textContent).toBe('Test Button');
            expect(button.element.tagName).toBe('BUTTON');
        });
        
        test('should handle click events', () => {
            const onClick = jest.fn();
            const button = new ButtonComponent({ 
                text: 'Click Me', 
                onClick 
            });
            button.mount(container);
            
            button.element.click();
            expect(onClick).toHaveBeenCalledTimes(1);
        });
        
        test('should update text dynamically', () => {
            const button = new ButtonComponent({ text: 'Initial' });
            button.mount(container);
            
            button.setText('Updated');
            expect(button.element.textContent).toBe('Updated');
        });
    });
    
    describe('ModalComponent', () => {
        test('should render modal with correct structure', () => {
            const modal = new ModalComponent({ 
                title: 'Test Modal',
                content: 'Test content'
            });
            modal.mount(container);
            
            expect(modal.element.querySelector('.modal-header h2').textContent).toBe('Test Modal');
            expect(modal.element.querySelector('.modal-body').textContent).toBe('Test content');
        });
        
        test('should close on escape key', () => {
            const modal = new ModalComponent({ closable: true });
            modal.mount(container);
            modal.open();
            
            const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
            document.dispatchEvent(escapeEvent);
            
            expect(modal.element.style.display).toBe('none');
        });
    });
});
```

### Testing de Eventos

```javascript
// event-testing.test.js
describe('Event Testing', () => {
    let element;
    
    beforeEach(() => {
        element = document.createElement('button');
        element.id = 'test-button';
        document.body.appendChild(element);
    });
    
    afterEach(() => {
        document.body.innerHTML = '';
    });
    
    test('should handle click events', () => {
        const handleClick = jest.fn();
        element.addEventListener('click', handleClick);
        
        // Simular click
        element.click();
        expect(handleClick).toHaveBeenCalledTimes(1);
        
        // Simular click con evento personalizado
        const clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true
        });
        element.dispatchEvent(clickEvent);
        expect(handleClick).toHaveBeenCalledTimes(2);
    });
    
    test('should handle keyboard events', () => {
        const handleKeyDown = jest.fn();
        element.addEventListener('keydown', handleKeyDown);
        
        const keyEvent = new KeyboardEvent('keydown', {
            key: 'Enter',
            code: 'Enter',
            keyCode: 13
        });
        
        element.dispatchEvent(keyEvent);
        expect(handleKeyDown).toHaveBeenCalledWith(
            expect.objectContaining({
                key: 'Enter',
                code: 'Enter',
                keyCode: 13
            })
        );
    });
    
    test('should handle form events', () => {
        const form = document.createElement('form');
        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'test';
        form.appendChild(input);
        document.body.appendChild(form);
        
        const handleSubmit = jest.fn((e) => e.preventDefault());
        form.addEventListener('submit', handleSubmit);
        
        // Simular envío del formulario
        const submitEvent = new Event('submit', { bubbles: true });
        form.dispatchEvent(submitEvent);
        
        expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
    
    test('should handle custom events', () => {
        const handleCustom = jest.fn();
        element.addEventListener('customEvent', handleCustom);
        
        const customEvent = new CustomEvent('customEvent', {
            detail: { message: 'Test data' }
        });
        
        element.dispatchEvent(customEvent);
        expect(handleCustom).toHaveBeenCalledWith(
            expect.objectContaining({
                detail: { message: 'Test data' }
            })
        );
    });
});
```

### Mocking del DOM

```javascript
// dom-mock.test.js
describe('DOM Mocking', () => {
    test('should mock DOM methods', () => {
        // Mock querySelector
        const mockElement = {
            textContent: '',
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            click: jest.fn()
        };
        
        const originalQuerySelector = document.querySelector;
        document.querySelector = jest.fn().mockReturnValue(mockElement);
        
        // Código a probar
        const element = document.querySelector('#test');
        element.textContent = 'Test';
        element.addEventListener('click', () => {});
        
        expect(document.querySelector).toHaveBeenCalledWith('#test');
        expect(mockElement.addEventListener).toHaveBeenCalledWith('click', expect.any(Function));
        
        // Restaurar método original
        document.querySelector = originalQuerySelector;
    });
    
    test('should mock localStorage', () => {
        // Mock localStorage
        const localStorageMock = {
            getItem: jest.fn(),
            setItem: jest.fn(),
            removeItem: jest.fn(),
            clear: jest.fn()
        };
        
        Object.defineProperty(window, 'localStorage', {
            value: localStorageMock,
            writable: true
        });
        
        // Código a probar
        localStorage.setItem('test', 'value');
        const value = localStorage.getItem('test');
        
        expect(localStorage.setItem).toHaveBeenCalledWith('test', 'value');
        expect(localStorage.getItem).toHaveBeenCalledWith('test');
    });
    
    test('should mock window methods', () => {
        // Mock window.alert
        const alertMock = jest.fn();
        window.alert = alertMock;
        
        // Mock window.confirm
        const confirmMock = jest.fn().mockReturnValue(true);
        window.confirm = confirmMock;
        
        // Código a probar
        window.alert('Test message');
        const result = window.confirm('Are you sure?');
        
        expect(alertMock).toHaveBeenCalledWith('Test message');
        expect(confirmMock).toHaveBeenCalledWith('Are you sure?');
        expect(result).toBe(true);
    });
});
```

### Testing de Interacciones

```javascript
// interaction-testing.test.js
describe('Interaction Testing', () => {
    test('should test drag and drop', () => {
        const dragElement = document.createElement('div');
        const dropElement = document.createElement('div');
        
        dragElement.draggable = true;
        document.body.appendChild(dragElement);
        document.body.appendChild(dropElement);
        
        const handleDragStart = jest.fn();
        const handleDrop = jest.fn();
        
        dragElement.addEventListener('dragstart', handleDragStart);
        dropElement.addEventListener('drop', handleDrop);
        
        // Simular drag start
        const dragStartEvent = new DragEvent('dragstart', {
            dataTransfer: new DataTransfer()
        });
        dragElement.dispatchEvent(dragStartEvent);
        
        // Simular drop
        const dropEvent = new DragEvent('drop', {
            dataTransfer: new DataTransfer()
        });
        dropElement.dispatchEvent(dropEvent);
        
        expect(handleDragStart).toHaveBeenCalledTimes(1);
        expect(handleDrop).toHaveBeenCalledTimes(1);
    });
    
    test('should test scroll interactions', () => {
        const scrollElement = document.createElement('div');
        scrollElement.style.height = '100px';
        scrollElement.style.overflow = 'auto';
        document.body.appendChild(scrollElement);
        
        const handleScroll = jest.fn();
        scrollElement.addEventListener('scroll', handleScroll);
        
        // Mock scroll properties
        Object.defineProperty(scrollElement, 'scrollTop', {
            value: 50,
            writable: true
        });
        
        // Simular scroll
        const scrollEvent = new Event('scroll');
        scrollElement.dispatchEvent(scrollEvent);
        
        expect(handleScroll).toHaveBeenCalledTimes(1);
    });
    
    test('should test resize interactions', () => {
        const handleResize = jest.fn();
        window.addEventListener('resize', handleResize);
        
        // Mock window dimensions
        Object.defineProperty(window, 'innerWidth', {
            value: 800,
            writable: true
        });
        
        // Simular resize
        const resizeEvent = new Event('resize');
        window.dispatchEvent(resizeEvent);
        
        expect(handleResize).toHaveBeenCalledTimes(1);
    });
});

// Test utilities
class TestUtils {
    static fireEvent(element, eventType, options = {}) {
        const event = new Event(eventType, {
            bubbles: true,
            cancelable: true,
            ...options
        });
        
        element.dispatchEvent(event);
        return event;
    }
    
    static fireMouseEvent(element, eventType, options = {}) {
        const event = new MouseEvent(eventType, {
            bubbles: true,
            cancelable: true,
            clientX: 0,
            clientY: 0,
            ...options
        });
        
        element.dispatchEvent(event);
        return event;
    }
    
    static fireKeyEvent(element, eventType, key, options = {}) {
        const event = new KeyboardEvent(eventType, {
            bubbles: true,
            cancelable: true,
            key,
            ...options
        });
        
        element.dispatchEvent(event);
        return event;
    }
    
    static waitFor(condition, timeout = 1000) {
        return new Promise((resolve, reject) => {
            const interval = setInterval(() => {
                if (condition()) {
                    clearInterval(interval);
                    resolve();
                }
            }, 10);
            
            setTimeout(() => {
                clearInterval(interval);
                reject(new Error('Timeout waiting for condition'));
            }, timeout);
        });
    }
}
```

## 17. Herramientas y Librerías Complementarias

### Frameworks Ligeros

#### Alpine.js
```html
<!-- Ejemplo con Alpine.js -->
<div x-data="{ open: false }">
    <button @click="open = !open">Toggle</button>
    
    <div x-show="open" x-transition>
        <p>Contenido que se muestra/oculta</p>
    </div>
</div>

<script>
// Comparación con JavaScript vanilla
class VanillaToggle {
    constructor(element) {
        this.element = element;
        this.isOpen = false;
        this.init();
    }
    
    init() {
        const button = this.element.querySelector('button');
        const content = this.element.querySelector('.content');
        
        button.addEventListener('click', () => {
            this.isOpen = !this.isOpen;
            content.style.display = this.isOpen ? 'block' : 'none';
        });
    }
}

// Alpine.js es más declarativo y requiere menos código
</script>
```

#### Stimulus
```javascript
// Stimulus Controller
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ["content"];
    static classes = ["open"];
    
    connect() {
        console.log("Toggle controller connected");
    }
    
    toggle() {
        this.contentTarget.classList.toggle(this.openClass);
    }
}

// HTML correspondiente
/*
<div data-controller="toggle">
    <button data-action="click->toggle#toggle">Toggle</button>
    <div data-toggle-target="content" class="hidden">
        Contenido
    </div>
</div>
*/

// Comparación con aproximación vanilla
class VanillaStimulusAlternative {
    constructor() {
        this.controllers = new Map();
        this.init();
    }
    
    init() {
        // Buscar elementos con data-controller
        const controllers = document.querySelectorAll('[data-controller]');
        controllers.forEach(element => {
            const controllerName = element.dataset.controller;
            this.initController(controllerName, element);
        });
    }
    
    initController(name, element) {
        if (name === 'toggle') {
            const button = element.querySelector('[data-action*="toggle#toggle"]');
            const content = element.querySelector('[data-toggle-target="content"]');
            
            button.addEventListener('click', () => {
                content.classList.toggle('hidden');
            });
        }
    }
}
```

### Librerías de Animación

#### GSAP (GreenSock)
```javascript
// Animaciones con GSAP
gsap.timeline()
    .from('.hero-title', { duration: 1, y: 50, opacity: 0 })
    .from('.hero-subtitle', { duration: 1, y: 30, opacity: 0 }, '-=0.5')
    .from('.hero-button', { duration: 1, scale: 0, opacity: 0 }, '-=0.3');

// Alternativa con CSS y JavaScript vanilla
class VanillaAnimations {
    static fadeInUp(element, duration = 1000, delay = 0) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, delay);
    }
    
    static staggeredAnimation(elements, animationFn, staggerDelay = 100) {
        elements.forEach((element, index) => {
            const delay = index * staggerDelay;
            animationFn(element, delay);
        });
    }
    
    static createTimeline(animations) {
        let totalDelay = 0;
        
        animations.forEach(({ element, animation, duration, delay = 0 }) => {
            setTimeout(() => {
                animation(element, duration);
            }, totalDelay + delay);
            
            totalDelay += duration + delay;
        });
    }
}

// Uso de la alternativa vanilla
const timeline = [
    {
        element: document.querySelector('.hero-title'),
        animation: VanillaAnimations.fadeInUp,
        duration: 1000,
        delay: 0
    },
    {
        element: document.querySelector('.hero-subtitle'),
        animation: VanillaAnimations.fadeInUp,
        duration: 1000,
        delay: 500
    }
];

VanillaAnimations.createTimeline(timeline);
```

#### Framer Motion (conceptos aplicables)
```javascript
// Conceptos de Framer Motion aplicados a vanilla JS
class MotionElement {
    constructor(element) {
        this.element = element;
        this.variants = {};
        this.currentVariant = 'initial';
    }
    
    setVariants(variants) {
        this.variants = variants;
        return this;
    }
    
    animate(variantName, options = {}) {
        const variant = this.variants[variantName];
        if (!variant) return;
        
        const { duration = 300, ease = 'ease' } = options;
        
        this.element.style.transition = `all ${duration}ms ${ease}`;
        
        Object.entries(variant).forEach(([property, value]) => {
            if (property === 'x') {
                this.element.style.transform = `translateX(${value}px)`;
            } else if (property === 'y') {
                this.element.style.transform = `translateY(${value}px)`;
            } else if (property === 'scale') {
                this.element.style.transform = `scale(${value})`;
            } else {
                this.element.style[property] = value;
            }
        });
        
        this.currentVariant = variantName;
        return this;
    }
    
    onHover(hoverVariant, normalVariant = 'initial') {
        this.element.addEventListener('mouseenter', () => {
            this.animate(hoverVariant);
        });
        
        this.element.addEventListener('mouseleave', () => {
            this.animate(normalVariant);
        });
        
        return this;
    }
}

// Uso
const motionButton = new MotionElement(document.querySelector('.motion-button'))
    .setVariants({
        initial: { scale: 1, opacity: 1 },
        hover: { scale: 1.1, opacity: 0.8 },
        tap: { scale: 0.95, opacity: 0.6 }
    })
    .onHover('hover');
```

### Comparación con Frameworks

```javascript
// Comparación: React vs Vanilla JS
// React Component
/*
function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    
    const addTodo = () => {
        setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
        setInputValue('');
    };
    
    return (
        <div>
            <input 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
}
*/

// Vanilla JS equivalent
class VanillaTodoApp {
    constructor(container) {
        this.container = container;
        this.todos = [];
        this.inputValue = '';
        this.render();
        this.attachEvents();
    }
    
    render() {
        this.container.innerHTML = `
            <div>
                <input type="text" id="todo-input" value="${this.inputValue}">
                <button id="add-todo">Add</button>
                <ul id="todo-list">
                    ${this.todos.map(todo => `
                        <li data-id="${todo.id}">${todo.text}</li>
                    `).join('')}
                </ul>
            </div>
        `;
    }
    
    attachEvents() {
        const input = this.container.querySelector('#todo-input');
        const button = this.container.querySelector('#add-todo');
        
        input.addEventListener('input', (e) => {
            this.inputValue = e.target.value;
        });
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });
        
        button.addEventListener('click', () => this.addTodo());
    }
    
    addTodo() {
        if (this.inputValue.trim()) {
            this.todos.push({
                id: Date.now(),
                text: this.inputValue,
                completed: false
            });
            this.inputValue = '';
            this.render();
            this.attachEvents();
        }
    }
}

// Vue.js vs Vanilla JS comparison
// Vue Component
/*
<template>
    <div>
        <input v-model="message" @keyup.enter="sendMessage">
        <button @click="sendMessage">Send</button>
        <div v-for="msg in messages" :key="msg.id">
            {{ msg.text }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: '',
            messages: []
        }
    },
    methods: {
        sendMessage() {
            this.messages.push({
                id: Date.now(),
                text: this.message
            });
            this.message = '';
        }
    }
}
</script>
*/

// Vanilla JS equivalent
class VanillaMessageApp {
    constructor(container) {
        this.container = container;
        this.state = {
            message: '',
            messages: []
        };
        this.init();
    }
    
    init() {
        this.render();
        this.attachEvents();
    }
    
    render() {
        this.container.innerHTML = `
            <div>
                <input type="text" id="message-input" value="${this.state.message}">
                <button id="send-button">Send</button>
                <div id="messages">
                    ${this.state.messages.map(msg => `
                        <div key="${msg.id}">${msg.text}</div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    attachEvents() {
        const input = this.container.querySelector('#message-input');
        const button = this.container.querySelector('#send-button');
        
        input.addEventListener('input', (e) => {
            this.state.message = e.target.value;
        });
        
        input.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
        
        button.addEventListener('click', () => this.sendMessage());
    }
    
    sendMessage() {
        if (this.state.message.trim()) {
            this.state.messages.push({
                id: Date.now(),
                text: this.state.message
            });
            this.state.message = '';
            this.render();
            this.attachEvents();
        }
    }
}
```

### Cuándo Usar Cada Aproximación

La elección entre JavaScript "puro" (vanilla), un framework ligero o un framework completo depende de los requisitos del proyecto. Aquí tienes una matriz de decisión para guiarte:

```javascript
// Matriz de decisión
const DecisionMatrix = {
    vanillaJS: {
        pros: [
            "Sin dependencias, control total",
            "Máximo rendimiento potencial",
            "Ideal para aprender los fundamentos del DOM",
            "Perfecto para componentes web nativos"
        ],
        cons: [
            "Puede ser muy verboso para UIs complejas",
            "La gestión del estado es manual y puede ser propensa a errores",
            "Requiere más código boilerplate para tareas comunes"
        ],
        idealPara: [
            "Proyectos pequeños y sitios con interactividad limitada",
            "Mejorar páginas renderizadas en el servidor (MPA)",
            "Librerías o componentes reutilizables y sin dependencias",
            "Cuando el tamaño del bundle y la velocidad de carga son críticos"
        ]
    },
    lightweightFrameworks: { // e.g., Alpine.js, Stimulus
        pros: [
            "Mejora el HTML existente de forma declarativa",
            "Curva de aprendizaje muy suave",
            "Mínimo o ningún paso de compilación (build step)",
            "Ideal para añadir 'chispas' de interactividad"
        ],
        cons: [
            "Menos potente para aplicaciones complejas (SPAs)",
            "La gestión de estado global puede volverse complicada",
            "Ecosistema y herramientas más pequeños que los frameworks grandes"
        ],
        idealPara: [
            "Proyectos donde la mayor parte del HTML es renderizado por el servidor",
            "Componentes simples como modales, pestañas, menús desplegables",
            "Cuando un framework completo es excesivo",
            "Prototipado rápido"
        ]
    },
    fullFrameworks: { // e.g., React, Vue, Svelte, Angular
        pros: [
            "Excelente para aplicaciones complejas de una sola página (SPAs)",
            "Gestión de estado robusta y escalable",
            "Arquitectura basada en componentes que fomenta la reutilización",
            "Ecosistemas enormes con librerías y herramientas para todo"
        ],
        cons: [
            "Curva de aprendizaje más pronunciada",
            "Requiere un paso de compilación y configuración",
            "Mayor tamaño de bundle inicial",
            "Puede ser una solución excesiva para sitios simples"
        ],
        idealPara: [
            "Aplicaciones web complejas y ricas en interactividad",
            "Proyectos a gran escala que requieren mantenibilidad",
            "Equipos de desarrollo grandes que necesitan una estructura definida",
            "Cuando se necesita un ecosistema rico (routing, state management, etc.)"
        ]
    }
};

// Conclusión: No hay una "mejor" herramienta, solo la herramienta "adecuada" para el trabajo.
// Analiza la complejidad, escala y requisitos de tu proyecto para tomar la mejor decisión.
```

## 18. Web Components y Shadow DOM

Los **Web Components** son una tecnología nativa del navegador que permite crear **componentes reutilizables, encapsulados y declarativos**, sin necesidad de frameworks como React o Vue.

### ¿Qué son los Web Components?

Un Web Component consta de tres tecnologías clave:

1. **Custom Elements**: Define nuevas etiquetas HTML personalizadas.
2. **Shadow DOM**: Encapsula el HTML, CSS y lógica para que no afecte ni sea afectado por el resto del documento.
3. **HTML Templates**: Reutiliza estructuras HTML con `<template>` y `<slot>`.

---

### Ejemplo Básico: Componente Personalizado

```html
<mi-boton texto="Haz clic"></mi-boton>

<script>
class MiBoton extends HTMLElement {
    constructor() {
        super();

        // Shadow DOM encapsulado
        const shadow = this.attachShadow({ mode: 'open' });

        // Estructura HTML
        shadow.innerHTML = `
            <style>
                button {
                    padding: 10px 20px;
                    background: #007bff;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
            </style>
            <button>${this.getAttribute('texto') || 'Click'}</button>
        `;

        // Evento de click
        shadow.querySelector('button').addEventListener('click', () => {
            alert('¡Clic desde Web Component!');
        });
    }
}

// Registrar el componente
customElements.define('mi-boton', MiBoton);
</script>
```

---

### Slots y Templates

```html
<mi-tarjeta>
  <span slot="titulo">Mi Título</span>
  <p slot="contenido">Este es el contenido interno.</p>
</mi-tarjeta>

<template id="plantilla-tarjeta">
  <style>
    .tarjeta {
      border: 1px solid #ccc;
      padding: 1rem;
      border-radius: 8px;
    }
    ::slotted(span[slot="titulo"]) {
      font-weight: bold;
      color: #333;
    }
  </style>
  <div class="tarjeta">
    <slot name="titulo"></slot>
    <slot name="contenido"></slot>
  </div>
</template>

<script>
class MiTarjeta extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const template = document.getElementById('plantilla-tarjeta');
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('mi-tarjeta', MiTarjeta);
</script>
```

---

### Declarative Shadow DOM (DSD)

> **Novedad 2023+**: Permite definir `Shadow DOM` directamente en HTML con `<template shadowroot="open">`.

```html
<mi-componente>
  <template shadowroot="open">
    <style>p { color: blue; }</style>
    <p>Texto encapsulado</p>
  </template>
</mi-componente>
```

Ideal para renderizado en servidor (SSR) y performance en SPAs modernas sin JS adicional.

---

### Ventajas de Web Components

✅ Encapsulamiento de estilos y estructura
✅ Reutilización sin dependencias externas
✅ Interoperabilidad con cualquier framework
✅ Carga progresiva y lazy-loading nativo

---

### Buenas Prácticas

* Usa nombres con guion: `<mi-componente>` ✅
* Define tus estilos dentro de Shadow DOM para aislamiento
* Usa `attributeChangedCallback` para escuchar cambios de atributos
* Mantén la lógica encapsulada en clases ES6

---

## 19. Reactividad en Web Components con `attributeChangedCallback`

Los Web Components permiten detectar cambios en atributos HTML usando `attributeChangedCallback`. Esto es clave para hacer componentes reactivos sin frameworks externos.

### `observedAttributes`

Define una lista de atributos que deseas observar:

```javascript
class MiContador extends HTMLElement {
  static get observedAttributes() {
    return ['valor'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `<p>Contador: <span id="num"></span></p>`;
  }

  connectedCallback() {
    this.actualizar();
  }

  attributeChangedCallback(nombre, antiguo, nuevo) {
    if (nombre === 'valor') {
      this.actualizar();
    }
  }

  actualizar() {
    const valor = this.getAttribute('valor') || 0;
    this.shadowRoot.getElementById('num').textContent = valor;
  }
}

customElements.define('mi-contador', MiContador);
```

```html
<mi-contador valor="5"></mi-contador>
<script>
  setTimeout(() => {
    document.querySelector('mi-contador').setAttribute('valor', '10');
  }, 2000);
</script>
```

---

## 20. Comunicación entre Componentes con `CustomEvent`

Para que un Web Component se comunique con su entorno o con otros componentes, puede emitir eventos personalizados:

```javascript
class BotonEnviar extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `<button>Enviar</button>`;

    shadow.querySelector('button').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('enviar-formulario', {
        bubbles: true,
        composed: true,
        detail: { mensaje: 'Hola desde el componente' }
      }));
    });
  }
}

customElements.define('boton-enviar', BotonEnviar);
```

```html
<boton-enviar></boton-enviar>
<script>
  document.addEventListener('enviar-formulario', (e) => {
    console.log('Evento recibido:', e.detail);
  });
</script>
```

---

## 21. Testing de Web Components

### Testing con Jest

```javascript
import { fireEvent } from '@testing-library/dom';

customElements.define('mi-componente', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<button>Click</button>`;
    this.querySelector('button').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('mi-evento'));
    });
  }
});

// Test

describe('mi-componente', () => {
  beforeEach(() => {
    document.body.innerHTML = '<mi-componente></mi-componente>';
  });

  test('emite evento al hacer click', () => {
    const comp = document.querySelector('mi-componente');
    const listener = jest.fn();
    comp.addEventListener('mi-evento', listener);

    const btn = comp.shadowRoot?.querySelector('button') || comp.querySelector('button');
    fireEvent.click(btn);

    expect(listener).toHaveBeenCalled();
  });
});
```

### Alternativa: `web-test-runner`, `playwright`, o `@open-wc/testing` para pruebas E2E o DOM Shadow inclusivo.

---

Estos puntos completan el módulo de Web Components moderno para 2025, cubriendo desde la creación básica hasta la reactividad, comunicación y pruebas.
