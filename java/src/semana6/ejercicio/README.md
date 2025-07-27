# Proyecto - Sistema de Gestión de Estudiantes, Cursos y Notas en Java

## 🧠 Descripción General

Este proyecto consiste en un sistema modular en Java que permite gestionar estudiantes, asignarlos a cursos y administrar sus calificaciones. Fue desarrollado siguiendo principios de programación orientada a objetos y organización por paquetes.

---

## 📂 Estructura del Proyecto

Todos los archivos están dentro del paquete:

```
semana6.ejercicio.Models
```

### Clases principales:

- `Estudiante`: Representa a un estudiante con atributos como nombre, matrícula, calificación y año.
- `GestorEstudiantes`: Permite registrar, eliminar y visualizar estudiantes utilizando un `HashMap`.
- `GestorCursos`: Permite agrupar estudiantes por cursos utilizando un `Map<String, ArrayList<Estudiante>>`.
- `GestorNotas`: Permite modificar y visualizar las calificaciones de estudiantes.
- `Main`: Contiene un menú interactivo para operar el sistema.

---

## 🔧 Funcionalidades por Módulo

### 📘 1. Módulo de Estudiantes
- Agregar nuevo estudiante.
- Eliminar estudiante por matrícula.
- Mostrar todos los estudiantes registrados.

### 📚 2. Módulo de Cursos
- Asignar estudiantes a un curso.
- Mostrar estudiantes inscritos en un curso.
- Remover estudiantes de un curso por matrícula.

### 📝 3. Módulo de Notas
- Agregar estudiante a sistema de notas.
- Actualizar calificación de un estudiante.
- Consultar calificación actual.

---

## 🖥️ Ejecución del Menú Principal

Al ejecutar `Main.java`, se presenta un menú como el siguiente:

```
========= MENÚ =========
1. Gestión de Estudiantes
2. Gestión de Cursos
3. Gestión de Notas
0. Salir
```

Cada opción solicita al usuario los datos necesarios y opera sobre las clases correspondientes (`GestorEstudiantes`, `GestorCursos`, `GestorNotas`).

---

## ✅ Requisitos Técnicos

- Java 17 o superior
- IDE recomendado: IntelliJ IDEA
- Paquete base: `semana6.ejercicio`

---

## ✨ Objetivos de Aprendizaje

- Uso de estructuras de datos (`Map`, `ArrayList`)
- Organización de clases y lógica modular
- Encapsulamiento y buenas prácticas de POO
- Interacción por consola con usuarios
- Reutilización de objetos entre distintos módulos

---

## 💡 Sugerencias para Ampliación

- Guardar/leer datos en archivos `.txt` o `.json`
- Agregar sistema de autenticación para profesores
- Calcular promedio del curso
- Promover automáticamente a estudiantes aprobados

---

¡Este ejercicio es ideal para consolidar el uso de clases, colecciones y diseño modular en Java!