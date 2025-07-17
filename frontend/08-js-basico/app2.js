// SCOPE y CLOSURES
let variableGlobal = "Soy global";

function ejemploScope() {
    let variableLocal = "Soy local";
    if (true) {
        let variableBloque = "Soy de bloque";
        console.log(variableGlobal);
        console.log(variableLocal);
        console.log(variableBloque);
    }
}

ejemploScope();

function crearContador() {
    let contador = 0;
    return function () {
        contador++;
        return contador;
    };
}

const contador = crearContador();
console.log("Closure 1:", contador());
console.log("Closure 2:", contador());

// HOISTING
console.log(x); // undefined
var x = 5;

// console.log(y); // ReferenceError
let y = 10;

// THIS y BIND
const persona = {
    nombre: "Ana",
    saludar: function () {
        console.log("Hola soy", this.nombre);
    },
    saludarArrow: () => {
        console.log("Hola soy", this.nombre); // No funciona
    }
};

persona.saludar();
persona.saludarArrow();

const saludarGlobal = persona.saludar;
saludarGlobal(); // undefined

const saludarConBind = persona.saludar.bind(persona);
saludarConBind(); // Funciona

// CALLBACKS
function procesar(datos, cb) {
    setTimeout(() => {
        const resultado = datos.map(x => x * 2);
        cb(resultado);
    }, 1000);
}

procesar([1, 2, 3], (res) => console.log("Callback:", res));

// PROMESAS
function obtenerDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.3;
            if (exito) {
                resolve("Datos OK");
            } else {
                reject("Error al obtener datos");
            }
        }, 1000);
    });
}

obtenerDatos()
    .then(res => console.log("Promesa:", res))
    .catch(err => console.error("Error:", err));

// ASYNC/AWAIT
async function consumirDatos() {
    try {
        const data = await obtenerDatos();
        console.log("Async/Await:", data);
    } catch (e) {
        console.error("Catch:", e);
    }
}

consumirDatos();

// DESTRUCTURING
const colores = ["rojo", "verde", "azul"];
const [c1, c2, c3] = colores;

const usuario = { nombre: "Carlos", edad: 30, email: "carlos@email.com" };
const { nombre, edad, email: correo } = usuario;

console.log("Colores:", c1, c2, c3);
console.log("Nombre:", nombre, "Correo:", correo);

// SPREAD y REST
const nums1 = [1, 2];
const nums2 = [3, 4];
const combinados = [...nums1, ...nums2];
console.log("Combinados:", combinados);

function sumar(...numeros) {
    return numeros.reduce((acc, val) => acc + val, 0);
}
console.log("Suma REST:", sumar(1, 2, 3, 4));

// MÉTODOS AVANZADOS DE ARRAY
const productos = [
    { nombre: "Laptop", precio: 1000, categoria: "tech" },
    { nombre: "Mouse", precio: 25, categoria: "tech" },
    { nombre: "Libro", precio: 15, categoria: "educacion" },
    { nombre: "Teclado", precio: 50, categoria: "tech" }
];

const nombres = productos.map(p => p.nombre);
const baratos = productos.filter(p => p.precio < 100);
const total = productos.reduce((sum, p) => sum + p.precio, 0);
const algunoCaro = productos.some(p => p.precio > 900);
const todosTech = productos.every(p => p.categoria === "tech");

console.log("Nombres:", nombres);
console.log("Baratos:", baratos);
console.log("Total precios:", total);
console.log("¿Hay caros?", algunoCaro);
console.log("¿Todos tech?", todosTech);

// ERRORES
function dividir(a, b) {
    if (b === 0) throw new Error("División por cero");
    return a / b;
}

try {
    console.log("Resultado:", dividir(10, 2));
    console.log("Dividir por cero:", dividir(10, 0));
} catch (e) {
    console.error("Error capturado:", e.message);
} finally {
    console.log("Siempre se ejecuta");
}

// CLASES
class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.encendido = false;
    }

    encender() {
        this.encendido = true;
        console.log(`${this.marca} ${this.modelo} encendido`);
    }

    apagar() {
        this.encendido = false;
        console.log(`${this.marca} ${this.modelo} apagado`);
    }
}

class Auto extends Vehiculo {
    constructor(marca, modelo, puertas) {
        super(marca, modelo);
        this.puertas = puertas;
    }

    tocarBocina() {
        console.log("¡Beep beep!");
    }
}

const miAuto = new Auto("Toyota", "Corolla", 4);
miAuto.encender();
miAuto.tocarBocina();
