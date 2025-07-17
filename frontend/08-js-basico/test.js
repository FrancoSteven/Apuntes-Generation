// ===========================
// 📚 JAVASCRIPT ESENCIAL PARA BOOTCAMP
// ===========================

console.log("🚀 INICIANDO JAVASCRIPT ");

// ===========================
// 1️⃣ VARIABLES Y TIPOS DE DATOS
// ===========================

/* 
🎯 ¿QUÉ SON LAS VARIABLES?
Las variables son como "cajas" donde guardamos información.
Imagina que tienes cajas etiquetadas donde guardas diferentes cosas.

💡 REGLA IMPORTANTE: 
- const = caja sellada (no puedes cambiar lo que hay dentro)
- let = caja normal (puedes cambiar lo que hay dentro)
- var = caja vieja con problemas (mejor no la uses)
*/

// ✅ CONST: Usa esto cuando el valor NO va a cambiar
const nombre = "Ana";              // String - texto entre comillas
const edad = 25;                   // Number - números
const esDeveloper = true;          // Boolean - true o false
const ciudad = null;               // Null - "vacío intencionalmente"
let telefono;                      // Undefined - "no tiene valor aún"

// ❌ VAR: No uses esto, tiene problemas raros
var antiguoEstilo = "No usar";     // Puede causar bugs extraños

console.log("=== VARIABLES ===");
console.log("Nombre:", nombre, "- Tipo:", typeof nombre);
console.log("Edad:", edad, "- Tipo:", typeof edad);
console.log("¿Es developer?", esDeveloper, "- Tipo:", typeof esDeveloper);
console.log("Ciudad:", ciudad, "- Tipo:", typeof ciudad);
console.log("Teléfono:", telefono, "- Tipo:", typeof telefono);

/* 
🔍 NOTA IMPORTANTE:
- typeof nos dice qué tipo de dato es
- null dice que es "object" (es un bug histórico de JavaScript)
- undefined significa "no tiene valor"
*/

// ===========================
// 2️⃣ OPERADORES BÁSICOS
// ===========================

/* 
🧮 OPERADORES ARITMÉTICOS
Son como las operaciones matemáticas que ya conoces.
La computadora hace las cuentas por ti.
*/

console.log("\n=== OPERADORES ===");

// Operadores matemáticos básicos
let suma = 5 + 3;                  // Suma: 8
let resta = 10 - 4;                // Resta: 6
let multiplicacion = 6 * 7;        // Multiplicación: 42
let division = 15 / 3;             // División: 5
let modulo = 10 % 3;               // Módulo (resto): 1

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("Módulo (resto):", modulo);

/* 
💡 ¿QUÉ ES EL MÓDULO (%)?
Es el resto de una división. Por ejemplo:
10 % 3 = 1 (porque 10 ÷ 3 = 3 con resto 1)
Es súper útil para saber si un número es par o impar.
*/

// Concatenación de strings (unir texto)
let saludo = "Hola " + nombre;                    // Forma clásica
let saludoTemplate = `Hola ${nombre}, tienes ${edad} años`;  // Forma moderna

console.log("Concatenación:", saludo);
console.log("Template literal:", saludoTemplate);

/* 
🎨 TEMPLATE LITERALS (backticks ``)
Son geniales porque puedes:
- Meter variables con ${variable}
- Escribir en múltiples líneas
- Son más fáciles de leer que concatenar con +
*/

// ===========================
// 3️⃣ COMPARACIONES (¡MUY IMPORTANTE!)
// ===========================

/* 
⚠️ ESTO ES SÚPER IMPORTANTE EN JAVASCRIPT
JavaScript tiene dos tipos de comparaciones:
- === (estricta): compara valor Y tipo
- == (débil): convierte tipos automáticamente (¡PELIGROSO!)

💡 REGLA DE ORO: SIEMPRE usa === 
¿Por qué? Porque == puede dar resultados inesperados.
*/

console.log("\n=== COMPARACIONES ===");

// ✅ COMPARACIÓN ESTRICTA (usa siempre esta)
console.log("5 === 5:", 5 === 5);           // true - mismo número
console.log("5 === '5':", 5 === "5");       // false - número vs texto
console.log("5 !== '5':", 5 !== "5");       // true - son diferentes

// ❌ COMPARACIÓN DÉBIL (puede confundirte)
console.log("5 == '5':", 5 == "5");         // true - convierte '5' a número
console.log("0 == false:", 0 == false);     // true - convierte false a 0
console.log("[] == false:", [] == false);   // true - ¡WTF! 🤯

/* 
🚨 ¿VES EL PROBLEMA?
== hace conversiones automáticas que pueden ser confusas.
=== no hace conversiones, es más predecible.
*/

// Comparaciones numéricas (estas sí están bien)
console.log("edad > 18:", edad > 18);        // ¿Es mayor que 18?
console.log("edad >= 25:", edad >= 25);      // ¿Es mayor o igual a 25?
console.log("edad < 30:", edad < 30);        // ¿Es menor que 30?

// ===========================
// 4️⃣ CONDICIONALES
// ===========================

/* 
🤔 CONDICIONALES = TOMAR DECISIONES
Son como preguntas: "¿Si esto es verdad, entonces haz esto?"
Es como cuando decides si llevar paraguas según el clima.
*/

console.log("\n=== CONDICIONALES ===");

// IF-ELSE básico (la estructura más común)
if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

/* 
💡 CÓMO LEER ESTO:
"Si edad es mayor o igual a 18, entonces imprime 'Es mayor de edad',
sino, imprime 'Es menor de edad'"
*/

// IF-ELSE IF-ELSE (para múltiples condiciones)
if (edad < 18) {
    console.log("Menor de edad");
} else if (edad < 65) {
    console.log("Adulto");
} else {
    console.log("Adulto mayor");
}

/* 
🎯 ESTO ES COMO UNA ESCALERA:
1. Primero pregunta si es menor de 18
2. Si no, pregunta si es menor de 65
3. Si no, entonces es adulto mayor
*/

// Operador ternario (para casos simples)
let categoria = edad >= 18 ? "Adulto" : "Menor";
console.log("Categoría:", categoria);

/* 
🚀 OPERADOR TERNARIO:
Es como un if-else en una sola línea.
condición ? "si es verdad" : "si es falso"
*/

// SWITCH (para múltiples opciones exactas)
switch (nombre) {
    case "Ana":
        console.log("¡Hola Ana!");
        break;
    case "Carlos":
        console.log("¡Hola Carlos!");
        break;
    default:
        console.log("Nombre no reconocido");
}

/* 
🎪 SWITCH es útil cuando tienes muchas opciones exactas.
¡No olvides el break! Sin break, seguirá ejecutando los casos siguientes.
*/

// ===========================
// 5️⃣ BUCLES (LOOPS)
// ===========================

/* 
🔄 BUCLES = REPETIR ACCIONES
¿Te imaginas escribir console.log 100 veces?
Los bucles nos permiten repetir código automáticamente.
*/

console.log("\n=== BUCLES ===");

// FOR CLÁSICO (cuando sabes cuántas veces repetir)
console.log("For clásico:");
for (let i = 0; i < 3; i++) {
    console.log(`Iteración ${i}`);
}

/* 
🔧 ANATOMÍA DEL FOR:
for (inicialización; condición; incremento) {
    // código a repetir
}
- let i = 0: empezamos en 0
- i < 3: mientras i sea menor que 3
- i++: aumenta i en 1 cada vez
*/

// WHILE (mientras una condición sea verdadera)
console.log("While:");
let contador = 0;
while (contador < 3) {
    console.log(`Contador: ${contador}`);
    contador++;  // ¡MUY IMPORTANTE! Sin esto sería infinito
}

/* 
⚠️ CUIDADO CON WHILE:
Si olvidas incrementar el contador, el bucle nunca terminará
y tu programa se colgará. Siempre asegúrate de que la condición
eventualmente sea falsa.
*/

// ===========================
// 6️⃣ ARRAYS (ARREGLOS)
// ===========================

/* 
📚 ARRAYS = LISTAS DE COSAS
Un array es como una lista ordenada. Piensa en una lista de compras
o una lista de reproducción musical.
*/

console.log("\n=== ARRAYS ===");

// Crear arrays
const frutas = ["manzana", "banana", "naranja"];
const numeros = [1, 2, 3, 4, 5];
const mixto = ["texto", 42, true, null];  // Puede tener diferentes tipos

console.log("Frutas:", frutas);
console.log("Primer elemento:", frutas[0]);        // Los arrays empiezan en 0
console.log("Último elemento:", frutas[frutas.length - 1]);
console.log("Longitud:", frutas.length);

/* 
🔢 IMPORTANTE: LOS ARRAYS EMPIEZAN EN 0
frutas[0] = "manzana"
frutas[1] = "banana"
frutas[2] = "naranja"
*/

// Métodos básicos para modificar arrays
frutas.push("uva");           // Agregar al final
frutas.unshift("fresa");      // Agregar al inicio
frutas.pop();                 // Quitar del final
frutas.shift();               // Quitar del inicio

console.log("Frutas modificadas:", frutas);

/* 
🛠️ MÉTODOS BÁSICOS:
- push(): agrega al final
- pop(): quita del final
- unshift(): agrega al inicio
- shift(): quita del inicio
*/

// FOR-OF para recorrer arrays (¡muy útil!)
console.log("Recorriendo frutas:");
for (const fruta of frutas) {
    console.log(`- ${fruta}`);
}

/* 
🎯 FOR-OF es perfecto para arrays
Es más simple que el for clásico cuando solo quieres
recorrer todos los elementos.
*/

// MÉTODOS AVANZADOS DE ARRAYS (súper importantes)
const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node"];

/* 
🚀 ESTOS MÉTODOS SON FUNDAMENTALES:
Van a cambiar tu vida como programador. En lugar de escribir
bucles complicados, usas estos métodos que son más claros.
*/

// FILTER - crear un nuevo array con elementos que cumplan una condición
const tecnologiasCortas = tecnologias.filter(tech => tech.length <= 4);
console.log("Tecnologías cortas:", tecnologiasCortas);

/* 
💡 FILTER funciona así:
"De todas las tecnologías, dame solo las que tengan 4 letras o menos"
*/

// MAP - crear un nuevo array transformando cada elemento
const tecnologiasMayus = tecnologias.map(tech => tech.toUpperCase());
console.log("Tecnologías en mayúsculas:", tecnologiasMayus);

/* 
🎨 MAP funciona así:
"Toma cada tecnología y conviértela a mayúsculas"
Siempre devuelve un array del mismo tamaño, pero transformado.
*/

// FIND - encontrar el primer elemento que cumple una condición
const react = tecnologias.find(tech => tech === "React");
console.log("Encontrado:", react);

/* 
🔍 FIND funciona así:
"Busca la primera tecnología que sea exactamente 'React'"
Si no encuentra nada, devuelve undefined.
*/

// REDUCE - reducir todo el array a un solo valor
const totalLetras = tecnologias.reduce((total, tech) => total + tech.length, 0);
console.log("Total de letras:", totalLetras);

/* 
🧮 REDUCE es el más complejo pero poderoso:
"Suma la longitud de cada tecnología"
- total: el acumulador (empieza en 0)
- tech: cada elemento del array
- total + tech.length: la nueva suma
*/

// ===========================
// 7️⃣ OBJETOS
// ===========================

/* 
📦 OBJETOS = CONTENEDORES DE PROPIEDADES
Un objeto es como una ficha personal: tiene nombre, edad, etc.
Es perfecto para representar "cosas" del mundo real.
*/

console.log("\n=== OBJETOS ===");

// Crear objeto
const estudiante = {
    nombre: "Carlos",
    edad: 23,
    tecnologias: ["JavaScript", "React"],
    activo: true,
    // Método dentro del objeto
    saludar: function () {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
    }
};

/* 
🏗️ ESTRUCTURA DE UN OBJETO:
{
    propiedad: valor,
    otraPropiedad: otroValor,
    metodo: function() { ... }
}
*/

// Acceder a propiedades (dos formas)
console.log("Nombre:", estudiante.nombre);      // Notación punto
console.log("Edad:", estudiante["edad"]);       // Notación corchetes
console.log("Saludo:", estudiante.saludar());

/* 
🎯 DOS FORMAS DE ACCEDER:
- estudiante.nombre (más común)
- estudiante["nombre"] (útil cuando el nombre es variable)
*/

// Modificar propiedades
estudiante.edad = 24;                      // Cambiar existente
estudiante.email = "carlos@email.com";     // Agregar nueva
console.log("Estudiante actualizado:", estudiante);

// DESESTRUCTURACIÓN DE OBJETOS (súper útil)
const { nombre: nomEst, edad: edadEst, tecnologias: techs } = estudiante;
console.log("Nombre desestructurado:", nomEst);
console.log("Tecnologías:", techs);

/* 
🎪 DESESTRUCTURACIÓN:
Es como "desempacar" un objeto. En lugar de escribir:
const nom = estudiante.nombre;
const edad = estudiante.edad;

Puedes escribir:
const { nombre, edad } = estudiante;
*/

// ===========================
// 8️⃣ FUNCIONES
// ===========================

/* 
🔧 FUNCIONES = MINI-PROGRAMAS REUTILIZABLES
Una función es como una receta: le das ingredientes (parámetros)
y te devuelve un plato (resultado).
*/

console.log("\n=== FUNCIONES ===");

// Función tradicional
function sumar(a, b) {
    return a + b;
}

/* 
📝 ANATOMÍA DE UNA FUNCIÓN:
function nombre(parámetros) {
    // código
    return resultado;
}
*/

// Función expresión (guardada en variable)
const restar = function (a, b) {
    return a - b;
};

// Función flecha (arrow function) - forma moderna
const multiplicar = (a, b) => a * b;

/* 
🏹 ARROW FUNCTIONS:
Son más cortas y modernas. Estas dos son iguales:
const suma = function(a, b) { return a + b; }
const suma = (a, b) => a + b;
*/

// Función flecha con más líneas
const dividir = (a, b) => {
    if (b === 0) {
        return "No se puede dividir por cero";
    }
    return a / b;
};

console.log("Suma:", sumar(5, 3));
console.log("Resta:", restar(10, 4));
console.log("Multiplicación:", multiplicar(6, 7));
console.log("División:", dividir(15, 3));

// Función con parámetros por defecto
function saludarPersona(nombre = "Usuario", edad = 0) {
    return `Hola ${nombre}, tienes ${edad} años`;
}

console.log(saludarPersona());              // Usa valores por defecto
console.log(saludarPersona("Ana", 25));     // Usa valores dados

/* 
⚙️ PARÁMETROS POR DEFECTO:
Si no pasas un parámetro, usa el valor por defecto.
Es útil para evitar errores cuando alguien olvida pasar algo.
*/

// ===========================
// 9️⃣ SCOPE Y CLOSURES
// ===========================

/* 
🏠 SCOPE = ALCANCE DE LAS VARIABLES
Piensa en el scope como habitaciones en una casa:
- Variables globales: visibles en toda la casa
- Variables locales: solo visibles en su habitación
*/

console.log("\n=== SCOPE Y CLOSURES ===");

// Scope global vs local
let variableGlobal = "Soy global";

function ejemploScope() {
    let variableLocal = "Soy local";

    if (true) {
        let variableBloque = "Soy de bloque";
        console.log("Desde bloque:", variableGlobal);   // ✅ Puede acceder
        console.log("Desde bloque:", variableLocal);    // ✅ Puede acceder
        console.log("Desde bloque:", variableBloque);   // ✅ Puede acceder
    }

    console.log("Desde función:", variableLocal);       // ✅ Puede acceder
    // console.log(variableBloque); // ❌ Error: no existe aquí
}

ejemploScope();

/* 
🔍 REGLAS DE SCOPE:
1. Variables internas pueden acceder a externas
2. Variables externas NO pueden acceder a internas
3. let y const tienen scope de bloque {}
*/

// CLOSURE - función que "recuerda" su entorno
function crearContador() {
    let contador = 0;

    return function () {
        contador++;
        return contador;
    };
}

const contador1 = crearContador();
const contador2 = crearContador();

console.log("Contador 1:", contador1()); // 1
console.log("Contador 1:", contador1()); // 2
console.log("Contador 2:", contador2()); // 1 (independiente)

/* 
🧠 CLOSURE ES COMO MEMORIA:
La función interna "recuerda" la variable contador
incluso después de que crearContador() terminó.
Cada contador es independiente.
*/

// ===========================
// 🔟 TRUTHY Y FALSY
// ===========================

/* 
🚦 TRUTHY Y FALSY = VALORES "VERDADEROS" Y "FALSOS"
En JavaScript, no solo true/false son booleanos.
Otros valores también se comportan como true o false.
*/

console.log("\n=== TRUTHY Y FALSY ===");

// Valores FALSY (solo estos 6)
const valoresFalsy = [false, 0, "", null, undefined, NaN];

// Valores TRUTHY (todo lo demás)
const valoresTruthy = [true, 1, "hola", [], {}, " ", "0"];

function testTruthy(valor) {
    if (valor) {
        console.log(`${JSON.stringify(valor)} es TRUTHY`);
    } else {
        console.log(`${JSON.stringify(valor)} es FALSY`);
    }
}

console.log("Probando valores falsy:");
valoresFalsy.forEach(testTruthy);

console.log("Probando valores truthy:");
valoresTruthy.forEach(testTruthy);

/* 
💡 ESTO ES MUY ÚTIL PARA VALIDACIONES:
if (nombre) {  // Si nombre no está vacío
    console.log("El usuario tiene nombre");
}

if (usuarios.length) {  // Si el array no está vacío
    console.log("Hay usuarios");
}
*/

// ===========================
// 1️⃣1️⃣ DESTRUCTURING Y SPREAD
// ===========================

/* 
📦 DESTRUCTURING = DESEMPACAR
Es como abrir una caja y sacar las cosas que necesitas.
En lugar de acceder uno por uno, sacas varios de una vez.
*/

console.log("\n=== DESTRUCTURING Y SPREAD ===");

// Destructuring de arrays
const colores = ["rojo", "verde", "azul", "amarillo"];
const [color1, color2, ...otrosColores] = colores;

console.log("Color 1:", color1);
console.log("Color 2:", color2);
console.log("Otros colores:", otrosColores);

/* 
🎨 DESTRUCTURING DE ARRAYS:
const [primero, segundo, ...resto] = array;
- primero = array[0]
- segundo = array[1]
- resto = todos los demás elementos
*/

// Destructuring de objetos
const usuario = {
    nombre: "María",
    edad: 30,
    email: "maria@email.com",
    ciudad: "Madrid"
};

const { nombre: nombreUsuario, email, ...resto } = usuario;
console.log("Nombre:", nombreUsuario);
console.log("Email:", email);
console.log("Resto:", resto);

/* 
🏷️ DESTRUCTURING DE OBJETOS:
const { propiedad, otraPropiedad } = objeto;
- Si quieres renombrar: { propiedad: nuevoNombre }
- Si quieres el resto: { propiedad, ...resto }
*/

// SPREAD OPERATOR (...)
const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];
const numerosCombinados = [...numeros1, ...numeros2];
console.log("Números combinados:", numerosCombinados);

/* 
🌟 SPREAD OPERATOR:
...array "desparrama" los elementos
[...array1, ...array2] = [1, 2, 3, 4, 5, 6]
Es como vaciar dos bolsas en una caja grande.
*/

// REST PARAMETERS (también usa ...)
function sumarTodos(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

console.log("Suma de varios números:", sumarTodos(1, 2, 3, 4, 5));

/* 
🎯 REST PARAMETERS:
...numeros recoge todos los argumentos en un array
Útil cuando no sabes cuántos argumentos van a pasar.
*/

// ===========================
// 1️⃣2️⃣ CALLBACK Y PROMESAS
// ===========================

/* 
⏰ PROGRAMACIÓN ASÍNCRONA
A veces necesitamos esperar: descargar datos, leer archivos, etc.
JavaScript nos da herramientas para manejar estas esperas.
*/

console.log("\n=== CALLBACKS Y PROMESAS ===");

// CALLBACK - función que se ejecuta cuando algo termina
function procesarDatos(datos, callback) {
    console.log("Procesando datos...");
    setTimeout(() => {  // Simula operación que toma tiempo
        const resultado = datos.map(x => x * 2);
        callback(resultado);  // Llama al callback con el resultado
    }, 1000);
}

procesarDatos([1, 2, 3], (resultado) => {
    console.log("Resultado del callback:", resultado);
});

/* 
📞 CALLBACK:
"Cuando termines de procesar, llama a esta función"
Es como decir: "Cuando llegues a casa, llámame"
*/

// PROMESA - una forma más elegante de manejar operaciones asíncronas
function obtenerDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.3;  // 70% de probabilidad de éxito
            if (exito) {
                resolve("Datos obtenidos correctamente");
            } else {
                reject("Error al obtener datos");
            }
        }, 1500);
    });
}

/* 
🤝 PROMESAS:
Una promesa es como un ticket: "Te prometo que te daré el resultado"
- resolve(): cuando todo sale bien
- reject(): cuando algo sale mal
*/

// Usar promesa con .then/.catch
obtenerDatos()
    .then(resultado => {
        console.log("Promesa exitosa:", resultado);
    })
    .catch(error => {
        console.error("Error en promesa:", error);
    });

/* 
🔗 .THEN Y .CATCH:
- .then(): se ejecuta si la promesa se resuelve bien
- .catch(): se ejecuta si la promesa falla
*/

// ASYNC/AWAIT - forma moderna y más limpia
async function consumirDatos() {
    try {
        console.log("Esperando datos...");
        const datos = await obtenerDatos();  // Espera a que termine
        console.log("Datos con async/await:", datos);
    } catch (error) {
        console.error("Error con async/await:", error);
    }
}

consumirDatos();

/* 
🎭 ASYNC/AWAIT:
- async: marca que la función es asíncrona
- await: espera a que termine la promesa
- try/catch: maneja errores
Es como .then/.catch pero más fácil de leer.
*/

// ===========================
// 1️⃣3️⃣ MANEJO DE ERRORES
// ===========================

/* 
🚨 MANEJO DE ERRORES
Los errores van a pasar. Lo importante es capturarlos
y hacer algo útil con ellos, no que el programa se rompa.
*/

console.log("\n=== MANEJO DE ERRORES ===");

function dividirSeguro(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

try {
    console.log("División normal:", dividirSeguro(10, 2));
    console.log("División por cero:", dividirSeguro(10, 0)); // Esto va a fallar
} catch (error) {
    console.error("Error capturado:", error.message);
} finally {
    console.log("Bloque finally siempre se ejecuta");
}

/* 
🛡️ TRY/CATCH/FINALLY:
- try: código que puede fallar
- catch: qué hacer si falla
- finally: código que siempre se ejecuta
- throw: lanzar un error personalizado

Es como llevar paraguas por si llueve.
*/

// ===========================
// 1️⃣4️⃣ CLASES (BÁSICO)
// ===========================

/* 
🏗️ CLASES = MOLDES PARA CREAR OBJETOS
Una clase es como un molde para hacer galletas.
Defines una vez cómo es una "Persona", y luego puedes crear
muchas personas diferentes.
*/

console.log("\n=== CLASES ===");

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
    }

    cumplirAnos() {
        this.edad++;
        return `¡Feliz cumpleaños! Ahora tengo ${this.edad} años`;
    }
}

/* 
🏗️ PARTES DE UNA CLASE:
- constructor(): se ejecuta cuando creas una nueva instancia
- métodos: funciones que pueden usar todas las instancias
- this: se refiere a la instancia específica
*/

// HERENCIA - una clase puede heredar de otra
class Estudiante extends Persona {
    constructor(nombre, edad, carrera) {
        super(nombre, edad);  // Llama al constructor de Persona
        this.carrera = carrera;
    }

    estudiar() {
        return `${this.nombre} está estudiando ${this.carrera}`;
    }
}

/* 
👨‍👩‍👧‍👦 HERENCIA:
Estudiante "hereda" todo de Persona y agrega sus propias cosas.
- extends: indica que hereda de otra clase
- super(): llama al constructor de la clase padre
*/

const persona1 = new Persona("Ana", 25);
const estudiante1 = new Estudiante("Carlos", 22, "Desarrollo Web");

console.log(persona1.saludar());
console.log(persona1.cumplirAnos());
console.log(estudiante1.saludar());        // Heredado de Persona
console.log(estudiante1.estudiar());       // Propio de Estudiante

// ===========================
// 1️⃣5️⃣ DOM BÁSICO (para usar en HTML)
// ===========================

console.log("\n=== DOM (usar en navegador) ===");

// ⚠️ IMPORTANTE: Estos ejemplos funcionan solo en el navegador
// Comentados para evitar errores en Node.js

/*
// Seleccionar elementos
const titulo = document.getElementById("titulo");
const parrafos = document.getElementsByClassName("parrafo");
const primerBoton = document.querySelector(".btn");
const todosLosLinks = document.querySelectorAll("a");

// Modificar contenido
titulo.textContent = "Nuevo título";
titulo.innerHTML = "Título con <strong>negrita</strong>";

// Modificar estilos
titulo.style.color = "blue";
titulo.style.fontSize = "24px";

// Agregar/quitar clases
titulo.classList.add("resaltado");
titulo.classList.remove("oculto");
titulo.classList.toggle("activo");

// Crear elementos
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este párrafo fue creado con JavaScript";
document.body.appendChild(nuevoParrafo);

// Eventos
primerBoton.addEventListener("click", function() {
    alert("¡Botón clickeado!");
});

primerBoton.addEventListener("mouseover", () => {
    primerBoton.style.backgroundColor = "red";
});

// Evento de formulario
const formulario = document.querySelector("#miFormulario");
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); // Evita que se recargue la página
    console.log("Formulario enviado");
});
*/

// ===========================
// 🎯 CONSEJOS FINALES
// ===========================

console.log("\n=== CONSEJOS FINALES ===");

console.log(`
📌 REGLAS DE ORO PARA PRINCIPIANTES:

✅ SÍ hacer:
- Usar const por defecto, let solo si necesitas cambiar
- Comparar con === siempre
- Comentar tu código
- Usar nombres descriptivos para variables
- Manejar errores con try/catch
- Usar arrow functions para funciones simples

❌ NO hacer:
- Usar var
- Comparar con == 
- Dejar variables sin inicializar
- Nombres de variables como 'a', 'b', 'x' (excepto en loops)
- Ignorar los errores
- Mezclar tipos de datos sin pensar

🚀 PRACTICA ESTOS CONCEPTOS:
1. Variables y tipos
2. Condicionales y bucles
3. Arrays y sus métodos
4. Objetos y destructuring
5. Funciones (especialmente arrow functions)
6. Promesas y async/await
7. Manipulación del DOM
`);

console.log("🎉 ¡Terminaste el repaso de JavaScript esencial!");