# 7) try…catch vs .then()

## 📖 Definición técnica  
- **`.then()`**: Método de las Promises que recibe una función a ejecutar cuando la promesa se resuelve correctamente.  
- **`.catch()`**: Método que captura errores cuando la promesa se rechaza.  
- **`try…catch`**: Bloque de manejo de errores que funciona con código síncrono y también con `async/await`.  

## 💬 En palabras simples  
- **`.then()`** → Es como decir *"Cuando tengas la respuesta, haz esto"* y *"Si falla, haz esto otro"*.  
- **`try…catch`** → Es como encerrar todo en una caja y atrapar cualquier error que ocurra dentro.  

## ✅ Buenas prácticas  
- **`.then()`** → Bueno para cadenas cortas de Promesas o transformaciones simples.  
- **`try…catch`** → Más claro en flujos secuenciales o cuando tienes varias operaciones dependientes.  

## ❌ No deberías  
- Mezclar estilos sin necesidad.  
- Usar **`.then()`** en funciones `async` (rompe la consistencia visual).  

## 📌 Diferencias que los alumnos deben notar

| `.then()`                                                                  | `try…catch`                                                            |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Ideal para promesas cortas o transformaciones encadenadas.                 | Ideal para flujos secuenciales y legibles.                             |
| Maneja errores con `.catch()`.                                             | Maneja errores con `try…catch`.                                        |
| Más fácil de encadenar múltiples `.then()` para transformaciones de datos. | Más natural para leer “paso a paso” y combinar con lógica condicional. |
