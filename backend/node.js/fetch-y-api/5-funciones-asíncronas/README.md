# 5) Funciones asíncronas (async)

## 📖 Definición técnica
- Una función marcada con `async` siempre devuelve una **Promesa**.
- Dentro de ella se puede usar `await` para esperar el resultado de una Promesa antes de continuar.
- `await` solo funciona dentro de funciones `async`.

## 💬 En palabras simples
- Es como decirle a JS:  
  *"Detente aquí hasta que tengas la respuesta, y luego sigue con el resto del código."*  
- Así el código se ve más **secuencial y fácil de leer**.

## ✅ Buenas prácticas
- Usar `try…catch` dentro de funciones `async` para manejar errores.
- Usar `await` solo cuando realmente necesitas esperar la respuesta antes de continuar.
- Mantener las funciones `async` **limpias y cortas**.

## ❌ No deberías
- Usar `await` en bucles si puedes usar `Promise.all` (bloqueas innecesariamente).
- Olvidar manejar errores (si no usas `try…catch`, la Promesa se rechaza).