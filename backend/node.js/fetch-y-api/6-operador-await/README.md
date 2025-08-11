# 6) Operador await

## 📖 Definición técnica

- **`await`** pausa la ejecución de una función `async` hasta que una Promesa se resuelve
- Solo funciona dentro de funciones marcadas con `async`
- Desenvuelve el valor de la Promesa resuelta (o lanza el error si es rechazada)
- No bloquea el hilo principal (Event Loop sigue funcionando)

## 💬 En palabras simples

Es como decirle a JavaScript:
⏸️ _"Espera aquí hasta que tengas la respuesta"_
▶️ _"Cuando llegue, sigue ejecutando el código"_

## ✅ Buenas prácticas

✔ Usar solo dentro de funciones `async`  
✔ Combinar con `try...catch` para manejo de errores  
✔ Ideal para operaciones secuenciales dependientes  
✔ Usar `Promise.all()` para operaciones paralelas

## ❌ No deberías

✖ Usarlo en funciones no-async (generará error de sintaxis)  
✖ Abusar en bucles cuando hay operaciones independientes  
✖ Olvidar manejar errores (la Promesa rechazada se perderá)  
✖ Usarlo para operaciones síncronas (no tiene sentido)
