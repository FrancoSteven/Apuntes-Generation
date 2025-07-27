# **Spring Boot – Backend Course Structure**

Este curso está dividido en **módulos** alineados con el contenido del Notion y los PDF que utilizamos como base. Cada módulo incluye **teoría breve, ejemplos y una actividad práctica incremental** sobre el proyecto `miapp`.

---

## **Estructura de Carpetas**

```
backend/
  spring-boot/
    01-introduccion/            <-- Introducción a Spring Boot
    02-entidades/               <-- Modelado de entidades y persistencia
    03-capa-persistencia/       <-- Repositorios y lógica de negocio
    04-controladores-rest/      <-- Controladores y API REST
    05-solicitudes-api/         <-- Manejo de peticiones y respuestas
    06-tests-junit-mockito/     <-- Pruebas unitarias con JUnit y Mockito
    07-seguridad-jwt/           <-- Seguridad con Spring Security y JWT
    08-documentacion-endpoints/ <-- Documentación con OpenAPI / Swagger
    miapp/                      <-- Proyecto base (ejercicio práctico)
```

---

## **Descripción de cada módulo**

### **01 – Introducción a Spring Boot**

- ¿Qué es Spring Boot?
- Framework vs Librería.
- Arquitectura MVC.
- Creación del proyecto base (`miapp`) usando Spring Initializr.
- Primera actividad práctica: levantar un endpoint básico.

  ## **Proyecto `miapp`**

  - Este es el proyecto **base** del curso.
  - Se inicia en el módulo 01 y se va extendiendo con cada tema.
  - Contiene ejemplos de entidades (`Usuario`, `Producto`, `Categoria`) y endpoints básicos.

### **02 – Entidades**

- ¿Qué es una entidad en JPA?
- Mapeo de tablas con `@Entity` y `@Table`.
- Campos, tipos de datos y anotaciones `@Id`, `@GeneratedValue`.
- Actividad práctica: crear la entidad `Usuario`.

### **03 – Capa de Persistencia y Lógica de Negocio**

- Introducción a `Repository`.
- Interfaces `JpaRepository` y consultas automáticas.
- Lógica de negocio en `Service`.
- Actividad práctica: CRUD básico con `Usuario`.

### **04 – Controladores y API REST**

- `@RestController` y `@RequestMapping`.
- Métodos GET, POST, PUT, DELETE.
- Actividad práctica: exponer endpoints REST.

### **05 – Solicitudes a la API**

- Uso de `@RequestBody`, `@PathVariable`, `@RequestParam`.
- Respuestas personalizadas con `ResponseEntity`.
- Manejo de errores básicos.

### **06 – Pruebas Unitarias con JUnit y Mockito**

- Introducción a pruebas unitarias.
- Test de controladores y servicios.
- Mockito para simular dependencias.

### **07 – Seguridad con Spring Security y JWT**

- Autenticación vs Autorización.
- Configuración básica de Spring Security.
- Creación de tokens JWT.
- Filtros y protección de rutas.

### **08 – Documentación de Endpoints**

- Uso de OpenAPI / Swagger.
- Generar documentación automática de endpoints.
- Navegar y probar API desde Swagger UI.

---

---

## **Recomendación para Estudiantes**

1. **Lee el README de cada módulo** antes de ejecutar el código.
2. Realiza los ejercicios prácticos incrementales.
3. Prueba los endpoints con herramientas como `Postman/Bruno` o `curl`.
4. Observa el crecimiento del proyecto `miapp` conforme avanzas.

---
