# Guía de Consultas SQL - 25 Ejemplos Explicados

## 1. CONSULTAS SELECT BÁSICAS

### 1.1 Selección de todas las columnas

```sql
SELECT * FROM Customers;
```

**Explicación:** Esta consulta selecciona todas las columnas (\*) de la tabla Customers. El asterisco es un comodín que representa todas las columnas disponibles en la tabla.

### 1.2 Selección de columnas específicas

```sql
SELECT first_name, last_name, age FROM Customers;
```

**Explicación:** Selecciona solo las columnas first_name, last_name y age de la tabla Customers. Esto es más eficiente que usar \* cuando solo necesitas columnas específicas.

### 1.3 Selección con alias

```sql
SELECT first_name AS nombre, last_name AS apellido, age AS edad FROM Customers;
```

**Explicación:** Utiliza alias (AS) para renombrar las columnas en el resultado. Los alias hacen que los resultados sean más legibles y fáciles de entender.

### 1.4 Selección con DISTINCT

```sql
SELECT DISTINCT country FROM Customers;
```

**Explicación:** DISTINCT elimina los valores duplicados del resultado. En este caso, mostrará cada país una sola vez, sin importar cuántos clientes haya de cada país.

### 1.5 Selección con LIMIT

```sql
SELECT * FROM Orders LIMIT 3;
```

**Explicación:** LIMIT restringe el número de filas devueltas. Esta consulta mostrará solo las primeras 3 órdenes de la tabla Orders.

## 2. CONSULTAS WHERE (FILTRADO)

### 2.1 Filtro por igualdad

```sql
SELECT * FROM Customers WHERE country = 'USA';
```

**Explicación:** Filtra los registros donde el país sea exactamente 'USA'. El operador = verifica igualdad exacta entre el valor de la columna y el valor especificado.

### 2.2 Filtro por rango numérico

```sql
SELECT * FROM Customers WHERE age BETWEEN 25 AND 35;
```

**Explicación:** BETWEEN filtra valores dentro de un rango inclusivo. Esta consulta devuelve clientes cuya edad esté entre 25 y 35 años (incluyendo 25 y 35).

### 2.3 Filtro con IN

```sql
SELECT * FROM Customers WHERE country IN ('USA', 'UK');
```

**Explicación:** IN permite filtrar por múltiples valores específicos. Es equivalente a usar múltiples condiciones OR, pero más conciso.

### 2.4 Filtro con LIKE (patrones)

```sql
SELECT * FROM Customers WHERE first_name LIKE 'J%';
```

**Explicación:** LIKE permite búsquedas con patrones. El % es un comodín que representa cualquier secuencia de caracteres. Esta consulta encuentra nombres que empiecen con 'J'.

### 2.5 Filtro con múltiples condiciones

```sql
SELECT * FROM Customers WHERE age > 25 AND country = 'USA';
```

**Explicación:** Combina múltiples condiciones con AND. Solo devuelve registros que cumplan AMBAS condiciones: edad mayor a 25 Y país igual a 'USA'.

## 3. CONSULTAS ORDER BY (ORDENAMIENTO)

### 3.1 Ordenamiento ascendente

```sql
SELECT * FROM Customers ORDER BY age ASC;
```

**Explicación:** ORDER BY ordena los resultados. ASC especifica orden ascendente (de menor a mayor). Si no se especifica, ASC es el valor por defecto.

### 3.2 Ordenamiento descendente

```sql
SELECT * FROM Orders ORDER BY amount DESC;
```

**Explicación:** DESC especifica orden descendente (de mayor a menor). Esta consulta muestra las órdenes ordenadas por monto, de la más cara a la más barata.

### 3.3 Ordenamiento por múltiples columnas

```sql
SELECT * FROM Customers ORDER BY country ASC, age DESC;
```

**Explicación:** Ordena primero por país (ascendente), y dentro de cada país, ordena por edad (descendente). El segundo criterio se aplica cuando hay valores iguales en el primero.

### 3.4 Ordenamiento con LIMIT

```sql
SELECT * FROM Orders ORDER BY amount DESC LIMIT 2;
```

**Explicación:** Combina ordenamiento con limitación de resultados. Esta consulta muestra las 2 órdenes con mayor monto.

### 3.5 Ordenamiento por columna calculada

```sql
SELECT first_name, last_name, age, (2024 - age) AS birth_year
FROM Customers ORDER BY birth_year;
```

**Explicación:** Ordena por una columna calculada (año de nacimiento aproximado). Se puede ordenar por expresiones matemáticas o funciones.

## 4. CONSULTAS GROUP BY (AGRUPACIÓN)

### 4.1 Conteo por grupo

```sql
SELECT country, COUNT(*) AS total_customers
FROM Customers GROUP BY country;
```

**Explicación:** GROUP BY agrupa filas que tienen el mismo valor en una columna. COUNT(\*) cuenta el número de filas en cada grupo. Muestra cuántos clientes hay por país.

### 4.2 Suma por grupo

```sql
SELECT customer_id, SUM(amount) AS total_spent
FROM Orders GROUP BY customer_id;
```

**Explicación:** Agrupa las órdenes por cliente y suma el monto total gastado por cada cliente usando SUM().

### 4.3 Promedio por grupo

```sql
SELECT country, AVG(age) AS average_age
FROM Customers GROUP BY country;
```

**Explicación:** Calcula el promedio de edad por país usando AVG(). GROUP BY es necesario cuando usas funciones de agregación con otras columnas.

### 4.4 Múltiples agregaciones

```sql
SELECT country, COUNT(*) AS customers, AVG(age) AS avg_age, MIN(age) AS min_age, MAX(age) AS max_age
FROM Customers GROUP BY country;
```

**Explicación:** Combina múltiples funciones de agregación en una sola consulta: cuenta clientes, calcula promedio, mínimo y máximo de edad por país.

### 4.5 GROUP BY con HAVING

```sql
SELECT country, COUNT(*) AS customer_count
FROM Customers GROUP BY country HAVING COUNT(*) > 1;
```

**Explicación:** HAVING filtra grupos después de la agregación. WHERE filtra filas individuales, HAVING filtra grupos. Esta consulta muestra solo países con más de 1 cliente.

## 5. CONSULTAS JOIN (UNIONES)

### 5.1 INNER JOIN básico

```sql
SELECT c.first_name, c.last_name, o.item, o.amount
FROM Customers c INNER JOIN Orders o ON c.customer_id = o.customer_id;
```

**Explicación:** INNER JOIN combina filas de dos tablas basándose en una condición de unión. Solo muestra registros que tienen coincidencias en ambas tablas. Los alias (c, o) simplifican la escritura.

### 5.2 LEFT JOIN

```sql
SELECT c.first_name, c.last_name, o.item
FROM Customers c LEFT JOIN Orders o ON c.customer_id = o.customer_id;
```

**Explicación:** LEFT JOIN devuelve todas las filas de la tabla izquierda (Customers) y las coincidencias de la derecha (Orders). Si un cliente no tiene órdenes, aparecerá con valores NULL en las columnas de Orders.

### 5.3 JOIN con múltiples tablas

```sql
SELECT c.first_name, o.item, s.status
FROM Customers c
INNER JOIN Orders o ON c.customer_id = o.customer_id
INNER JOIN Shippings s ON o.order_id = s.shipping_id;
```

**Explicación:** Une tres tablas en secuencia. Primero une Customers con Orders, luego el resultado con Shippings. Permite ver información completa del cliente, su orden y el estado de envío.

### 5.4 JOIN con agregación

```sql
SELECT c.first_name, c.last_name, COUNT(o.order_id) AS total_orders
FROM Customers c LEFT JOIN Orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.first_name, c.last_name;
```

**Explicación:** Combina JOIN con GROUP BY para contar cuántas órdenes tiene cada cliente. LEFT JOIN asegura que aparezcan todos los clientes, incluso los que no tienen órdenes (aparecerán con 0).

### 5.5 JOIN con condiciones adicionales

```sql
SELECT c.first_name, o.item, o.amount
FROM Customers c INNER JOIN Orders o ON c.customer_id = o.customer_id
WHERE c.country = 'USA' AND o.amount > 300;
```

**Explicación:** Combina JOIN con condiciones WHERE adicionales. Primero hace la unión entre tablas, luego aplica los filtros. Muestra órdenes de clientes estadounidenses con monto mayor a 300.

---

## Consejos para usar estas consultas:

1. **Comienza con SELECT básico** y ve agregando complejidad gradualmente
2. **Usa alias** para hacer las consultas más legibles
3. **Siempre incluye GROUP BY** cuando uses funciones de agregación con otras columnas
4. **INNER JOIN** para datos que deben existir en ambas tablas
5. **LEFT JOIN** cuando quieres todos los registros de la tabla principal
6. **WHERE filtra filas individuales**, **HAVING filtra grupos**
7. **ORDER BY siempre va al final** de la consulta
8. **Usa LIMIT** para pruebas con grandes conjuntos de datos
