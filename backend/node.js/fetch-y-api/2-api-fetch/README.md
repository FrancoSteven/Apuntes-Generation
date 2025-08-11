# 2. API Fetch

## 📖 Definición técnica
- `fetch()` es una función nativa de JavaScript para hacer solicitudes HTTP y obtener recursos (JSON, texto, imágenes).
- Forma parte de la **Fetch API**, que incluye objetos como `Request`, `Response` y utilidades para peticiones/respuestas.

## 💬 En palabras simples
Es como enviar un mensajero digital:  
📨 *"Ve a esta URL, trae lo que encuentres"*  
🔄 *Cuando regrese, te entrega un paquete (Response)*  

## ✅ Buenas prácticas
✔ **Verificar éxito**: Siempre comprobar `response.ok` antes de procesar  
✔ **Manejo de errores**: Usar `.catch()` o `try...catch` con `async/await`  
✔ **Optimizar peticiones**: Usar parámetros como `?limit=10` para reducir datos  
✔ **Cache inteligente**: Evitar llamadas repetidas si ya tienes los datos  

## ❌ No deberías
✖ **Archivos grandes sin streaming**: Puede saturar la memoria  
✖ **Ignorar fallos**: Asumir que siempre habrá conexión o respuesta  
✖ **Bloquear la UI**: Esperar datos de forma síncrona (usa async/await o `.then()`)  
