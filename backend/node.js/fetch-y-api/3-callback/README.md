# 3) Callbacks

## 📖 Definición técnica
- Un **callback** es una función que se pasa como argumento y se ejecuta cuando otra función termina (con éxito o error).
- En programación asíncrona, los callbacks manejan resultados después de que una operación (como una petición HTTP) finalice.

## 💬 En palabras simples
Es como pedirle a alguien:  
*"Llámame (ejecuta esta función) cuando termines el trabajo"*.  
Le das tu número (**callback**) y él te avisa cuando termina.

## ✅ Buenas prácticas
✔ **Nombres claros**: Usar `onSuccess`, `onError` para mejor legibilidad  
✔ **Manejar ambos casos**: Siempre controlar éxito **y** error  
✔ **Evitar "Callback Hell"**: No anidar muchos callbacks (dificulta la lectura)  
✔ **Alternativas modernas**: Preferir Promesas o `async/await` cuando sea posible  

## ❌ Malas prácticas
✖ **"Callback Hell"**: Anidar múltiples callbacks (hace el código ilegible)  
✖ **Ignorar errores**: No manejar fallos de red o respuestas HTTP  
✖ **Uso innecesario**: Usar callbacks para operaciones **síncronas** simples  