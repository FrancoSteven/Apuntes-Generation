// ===========================
// ✅ EJERCICIO 1: VARIABLES Y OPERADORES
// ===========================
// Ejercicio 1: Variables y Operadores
// Crea variables para almacenar tu nombre, edad y si eres estudiante
// Luego crea un mensaje que las utilice todas

// Creamos las variables
const nombre = "Camila";
const edad = 22;
const esEstudiante = true;

// Creamos un mensaje usando template literals
const mensaje = `Hola, mi nombre es ${nombre}, tengo ${edad} años y ${esEstudiante ? "soy estudiante" : "no soy estudiante"}.`;

console.log(mensaje); // "Hola, mi nombre es Camila, tengo 22 años y soy estudiante."


// ===========================
// ✅ EJERCICIO 2: CONDICIONALES
// ===========================
// Ejercicio 2: Condicionales
// Crea una función que determine si un número es par o impar
// y retorne un mensaje apropiado

// Función para verificar si un número es par o impar
function esParOImpar(numero) {
  if (numero % 2 === 0) {
    return `El número ${numero} es PAR`;
  } else {
    return `El número ${numero} es IMPAR`;
  }
}

console.log(esParOImpar(10)); // "El número 10 es PAR"
console.log(esParOImpar(7));  // "El número 7 es IMPAR"


// ===========================
// ✅ EJERCICIO 3: BUCLES
// ===========================
// Ejercicio 3: Bucles
// Crea un bucle que imprima los números del 1 al 10
// pero que salte el número 7

for (let i = 1; i <= 10; i++) {
  if (i === 7) continue; // Salta el número 7
  console.log(i);
}
// Resultado: 1 2 3 4 5 6 8 9 10


// ===========================
// ✅ EJERCICIO 4: ARRAYS
// ===========================
// Ejercicio 4: Arrays
// Crea un array con 5 nombres
// Filtra solo los nombres que tengan más de 4 letras
// Convierte cada nombre a mayúsculas


const nombres = ["Ana", "Cristina", "Luis", "Carlos", "Ema"];

// Filtrar nombres con más de 4 letras
const filtrados = nombres.filter(nombre => nombre.length > 4);

// Convertir a mayúsculas
const enMayusculas = filtrados.map(nombre => nombre.toUpperCase());

console.log(enMayusculas); // ["CRISTINA", "CARLOS"]


// ===========================
// ✅ EJERCICIO 5: OBJETOS
// ===========================
// Ejercicio 5: Objetos
// Crea un objeto "libro" con título, autor, páginas y leído (boolean)
// Crea un método que cambie el estado de "leído"

// Creamos un objeto "libro"
const libro = {
  titulo: "El Principito",
  autor: "Antoine de Saint-Exupéry",
  paginas: 96,
  leido: false,
  // Función para marcar el libro como leído
  marcarComoLeido() {
    this.leido = true;
    console.log(`📘 Has leído "${this.titulo}"`);
  }
};

console.log(libro.leido);  // false
libro.marcarComoLeido();   // 📘 Has leído "El Principito"
console.log(libro.leido);  // true


// ===========================
// ✅ EJERCICIO 6: FUNCIONES
// ===========================
// Ejercicio 6: Funciones
// Crea una función que calcule el área de un círculo
// Debe recibir el radio como parámetro

// Función para calcular el área de un círculo
function calcularAreaCirculo(radio) {
  const PI = Math.PI;
  const area = PI * radio ** 2;
  return `El área del círculo con radio ${radio} es ${area.toFixed(2)}`;
}

console.log(calcularAreaCirculo(5)); // El área del círculo con radio 5 es 78.54



// ===========================
// ✅ EJERCICIO 7: TEMPLATE LITERALS Y CONCATENACIÓN
// ===========================
// Ejercicio 7: Crea una función que reciba nombre y ciudad,
// y devuelva un mensaje como: "Hola Pedro, bienvenido a Madrid"

function bienvenida(nombre, ciudad) {
  return `Hola ${nombre}, bienvenido a ${ciudad}`;
}

console.log(bienvenida("Pedro", "Madrid")); // "Hola Pedro, bienvenido a Madrid"


// ===========================
// ✅ EJERCICIO 8: CONDICIONALES MÚLTIPLES
// ===========================
// Ejercicio 8: Crea una función que reciba una nota (1-7)
// y devuelva si es "Suspenso", "Aprobado" o "Sobresaliente"

function evaluarNota(nota) {
  if (nota < 3) return "Suspenso";
  if (nota <= 4 ) return "Aprobado";
  return "Sobresaliente";
}

console.log(evaluarNota(1)); // "Suspenso"
console.log(evaluarNota(4)); // "Aprobado"
console.log(evaluarNota(7)); // "Sobresaliente"


// ===========================
// ✅ EJERCICIO 9: BUCLES Y SUMA
// ===========================
// Ejercicio 9: Calcula la suma de los números del 1 al 5
// usando un bucle for

let suma = 0;
for (let i = 1; i <= 5; i++) {
  suma += i;
}
console.log(`La suma de 1 a 5 es: ${suma}`); // 15


// ===========================
// ✅ EJERCICIO 10: ARRAY Y REDUCE
// ===========================
// Ejercicio 10: Dado un array de números, calcula la suma total
// usando el método reduce

const numeros = [3, 5, 7, 10];
const sumaTotal = numeros.reduce((acum, num) => acum + num, 0);
console.log(`La suma total es: ${sumaTotal}`); // 25


// ===========================
// ✅ EJERCICIO 11: OBJETO Y TEMPLATE LITERALS
// ===========================
// Ejercicio 11: Crea un objeto "persona" con nombre, edad y ciudad
// Muestra un mensaje como "María tiene 30 años y vive en Lima"

const persona = {
  nombre: "María",
  edad: 30,
  ciudad: "Lima"
};

console.log(`${persona.nombre} tiene ${persona.edad} años y vive en ${persona.ciudad}.`);


// ===========================
// ✅ EJERCICIO 12: FUNCIÓN FLECHA
// ===========================
// Ejercicio 12: Crea una función flecha que reciba un número
// y devuelva su cuadrado

const cuadrado = num => num * num;

console.log(cuadrado(4)); // 16
console.log(cuadrado(9)); // 81















