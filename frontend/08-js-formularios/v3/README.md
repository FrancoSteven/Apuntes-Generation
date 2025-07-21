# CRUD Usuarios - Versión 3 (con Local Storage)

## **Descripción**
La **versión 3** del CRUD introduce **persistencia de datos con Local Storage**.  
Esto significa que los usuarios registrados se mantienen incluso después de recargar o cerrar el navegador.

## **Nuevas Funcionalidades**
- **Local Storage:** 
  - Se agregan funciones para guardar (`saveUsersToLocalStorage`) y cargar (`loadUsersFromLocalStorage`) los usuarios.
  - Cada acción del CRUD (agregar, editar o eliminar) actualiza automáticamente el almacenamiento local.
- **Sincronización Automática:** Al iniciar, la aplicación carga los usuarios desde Local Storage.

## **Características heredadas de v2**
- Búsqueda en tiempo real por nombre o email.
- Ordenamiento A-Z y Z-A.
- Registro, edición y eliminación de usuarios.
- Auto-rellenado con datos de RandomUser.
- Validaciones y notificaciones con Toast de Bootstrap.

## **Estructura del Proyecto**
- **`index.html`**: Estructura de formulario, lista, buscador y modales.
- **`api.js`**: Conexión con RandomUser.
- **`scripts.js`**: CRUD + integración con Local Storage.
- **`filter.js`**: Búsqueda y ordenamiento.

---
