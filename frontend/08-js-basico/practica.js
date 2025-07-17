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


















