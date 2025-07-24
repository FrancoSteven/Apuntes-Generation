# Tutorial MySQL: JOINs y HAVING - Guía Completa

## 📊 Estructura de las Tablas

### Tabla Customers
```sql
CREATE TABLE Customers (
    customer_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    age INT,
    country VARCHAR(50)
);

INSERT INTO Customers VALUES
(1, 'John', 'Doe', 31, 'USA'),
(2, 'Robert', 'Luna', 22, 'USA'),
(3, 'David', 'Robinson', 22, 'UK'),
(4, 'John', 'Reinhardt', 25, 'UK'),
(5, 'Betty', 'Doe', 28, 'UAE');
```

### Tabla Orders
```sql
CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    item VARCHAR(50),
    amount DECIMAL(10,2),
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

INSERT INTO Orders VALUES
(1, 'Keyboard', 400, 4),
(2, 'Mouse', 300, 4),
(3, 'Monitor', 12000, 3),
(4, 'Keyboard', 400, 1),
(5, 'Mousepad', 250, 2);
```

### Tabla Shippings
```sql
CREATE TABLE Shippings (
    shipping_id INT PRIMARY KEY,
    status VARCHAR(20),
    customer INT,
    FOREIGN KEY (customer) REFERENCES Customers(customer_id)
);

INSERT INTO Shippings VALUES
(1, 'Pending', 2),
(2, 'Pending', 4),
(3, 'Delivered', 3),
(4, 'Pending', 5),
(5, 'Delivered', 1);
```

---

## 🔗 TIPOS DE JOIN EN MYSQL

### 1. INNER JOIN
**Concepto**: Devuelve solo los registros que tienen coincidencias en ambas tablas.

#### Ejemplo 1: Clientes con sus pedidos
```sql
SELECT 
    c.customer_id,    -- 📋 ID del cliente desde tabla Customers (alias 'c')
    c.first_name,     -- 👤 Nombre desde tabla Customers
    c.last_name,      -- 👤 Apellido desde tabla Customers
    o.item,           -- 📦 Producto desde tabla Orders (alias 'o')
    o.amount          -- 💰 Precio desde tabla Orders
FROM Customers c      -- 🏪 Tabla principal: Customers con alias 'c'
INNER JOIN Orders o   -- 🔗 UNO con tabla Orders (alias 'o')
ON c.customer_id = o.customer_id;  -- 🎯 CONDICIÓN: c.customer_id = o.customer_id
                      -- ✨ Resultado: SUPER TABLA Customer+Orders unificada
```

**Resultado esperado**:
```
customer_id | first_name | last_name  | item     | amount
1          | John       | Doe        | Keyboard | 400
2          | Robert     | Luna       | Mousepad | 250
3          | David      | Robinson   | Monitor  | 12000
4          | John       | Reinhardt  | Keyboard | 400
4          | John       | Reinhardt  | Mouse    | 300
```

**Explicación**: Solo muestra clientes que tienen pedidos. Betty (customer_id=5) no aparece porque no tiene pedidos.

#### Ejemplo 2: Clientes con envíos entregados
```sql
SELECT 
    c.first_name,     -- 👤 Nombre del cliente desde tabla Customers (alias 'c')
    c.last_name,      -- 👤 Apellido del cliente desde tabla Customers
    s.status,         -- 📊 Estado del envío desde tabla Shippings (alias 's')
    s.shipping_id     -- 🚚 ID del envío desde tabla Shippings
FROM Customers c      -- 🏪 Tabla base: Customers con alias 'c'
INNER JOIN Shippings s -- 🔗 UNO con tabla Shippings (alias 's')
ON c.customer_id = s.customer  -- 🎯 CONDICIÓN: uno por ID del cliente
WHERE s.status = 'Delivered';  -- 🔍 FILTRO: solo envíos entregados
                               -- ✨ SUPER TABLA: Customer+Shippings filtrada
```

### 2. LEFT JOIN (LEFT OUTER JOIN)
**Concepto**: Devuelve todos los registros de la tabla izquierda y los coincidentes de la derecha. Si no hay coincidencia, muestra NULL.

#### Ejemplo 1: Todos los clientes con sus pedidos (incluso sin pedidos)
```sql
SELECT 
    c.customer_id,    -- 📋 ID del cliente desde tabla Customers (alias 'c')
    c.first_name,     -- 👤 Nombre desde tabla Customers (SIEMPRE aparece)
    c.last_name,      -- 👤 Apellido desde tabla Customers (SIEMPRE aparece)
    o.item,           -- 📦 Producto desde tabla Orders (alias 'o') - puede ser NULL
    o.amount          -- 💰 Precio desde tabla Orders - puede ser NULL
FROM Customers c      -- 🏪 Tabla LEFT (izquierda): Customers con alias 'c'
LEFT JOIN Orders o    -- ⬅️ UNO hacia la IZQUIERDA con tabla Orders (alias 'o')
ON c.customer_id = o.customer_id;  -- 🎯 CONDICIÓN: uno por customer_id
                      -- ✨ SUPER TABLA: TODOS los customers + orders que existan
                      -- 💡 Si customer no tiene orders, aparece con NULL
```

**Resultado esperado**:
```
customer_id | first_name | last_name  | item     | amount
1          | John       | Doe        | Keyboard | 400
2          | Robert     | Luna       | Mousepad | 250
3          | David      | Robinson   | Monitor  | 12000
4          | John       | Reinhardt  | Keyboard | 400
4          | John       | Reinhardt  | Mouse    | 300
5          | Betty      | Doe        | NULL     | NULL
```

**Explicación**: Ahora Betty aparece con valores NULL porque no tiene pedidos, pero queremos mostrar todos los clientes.

#### Ejemplo 2: Clientes sin pedidos
```sql
SELECT 
    c.customer_id,    -- 📋 ID del cliente desde tabla Customers (alias 'c')
    c.first_name,     -- 👤 Nombre desde tabla Customers
    c.last_name       -- 👤 Apellido desde tabla Customers
FROM Customers c      -- 🏪 Tabla LEFT: Customers con alias 'c'
LEFT JOIN Orders o    -- ⬅️ UNO hacia la IZQUIERDA con tabla Orders (alias 'o')
ON c.customer_id = o.customer_id   -- 🎯 CONDICIÓN: uno por customer_id
WHERE o.customer_id IS NULL;       -- 🔍 FILTRO: donde Orders.customer_id es NULL
                      -- ✨ RESULTADO: Solo customers SIN pedidos
                      -- 💡 LEFT JOIN crea SUPER TABLA, WHERE filtra los NULL
```

### 3. RIGHT JOIN (RIGHT OUTER JOIN)
**Concepto**: Devuelve todos los registros de la tabla derecha y los coincidentes de la izquierda.

#### Ejemplo: Todos los pedidos con información del cliente
```sql
SELECT 
    o.order_id,       -- 📋 ID del pedido desde tabla Orders (alias 'o')
    o.item,           -- 📦 Producto desde tabla Orders (SIEMPRE aparece)
    o.amount,         -- 💰 Precio desde tabla Orders (SIEMPRE aparece)
    c.first_name,     -- 👤 Nombre desde tabla Customers (alias 'c') - puede ser NULL
    c.last_name       -- 👤 Apellido desde tabla Customers - puede ser NULL
FROM Customers c      -- 🏪 Tabla LEFT: Customers con alias 'c'
RIGHT JOIN Orders o   -- ➡️ UNO hacia la DERECHA con tabla Orders (alias 'o')
ON c.customer_id = o.customer_id;  -- 🎯 CONDICIÓN: uno por customer_id
                      -- ✨ SUPER TABLA: TODOS los orders + customers que existan
                      -- 💡 Si order no tiene customer, customer aparece NULL
```

### 4. FULL OUTER JOIN
**Nota**: MySQL no soporta FULL OUTER JOIN directamente, pero se puede simular:

```sql
SELECT 
    c.customer_id,
    c.first_name,
    c.last_name,
    o.item,
    o.amount
FROM Customers c
LEFT JOIN Orders o ON c.customer_id = o.customer_id

UNION

SELECT 
    c.customer_id,
    c.first_name,
    c.last_name,
    o.item,
    o.amount
FROM Customers c
RIGHT JOIN Orders o ON c.customer_id = o.customer_id;
```

---

## 🔍 CONSULTAS AVANZADAS CON MÚLTIPLES JOINS

### Ejemplo 1: Información completa de clientes, pedidos y envíos
```sql
SELECT 
    c.customer_id,    -- 📋 ID del cliente desde tabla Customers (alias 'c')
    c.first_name,     -- 👤 Nombre desde tabla Customers (SIEMPRE aparece)
    c.last_name,      -- 👤 Apellido desde tabla Customers (SIEMPRE aparece)
    c.country,        -- 🌍 País desde tabla Customers (SIEMPRE aparece)
    o.item,           -- 📦 Producto desde tabla Orders (alias 'o') - puede ser NULL
    o.amount,         -- 💰 Precio desde tabla Orders - puede ser NULL
    s.status AS shipping_status  -- 📊 Estado envío desde Shippings (alias 's') - puede ser NULL
FROM Customers c      -- 🏪 Tabla BASE: Customers con alias 'c'
LEFT JOIN Orders o    -- ⬅️ PRIMER JOIN: Customers + Orders
ON c.customer_id = o.customer_id      -- 🎯 UNO por customer_id
LEFT JOIN Shippings s -- ⬅️ SEGUNDO JOIN: (Customers+Orders) + Shippings  
ON c.customer_id = s.customer;        -- 🎯 UNO por customer_id también
                      -- ✨ SUPER TABLA TRIPLE: Customer+Orders+Shippings
                      -- 💡 Muestra TODOS los customers, con/sin orders, con/sin shippings
```

### Ejemplo 2: Clientes con pedidos pendientes de envío
```sql
SELECT 
    c.first_name,     -- 👤 Nombre desde tabla Customers (alias 'c')
    c.last_name,      -- 👤 Apellido desde tabla Customers
    o.item,           -- 📦 Producto desde tabla Orders (alias 'o')
    o.amount,         -- 💰 Precio desde tabla Orders
    s.status          -- 📊 Estado desde tabla Shippings (alias 's')
FROM Customers c      -- 🏪 Tabla BASE: Customers con alias 'c'
INNER JOIN Orders o   -- 🔗 PRIMER JOIN: solo customers CON orders
ON c.customer_id = o.customer_id      -- 🎯 UNO por customer_id
INNER JOIN Shippings s -- 🔗 SEGUNDO JOIN: solo los anteriores CON shippings
ON c.customer_id = s.customer         -- 🎯 UNO por customer_id también
WHERE s.status = 'Pending';           -- 🔍 FILTRO: solo status = 'Pending'
                      -- ✨ SUPER TABLA FILTRADA: Customer+Orders+Shippings
                      -- 💡 Solo customers que tienen BOTH orders AND shippings pendientes
```

---

## 📈 CLÁUSULA HAVING

**Concepto**: HAVING se usa con GROUP BY para filtrar grupos basados en condiciones agregadas. WHERE filtra filas individuales, HAVING filtra grupos.

### Ejemplo 1: Países con más de un cliente
```sql
SELECT 
    country,          -- 🌍 Campo país desde tabla Customers
    COUNT(*) as total_customers  -- 🔢 FUNCIÓN AGREGADA: cuenta filas por grupo
FROM Customers        -- 🏪 Tabla: Customers (sin alias necesario aquí)
GROUP BY country      -- 📊 AGRUPO: creo grupos por cada país único
HAVING COUNT(*) > 1;  -- 🔍 FILTRO DE GRUPOS: solo grupos con COUNT > 1
                      -- ✨ RESULTADO: Solo países que tienen MÁS de 1 cliente
                      -- 💡 WHERE filtra FILAS, HAVING filtra GRUPOS
```

**Resultado esperado**:
```
country | total_customers
USA     | 2
UK      | 2
```

### Ejemplo 2: Clientes con gastos totales mayores a $500
```sql
SELECT 
    c.customer_id,    -- 📋 ID desde tabla Customers (alias 'c')
    c.first_name,     -- 👤 Nombre desde tabla Customers
    c.last_name,      -- 👤 Apellido desde tabla Customers
    SUM(o.amount) as total_spent  -- 💰 FUNCIÓN AGREGADA: suma amounts por grupo
FROM Customers c      -- 🏪 Tabla principal: Customers con alias 'c'
INNER JOIN Orders o   -- 🔗 UNO con tabla Orders (alias 'o')
ON c.customer_id = o.customer_id      -- 🎯 CONDICIÓN: uno por customer_id
GROUP BY c.customer_id, c.first_name, c.last_name  -- 📊 AGRUPO: por cada cliente único
HAVING SUM(o.amount) > 500;           -- 🔍 FILTRO DE GRUPOS: suma > 500
                      -- ✨ SUPER TABLA AGRUPADA: Customer+Orders por cliente
                      -- 💡 Solo clientes cuya SUMA de pedidos > $500
```

### Ejemplo 3: Países con gasto promedio por cliente mayor a $400
```sql
SELECT 
    c.country,        -- 🌍 País desde tabla Customers (alias 'c')
    COUNT(DISTINCT c.customer_id) as customers_count,  -- 🔢 Cuenta clientes únicos
    AVG(o.amount) as avg_order_amount  -- 📊 FUNCIÓN AGREGADA: promedio de amounts
FROM Customers c      -- 🏪 Tabla principal: Customers con alias 'c'
INNER JOIN Orders o   -- 🔗 UNO con tabla Orders (alias 'o')
ON c.customer_id = o.customer_id      -- 🎯 CONDICIÓN: uno por customer_id
GROUP BY c.country    -- 📊 AGRUPO: por cada país único
HAVING AVG(o.amount) > 400;           -- 🔍 FILTRO DE GRUPOS: promedio > 400
                      -- ✨ SUPER TABLA AGRUPADA: Customer+Orders por país
                      -- 💡 Solo países donde PROMEDIO de pedidos > $400
```

### Ejemplo 4: Clientes con múltiples pedidos
```sql
SELECT 
    c.customer_id,    -- 📋 ID desde tabla Customers (alias 'c')
    c.first_name,     -- 👤 Nombre desde tabla Customers
    c.last_name,      -- 👤 Apellido desde tabla Customers
    COUNT(o.order_id) as order_count,     -- 🔢 FUNCIÓN AGREGADA: cuenta pedidos
    SUM(o.amount) as total_amount         -- 💰 FUNCIÓN AGREGADA: suma amounts
FROM Customers c      -- 🏪 Tabla principal: Customers con alias 'c'
INNER JOIN Orders o   -- 🔗 UNO con tabla Orders (alias 'o')
ON c.customer_id = o.customer_id          -- 🎯 CONDICIÓN: uno por customer_id
GROUP BY c.customer_id, c.first_name, c.last_name  -- 📊 AGRUPO: por cada cliente
HAVING COUNT(o.order_id) > 1;             -- 🔍 FILTRO DE GRUPOS: más de 1 pedido
                      -- ✨ SUPER TABLA AGRUPADA: Customer+Orders por cliente
                      -- 💡 Solo clientes que tienen MÁS de 1 pedido
```

---

## 🎯 CONSULTAS COMPLEJAS COMBINANDO JOINS Y HAVING

### Ejemplo 1: Análisis de ventas por país
```sql
SELECT 
    c.country,        -- 🌍 País desde tabla Customers (alias 'c')
    COUNT(DISTINCT c.customer_id) as customers,    -- 🔢 Cuenta clientes únicos por país
    COUNT(o.order_id) as total_orders,             -- 📦 Cuenta total de pedidos
    SUM(o.amount) as total_sales,                  -- 💰 Suma total de ventas
    AVG(o.amount) as avg_order_value               -- 📊 Promedio por pedido
FROM Customers c      -- 🏪 Tabla principal: Customers con alias 'c'
LEFT JOIN Orders o    -- ⬅️ UNO hacia IZQUIERDA con Orders (alias 'o')
ON c.customer_id = o.customer_id  -- 🎯 CONDICIÓN: uno por customer_id
GROUP BY c.country    -- 📊 AGRUPO: por cada país único
HAVING SUM(o.amount) > 0          -- 🔍 FILTRO DE GRUPOS: solo países con ventas
ORDER BY total_sales DESC;        -- ↕️ ORDENO: por ventas totales descendente
                      -- ✨ SUPER TABLA AGRUPADA: Customer+Orders por país
                      -- 💡 Análisis completo de ventas, solo países con ventas > 0
```

### Ejemplo 2: Estados de envío por país con filtros
```sql
SELECT 
    c.country,        -- 🌍 País desde tabla Customers (alias 'c')
    s.status,         -- 📊 Estado desde tabla Shippings (alias 's')
    COUNT(*) as shipping_count,    -- 🔢 Cuenta envíos por grupo
    SUM(o.amount) as total_value   -- 💰 Suma valor total por grupo
FROM Customers c      -- 🏪 Tabla principal: Customers con alias 'c'
INNER JOIN Orders o   -- 🔗 PRIMER JOIN: Customers + Orders (alias 'o')
ON c.customer_id = o.customer_id  -- 🎯 UNO por customer_id
INNER JOIN Shippings s -- 🔗 SEGUNDO JOIN: (Customer+Orders) + Shippings (alias 's')
ON c.customer_id = s.customer     -- 🎯 UNO por customer_id también
GROUP BY c.country, s.status      -- 📊 AGRUPO: por país Y estado de envío
HAVING SUM(o.amount) > 300        -- 🔍 FILTRO DE GRUPOS: valor total > $300
ORDER BY c.country, total_value DESC;  -- ↕️ ORDENO: por país, luego por valor
                      -- ✨ SUPER TABLA TRIPLE AGRUPADA: Customer+Orders+Shippings
                      -- 💡 Solo combinaciones país-estado con valor > $300
```

### Ejemplo 3: Clientes VIP (con múltiples criterios)
```sql
SELECT 
    c.customer_id,    -- 📋 ID desde tabla Customers (alias 'c')
    c.first_name,     -- 👤 Nombre desde tabla Customers
    c.last_name,      -- 👤 Apellido desde tabla Customers
    c.country,        -- 🌍 País desde tabla Customers
    COUNT(o.order_id) as order_count,     -- 🔢 Cuenta pedidos del cliente
    SUM(o.amount) as total_spent,         -- 💰 Suma total gastado
    AVG(o.amount) as avg_order            -- 📊 Promedio por pedido
FROM Customers c      -- 🏪 Tabla principal: Customers con alias 'c'
INNER JOIN Orders o   -- 🔗 UNO con tabla Orders (alias 'o')
ON c.customer_id = o.customer_id          -- 🎯 CONDICIÓN: uno por customer_id
GROUP BY c.customer_id, c.first_name, c.last_name, c.country  -- 📊 AGRUPO: por cliente
HAVING 
    COUNT(o.order_id) >= 1 AND            -- 🔍 CRITERIO 1: al menos 1 pedido
    SUM(o.amount) >= 400 AND              -- 🔍 CRITERIO 2: gasto total >= $400
    AVG(o.amount) >= 350                  -- 🔍 CRITERIO 3: promedio >= $350
ORDER BY total_spent DESC;                -- ↕️ ORDENO: por gasto total descendente
                      -- ✨ SUPER TABLA AGRUPADA: Customer+Orders por cliente
                      -- 💡 Solo clientes VIP que cumplen TODOS los criterios
```

---

## 📝 DIFERENCIAS CLAVE

### WHERE vs HAVING
```sql
-- ❌ INCORRECTO: No puedes usar funciones agregadas en WHERE
SELECT country, COUNT(*) 
FROM Customers 
WHERE COUNT(*) > 1  -- ❌ ERROR: WHERE no puede filtrar GRUPOS
GROUP BY country;

-- ✅ CORRECTO: Usa HAVING para filtrar grupos
SELECT 
    country,          -- 🌍 Campo desde tabla Customers
    COUNT(*) as total -- 🔢 FUNCIÓN AGREGADA: cuenta por grupo
FROM Customers        -- 🏪 Tabla: Customers
GROUP BY country      -- 📊 AGRUPO: creo grupos por país
HAVING COUNT(*) > 1;  -- 🔍 FILTRO DE GRUPOS: solo grupos con más de 1
                      -- 💡 WHERE = filtro de FILAS, HAVING = filtro de GRUPOS
```

### Orden de ejecución SQL
1. **FROM** - 🏪 Selecciona las tablas base
2. **JOIN** - 🔗 Combina las tablas (crea SUPER TABLA)
3. **WHERE** - 🔍 Filtra filas individuales de la SUPER TABLA
4. **GROUP BY** - 📊 Agrupa las filas filtradas
5. **HAVING** - 🔍 Filtra los grupos creados
6. **SELECT** - 📋 Selecciona las columnas finales
7. **ORDER BY** - ↕️ Ordena los resultados
8. **LIMIT** - ✂️ Limita la cantidad de resultados

```sql
-- 💡 EJEMPLO del orden de ejecución:
SELECT c.country, COUNT(*) as total     -- 6️⃣ SELECT: selecciono país y count
FROM Customers c                        -- 1️⃣ FROM: tabla base Customers
JOIN Orders o ON c.customer_id = o.customer_id  -- 2️⃣ JOIN: creo SUPER TABLA
WHERE o.amount > 300                    -- 3️⃣ WHERE: filtro filas con amount > 300
GROUP BY c.country                      -- 4️⃣ GROUP BY: agrupo por país
HAVING COUNT(*) > 1                     -- 5️⃣ HAVING: filtro grupos con count > 1
ORDER BY total DESC                     -- 7️⃣ ORDER BY: ordeno por total
LIMIT 5;                               -- 8️⃣ LIMIT: solo los primeros 5
``` Agrupa las filas
5. **HAVING** - Filtra grupos
6. **SELECT** - Selecciona columnas
7. **ORDER BY** - Ordena resultados
8. **LIMIT** - Limita resultados
```
---

## 🚀 EJERCICIOS PRÁCTICOS

### Ejercicio 1
Encuentra todos los clientes de UK con sus pedidos y estado de envío.

### Ejercicio 2
Muestra los países que tienen un gasto total superior a $1000.

### Ejercicio 3
Lista todos los clientes que no tienen pedidos.

### Ejercicio 4
Encuentra los productos que han sido pedidos más de una vez.

### Ejercicio 5
Muestra el resumen de ventas por país, incluyendo solo países con más de 1 cliente.

---

## 📚 Recursos Adicionales

- **Referencia Visual de JOINs**: [Imagen de tipos de JOIN](https://substackcdn.com/image/fetch/s_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0e377725-1e0a-400c-bab7-0099dbf1efb8_1280x1664.png)
- **Compilador Online**: [Programiz Java Compiler](https://www.programiz.com/java-programming/online-compiler/)

---

_Este tutorial cubre los conceptos fundamentales de JOINs y HAVING en MySQL con ejemplos prácticos usando datos reales. Practica estas consultas para dominar las bases de datos relacionales._
