# 🐬 ¿Qué es MySQL?

MySQL es un **sistema de gestión de bases de datos relacionales** (RDBMS) de código abierto que utiliza SQL (Structured Query Language) para gestionar y manipular datos. Desarrollado originalmente por MySQL AB y actualmente mantenido por Oracle Corporation, es una de las bases de datos más populares del mundo.

![MySQL Logo](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)

MySQL se destaca por ser **rápido, confiable y fácil de usar**, ofreciendo un rendimiento excepcional tanto para aplicaciones pequeñas como para sistemas empresariales de gran escala. Su arquitectura multi-threaded y multi-usuario permite manejar múltiples conexiones simultáneas de forma eficiente.

## Características principales

- **Open Source**: Código abierto con licencia GPL
- **Multiplataforma**: Funciona en Windows, Linux, macOS y más
- **Escalable**: Desde aplicaciones pequeñas hasta sistemas enterprise
- **Seguro**: Múltiples capas de seguridad y encriptación
- **Estándares**: Cumple con el estándar SQL ANSI

---

# 🚀 Instalación y configuración

## Descarga e instalación

1. **Descargar MySQL**: Visita [MySQL Official Download](https://dev.mysql.com/downloads/installer/)
2. **Seleccionar versión**: Elige MySQL Community Server (gratuito)
3. **Ejecutar instalador**: Sigue el wizard de instalación
4. **Configurar root password**: Establece una contraseña segura

## Verificar instalación

```bash
# Verificar versión instalada
mysql --version

# Conectarse al servidor
mysql -u root -p
```

## Primer acceso

```sql
-- Mostrar bases de datos existentes
SHOW DATABASES;

-- Mostrar usuario actual
SELECT USER();

-- Mostrar versión del servidor
SELECT VERSION();
```

---

# 🗄️ Creando tu primera base de datos

## Sintaxis básica

```sql
-- Crear una nueva base de datos
CREATE DATABASE nombre_base_datos;

-- Crear con configuraciones específicas
CREATE DATABASE tienda_online 
    CHARACTER SET utf8mb4 
    COLLATE utf8mb4_unicode_ci;
```

## Ejemplo práctico: Sistema de gestión escolar

```sql
-- Crear base de datos para un colegio
CREATE DATABASE sistema_escolar
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

-- Seleccionar la base de datos para trabajar
USE sistema_escolar;

-- Verificar que estamos en la BD correcta
SELECT DATABASE();
```

## Gestión básica de bases de datos

```sql
-- Listar todas las bases de datos
SHOW DATABASES;

-- Eliminar una base de datos (¡CUIDADO!)
DROP DATABASE nombre_base_datos;

-- Cambiar configuración de una BD existente
ALTER DATABASE sistema_escolar 
    CHARACTER SET utf8mb4 
    COLLATE utf8mb4_general_ci;
```

---

# 📊 Tipos de datos en MySQL

## Datos numéricos

```sql
-- Ejemplo de tabla con diferentes tipos numéricos
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,           -- Entero con auto-incremento
    codigo BIGINT UNSIGNED,                      -- Entero largo sin signo
    precio DECIMAL(10,2),                        -- Precio con 2 decimales exactos
    descuento FLOAT,                             -- Porcentaje de descuento
    stock SMALLINT DEFAULT 0,                    -- Cantidad en inventario
    activo TINYINT(1) DEFAULT 1                  -- Boolean (0=false, 1=true)
);
```

## Datos de texto

```sql
-- Tabla de usuarios con diferentes tipos de texto
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,       -- Nombre de usuario único
    email VARCHAR(255) UNIQUE NOT NULL,         -- Email con longitud variable
    password CHAR(64),                          -- Hash de contraseña (longitud fija)
    biografia TEXT,                             -- Texto largo para biografía
    preferencias JSON,                          -- Datos estructurados en JSON
    estado ENUM('activo', 'inactivo', 'suspendido') DEFAULT 'activo'
);
```

## Datos de fecha y tiempo

```sql
-- Tabla de eventos con manejo completo de fechas
CREATE TABLE eventos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    fecha_evento DATE,                          -- Solo fecha: 2024-12-25
    hora_inicio TIME,                           -- Solo hora: 14:30:00
    fecha_completa DATETIME,                    -- Fecha y hora: 2024-12-25 14:30:00
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    actualizado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

---

# 🔧 Creando tablas: Estructura y relaciones

## Tabla básica con restricciones

```sql
-- Crear tabla de estudiantes
CREATE TABLE estudiantes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cedula VARCHAR(20) UNIQUE NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE,
    telefono VARCHAR(20),
    fecha_nacimiento DATE,
    fecha_ingreso TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Restricciones adicionales
    CHECK (fecha_nacimiento >= '1900-01-01'),
    CHECK (LENGTH(cedula) >= 7)
);
```

## Estableciendo relaciones entre tablas

```sql
-- Tabla de cursos
CREATE TABLE cursos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(10) UNIQUE NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    creditos TINYINT UNSIGNED,
    semestre ENUM('1', '2', '3', '4', '5', '6', '7', '8') NOT NULL
);

-- Tabla de inscripciones (relación muchos a muchos)
CREATE TABLE inscripciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    estudiante_id INT NOT NULL,
    curso_id INT NOT NULL,
    fecha_inscripcion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    nota_final DECIMAL(3,2),
    estado ENUM('inscrito', 'aprobado', 'reprobado', 'retirado') DEFAULT 'inscrito',
    
    -- Claves foráneas
    FOREIGN KEY (estudiante_id) REFERENCES estudiantes(id) ON DELETE CASCADE,
    FOREIGN KEY (curso_id) REFERENCES cursos(id) ON DELETE CASCADE,
    
    -- Evitar inscripciones duplicadas
    UNIQUE KEY unique_inscription (estudiante_id, curso_id)
);
```

---

# 📝 Operaciones CRUD básicas

## CREATE - Insertando datos

```sql
-- Insertar un solo registro
INSERT INTO estudiantes (cedula, nombre, apellido, email, fecha_nacimiento) 
VALUES ('12345678', 'Juan', 'Pérez', 'juan.perez@email.com', '2000-05-15');

-- Insertar múltiples registros
INSERT INTO cursos (codigo, nombre, creditos, semestre) VALUES
('MAT101', 'Matemáticas Básicas', 4, '1'),
('FIS201', 'Física General', 5, '2'),
('QUI301', 'Química Orgánica', 4, '3');

-- Insertar con subconsulta
INSERT INTO inscripciones (estudiante_id, curso_id)
SELECT e.id, c.id 
FROM estudiantes e, cursos c 
WHERE e.cedula = '12345678' AND c.codigo = 'MAT101';
```

## READ - Consultando datos

```sql
-- Consulta básica
SELECT * FROM estudiantes;

-- Consulta con filtros
SELECT nombre, apellido, email 
FROM estudiantes 
WHERE fecha_nacimiento > '2000-01-01'
ORDER BY apellido, nombre;

-- Consulta con JOIN
SELECT 
    e.nombre AS estudiante,
    c.nombre AS curso,
    i.nota_final,
    i.estado
FROM estudiantes e
JOIN inscripciones i ON e.id = i.estudiante_id
JOIN cursos c ON c.id = i.curso_id
WHERE i.estado = 'aprobado';
```

## UPDATE - Actualizando datos

```sql
-- Actualizar un registro específico
UPDATE estudiantes 
SET telefono = '555-0123', email = 'nuevo.email@domain.com'
WHERE cedula = '12345678';

-- Actualizar con condiciones
UPDATE inscripciones 
SET nota_final = 4.5, estado = 'aprobado'
WHERE estudiante_id = 1 AND curso_id = 1;

-- Actualizar con JOIN
UPDATE inscripciones i
JOIN estudiantes e ON i.estudiante_id = e.id
SET i.estado = 'retirado'
WHERE e.cedula = '12345678' AND i.nota_final IS NULL;
```

## DELETE - Eliminando datos

```sql
-- Eliminar con condición
DELETE FROM inscripciones 
WHERE estado = 'retirado' AND fecha_inscripcion < '2023-01-01';

-- Eliminar con JOIN
DELETE i FROM inscripciones i
JOIN cursos c ON i.curso_id = c.id
WHERE c.codigo = 'OLD101';

-- TRUNCATE - Vaciar tabla completamente
TRUNCATE TABLE inscripciones;
```

---

# 🔍 Consultas avanzadas

## Funciones de agregación

```sql
-- Estadísticas básicas
SELECT 
    COUNT(*) as total_estudiantes,
    COUNT(DISTINCT curso_id) as cursos_diferentes,
    AVG(nota_final) as promedio_general,
    MAX(nota_final) as nota_maxima,
    MIN(nota_final) as nota_minima
FROM inscripciones
WHERE nota_final IS NOT NULL;
```

## Agrupación y filtrado

```sql
-- Promedio por curso
SELECT 
    c.nombre as curso,
    c.creditos,
    COUNT(i.id) as total_inscritos,
    AVG(i.nota_final) as promedio_curso,
    COUNT(CASE WHEN i.estado = 'aprobado' THEN 1 END) as aprobados
FROM cursos c
LEFT JOIN inscripciones i ON c.id = i.curso_id
GROUP BY c.id, c.nombre, c.creditos
HAVING COUNT(i.id) > 0
ORDER BY promedio_curso DESC;
```

## Subconsultas

```sql
-- Estudiantes con notas sobre el promedio
SELECT 
    e.nombre,
    e.apellido,
    i.nota_final
FROM estudiantes e
JOIN inscripciones i ON e.id = i.estudiante_id
WHERE i.nota_final > (
    SELECT AVG(nota_final) 
    FROM inscripciones 
    WHERE nota_final IS NOT NULL
);

-- Cursos sin inscripciones
SELECT c.codigo, c.nombre
FROM cursos c
WHERE NOT EXISTS (
    SELECT 1 FROM inscripciones i 
    WHERE i.curso_id = c.id
);
```

---

# 🔐 Usuarios y permisos

## Crear usuarios

```sql
-- Crear usuario con contraseña
CREATE USER 'estudiante_user'@'localhost' IDENTIFIED BY 'password123';

-- Crear usuario para acceso remoto
CREATE USER 'admin_remoto'@'%' IDENTIFIED BY 'secure_password';

-- Usuario con autenticación específica
CREATE USER 'app_user'@'192.168.1.%' IDENTIFIED BY 'app_password';
```

## Asignar permisos

```sql
-- Permisos completos en una base de datos
GRANT ALL PRIVILEGES ON sistema_escolar.* TO 'admin_user'@'localhost';

-- Permisos específicos
GRANT SELECT, INSERT, UPDATE ON estudiantes TO 'estudiante_user'@'localhost';
GRANT SELECT ON cursos TO 'estudiante_user'@'localhost';

-- Solo lectura para reportes
GRANT SELECT ON sistema_escolar.* TO 'readonly_user'@'%';

-- Aplicar cambios
FLUSH PRIVILEGES;
```

## Gestionar permisos

```sql
-- Ver permisos de un usuario
SHOW GRANTS FOR 'estudiante_user'@'localhost';

-- Revocar permisos
REVOKE INSERT, UPDATE ON estudiantes FROM 'estudiante_user'@'localhost';

-- Eliminar usuario
DROP USER 'old_user'@'localhost';
```

---

# 🛠️ Herramientas recomendadas

## Clientes gráficos

### MySQL Workbench
```bash
# Incluido en la instalación de MySQL
# Características:
# - Modelado visual de BD
# - Editor SQL avanzado
# - Administración de servidor
# - Importación/Exportación
```

### DBeaver (Multiplataforma)
```bash
# Descarga: https://dbeaver.io/
# Ventajas:
# - Soporte para múltiples SGBD
# - Interfaz intuitiva
# - Plugins extensibles
# - Gratuito y open source
```

## Clientes de línea de comandos

```bash
# Cliente oficial MySQL
mysql -h localhost -u username -p database_name

# Con archivo de configuración
mysql --defaults-file=/path/to/config.cnf

# Ejecutar script SQL
mysql -u root -p < script.sql

# Exportar base de datos
mysqldump -u root -p database_name > backup.sql
```

---

# 🔧 Buenas prácticas

## Diseño de tablas

```sql
-- ✅ BIEN: Nombres descriptivos y consistentes
CREATE TABLE estudiantes_cursos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    estudiante_id INT NOT NULL,
    curso_id INT NOT NULL,
    fecha_inscripcion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_estudiante (estudiante_id),
    INDEX idx_curso (curso_id)
);

-- ❌ MAL: Nombres inconsistentes y poco descriptivos
CREATE TABLE sc (
    id INT,
    sid INT,
    cid INT,
    dt DATETIME
);
```

## Optimización de consultas

```sql
-- ✅ BIEN: Usar índices apropiados
SELECT * FROM estudiantes 
WHERE cedula = '12345678';  -- cedula tiene índice UNIQUE

-- ✅ BIEN: Limitar resultados
SELECT nombre, apellido 
FROM estudiantes 
ORDER BY apellido 
LIMIT 10;

-- ❌ MAL: Usar LIKE al inicio
SELECT * FROM estudiantes 
WHERE nombre LIKE '%Juan%';  -- No puede usar índice eficientemente
```

## Seguridad

```sql
-- ✅ BIEN: Usar prepared statements (en aplicaciones)
-- PREPARE stmt FROM 'SELECT * FROM estudiantes WHERE id = ?';

-- ✅ BIEN: Principio de menor privilegio
GRANT SELECT, INSERT ON estudiantes TO 'app_user'@'localhost';

-- ❌ MAL: Permisos excesivos
-- GRANT ALL PRIVILEGES ON *.* TO 'app_user'@'%';
```

---

# 🚨 Comandos importantes de mantenimiento

## Respaldos

```bash
# Backup completo de una base de datos
mysqldump -u root -p --single-transaction sistema_escolar > backup_escolar.sql

# Backup de estructura solamente
mysqldump -u root -p --no-data sistema_escolar > estructura_escolar.sql

# Backup de datos solamente
mysqldump -u root -p --no-create-info sistema_escolar > datos_escolar.sql
```

## Restauración

```bash
# Restaurar desde backup
mysql -u root -p sistema_escolar < backup_escolar.sql

# Crear BD y restaurar
mysql -u root -p -e "CREATE DATABASE sistema_escolar_nuevo"
mysql -u root -p sistema_escolar_nuevo < backup_escolar.sql
```

## Monitoreo

```sql
-- Ver procesos activos
SHOW PROCESSLIST;

-- Estado del servidor
SHOW STATUS LIKE 'Threads_connected';
SHOW STATUS LIKE 'Questions';

-- Variables de configuración
SHOW VARIABLES LIKE 'max_connections';
SHOW VARIABLES LIKE 'innodb_buffer_pool_size';
```

---

Esta guía cubre los aspectos fundamentales de MySQL con ejemplos prácticos que puedes ejecutar directamente. Cada sección incluye código funcional que te permitirá aprender de manera práctica y efectiva.

Para profundizar en temas específicos, consulta la [documentación oficial de MySQL](https://dev.mysql.com/doc/).