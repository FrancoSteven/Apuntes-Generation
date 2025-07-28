# Sistema de Gestión Escolar "Colegio San Martín"

## Caso Práctico para Base de Datos Postgres

### 📋 CONTEXTO DEL PROBLEMA

El Colegio San Martín necesita modernizar su sistema de gestión académica. Actualmente manejan toda la información en planillas Excel y archivos físicos, lo que genera problemas de duplicación, pérdida de información y dificultades para generar reportes.

La directora del colegio te ha contratado para crear una base de datos que permita gestionar eficientemente la información académica de la institución.

### 🏫 DESCRIPCIÓN DEL COLEGIO

**Colegio San Martín** es una institución educativa que atiende niveles de:

- Educación Básica (1° a 8° básico)
- Educación Media (1° a 4° medio)

El colegio funciona con el sistema de **semestres** (1er y 2do semestre) y maneja **períodos académicos anuales**.

### 👥 ENTIDADES Y REGLAS DE NEGOCIO

#### **ESTUDIANTES**

- Cada estudiante tiene un RUT único, nombre completo, fecha de nacimiento, dirección, teléfono y email
- Los estudiantes se matriculan en un curso específico cada año
- Un estudiante puede repetir curso, por lo que puede tener múltiples matrículas en diferentes años
- Se debe registrar la fecha de matrícula y el estado (activo, retirado, egresado)

#### **CURSOS**

- Los cursos se identifican por nivel y letra (ej: "1° Básico A", "3° Medio B")
- Cada curso tiene un nivel educacional (básica/media), un número máximo de estudiantes
- Los cursos pueden tener un profesor jefe asignado

#### **DOCENTES**

- Cada docente tiene RUT único, nombre completo, especialidad, teléfono, email y fecha de contratación
- Un docente puede ser profesor jefe de máximo un curso por año
- Los docentes pueden enseñar múltiples asignaturas
- Se debe registrar su estado laboral (activo, con licencia, desvinculado)

#### **ASIGNATURAS**

- Cada asignatura tiene un código único, nombre, descripción y cantidad de horas semanales
- Las asignaturas pueden ser obligatorias o electivas
- Algunas asignaturas son específicas para ciertos niveles (ej: Filosofía solo para 3° y 4° medio)

#### **HORARIOS Y CLASES**

- Se debe asignar qué docente enseña qué asignatura en qué curso
- Esta asignación cambia cada año académico
- Una misma asignatura puede ser enseñada por diferentes docentes en diferentes cursos

#### **EVALUACIONES Y NOTAS**

- Los estudiantes reciben notas en cada asignatura que cursan
- Las notas van de 1.0 a 7.0 con un decimal
- Se debe registrar la fecha de la evaluación, el tipo (prueba, trabajo, examen, etc.)
- Cada nota tiene una descripción (ej: "Prueba Unidad 1", "Trabajo Grupal")
- Las notas se agrupan por semestre

#### **PERÍODOS ACADÉMICOS**

- Cada año académico se divide en 2 semestres
- Se debe poder identificar claramente el año y semestre de cada nota y matrícula

### 📊 REPORTES REQUERIDOS

El sistema debe poder generar los siguientes reportes mediante consultas SQL:

#### **REPORTES BÁSICOS**

1. **Lista de estudiantes por curso** - Mostrar todos los estudiantes matriculados en un curso específico del año actual
2. **Horario de un docente** - Mostrar todas las asignaturas y cursos que enseña un docente específico
3. **Asignaturas de un curso** - Listar todas las asignaturas que se imparten en un curso determinado con sus respectivos docentes

#### **REPORTES DE NOTAS**

4. **Notas de un estudiante** - Mostrar todas las notas de un estudiante en un semestre específico, organizadas por asignatura
5. **Promedio por asignatura** - Calcular el promedio de notas de un estudiante en cada asignatura por semestre
6. **Estudiantes con promedio rojo** - Listar estudiantes con promedio menor a 4.0 en cualquier asignatura del semestre actual

#### **REPORTES ESTADÍSTICOS**

7. **Ranking de estudiantes por curso** - Mostrar los estudiantes de un curso ordenados por su promedio general (mayor a menor)
8. **Estadísticas por asignatura** - Para cada asignatura mostrar: promedio general, nota más alta, nota más baja, cantidad de estudiantes
9. **Docentes con más cursos** - Listar docentes ordenados por la cantidad de cursos diferentes que enseñan

#### **REPORTES ADMINISTRATIVOS**

10. **Estudiantes sin notas** - Identificar estudiantes que no tienen notas registradas en el semestre actual
11. **Cursos sin profesor jefe** - Listar cursos que no tienen profesor jefe asignado
12. **Resumen por nivel educacional** - Mostrar cantidad de estudiantes, docentes y asignaturas por nivel (básica/media)

### 🛠️ TAREAS A REALIZAR

#### **FASE 1: ANÁLISIS Y DISEÑO**

1. Crear el **modelo entidad-relación** identificando todas las entidades, atributos y relaciones
2. Definir las **claves primarias y foráneas**
3. Establecer las **cardinalidades** entre entidades
4. Normalizar el modelo hasta **3FN**

#### **FASE 2: IMPLEMENTACIÓN**

1. **Crear la base de datos** con nombre `colegio_san_martin`
2. **Crear todas las tablas** con sus respectivas restricciones
3. **Insertar datos de prueba** (mínimo 20 estudiantes, 5 docentes, 8 asignaturas, 4 cursos)

#### **FASE 3: OPERACIONES CRUD**

**CREATE (Insertar)**

- Matricular un nuevo estudiante
- Contratar un nuevo docente
- Crear una nueva asignatura
- Registrar una nueva nota

**READ (Consultar)**

- Implementar todas las consultas de los reportes listados arriba

**UPDATE (Actualizar)**

- Modificar información de un estudiante
- Cambiar el estado de un docente
- Actualizar una nota registrada incorrectamente
- Cambiar el profesor jefe de un curso

**DELETE (Eliminar)**

- Dar de baja un estudiante (cambiar estado, no eliminar físicamente)
- Eliminar una nota específica
- Desvincular un docente de una asignatura

#### **FASE 4: CONSULTAS AVANZADAS**

1. Usar **JOINs** para relacionar información de múltiples tablas
2. Implementar **funciones de agregación** (COUNT, AVG, MAX, MIN, SUM)
3. Utilizar **subconsultas** para reportes complejos
4. Aplicar **GROUP BY y HAVING** para agrupaciones con condiciones

### 🎯 OBJETIVOS DE APRENDIZAJE

Al completar este caso práctico, los estudiantes habrán:

- Analizado un problema real y creado un modelo de base de datos
- Implementado un esquema completo en Postgres
- Practicado todas las operaciones CRUD
- Desarrollado consultas desde básicas hasta avanzadas
- Trabajado con relaciones entre múltiples tablas
- Generado reportes útiles para la toma de decisiones

### 📝 ENTREGABLES

1. **Documento de análisis** con el modelo ER y justificación de decisiones de diseño
2. **Script SQL de creación** de la base de datos y tablas
3. **Script SQL de inserción** de datos de prueba
4. **Archivo con todas las consultas CRUD** documentadas y probadas
5. **Reporte final** con capturas de pantalla de los resultados de las consultas principales

---

**¡Manos a la obra! Este sistema será la base para que el Colegio San Martín modernice su gestión académica.**
