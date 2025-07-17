# Introducción a JavaScript - Fundamentos

## ¿Qué es JavaScript?

JavaScript es un **lenguaje de programación interpretado** que se ejecuta principalmente en el navegador web. Es uno de los tres pilares del desarrollo web moderno:

- **HTML**: Estructura del contenido
- **CSS**: Presentación y estilos
- **JavaScript**: Interactividad y comportamiento dinámico

### Características principales:
- **Interpretado**: No necesita compilación previa
- **Dinámico**: Permite modificar el comportamiento en tiempo de ejecución
- **Débilmente tipado**: No necesitas declarar tipos de datos explícitamente
- **Orientado a objetos**: Basado en prototipos
- **Funcional**: Las funciones son ciudadanos de primera clase

### Breve historia
JavaScript fue creado por **Brendan Eich** en 1995 en solo 10 días mientras trabajaba en Netscape. Originalmente se llamó "LiveScript", pero fue renombrado como JavaScript para aprovechar la popularidad de Java (aunque técnicamente son muy diferentes).

---

## 1. Variables, Tipos y Operadores

### Declaración de Variables

En JavaScript moderno tenemos tres formas de declarar variables:

```javascript
// VAR - Evitar en código moderno
var nombre = "Juan"; // Scope de función, puede redeclararse

// LET - Para variables que pueden cambiar
let edad = 25; // Scope de bloque, no puede redeclararse

// CONST - Para constantes
const PI = 3.14159; // Scope de bloque, no puede reasignarse
```

### ¿Cuándo usar cada una?

- **`const`**: Por defecto, para valores que no cambiarán
- **`let`**: Cuando necesites reasignar la variable
- **`var`**: ❌ Evítalo en código moderno

### Tipos de Datos Primitivos

```javascript
// String (cadena de texto)
let nombre = "Ana";
let apellido = 'García';
let plantilla = `Hola, ${nombre} ${apellido}`;

// Number (números)
let entero = 42;
let decimal = 3.14;
let negativo = -100;

// Boolean (verdadero/falso)
let esEstudiante = true;
let tieneTrabaajo = false;

// Undefined (no definido)
let sinValor;
console.log(sinValor); // undefined

// Null (nulo intencionalmente)
let valorNulo = null;

// Symbol (único, avanzado)
let simbolo = Symbol('identificador');
```

### Tipos de Datos No Primitivos

```javascript
// Object (objeto)
let persona = {
  nombre: "Carlos",
  edad: 30
};

// Array (arreglo)
let numeros = [1, 2, 3, 4, 5];

// Function (función)
function saludar() {
  return "¡Hola!";
}
```

### Operadores Aritméticos

```javascript
let a = 10;
let b = 3;

console.log(a + b);    // 13 (suma)
console.log(a - b);    // 7 (resta)
console.log(a * b);    // 30 (multiplicación)
console.log(a / b);    // 3.333... (división)
console.log(a % b);    // 1 (módulo - resto)
console.log(a ** b);   // 1000 (potencia)

// Operadores de asignación
let x = 5;
x += 3;  // x = x + 3 → x = 8
x -= 2;  // x = x - 2 → x = 6
x *= 4;  // x = x * 4 → x = 24
x /= 3;  // x = x / 3 → x = 8

// Incremento y decremento
let contador = 0;
contador++;  // contador = 1 (post-incremento)
++contador;  // contador = 2 (pre-incremento)
contador--;  // contador = 1 (post-decremento)
--contador;  // contador = 0 (pre-decremento)
```

### Operadores de Comparación

```javascript
let x = 5;
let y = "5";

console.log(x == y);   // true (comparación débil)
console.log(x === y);  // false (comparación estricta)
console.log(x != y);   // false
console.log(x !== y);  // true
console.log(x > 3);    // true
console.log(x >= 5);   // true
console.log(x < 10);   // true
console.log(x <= 5);   // true
```

### Operadores Lógicos

```javascript
let esMayorDeEdad = true;
let tienePermiso = false;

// AND (&&) - Ambas condiciones deben ser verdaderas
console.log(esMayorDeEdad && tienePermiso); // false

// OR (||) - Al menos una condición debe ser verdadera
console.log(esMayorDeEdad || tienePermiso); // true

// NOT (!) - Invierte el valor booleano
console.log(!esMayorDeEdad); // false
console.log(!tienePermiso);  // true
```

---

## 2. Condicionales

Las condicionales nos permiten ejecutar código basado en condiciones específicas.

### If - Else

```javascript
let edad = 20;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// Múltiples condiciones
let nota = 85;

if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 80) {
  console.log("Muy bueno");
} else if (nota >= 70) {
  console.log("Bueno");
} else if (nota >= 60) {
  console.log("Suficiente");
} else {
  console.log("Insuficiente");
}
```

### Operador Ternario

Una forma concisa de escribir condicionales simples:

```javascript
let edad = 20;
let mensaje = edad >= 18 ? "Adulto" : "Menor";
console.log(mensaje); // "Adulto"

// Anidados (no recomendado si es muy complejo)
let temperatura = 25;
let clima = temperatura > 30 ? "Caluroso" : 
           temperatura > 20 ? "Templado" : "Frío";
```

### Switch

Útil cuando tienes múltiples valores específicos que comparar:

```javascript
let diaDeLaSemana = 3;
let nombreDia;

switch (diaDeLaSemana) {
  case 1:
    nombreDia = "Lunes";
    break;
  case 2:
    nombreDia = "Martes";
    break;
  case 3:
    nombreDia = "Miércoles";
    break;
  case 4:
    nombreDia = "Jueves";
    break;
  case 5:
    nombreDia = "Viernes";
    break;
  case 6:
    nombreDia = "Sábado";
    break;
  case 7:
    nombreDia = "Domingo";
    break;
  default:
    nombreDia = "Día inválido";
}

console.log(nombreDia); // "Miércoles"
```

### Truthy y Falsy

JavaScript evalúa ciertos valores como `false` en contextos booleanos:

```javascript
// Valores FALSY (se evalúan como false)
if (false) { } // false
if (0) { }     // 0
if ("") { }    // cadena vacía
if (null) { }  // null
if (undefined) { } // undefined
if (NaN) { }   // NaN

// Valores TRUTHY (se evalúan como true)
if (true) { }     // true
if (1) { }        // cualquier número diferente de 0
if ("texto") { }  // cualquier cadena no vacía
if ([] ) { }      // array vacío
if ({}) { }       // objeto vacío
```

---

## 3. Bucles

Los bucles nos permiten repetir código múltiples veces.

### For Loop

```javascript
// Estructura básica
for (inicialización; condición; incremento) {
  // código a repetir
}

// Ejemplo práctico
for (let i = 0; i < 5; i++) {
  console.log(`Iteración número: ${i}`);
}
// Output: 0, 1, 2, 3, 4

// Conteo hacia atrás
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
// Output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0

// Incrementos diferentes
for (let i = 0; i <= 20; i += 2) {
  console.log(i); // números pares: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
}
```

### While Loop

```javascript
let contador = 0;

while (contador < 3) {
  console.log(`Contador: ${contador}`);
  contador++; // ¡Importante! Sin esto sería un bucle infinito
}

// Ejemplo práctico: leer entrada hasta que sea válida
let respuesta;
let intentos = 0;

while (respuesta !== "si" && intentos < 3) {
  respuesta = prompt("¿Quieres continuar? (si/no)");
  intentos++;
}
```

### Do-While Loop

```javascript
let numero;

do {
  numero = parseInt(prompt("Ingresa un número entre 1 y 10"));
} while (numero < 1 || numero > 10);

console.log(`Número válido: ${numero}`);
```

### For...of Loop (para arrays)

```javascript
const colores = ["rojo", "azul", "verde", "amarillo"];

for (const color of colores) {
  console.log(color);
}
// Output: rojo, azul, verde, amarillo

// Con índice
for (const [indice, color] of colores.entries()) {
  console.log(`${indice}: ${color}`);
}
// Output: 0: rojo, 1: azul, 2: verde, 3: amarillo
```

### For...in Loop (para objetos)

```javascript
const persona = {
  nombre: "Ana",
  edad: 25,
  ciudad: "Madrid"
};

for (const propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad]}`);
}
// Output: nombre: Ana, edad: 25, ciudad: Madrid
```

### Break y Continue

```javascript
// Break - termina el bucle completamente
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Sale del bucle cuando i es 5
  }
  console.log(i);
}
// Output: 0, 1, 2, 3, 4

// Continue - salta a la siguiente iteración
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Salta los números pares
  }
  console.log(i);
}
// Output: 1, 3, 5, 7, 9
```

---

## 4. Arreglos (Arrays)

Los arrays son colecciones ordenadas de elementos.

### Creación de Arrays

```javascript
// Diferentes formas de crear arrays
const vacio = [];
const numeros = [1, 2, 3, 4, 5];
const mixto = [1, "texto", true, null];
const conConstructor = new Array(3); // [empty × 3]
const conElementos = new Array(1, 2, 3); // [1, 2, 3]
```

### Acceso a Elementos

```javascript
const frutas = ["manzana", "banana", "naranja", "uva"];

console.log(frutas[0]);    // "manzana" (primer elemento)
console.log(frutas[1]);    // "banana"
console.log(frutas[-1]);   // undefined (no existe índice negativo)
console.log(frutas[10]);   // undefined (fuera de rango)

// Último elemento
console.log(frutas[frutas.length - 1]); // "uva"

// Modificar elementos
frutas[1] = "plátano";
console.log(frutas); // ["manzana", "plátano", "naranja", "uva"]
```

### Propiedades y Métodos Básicos

```javascript
const tecnologias = ["HTML", "CSS", "JavaScript"];

// Longitud
console.log(tecnologias.length); // 3

// Agregar elementos
tecnologias.push("React");        // Agrega al final
tecnologias.unshift("Git");       // Agrega al principio
console.log(tecnologias); // ["Git", "HTML", "CSS", "JavaScript", "React"]

// Eliminar elementos
let ultimoElemento = tecnologias.pop();     // Elimina y retorna el último
let primerElemento = tecnologias.shift();  // Elimina y retorna el primero
console.log(ultimoElemento);  // "React"
console.log(primerElemento);  // "Git"
console.log(tecnologias);     // ["HTML", "CSS", "JavaScript"]
```

### Métodos de Búsqueda

```javascript
const numeros = [1, 3, 5, 7, 9, 3];

// indexOf - encuentra el índice de un elemento
console.log(numeros.indexOf(5));    // 2
console.log(numeros.indexOf(3));    // 1 (primera ocurrencia)
console.log(numeros.indexOf(10));   // -1 (no encontrado)

// includes - verifica si existe un elemento
console.log(numeros.includes(7));   // true
console.log(numeros.includes(10));  // false

// find - encuentra el primer elemento que cumple una condición
const encontrado = numeros.find(num => num > 5);
console.log(encontrado); // 7

// findIndex - encuentra el índice del primer elemento que cumple una condición
const indiceEncontrado = numeros.findIndex(num => num > 5);
console.log(indiceEncontrado); // 3
```

### Métodos de Transformación

```javascript
const numeros = [1, 2, 3, 4, 5];

// map - transforma cada elemento
const duplicados = numeros.map(num => num * 2);
console.log(duplicados); // [2, 4, 6, 8, 10]

// filter - filtra elementos según una condición
const pares = numeros.filter(num => num % 2 === 0);
console.log(pares); // [2, 4]

// reduce - reduce el array a un solo valor
const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(suma); // 15

// forEach - ejecuta una función para cada elemento
numeros.forEach((numero, indice) => {
  console.log(`Índice ${indice}: ${numero}`);
});
```

### Métodos de Ordenamiento

```javascript
const nombres = ["Carlos", "Ana", "David", "Beatriz"];
const numeros = [3, 1, 4, 1, 5, 9, 2, 6];

// sort - ordena el array (modifica el original)
nombres.sort();
console.log(nombres); // ["Ana", "Beatriz", "Carlos", "David"]

// sort con función personalizada
numeros.sort((a, b) => a - b); // Orden ascendente
console.log(numeros); // [1, 1, 2, 3, 4, 5, 6, 9]

numeros.sort((a, b) => b - a); // Orden descendente
console.log(numeros); // [9, 6, 5, 4, 3, 2, 1, 1]

// reverse - invierte el orden
nombres.reverse();
console.log(nombres); // ["David", "Carlos", "Beatriz", "Ana"]
```

### Métodos de Manipulación

```javascript
const frutas = ["manzana", "banana", "naranja"];

// concat - une arrays
const vegetales = ["zanahoria", "brócoli"];
const alimentos = frutas.concat(vegetales);
console.log(alimentos); // ["manzana", "banana", "naranja", "zanahoria", "brócoli"]

// slice - extrae una porción (no modifica el original)
const algunasFrutas = frutas.slice(1, 3);
console.log(algunasFrutas); // ["banana", "naranja"]

// splice - modifica el array original
frutas.splice(1, 1, "plátano", "kiwi"); // Desde índice 1, elimina 1, agrega "plátano" y "kiwi"
console.log(frutas); // ["manzana", "plátano", "kiwi", "naranja"]

// join - convierte array a string
const frutasString = frutas.join(", ");
console.log(frutasString); // "manzana, plátano, kiwi, naranja"
```

---

## 5. Objetos

Los objetos son colecciones de propiedades (pares clave-valor).

### Creación de Objetos

```javascript
// Objeto literal (forma más común)
const persona = {
  nombre: "Ana",
  edad: 25,
  ciudad: "Madrid",
  esEstudiante: true
};

// Objeto vacío
const vacio = {};

// Con constructor Object
const conConstructor = new Object();
conConstructor.nombre = "Carlos";
```

### Acceso a Propiedades

```javascript
const estudiante = {
  nombre: "Luis",
  edad: 22,
  "curso favorito": "JavaScript",
  materias: ["HTML", "CSS", "JS"]
};

// Notación de punto
console.log(estudiante.nombre);    // "Luis"
console.log(estudiante.edad);      // 22

// Notación de corchetes
console.log(estudiante["nombre"]); // "Luis"
console.log(estudiante["curso favorito"]); // "JavaScript"

// Propiedades dinámicas
const propiedad = "edad";
console.log(estudiante[propiedad]); // 22
```

### Modificación de Propiedades

```javascript
const producto = {
  nombre: "Laptop",
  precio: 1000,
  disponible: true
};

// Modificar propiedades existentes
producto.precio = 900;
producto["disponible"] = false;

// Agregar nuevas propiedades
producto.marca = "Dell";
producto.especificaciones = {
  ram: "8GB",
  procesador: "Intel i5"
};

console.log(producto);
```

### Métodos en Objetos

```javascript
const calculadora = {
  marca: "Casio",
  modelo: "fx-991",
  sumar: function(a, b) {
    return a + b;
  },
  restar: function(a, b) {
    return a - b;
  },
  // Método con arrow function (cuidado con 'this')
  multiplicar: (a, b) => a * b,
  
  // Método abreviado (ES6)
  dividir(a, b) {
    return b !== 0 ? a / b : "No se puede dividir por cero";
  }
};

console.log(calculadora.sumar(5, 3));      // 8
console.log(calculadora.dividir(10, 2));   // 5
```

### This en Objetos

```javascript
const persona = {
  nombre: "María",
  edad: 30,
  saludar: function() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
  },
  cumpleanios: function() {
    this.edad++;
    return `¡Feliz cumpleaños! Ahora tengo ${this.edad} años`;
  }
};

console.log(persona.saludar());      // "Hola, soy María y tengo 30 años"
console.log(persona.cumpleanios());  // "¡Feliz cumpleaños! Ahora tengo 31 años"
```

### Métodos de Object

```javascript
const usuario = {
  id: 1,
  nombre: "Juan",
  email: "juan@email.com",
  activo: true
};

// Object.keys() - obtiene las claves
const claves = Object.keys(usuario);
console.log(claves); // ["id", "nombre", "email", "activo"]

// Object.values() - obtiene los valores
const valores = Object.values(usuario);
console.log(valores); // [1, "Juan", "juan@email.com", true]

// Object.entries() - obtiene pares clave-valor
const entradas = Object.entries(usuario);
console.log(entradas); // [["id", 1], ["nombre", "Juan"], ...]

// Object.assign() - copia propiedades
const copia = Object.assign({}, usuario);
const extendido = Object.assign({}, usuario, { rol: "admin" });
```

### Destructuring de Objetos

```javascript
const empleado = {
  nombre: "Ana",
  puesto: "Desarrolladora",
  salario: 50000,
  departamento: "IT"
};

// Destructuring básico
const { nombre, puesto } = empleado;
console.log(nombre);  // "Ana"
console.log(puesto);  // "Desarrolladora"

// Con renombrado
const { nombre: nombreEmpleado, salario: sueldo } = empleado;
console.log(nombreEmpleado); // "Ana"
console.log(sueldo);         // 50000

// Con valores por defecto
const { nombre: nom, edad = 25 } = empleado;
console.log(nom);   // "Ana"
console.log(edad);  // 25 (valor por defecto)
```

---

## 6. Funciones

Las funciones son bloques de código reutilizables que realizan tareas específicas.

### Declaración de Funciones

```javascript
// Función declarativa (function declaration)
function saludar(nombre) {
  return `¡Hola, ${nombre}!`;
}

// Función expresiva (function expression)
const despedir = function(nombre) {
  return `¡Adiós, ${nombre}!`;
};

// Arrow function (función flecha)
const multiplicar = (a, b) => a * b;

// Arrow function con múltiples líneas
const procesarDatos = (datos) => {
  const procesados = datos.map(item => item * 2);
  return procesados.filter(item => item > 10);
};
```

### Parámetros y Argumentos

```javascript
// Parámetros por defecto
function saludar(nombre = "Usuario", idioma = "es") {
  const saludos = {
    es: "¡Hola",
    en: "Hello",
    fr: "Bonjour"
  };
  return `${saludos[idioma]} ${nombre}!`;
}

console.log(saludar());                    // "¡Hola Usuario!"
console.log(saludar("Ana"));               // "¡Hola Ana!"
console.log(saludar("John", "en"));        // "Hello John!"

// Parámetros rest (argumentos variables)
function sumar(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}

console.log(sumar(1, 2, 3));           // 6
console.log(sumar(1, 2, 3, 4, 5));     // 15
```

### Scope y Closures

```javascript
// Scope global
let variableGlobal = "Soy global";

function externa() {
  // Scope de función
  let variableExterna = "Soy externa";
  
  function interna() {
    // Scope de función anidada
    let variableInterna = "Soy interna";
    
    // Puede acceder a todas las variables de scopes superiores
    console.log(variableGlobal);  // "Soy global"
    console.log(variableExterna); // "Soy externa"
    console.log(variableInterna); // "Soy interna"
  }
  
  interna();
  // console.log(variableInterna); // ❌ Error: no está definida aquí
}

// Closure - función que recuerda variables de su scope externo
function crearContador() {
  let contador = 0;
  
  return function() {
    contador++;
    return contador;
  };
}

const contador1 = crearContador();
const contador2 = crearContador();

console.log(contador1()); // 1
console.log(contador1()); // 2
console.log(contador2()); // 1 (contador independiente)
```

### Callbacks

```javascript
// Callback básico
function procesar(datos, callback) {
  const resultado = datos.map(item => item * 2);
  callback(resultado);
}

function mostrarResultado(resultado) {
  console.log("Resultado:", resultado);
}

procesar([1, 2, 3], mostrarResultado); // Resultado: [2, 4, 6]

// Callback con función anónima
procesar([4, 5, 6], function(resultado) {
  console.log("Procesado:", resultado);
});

// Callback con arrow function
procesar([7, 8, 9], (resultado) => {
  console.log("Finalizado:", resultado);
});
```

### Funciones de Orden Superior

```javascript
// Función que retorna otra función
function crearMultiplicador(factor) {
  return function(numero) {
    return numero * factor;
  };
}

const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);

console.log(duplicar(5));  // 10
console.log(triplicar(4)); // 12

// Función que recibe otra función como parámetro
function aplicarOperacion(arr, operacion) {
  return arr.map(operacion);
}

const numeros = [1, 2, 3, 4, 5];
const cuadrados = aplicarOperacion(numeros, x => x * x);
console.log(cuadrados); // [1, 4, 9, 16, 25]
```

### Métodos de Array que usan Callbacks

```javascript
const productos = [
  { nombre: "Laptop", precio: 1000, categoria: "electrónica" },
  { nombre: "Mouse", precio: 20, categoria: "electrónica" },
  { nombre: "Silla", precio: 150, categoria: "muebles" },
  { nombre: "Teclado", precio: 50, categoria: "electrónica" }
];

// filter - filtrar productos
const electronicos = productos.filter(producto => producto.categoria === "electrónica");
console.log(electronicos);

// map - transformar datos
const nombres = productos.map(producto => producto.nombre);
console.log(nombres); // ["Laptop", "Mouse", "Silla", "Teclado"]

// reduce - calcular total
const precioTotal = productos.reduce((total, producto) => total + producto.precio, 0);
console.log(precioTotal); // 1220

// find - encontrar producto
const laptop = productos.find(producto => producto.nombre === "Laptop");
console.log(laptop);

// some - verificar si existe algún producto que cumple la condición
const hayBaratos = productos.some(producto => producto.precio < 30);
console.log(hayBaratos); // true

// every - verificar si todos los productos cumplen la condición
const todosSonCaros = productos.every(producto => producto.precio > 100);
console.log(todosSonCaros); // false
```

---

## Conceptos Clave para Recordar

### 1. **Tipos de Datos**
- **Primitivos**: string, number, boolean, undefined, null, symbol
- **No primitivos**: object, array, function

### 2. **Variables**
- Usar `const` por defecto
- Usar `let` cuando necesites reasignar
- Evitar `var` en código moderno

### 3. **Comparaciones**
- `===` para comparación estricta (recomendado)
- `==` para comparación débil (evitar)

### 4. **Arrays**
- Son objetos especiales con índices numéricos
- Métodos inmutables: `map`, `filter`, `reduce`
- Métodos mutables: `push`, `pop`, `splice`

### 5. **Objetos**
- Colecciones de pares clave-valor
- Acceso por punto o corchetes
- `this` se refiere al objeto que contiene el método

### 6. **Funciones**
- Bloques de código reutilizables
- Pueden recibir parámetros y retornar valores
- Son ciudadanos de primera clase (pueden asignarse a variables)

---

## Ejercicios Prácticos

### Ejercicio 1: Variables y Operadores
```javascript
// Crea variables para almacenar tu nombre, edad y si eres estudiante
// Luego crea un mensaje que las utilice todas
```

### Ejercicio 2: Condicionales
```javascript
// Crea una función que determine si un número es par o impar
// y retorne un mensaje apropiado
```

### Ejercicio 3: Bucles
```javascript
// Crea un bucle que imprima los números del 1 al 10
// pero que salte el número 7
```

### Ejercicio 4: Arrays
```javascript
// Crea un array con 5 nombres
// Filtra solo los nombres que tengan más de 4 letras
// Convierte cada nombre a mayúsculas
```

### Ejercicio 5: Objetos
```javascript
// Crea un objeto "libro" con título, autor, páginas y leído (boolean)
// Crea un método que cambie el estado de "leído"
```

### Ejercicio 6: Funciones
```javascript
// Crea una función que calcule el área de un círculo
// Debe recibir el radio como parámetro
// Usa la fórmula: área = π * radio²
```

¡Con estos fundamentos tienes la base sólida para comenzar a manipular el DOM y crear aplicaciones web interactivas!