# Modelado de Base de Datos con MySQL

## ¿Qué es el modelado de la BDD?

El modelado de base de datos es el proceso de crear una representación visual y estructural de cómo se organizarán y relacionarán los datos en una base de datos. Es el paso fundamental antes de implementar cualquier sistema de información.

## ¿Cómo se realiza el modelado de una base de datos?

### 1. Modelado Conceptual

**Definición:** Representa los requisitos de información de alto nivel sin considerar la implementación técnica.

**Características:**

- Identifica entidades principales
- Define relaciones básicas
- No considera tipos de datos específicos
- Se enfoca en el "qué" no en el "cómo"

**Ejemplo:**

```
Entidades: Cliente, Producto, Pedido
Relaciones:
- Cliente REALIZA Pedido
- Pedido CONTIENE Producto
```

### 2. Modelado Lógico

**Definición:** Traduce el modelo conceptual a una estructura más detallada, definiendo atributos y tipos de relaciones.

**Ejemplo técnico:**

```sql
-- Entidad Cliente
Cliente:
- id_cliente (PK)
- nombre
- email
- telefono
- fecha_registro

-- Entidad Producto
Producto:
- id_producto (PK)
- nombre
- precio
- stock
- categoria

-- Entidad Pedido
Pedido:
- id_pedido (PK)
- id_cliente (FK)
- fecha_pedido
- total
- estado
```

### 3. Modelado Físico

**Definición:** Implementación específica del modelo lógico en MySQL, considerando rendimiento y restricciones del SGBD.

**Ejemplo en código MySQL:**

```sql
-- Crear base de datos
CREATE DATABASE tienda_online
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE tienda_online;

-- Tabla Clientes
CREATE TABLE clientes (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    telefono VARCHAR(20),
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_fecha_registro (fecha_registro)
) ENGINE=InnoDB;

-- Tabla Productos
CREATE TABLE productos (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    precio DECIMAL(10,2) NOT NULL CHECK (precio > 0),
    stock INT NOT NULL DEFAULT 0 CHECK (stock >= 0),
    categoria ENUM('electronica', 'ropa', 'hogar', 'deportes') NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_categoria (categoria),
    INDEX idx_precio (precio)
) ENGINE=InnoDB;

-- Tabla Pedidos
CREATE TABLE pedidos (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    fecha_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10,2) NOT NULL CHECK (total >= 0),
    estado ENUM('pendiente', 'procesando', 'enviado', 'entregado', 'cancelado')
           DEFAULT 'pendiente',
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
    ON DELETE CASCADE ON UPDATE CASCADE,
    INDEX idx_cliente (id_cliente),
    INDEX idx_fecha (fecha_pedido),
    INDEX idx_estado (estado)
) ENGINE=InnoDB;

-- Tabla intermedia para relación many-to-many
CREATE TABLE detalle_pedidos (
    id_detalle INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL CHECK (cantidad > 0),
    precio_unitario DECIMAL(10,2) NOT NULL CHECK (precio_unitario > 0),
    subtotal DECIMAL(10,2) GENERATED ALWAYS AS (cantidad * precio_unitario) STORED,
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
    ON DELETE RESTRICT ON UPDATE CASCADE,
    UNIQUE KEY unique_pedido_producto (id_pedido, id_producto),
    INDEX idx_pedido (id_pedido),
    INDEX idx_producto (id_producto)
) ENGINE=InnoDB;
```

## Diagrama Entidad-Relación (E-R)

### Componentes de un diagrama E-R

#### 1. **Entidades**

- **Representación:** Rectángulos
- **Definición:** Objetos o conceptos del mundo real

```sql
-- Ejemplo: Entidad ESTUDIANTE
CREATE TABLE estudiantes (
    id_estudiante INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    matricula VARCHAR(20) UNIQUE NOT NULL,
    fecha_nacimiento DATE,
    email VARCHAR(150) UNIQUE
);
```

#### 2. **Atributos**

- **Representación:** Óvalos conectados a entidades
- **Tipos:**
  - **Simples:** Nombre, edad
  - **Compuestos:** Dirección (calle, ciudad, código postal)
  - **Derivados:** Edad (calculada desde fecha de nacimiento)
  - **Multivaluados:** Teléfonos (una persona puede tener varios)

```sql
-- Atributo compuesto: Dirección
CREATE TABLE direcciones (
    id_direccion INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    calle VARCHAR(200),
    ciudad VARCHAR(100),
    codigo_postal VARCHAR(10),
    pais VARCHAR(50) DEFAULT 'México',
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

-- Atributo multivaluado: Teléfonos
CREATE TABLE telefonos_cliente (
    id_telefono INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    numero VARCHAR(20) NOT NULL,
    tipo ENUM('movil', 'casa', 'trabajo') DEFAULT 'movil',
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
    UNIQUE KEY unique_cliente_numero (id_cliente, numero)
);

-- Atributo derivado usando función
ALTER TABLE clientes
ADD COLUMN fecha_nacimiento DATE,
ADD COLUMN edad INT GENERATED ALWAYS AS
(TIMESTAMPDIFF(YEAR, fecha_nacimiento, CURDATE())) VIRTUAL;
```

#### 3. **Relaciones**

- **Representación:** Rombos

### Cardinalidad y tipos de relación

#### **1:1 (Uno a Uno)**

```sql
-- Ejemplo: Usuario - Perfil
CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL
);

CREATE TABLE perfiles (
    id_perfil INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT UNIQUE NOT NULL, -- UNIQUE garantiza 1:1
    biografia TEXT,
    avatar VARCHAR(255),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
    ON DELETE CASCADE
);
```

#### **1:N (Uno a Muchos)**

```sql
-- Ejemplo: Departamento - Empleados
CREATE TABLE departamentos (
    id_departamento INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    presupuesto DECIMAL(12,2)
);

CREATE TABLE empleados (
    id_empleado INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_departamento INT NOT NULL, -- FK sin UNIQUE = 1:N
    salario DECIMAL(10,2),
    FOREIGN KEY (id_departamento) REFERENCES departamentos(id_departamento)
);
```

#### **N:M (Muchos a Muchos)**

```sql
-- Ejemplo: Estudiantes - Cursos
CREATE TABLE cursos (
    id_curso INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    creditos INT NOT NULL
);

-- Tabla intermedia para resolver N:M
CREATE TABLE inscripciones (
    id_inscripcion INT AUTO_INCREMENT PRIMARY KEY,
    id_estudiante INT NOT NULL,
    id_curso INT NOT NULL,
    fecha_inscripcion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    calificacion DECIMAL(3,1) DEFAULT NULL,
    FOREIGN KEY (id_estudiante) REFERENCES estudiantes(id_estudiante),
    FOREIGN KEY (id_curso) REFERENCES cursos(id_curso),
    UNIQUE KEY unique_estudiante_curso (id_estudiante, id_curso)
);
```

## ¿Dónde se puede crear un diagrama E-R?

### **Herramientas principales:**

#### **1. Draw.io (Diagrams.net)**

- **Ventajas:** Gratuito, interfaz web, plantillas E-R
- **Uso:** Ideal para diagramas conceptuales y lógicos
- **URL:** [https://app.diagrams.net/](https://app.diagrams.net/)

#### **2. Excalidraw**

- **Ventajas:** Minimalista, colaborativo, estilo dibujado a mano
- **Uso:** Perfecto para bocetos rápidos y lluvia de ideas
- **URL:** [https://excalidraw.com/](https://excalidraw.com/)

#### **3. MySQL Workbench**

- **Ventajas:** Genera código SQL automáticamente, ingeniería reversa
- **Uso:** Ideal para modelado físico directo

#### **4. Lucidchart**

- **Ventajas:** Profesional, colaborativo, plantillas avanzadas
- **Uso:** Para proyectos empresariales

#### **5. dbdiagram.io**

- **Ventajas:** Especializado en bases de datos, sintaxis simple
- **Uso:** Crear diagramas desde código

## ✅ LO QUE SÍ DEBES HACER

### **Buenas Prácticas:**

```sql
-- ✅ CORRECTO: Nombres descriptivos y consistentes
CREATE TABLE usuarios_sistema (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(150) NOT NULL,
    email_corporativo VARCHAR(200) UNIQUE NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ✅ CORRECTO: Índices en claves foráneas
CREATE TABLE pedidos (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    INDEX idx_cliente (id_cliente), -- Índice en FK
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

-- ✅ CORRECTO: Restricciones de integridad
CREATE TABLE productos (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    precio DECIMAL(10,2) NOT NULL CHECK (precio > 0),
    stock INT NOT NULL DEFAULT 0 CHECK (stock >= 0)
);

-- ✅ CORRECTO: Usar ENUM para valores limitados
CREATE TABLE estados_pedido (
    estado ENUM('pendiente', 'procesando', 'enviado', 'entregado') NOT NULL
);
```

## ❌ ERRORES TÍPICOS Y COMUNES - LO QUE NUNCA DEBES HACER

### **1. Errores de Nomenclatura**

```sql
-- ❌ INCORRECTO: Nombres inconsistentes y poco descriptivos
CREATE TABLE usr ( -- Nombre muy corto
    idUsr INT, -- Mezcla de estilos
    Nombre varchar(50), -- Mayúsculas inconsistentes
    e_mail VARCHAR(100) -- Inconsistente con email
);

-- ❌ INCORRECTO: Usar palabras reservadas
CREATE TABLE order ( -- 'order' es palabra reservada
    select INT, -- 'select' es palabra reservada
    from VARCHAR(50) -- 'from' es palabra reservada
);
```

### **2. Errores de Claves Primarias**

```sql
-- ❌ INCORRECTO: Sin clave primaria
CREATE TABLE productos (
    nombre VARCHAR(100),
    precio DECIMAL(10,2)
); -- Sin PRIMARY KEY = problema grave

-- ❌ INCORRECTO: Clave primaria compuesta innecesaria
CREATE TABLE clientes (
    nombre VARCHAR(100),
    email VARCHAR(150),
    PRIMARY KEY (nombre, email) -- Muy frágil, mejor usar ID
);
```

### **3. Errores de Tipos de Datos**

```sql
-- ❌ INCORRECTO: Tipos de datos inadecuados
CREATE TABLE productos (
    precio VARCHAR(20), -- Precio como texto = error grave
    fecha_creacion VARCHAR(50), -- Fecha como texto
    activo VARCHAR(10) -- Boolean como texto
);

-- ✅ CORRECTO:
CREATE TABLE productos (
    precio DECIMAL(10,2) NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    activo BOOLEAN DEFAULT TRUE
);
```

### **4. Errores de Relaciones**

```sql
-- ❌ INCORRECTO: Sin claves foráneas
CREATE TABLE pedidos (
    id_pedido INT PRIMARY KEY,
    cliente_id INT -- Sin FOREIGN KEY = pérdida de integridad
);

-- ❌ INCORRECTO: Cascada mal configurada
CREATE TABLE detalle_pedidos (
    id_detalle INT PRIMARY KEY,
    id_producto INT,
    FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
    ON DELETE CASCADE -- Peligroso: elimina productos usados
);

-- ✅ CORRECTO:
CREATE TABLE detalle_pedidos (
    id_detalle INT PRIMARY KEY,
    id_producto INT,
    FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
    ON DELETE RESTRICT -- Previene eliminación accidental
);
```

### **5. Errores de Normalización**

```sql
-- ❌ INCORRECTO: Datos repetitivos (no normalizado)
CREATE TABLE ventas (
    id_venta INT PRIMARY KEY,
    cliente_nombre VARCHAR(100),
    cliente_email VARCHAR(150),
    cliente_telefono VARCHAR(20),
    producto_nombre VARCHAR(200),
    producto_precio DECIMAL(10,2)
    -- Información repetida = desperdicio de espacio
);

-- ✅ CORRECTO: Normalizado
-- Tablas separadas: clientes, productos, ventas
-- Con relaciones apropiadas mediante FKs
```

### **6. Errores de Índices**

```sql
-- ❌ INCORRECTO: Sin índices en columnas de búsqueda frecuente
CREATE TABLE usuarios (
    id_usuario INT PRIMARY KEY,
    email VARCHAR(150) -- Sin índice, búsquedas lentas
);

-- ❌ INCORRECTO: Demasiados índices
CREATE TABLE productos (
    id_producto INT PRIMARY KEY,
    nombre VARCHAR(200),
    descripcion TEXT,
    INDEX idx1 (nombre),
    INDEX idx2 (descripcion), -- Índice en TEXT innecesario
    INDEX idx3 (nombre, descripcion) -- Redundante con idx1
);
```

### **7. Errores de Configuración**

```sql
-- ❌ INCORRECTO: Sin especificar ENGINE ni CHARACTER SET
CREATE TABLE usuarios (
    id_usuario INT PRIMARY KEY,
    nombre VARCHAR(100)
); -- Usa configuración por defecto

-- ✅ CORRECTO:
CREATE TABLE usuarios (
    id_usuario INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
) ENGINE=InnoDB CHARACTER SET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

## Ejemplo Completo: Sistema de Biblioteca

```sql
-- Crear base de datos
CREATE DATABASE biblioteca
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE biblioteca;

-- Entidades principales
CREATE TABLE autores (
    id_autor INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE,
    nacionalidad VARCHAR(50),
    INDEX idx_apellido (apellido)
) ENGINE=InnoDB;

CREATE TABLE libros (
    id_libro INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    isbn VARCHAR(17) UNIQUE NOT NULL,
    fecha_publicacion YEAR,
    numero_paginas INT CHECK (numero_paginas > 0),
    genero ENUM('ficcion', 'no_ficcion', 'ciencia', 'historia', 'arte') NOT NULL,
    INDEX idx_titulo (titulo),
    INDEX idx_isbn (isbn),
    INDEX idx_genero (genero)
) ENGINE=InnoDB;

-- Relación N:M entre libros y autores
CREATE TABLE libro_autores (
    id_libro INT NOT NULL,
    id_autor INT NOT NULL,
    PRIMARY KEY (id_libro, id_autor),
    FOREIGN KEY (id_libro) REFERENCES libros(id_libro) ON DELETE CASCADE,
    FOREIGN KEY (id_autor) REFERENCES autores(id_autor) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    activo BOOLEAN DEFAULT TRUE,
    INDEX idx_email (email)
) ENGINE=InnoDB;

CREATE TABLE prestamos (
    id_prestamo INT AUTO_INCREMENT PRIMARY KEY,
    id_libro INT NOT NULL,
    id_usuario INT NOT NULL,
    fecha_prestamo TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_devolucion_esperada DATE NOT NULL,
    fecha_devolucion_real DATE NULL,
    estado ENUM('prestado', 'devuelto', 'vencido') DEFAULT 'prestado',
    FOREIGN KEY (id_libro) REFERENCES libros(id_libro) ON DELETE RESTRICT,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE RESTRICT,
    INDEX idx_libro (id_libro),
    INDEX idx_usuario (id_usuario),
    INDEX idx_estado (estado),
    INDEX idx_fechas (fecha_prestamo, fecha_devolucion_esperada)
) ENGINE=InnoDB;
```

## Resumen de Comandos Esenciales

```sql
-- Crear base de datos con configuración correcta
CREATE DATABASE nombre_bd
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- Tabla básica con mejores prácticas
CREATE TABLE tabla_ejemplo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    campo_requerido VARCHAR(100) NOT NULL,
    campo_opcional VARCHAR(200),
    campo_numerico DECIMAL(10,2) CHECK (campo_numerico >= 0),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_campo (campo_requerido)
) ENGINE=InnoDB;

-- Agregar clave foránea
ALTER TABLE tabla_hijo
ADD FOREIGN KEY (id_padre) REFERENCES tabla_padre(id)
ON DELETE RESTRICT ON UPDATE CASCADE;

-- Crear índice
CREATE INDEX idx_nombre ON tabla(campo);

-- Ver estructura de tabla
DESCRIBE tabla_nombre;
SHOW CREATE TABLE tabla_nombre;
```

---

**Recuerda:** Un buen modelado de base de datos es la base de un sistema eficiente y mantenible. Dedica tiempo suficiente a esta fase antes de comenzar la implementación.
