// VARIABLES, TIPOS Y OPERADORES
// 💡 Mostrar cómo declarar variables y tipos de datos básicos
let nombre = "Ana";           // String
const edad = 25;              // Number
var esDeveloper = true;       // Boolean

let suma = 5 + 3;
let concatenacion = "Hola " + nombre;
let comparacion = edad > 18;

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("¿Es developer?", esDeveloper);
console.log("Suma:", suma);
console.log("Concatenación:", concatenacion);
console.log("¿Es mayor de edad?", comparacion);

// CONDICIONALES
// 💡 Explica if-else, ternario y switch
if (edad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

let mensaje = edad >= 18 ? "Adulto" : "Menor";
console.log("Mensaje:", mensaje);

switch (nombre) {
  case "Ana":
    console.log("¡Hola Ana!");
    break;
  default:
    console.log("Nombre no reconocido");
}

// BUCLES
// 💡 Mostrar las tres estructuras comunes de repetición
for (let i = 0; i < 3; i++) {
  console.log(`For clásico - Iteración ${i}`);
}

let contador = 0;
while (contador < 2) {
  console.log(`While - contador: ${contador}`);
  contador++;
}

const frutas = ["manzana", "banana", "naranja"];
for (const fruta of frutas) {
  console.log("Fruta:", fruta);
}

// ARREGLOS
// 💡 Mostrar creación, métodos básicos, filter y map
const tecnologias = ["HTML", "CSS", "JavaScript"];
tecnologias.push("React");
tecnologias.unshift("Git");
tecnologias.pop();

console.log("Tecnologías actualizadas:", tecnologias);

const filtradas = tecnologias.filter(tech => tech.length > 3);
console.log("Filtradas:", filtradas);

const mapeadas = tecnologias.map(tech => tech.toUpperCase());
console.log("Mapeadas:", mapeadas);

// OBJETOS
// 💡 Crear objetos, acceder, desestructurar y métodos
const estudiante = {
  nombre: "Carlos",
  edad: 23,
  tecnologias: ["JavaScript", "React"],
  activo: true,
  saludar: function() {
    return `Hola, soy ${this.nombre}`;
  }
};

console.log("Estudiante:", estudiante.nombre);
console.log("Saludo:", estudiante.saludar());

const { nombre: nom, tecnologias: techs } = estudiante;
console.log("Nombre desestructurado:", nom);
console.log("Tecnologías:", techs);

// FUNCIONES
// 💡 Mostrar diferentes formas de escribir funciones
function sumar(a, b) {
  return a + b;
}

const multiplicar = function(a, b) {
  return a * b;
};

const dividir = (a, b) => a / b;

console.log("Suma:", sumar(2, 3));
console.log("Multiplicación:", multiplicar(2, 3));
console.log("División:", dividir(6, 2));

// CALLBACK
function procesarDatos(datos, callback) {
  return callback(datos);
}

const resultado = procesarDatos([1, 2, 3], (arr) => arr.map(x => x * 2));
console.log("Callback procesado:", resultado);

// DOM - ACCESO
// 💡 Usar en consola del navegador en un archivo HTML vinculado
const titulo = document.getElementById("titulo");
const parrafos = document.getElementsByTagName("p");
const botones = document.querySelectorAll(".btn");
const primerEnlace = document.querySelector("a");

console.log("Título:", titulo);
console.log("Primer párrafo:", parrafos[0]);
console.log("Botones:", botones);
console.log("Primer enlace:", primerEnlace);

// DOM - MANIPULACIÓN
// 💡 Mostrar en navegador para ver efectos visuales
titulo.textContent = "Nuevo título desde JS";
parrafos[0].innerHTML = "Texto <strong>modificado</strong>";

titulo.style.color = "green";
titulo.classList.add("resaltado");

const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este párrafo fue creado dinámicamente";
document.body.appendChild(nuevoParrafo);

// EVENTOS
// 💡 Mostrar cómo reaccionar a eventos de usuario
const boton = document.querySelector("#miBoton");

boton.addEventListener("click", function() {
  alert("¡Clic en el botón!");
});

boton.addEventListener("mouseover", () => {
  boton.style.backgroundColor = "red";
});

const formulario = document.querySelector("#miForm");
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  console.log("Formulario enviado sin recargar");
});
