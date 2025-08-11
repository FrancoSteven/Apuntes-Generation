# 8) API de Almacenamiento Web

## 📖 Definición técnica  
- **`localStorage`**: Almacena datos en el navegador de forma permanente (hasta que se borren manualmente o con código).  
- **`sessionStorage`**: Almacena datos solo durante la sesión del navegador (se borran al cerrar la pestaña).  
- Ambos guardan datos como pares **clave-valor** y solo aceptan strings.  

## 💬 En palabras simples  
- Es como un cajón en tu navegador donde puedes guardar pequeñas notas (datos).  
  - **`localStorage`** → Cajón fijo, no se borra al cerrar.  
  - **`sessionStorage`** → Cajón temporal, se vacía al cerrar.  

## ✅ Buenas prácticas  
- Guardar solo datos que realmente necesites después.  
- Convertir objetos a JSON con `JSON.stringify()` antes de guardar.  
- Convertir de nuevo a objeto con `JSON.parse()` al leer.  

## ❌ No deberías  
- Guardar datos sensibles (contraseñas, tokens privados).  
- Guardar datos muy grandes (límite aproximado: **5 MB**).  