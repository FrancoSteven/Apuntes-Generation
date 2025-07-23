# README - Palabras Reservadas y Sintaxis SQL para MySQL

## Índice
1. [Tipos de Lenguajes SQL](#tipos-de-lenguajes-sql)
2. [Consultas Básicas](#consultas-básicas)
3. [Filtros y Condiciones](#filtros-y-condiciones)
4. [Funciones de Agregación](#funciones-de-agregación)
5. [Joins](#joins)
6. [Subconsultas](#subconsultas)
7. [Manipulación de Datos](#manipulación-de-datos)
8. [Definición de Estructura](#definición-de-estructura)
9. [Control de Transacciones](#control-de-transacciones)
10. [Funciones y Operadores](#funciones-y-operadores)
11. [Gestión de Usuarios](#gestión-de-usuarios)

---

## Tipos de Lenguajes SQL

SQL se divide en varios sublanguajes según el tipo de operaciones que realizan:

### DDL - Data Definition Language (Lenguaje de Definición de Datos)
**Propósito**: Define y modifica la estructura de la base de datos (esquemas, tablas, índices, etc.)

**Comandos principales**:
- `CREATE` - Crea objetos de base de datos
- `ALTER` - Modifica objetos existentes
- `DROP` - Elimina objetos de base de datos
- `TRUNCATE` - Elimina todos los datos de una tabla pero mantiene su estructura

```sql
-- Ejemplos DDL
CREATE DATABASE empresa;
CREATE TABLE empleados (id INT PRIMARY KEY, nombre VARCHAR(50));
ALTER TABLE empleados ADD COLUMN email VARCHAR(100);
DROP TABLE empleados_temp;
TRUNCATE TABLE logs;
```

### DML - Data Manipulation Language (Lenguaje de Manipulación de Datos)
**Propósito**: Manipula los datos dentro de las tablas (insertar, actualizar, eliminar, consultar)

**Comandos principales**:
- `SELECT` - Consulta y recupera datos
- `INSERT` - Inserta nuevos registros
- `UPDATE` - Modifica registros existentes
- `DELETE` - Elimina registros

```sql
-- Ejemplos DML
SELECT * FROM empleados;
INSERT INTO empleados (nombre, email) VALUES ('Juan', 'juan@email.com');
UPDATE empleados SET salario = 60000 WHERE id = 1;
DELETE FROM empleados WHERE fecha_salida IS NOT NULL;
```

### DCL - Data Control Language (Lenguaje de Control de Datos)
**Propósito**: Controla el acceso y los permisos sobre los datos y objetos de la base de datos

**Comandos principales**:
- `GRANT` - Otorga permisos a usuarios
- `REVOKE` - Revoca permisos de usuarios
- `DENY` - Niega explícitamente permisos (en algunos SGBD)

```sql
-- Ejemplos DCL
GRANT SELECT, INSERT ON empresa.empleados TO 'usuario1'@'localhost';
REVOKE DELETE ON empresa.* FROM 'usuario1'@'localhost';
```

### TCL - Transaction Control Language (Lenguaje de Control de Transacciones)
**Propósito**: Gestiona las transacciones y mantiene la consistencia de los datos

**Comandos principales**:
- `START TRANSACTION` / `BEGIN` - Inicia una transacción
- `COMMIT` - Confirma los cambios de la transacción
- `ROLLBACK` - Deshace los cambios de la transacción
- `SAVEPOINT` - Crea un punto de guardado dentro de la transacción

```sql
-- Ejemplos TCL
START TRANSACTION;
UPDATE cuentas SET saldo = saldo - 1000 WHERE id = 1;
UPDATE cuentas SET saldo = saldo + 1000 WHERE id = 2;
COMMIT;

-- Con puntos de guardado
START TRANSACTION;
INSERT INTO productos (nombre) VALUES ('Producto A');
SAVEPOINT punto1;
INSERT INTO productos (nombre) VALUES ('Producto B');
ROLLBACK TO punto1; -- Solo deshace la inserción del Producto B
COMMIT;
```

### DQL - Data Query Language (Lenguaje de Consulta de Datos)
**Propósito**: Algunos expertos separan las consultas SELECT del DML y las clasifican como DQL

**Comando principal**:
- `SELECT` - Consulta y recupera datos (incluyendo todas sus cláusulas)

```sql
-- Ejemplos DQL
SELECT nombre, salario FROM empleados WHERE departamento = 'IT';
SELECT d.nombre, COUNT(e.id) as total_empleados 
FROM departamentos d 
LEFT JOIN empleados e ON d.id = e.departamento_id 
GROUP BY d.id;
```

### Resumen de Clasificación por Comando

| Comando | Tipo | Descripción |
|---------|------|-------------|
| `CREATE` | DDL | Crea objetos (tablas, índices, vistas, etc.) |
| `ALTER` | DDL | Modifica estructura de objetos existentes |
| `DROP` | DDL | Elimina objetos de la base de datos |
| `TRUNCATE` | DDL | Vacía una tabla manteniendo su estructura |
| `SELECT` | DML/DQL | Consulta y recupera datos |
| `INSERT` | DML | Inserta nuevos registros |
| `UPDATE` | DML | Modifica registros existentes |
| `DELETE` | DML | Elimina registros |
| `GRANT` | DCL | Otorga permisos |
| `REVOKE` | DCL | Revoca permisos |
| `START TRANSACTION` | TCL | Inicia transacción |
| `COMMIT` | TCL | Confirma transacción |
| `ROLLBACK` | TCL | Deshace transacción |
| `SAVEPOINT` | TCL | Crea punto de guardado |

---

## Consultas Básicas

### `SELECT`
Selecciona datos de una o más tablas.
```sql
SELECT columna1, columna2 FROM tabla;
```

### `*` (Asterisco)
Selecciona todas las columnas de una tabla.
```sql
SELECT * FROM usuarios;
```

### `FROM`
Especifica la tabla o tablas de donde se extraen los datos.
```sql
SELECT nombre FROM empleados;
```

### `DISTINCT`
Elimina filas duplicadas del resultado.
```sql
SELECT DISTINCT ciudad FROM clientes;
```

### `AS`
Crea alias para columnas o tablas.
```sql
SELECT nombre AS nombre_completo, edad AS años FROM personas;
SELECT p.nombre FROM personas AS p;
```

---

## Filtros y Condiciones

### `WHERE`
Filtra filas basándose en condiciones específicas.
```sql
SELECT * FROM productos WHERE precio > 100;
```

### `AND`
Combina múltiples condiciones (todas deben ser verdaderas).
```sql
SELECT * FROM empleados WHERE edad > 25 AND salario > 50000;
```

### `OR`
Combina condiciones alternativas (al menos una debe ser verdadera).
```sql
SELECT * FROM productos WHERE categoria = 'electrónicos' OR categoria = 'computadoras';
```

### `NOT`
Niega una condición.
```sql
SELECT * FROM empleados WHERE NOT departamento = 'ventas';
```

### `IN`
Verifica si un valor está dentro de una lista de valores.
```sql
SELECT * FROM productos WHERE categoria IN ('libros', 'música', 'películas');
```

### `BETWEEN`
Verifica si un valor está dentro de un rango.
```sql
SELECT * FROM productos WHERE precio BETWEEN 50 AND 200;
```

### `LIKE`
Busca patrones en texto usando comodines.
```sql
SELECT * FROM clientes WHERE nombre LIKE 'Juan%';
SELECT * FROM productos WHERE descripcion LIKE '%laptop%';
```

### `IS NULL` / `IS NOT NULL`
Verifica valores nulos.
```sql
SELECT * FROM empleados WHERE telefono IS NULL;
SELECT * FROM clientes WHERE email IS NOT NULL;
```

---

## Ordenamiento y Agrupación

### `ORDER BY`
Ordena los resultados por una o más columnas.
```sql
SELECT * FROM productos ORDER BY precio DESC;
SELECT * FROM empleados ORDER BY apellido ASC, nombre ASC;
```

### `ASC` / `DESC`
Especifica orden ascendente o descendente.
```sql
SELECT * FROM ventas ORDER BY fecha DESC;
```

### `GROUP BY`
Agrupa filas que tienen valores iguales en columnas específicas.
```sql
SELECT departamento, COUNT(*) FROM empleados GROUP BY departamento;
```

### `HAVING`
Filtra grupos después de aplicar GROUP BY.
```sql
SELECT departamento, COUNT(*) 
FROM empleados 
GROUP BY departamento 
HAVING COUNT(*) > 5;
```

---

## Funciones de Agregación

### `COUNT()`
Cuenta el número de filas.
```sql
SELECT COUNT(*) FROM empleados;
SELECT COUNT(DISTINCT ciudad) FROM clientes;
```

### `SUM()`
Suma valores numéricos.
```sql
SELECT SUM(salario) FROM empleados;
```

### `AVG()`
Calcula el promedio de valores numéricos.
```sql
SELECT AVG(precio) FROM productos;
```

### `MAX()` / `MIN()`
Encuentra el valor máximo o mínimo.
```sql
SELECT MAX(salario), MIN(salario) FROM empleados;
```

---

## Joins

### `JOIN` / `INNER JOIN`
Combina filas de dos tablas basándose en una condición relacionada.
```sql
SELECT e.nombre, d.nombre_departamento 
FROM empleados e 
INNER JOIN departamentos d ON e.departamento_id = d.id;
```

### `LEFT JOIN`
Incluye todas las filas de la tabla izquierda, con coincidencias de la derecha.
```sql
SELECT c.nombre, p.nombre_producto 
FROM clientes c 
LEFT JOIN pedidos p ON c.id = p.cliente_id;
```

### `RIGHT JOIN`
Incluye todas las filas de la tabla derecha, con coincidencias de la izquierda.
```sql
SELECT e.nombre, d.nombre_departamento 
FROM empleados e 
RIGHT JOIN departamentos d ON e.departamento_id = d.id;
```

### `FULL OUTER JOIN`
Incluye todas las filas cuando hay coincidencia en cualquiera de las tablas.
```sql
SELECT * FROM tabla1 
FULL OUTER JOIN tabla2 ON tabla1.id = tabla2.tabla1_id;
```

### `CROSS JOIN`
Producto cartesiano de dos tablas.
```sql
SELECT * FROM colores CROSS JOIN tamaños;
```

### `ON`
Especifica la condición de unión en joins.
```sql
SELECT * FROM pedidos p JOIN clientes c ON p.cliente_id = c.id;
```

---

## Subconsultas

### `EXISTS`
Verifica si una subconsulta devuelve al menos una fila.
```sql
SELECT * FROM clientes c 
WHERE EXISTS (SELECT 1 FROM pedidos p WHERE p.cliente_id = c.id);
```

### `ALL`
Compara un valor con todos los valores de una subconsulta.
```sql
SELECT * FROM productos 
WHERE precio > ALL (SELECT precio FROM productos WHERE categoria = 'libros');
```

### `ANY` / `SOME`
Compara un valor con cualquier valor de una subconsulta.
```sql
SELECT * FROM empleados 
WHERE salario > ANY (SELECT salario FROM empleados WHERE departamento = 'IT');
```

---

## Manipulación de Datos

### `INSERT INTO`
Inserta nuevas filas en una tabla.
```sql
INSERT INTO empleados (nombre, apellido, salario) 
VALUES ('Juan', 'Pérez', 50000);

INSERT INTO empleados (nombre, apellido) 
VALUES ('Ana', 'García'), ('Luis', 'Martín');
```

### `VALUES`
Especifica los valores a insertar.
```sql
INSERT INTO productos (nombre, precio) VALUES ('Laptop', 1200);
```

### `UPDATE`
Modifica datos existentes en una tabla.
```sql
UPDATE empleados SET salario = 55000 WHERE id = 1;
UPDATE productos SET precio = precio * 1.1 WHERE categoria = 'electrónicos';
```

### `SET`
Especifica las columnas y valores a actualizar.
```sql
UPDATE clientes SET telefono = '123-456-7890', ciudad = 'Madrid' WHERE id = 5;
```

### `DELETE`
Elimina filas de una tabla.
```sql
DELETE FROM empleados WHERE fecha_salida IS NOT NULL;
DELETE FROM productos WHERE stock = 0;
```

---

## Definición de Estructura

### `CREATE DATABASE`
Crea una nueva base de datos.
```sql
CREATE DATABASE empresa;
CREATE DATABASE IF NOT EXISTS tienda CHARACTER SET utf8mb4;
```

### `CREATE TABLE`
Crea una nueva tabla.
```sql
CREATE TABLE empleados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    salario DECIMAL(10,2),
    fecha_ingreso DATE DEFAULT CURRENT_DATE
);
```

### `DROP DATABASE` / `DROP TABLE`
Elimina una base de datos o tabla.
```sql
DROP DATABASE IF EXISTS test_db;
DROP TABLE temporal;
```

### `ALTER TABLE`
Modifica la estructura de una tabla existente.
```sql
ALTER TABLE empleados ADD COLUMN telefono VARCHAR(20);
ALTER TABLE productos MODIFY precio DECIMAL(12,2);
ALTER TABLE clientes DROP COLUMN fax;
```

### `ADD` / `MODIFY` / `DROP COLUMN`
Operaciones para modificar columnas.
```sql
ALTER TABLE usuarios ADD fecha_nacimiento DATE;
ALTER TABLE productos MODIFY descripcion TEXT;
ALTER TABLE clientes DROP COLUMN codigo_postal;
```

---

## Restricciones y Claves

### `PRIMARY KEY`
Define la clave primaria de una tabla.
```sql
CREATE TABLE productos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100)
);
```

### `FOREIGN KEY`
Define una clave foránea que referencia otra tabla.
```sql
CREATE TABLE pedidos (
    id INT PRIMARY KEY,
    cliente_id INT,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);
```

### `UNIQUE`
Garantiza que los valores en una columna sean únicos.
```sql
CREATE TABLE usuarios (
    id INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE
);
```

### `NOT NULL`
Requiere que una columna tenga un valor.
```sql
CREATE TABLE empleados (
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL
);
```

### `DEFAULT`
Especifica un valor por defecto para una columna.
```sql
CREATE TABLE pedidos (
    fecha_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado VARCHAR(20) DEFAULT 'pendiente'
);
```

### `CHECK`
Define una restricción que los valores deben cumplir.
```sql
CREATE TABLE productos (
    precio DECIMAL(10,2) CHECK (precio > 0),
    stock INT CHECK (stock >= 0)
);
```

---

## Control de Transacciones

### `START TRANSACTION` / `BEGIN`
Inicia una transacción.
```sql
START TRANSACTION;
-- o
BEGIN;
```

### `COMMIT`
Confirma los cambios de una transacción.
```sql
START TRANSACTION;
UPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;
UPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;
COMMIT;
```

### `ROLLBACK`
Deshace los cambios de una transacción.
```sql
START TRANSACTION;
DELETE FROM productos WHERE stock = 0;
ROLLBACK; -- Los productos no se eliminan
```

---

## Límites y Paginación

### `LIMIT`
Limita el número de filas devueltas.
```sql
SELECT * FROM productos ORDER BY precio DESC LIMIT 10;
```

### `OFFSET`
Especifica cuántas filas saltar antes de devolver resultados.
```sql
SELECT * FROM empleados LIMIT 20 OFFSET 40; -- Filas 41-60
```

---

## Funciones de Fecha y Tiempo

### `NOW()` / `CURRENT_TIMESTAMP`
Devuelve la fecha y hora actuales.
```sql
SELECT NOW();
INSERT INTO logs (mensaje, fecha) VALUES ('Login exitoso', NOW());
```

### `CURDATE()` / `CURRENT_DATE`
Devuelve la fecha actual.
```sql
SELECT * FROM eventos WHERE fecha = CURDATE();
```

### `CURTIME()` / `CURRENT_TIME`
Devuelve la hora actual.
```sql
SELECT CURTIME();
```

### `DATE()` / `TIME()` / `YEAR()` / `MONTH()` / `DAY()`
Extraen partes específicas de una fecha.
```sql
SELECT * FROM ventas WHERE YEAR(fecha_venta) = 2024;
SELECT * FROM pedidos WHERE MONTH(fecha_pedido) = 12;
```

### `DATEDIFF()`
Calcula la diferencia entre dos fechas.
```sql
SELECT DATEDIFF(NOW(), fecha_nacimiento) / 365 AS edad FROM empleados;
```

---

## Funciones de Cadena

### `CONCAT()`
Concatena cadenas de texto.
```sql
SELECT CONCAT(nombre, ' ', apellido) AS nombre_completo FROM empleados;
```

### `LENGTH()` / `CHAR_LENGTH()`
Devuelve la longitud de una cadena.
```sql
SELECT * FROM productos WHERE LENGTH(descripcion) > 100;
```

### `UPPER()` / `LOWER()`
Convierte texto a mayúsculas o minúsculas.
```sql
SELECT UPPER(nombre) FROM empleados;
SELECT LOWER(email) FROM usuarios;
```

### `SUBSTRING()` / `SUBSTR()`
Extrae una parte de una cadena.
```sql
SELECT SUBSTRING(telefono, 1, 3) AS codigo_area FROM clientes;
```

### `TRIM()` / `LTRIM()` / `RTRIM()`
Elimina espacios en blanco.
```sql
UPDATE clientes SET nombre = TRIM(nombre);
```

---

## Funciones Matemáticas

### `ROUND()` / `CEILING()` / `FLOOR()`
Funciones de redondeo.
```sql
SELECT ROUND(precio, 2) FROM productos;
SELECT CEILING(precio) AS precio_redondeado_arriba FROM productos;
```

### `ABS()`
Valor absoluto.
```sql
SELECT ABS(-15); -- Resultado: 15
```

### `RAND()`
Genera un número aleatorio.
```sql
SELECT * FROM productos ORDER BY RAND() LIMIT 5;
```

---

## Funciones Condicionales

### `IF()`
Función condicional simple.
```sql
SELECT nombre, IF(salario > 50000, 'Alto', 'Normal') AS nivel_salario 
FROM empleados;
```

### `CASE WHEN`
Expresión condicional compleja.
```sql
SELECT nombre,
    CASE 
        WHEN edad < 30 THEN 'Joven'
        WHEN edad < 50 THEN 'Adulto'
        ELSE 'Senior'
    END AS categoria_edad
FROM empleados;
```

### `IFNULL()` / `COALESCE()`
Maneja valores nulos.
```sql
SELECT nombre, IFNULL(telefono, 'No disponible') FROM clientes;
SELECT COALESCE(telefono_movil, telefono_casa, 'Sin teléfono') FROM contactos;
```

---

## Gestión de Usuarios y Permisos

### `CREATE USER`
Crea un nuevo usuario.
```sql
CREATE USER 'nuevo_usuario'@'localhost' IDENTIFIED BY 'contraseña123';
```

### `GRANT`
Otorga permisos a un usuario.
```sql
GRANT SELECT, INSERT ON empresa.* TO 'empleado'@'localhost';
GRANT ALL PRIVILEGES ON tienda.* TO 'admin'@'%';
```

### `REVOKE`
Revoca permisos de un usuario.
```sql
REVOKE INSERT ON empresa.empleados FROM 'usuario'@'localhost';
```

### `DROP USER`
Elimina un usuario.
```sql
DROP USER 'usuario_temporal'@'localhost';
```

---

## Índices

### `CREATE INDEX`
Crea un índice para mejorar el rendimiento.
```sql
CREATE INDEX idx_apellido ON empleados(apellido);
CREATE INDEX idx_fecha_precio ON productos(fecha_creacion, precio);
```

### `DROP INDEX`
Elimina un índice.
```sql
DROP INDEX idx_apellido ON empleados;
```

---

## Operadores de Comparación

- `=` : Igual a
- `!=` o `<>` : Diferente de
- `>` : Mayor que
- `<` : Menor que
- `>=` : Mayor o igual que
- `<=` : Menor o igual que

```sql
SELECT * FROM productos WHERE precio >= 100 AND precio <= 500;
SELECT * FROM empleados WHERE departamento != 'ventas';
```

---

## Comandos de Información

### `SHOW DATABASES`
Muestra todas las bases de datos.
```sql
SHOW DATABASES;
```

### `SHOW TABLES`
Muestra todas las tablas de la base de datos actual.
```sql
SHOW TABLES;
```

### `DESCRIBE` / `DESC`
Muestra la estructura de una tabla.
```sql
DESCRIBE empleados;
DESC productos;
```

### `SHOW CREATE TABLE`
Muestra el comando CREATE TABLE de una tabla.
```sql
SHOW CREATE TABLE usuarios;
```

---

## Comentarios

### Comentarios de línea
```sql
-- Este es un comentario de una línea
SELECT * FROM empleados; -- Selecciona todos los empleados
```

### Comentarios de bloque
```sql
/* 
Este es un comentario
de múltiples líneas
*/
SELECT nombre, salario FROM empleados;
```

---

## Consejos de Uso

1. **Siempre usa WHERE con DELETE y UPDATE** para evitar modificar toda la tabla accidentalmente.

2. **Usa LIMIT** en consultas de prueba para evitar resultados masivos.

3. **Crea índices** en columnas que uses frecuentemente en WHERE y JOIN.

4. **Usa transacciones** para operaciones críticas que involucren múltiples tablas.

5. **Valida datos** antes de insertar usando restricciones CHECK y NOT NULL.

6. **Haz respaldos** antes de ejecutar comandos DROP o grandes UPDATE/DELETE.

Este README cubre las principales palabras reservadas y sintaxis de SQL para MySQL. Cada comando incluye ejemplos prácticos que puedes adaptar a tus necesidades específicas.