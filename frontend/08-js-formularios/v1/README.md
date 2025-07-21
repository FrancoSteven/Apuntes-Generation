# CRUD Usuarios - Versión 1

## **Descripción**
Esta es la **versión 1** del proyecto CRUD de usuarios.  
En esta versión básica, los usuarios se guardan en memoria (en un array `users` dentro de `scripts.js`).  
Cada vez que se recarga la página, la lista de usuarios se reinicia, ya que no existe persistencia.

## **Características principales**
- **Formulario de Registro:** Permite ingresar Nombre Completo, Email y Teléfono.
- **Auto-rellenado:** Botón para obtener datos aleatorios de la API [RandomUser](https://randomuser.me/).
- **Listado de Usuarios:** Muestra una tarjeta por cada usuario registrado.
- **Edición y Eliminación:** Se puede editar el email y teléfono de un usuario, o eliminarlo.
- **Validaciones:** Validación básica de email y teléfono.
- **Notificaciones:** Muestra mensajes con `Bootstrap Toast`.

## **Limitaciones**
- Los datos no se guardan después de recargar la página (no hay persistencia).
- No hay buscador ni ordenamiento.
- Código estructurado en:
  - **`index.html`**: Estructura HTML.
  - **`api.js`**: Conexión a la API RandomUser.
  - **`scripts.js`**: Lógica del CRUD.

---
