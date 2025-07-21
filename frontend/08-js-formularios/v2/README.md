# CRUD Usuarios - Versión 2

## **Descripción**
La **versión 2** del CRUD añade funcionalidades de **búsqueda y ordenamiento** para mejorar la experiencia del usuario.  
El sistema sigue trabajando con el array en memoria (`users`), pero ahora el usuario puede filtrar y ordenar la lista en tiempo real.

## **Nuevas Funcionalidades**
- **Buscador:** Campo para buscar usuarios por nombre o email.
- **Ordenamiento:** Botones para ordenar la lista de usuarios (A-Z o Z-A).
- **Modularización:** Se agrega el archivo `filter.js` para separar la lógica de búsqueda y ordenamiento.

## **Características heredadas de v1**
- Registro de usuarios mediante formulario.
- Auto-rellenado con API RandomUser.
- Edición y eliminación de usuarios con modales.
- Validaciones y notificaciones con Bootstrap Toast.

## **Limitaciones**
- No existe persistencia (al recargar la página se pierden los datos).
- Filtros y ordenamiento solo afectan los datos cargados en memoria.

## **Estructura del Proyecto**
- **`index.html`**: Contiene el buscador, botones de orden y lista de usuarios.
- **`api.js`**: Obtiene datos desde RandomUser.
- **`scripts.js`**: Maneja el CRUD (crear, editar, eliminar).
- **`filter.js`**: Contiene la lógica de búsqueda y ordenamiento.

---
