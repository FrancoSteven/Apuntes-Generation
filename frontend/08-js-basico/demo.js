// ===========================
// 📌 1. VARIABLES Y ALCANCE
// ===========================

// ❌ NO RECOMENDADO: var
var nombre = "Juan";  // Puede redeclararse y tiene scope de función
var nombre = "Pedro"; // Esto no lanza error
console.log("Var permite redeclarar:", nombre);

// ✅ RECOMENDADO: let
let edad = 25;
// let edad = 30; // ❌ Esto lanza error: ya está declarada

// ✅ MUY RECOMENDADO: const
const PI = 3.14;
// PI = 3.1415; // ❌ Error: no se puede reasignar

// ✔️ Scope con let y const
if (true) {
    let mensaje = "Hola mundo";
    const lenguaje = "JS";
    console.log(mensaje);    // Funciona
}
// console.log(mensaje);  // ❌ No está definido fuera del bloque


// ===========================
// 🎭 2. OPERADORES Y COMPARACIONES LOCAS (MEMES JS)
// ===========================

console.log("0 == '0' =>", 0 == "0");          // true (coerción)
console.log("0 === '0' =>", 0 === "0");        // false (estricto)
console.log("0 == [] =>", 0 == []);            // true 🤯
console.log("'0' == [] =>", "0" == []);        // false
console.log("null == undefined =>", null == undefined); // true
console.log("null === undefined =>", null === undefined); // false
console.log("[] == ![] =>", [] == ![]);        // true (wtf?!)
console.log("[] == 0 =>", [] == 0);            // true
console.log("[] === 0 =>", [] === 0);          // false
console.log("null == [] =>", null == []);      // false
console.log("null == 0 =>", null == 0);        // false
console.log("false == 0 =>", false == 0);      // true
console.log("false === 0 =>", false === 0);    // false


// ===========================
// 🎓 3. TIPS PARA ALUMNOS NUEVOS
// ===========================

/**
 * 📌 Esto SÍ:
 * - Usar const por defecto.
 * - Usar let si necesitas reasignar.
 * - Comparar con ===, no con ==
 * - Pensar en el tipo de dato antes de comparar.
 * - Comentar el código SIEMPRE.
 */

/**
 * ❌ Esto NO:
 * - Evitar var.
 * - No usar == (comparación débil).
 * - Evitar mezclas locas entre tipos de datos.
 */


// ===========================
// 🎯 4. TEST DE TIPO TRUTHY Y FALSY
// ===========================

function testTruthyFalsy(valor) {
    if (valor) {
        console.log(`${JSON.stringify(valor)} es TRUTHY`);
    } else {
        console.log(`${JSON.stringify(valor)} es FALSY`);
    }
}

testTruthyFalsy(false);        // falsy
testTruthyFalsy(0);            // falsy
testTruthyFalsy("");           // falsy
testTruthyFalsy(null);         // falsy
testTruthyFalsy(undefined);    // falsy
testTruthyFalsy(NaN);          // falsy
testTruthyFalsy([]);           // truthy
testTruthyFalsy({});           // truthy
testTruthyFalsy(" ");          // truthy
testTruthyFalsy("false");      // truthy


// ===========================
// 🧪 5. BONUS: ¿Sabías que...?
// ===========================

// typeof null es... un bug histórico 😅
console.log("typeof null =>", typeof null); // "object" 🤦‍♂️

// Arrays también son "object"
console.log("typeof [] =>", typeof []); // "object"

// Comparación especial NaN
console.log("NaN == NaN =>", NaN == NaN);     // false
console.log("NaN === NaN =>", NaN === NaN);   // false
console.log("isNaN(NaN) =>", isNaN(NaN));     // true
console.log("Number.isNaN(NaN) =>", Number.isNaN(NaN)); // true
