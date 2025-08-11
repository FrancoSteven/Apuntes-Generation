# 1) ¿Qué es una API web?

## 📖 Definición técnica
Una **API web** (Interfaz de Programación de Aplicaciones) es un conjunto de:
- **Endpoints** accesibles vía internet  
- Que exponen datos o funcionalidades  
- Usualmente responden con **JSON/XML**  
- Operan bajo el protocolo **HTTP/HTTPS**  

## 💬 En palabras simples
Es como un **mesero digital** 🍽️:  
1. Tú haces un *pedido* (solicitud HTTP)  
2. El *mesero* (API) va a la *cocina* (servidor)  
3. Te trae la *comida* (datos en JSON/XML)  

## ✅ Buenas prácticas
✔ **Validar respuestas**: Revisar `response.ok` y códigos HTTP  
✔ **Manejar errores**: Usar `try...catch` o `.catch()` para fallos  
✔ **Optimizar peticiones**: Filtrar con parámetros como `?limit=10`  
✔ **Leer documentación**: Cada API tiene sus reglas  
✔ **Respetar límites**: Evitar bloqueos por exceso de peticiones  

## ❌ Errores comunes
✖ **Asumir disponibilidad**: ¡Servidores fallan!  
✖ **Sobrecargar datos**: Pedir solo lo necesario  
✖ **Ignorar códigos HTTP**: Un 404/500 requiere manejo explícito  
✖ **Exponer credenciales**: Nunca dejar claves en el frontend 