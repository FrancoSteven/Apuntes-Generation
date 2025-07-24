# MySQL - Integridad de Datos

## 🤔 ¿Qué es la integridad de los datos en una BDD?

La **integridad de datos** es el conjunto de reglas y restricciones que garantizan la exactitud, consistencia y validez de los datos almacenados en una base de datos.

### Tipos de Integridad:

1. **Integridad de Entidad**: Cada fila debe ser única (PRIMARY KEY)
2. **Integridad Referencial**: Las relaciones entre tablas deben ser válidas (FOREIGN KEY)
3. **Integridad de Dominio**: Los valores deben cumplir restricciones específicas (CHECK, NOT NULL)
4. **Integridad Definida por Usuario**: Reglas de negocio específicas (TRIGGERS, PROCEDURES)

### Ejemplo Técnico:

```sql
-- Creación de tablas con restricciones de integridad
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,           -- Integridad de entidad
    email VARCHAR(100) NOT NULL UNIQUE,          -- Integridad de dominio
    edad INT CHECK (edad >= 0 AND edad <= 120),  -- Integridad de dominio
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,                     -- Integridad referencial
    total DECIMAL(10,2) CHECK (total > 0),      -- Integridad de dominio
    estado ENUM('pendiente', 'procesado', 'enviado', 'entregado'),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        ON DELETE CASCADE ON UPDATE CASCADE      -- Integridad referencial
);
```

### ❌ Errores Comunes:

- No definir PRIMARY KEYS
- Permitir valores NULL en campos críticos
- No usar FOREIGN KEYS para relaciones
- Insertar datos sin validar formato/rango

---

## 🖇️ Integridad y Normalización

La **normalización** elimina redundancia y garantiza integridad mediante la división lógica de datos.

### Formas Normales Principales:

#### 1FN (Primera Forma Normal)

- Eliminar grupos repetitivos
- Cada celda contiene un valor atómico

```sql
-- ❌ INCORRECTO (violación 1FN)
CREATE TABLE empleados_malo (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    telefonos VARCHAR(200)  -- "123-456, 789-012, 345-678"
);

-- ✅ CORRECTO (cumple 1FN)
CREATE TABLE empleados (
    id INT PRIMARY KEY,
    nombre VARCHAR(50)
);

CREATE TABLE telefonos_empleado (
    id INT AUTO_INCREMENT PRIMARY KEY,
    empleado_id INT,
    telefono VARCHAR(15),
    FOREIGN KEY (empleado_id) REFERENCES empleados(id)
);
```

#### 2FN (Segunda Forma Normal)

- Cumplir 1FN
- Eliminar dependencias parciales

```sql
-- ❌ INCORRECTO (dependencia parcial)
CREATE TABLE pedidos_items_malo (
    pedido_id INT,
    producto_id INT,
    nombre_producto VARCHAR(100),  -- Depende solo de producto_id
    precio_unitario DECIMAL(8,2),  -- Depende solo de producto_id
    cantidad INT,
    PRIMARY KEY (pedido_id, producto_id)
);

-- ✅ CORRECTO (2FN)
CREATE TABLE productos (
    id INT PRIMARY KEY,
    nombre VARCHAR(100),
    precio DECIMAL(8,2)
);

CREATE TABLE pedidos_items (
    pedido_id INT,
    producto_id INT,
    cantidad INT,
    PRIMARY KEY (pedido_id, producto_id),
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);
```

#### 3FN (Tercera Forma Normal)

- Cumplir 2FN
- Eliminar dependencias transitivas

```sql
-- ❌ INCORRECTO (dependencia transitiva)
CREATE TABLE empleados_malo (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    departamento_id INT,
    departamento_nombre VARCHAR(50),  -- depende de departamento_id
    departamento_ubicacion VARCHAR(100) -- depende de departamento_id
);

-- ✅ CORRECTO (3FN)
CREATE TABLE departamentos (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    ubicacion VARCHAR(100)
);

CREATE TABLE empleados (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    departamento_id INT,
    FOREIGN KEY (departamento_id) REFERENCES departamentos(id)
);
```

### ❌ Errores Típicos en Normalización:

- Sobre-normalizar (crear demasiadas tablas pequeñas)
- Sub-normalizar (mantener redundancia innecesaria)
- No considerar el rendimiento en consultas frecuentes
- Normalizar datos que no cambian (códigos de país, etc.)

---

## 🤔 Transacciones y Principios ACID

Las **transacciones** son unidades lógicas de trabajo que mantienen la consistencia de la base de datos.

### Propiedades ACID:

#### **A - Atomicidad (Atomicity)**

Todo o nada - la transacción se ejecuta completamente o se revierte.

```sql
-- Ejemplo: Transferencia bancaria
START TRANSACTION;

UPDATE cuentas
SET saldo = saldo - 1000
WHERE numero_cuenta = '12345';

UPDATE cuentas
SET saldo = saldo + 1000
WHERE numero_cuenta = '67890';

-- Si ambas operaciones son exitosas
COMMIT;

-- Si algo falla
-- ROLLBACK;
```

#### **C - Consistencia (Consistency)**

La BD pasa de un estado válido a otro estado válido.

```sql
-- Ejemplo con trigger para mantener consistencia
DELIMITER //
CREATE TRIGGER actualizar_stock_after_venta
    AFTER INSERT ON ventas_items
    FOR EACH ROW
BEGIN
    UPDATE productos
    SET stock = stock - NEW.cantidad
    WHERE id = NEW.producto_id;

    -- Verificar que el stock no sea negativo
    IF (SELECT stock FROM productos WHERE id = NEW.producto_id) < 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Stock insuficiente';
    END IF;
END//
DELIMITER ;
```

#### **I - Aislamiento (Isolation)**

Las transacciones concurrentes no se interfieren entre sí.

```sql
-- Niveles de aislamiento en MySQL
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;  -- Permite dirty reads
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;    -- Previene dirty reads
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;   -- Default en MySQL
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;      -- Máximo aislamiento

-- Ejemplo práctico
-- Sesión 1:
START TRANSACTION;
SELECT saldo FROM cuentas WHERE id = 1; -- Resultado: 1000

-- Sesión 2 (mientras Sesión 1 está activa):
START TRANSACTION;
UPDATE cuentas SET saldo = 500 WHERE id = 1;
COMMIT;

-- Sesión 1 continúa:
SELECT saldo FROM cuentas WHERE id = 1; -- En REPEATABLE READ: sigue siendo 1000
COMMIT;
```

#### **D - Durabilidad (Durability)**

Los cambios confirmados persisten permanentemente.

```sql
-- Configuración para garantizar durabilidad
SET innodb_flush_log_at_trx_commit = 1;  -- Flush a disco en cada commit
SET sync_binlog = 1;                     -- Sincronizar binary log

-- Ejemplo de transacción durable
START TRANSACTION;
INSERT INTO auditoria (usuario_id, accion, timestamp)
VALUES (123, 'LOGIN', NOW());
COMMIT; -- Los datos se escriben físicamente al disco
```

### Ejemplo Completo ACID:

```sql
-- Sistema de reservas que cumple ACID
DELIMITER //
CREATE PROCEDURE reservar_asiento(
    IN p_vuelo_id INT,
    IN p_usuario_id INT,
    IN p_asiento VARCHAR(5)
)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    START TRANSACTION;

    -- Verificar disponibilidad (Consistency)
    IF EXISTS(SELECT 1 FROM reservas
              WHERE vuelo_id = p_vuelo_id AND asiento = p_asiento) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Asiento ocupado';
    END IF;

    -- Reservar asiento (Atomicity)
    INSERT INTO reservas (vuelo_id, usuario_id, asiento, fecha_reserva)
    VALUES (p_vuelo_id, p_usuario_id, p_asiento, NOW());

    -- Actualizar capacidad disponible (Isolation protege contra concurrencia)
    UPDATE vuelos
    SET asientos_disponibles = asientos_disponibles - 1
    WHERE id = p_vuelo_id;

    COMMIT; -- Durability garantiza persistencia
END//
DELIMITER ;
```

### ❌ Errores Comunes con ACID:

1. **Atomicidad**:

   - No usar transacciones para operaciones relacionadas
   - Olvidar hacer ROLLBACK en caso de error

2. **Consistencia**:

   - No validar restricciones de integridad
   - Permitir estados intermedios inválidos

3. **Aislamiento**:

   - No considerar problemas de concurrencia
   - Usar nivel de aislamiento inadecuado

4. **Durabilidad**:
   - No configurar correctamente los parámetros de flush
   - Asumir que los datos están guardados antes del COMMIT

### Configuraciones Importantes MySQL:

```sql
-- Para garantizar ACID completo
SET autocommit = 0;                           -- Transacciones explícitas
SET innodb_flush_log_at_trx_commit = 1;      -- Durabilidad máxima
SET transaction_isolation = 'REPEATABLE-READ'; -- Aislamiento por defecto
```

## Resumen de Buenas Prácticas

### ✅ LO CORRECTO:

- Definir siempre PRIMARY KEYS
- Usar FOREIGN KEYS para relaciones
- Aplicar restricciones CHECK para validaciones
- Normalizar según necesidades del negocio
- Usar transacciones para operaciones críticas
- Configurar niveles de aislamiento apropiados

### ❌ LO INCORRECTO:

- Tablas sin PRIMARY KEY
- Datos redundantes innecesarios
- Transacciones muy largas
- No manejar errores en transacciones
- Ignorar problemas de concurrencia
- No validar integridad referencial
