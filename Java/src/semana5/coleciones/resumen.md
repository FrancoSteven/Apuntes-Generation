# ✅ Conclusión

Este ejercicio muestra claramente:

| Técnica | Elimina duplicados | Ordena | Filtra | Modifica | Más limpio |
| ------- | ------------------ | ------ | ------ | -------- | ---------- |
| Array   | 🟡 Manual          | ✅     | ✅     | ✅       | ❌         |
| List    | 🟡 Manual          | ✅     | ✅     | ✅       | 🟡         |
| Set     | ✅ Automático      | ❌     | ✅     | ✅       | ✅         |
| Map     | ✅ Clave única     | 🟡     | ✅     | ✅       | ❌         |
| Stream  | ✅ Automático      | ✅     | ✅     | ✅       | ✅✅       |

# 🧠 Resumen

| Estructura | Es una...                | Permite duplicados | Tamaño dinámico | Orden garantizado    | Acceso por índice | Útil para...                             |
| ---------- | ------------------------ | ------------------ | --------------- | -------------------- | ----------------- | ---------------------------------------- |
| `Array`    | Estructura básica        | ✅ Sí               | ❌ No            | ✅ Sí                 | ✅ Sí              | Datos fijos y simples                    |
| `List`     | Colección ordenada       | ✅ Sí               | ✅ Sí            | ✅ Sí                 | ✅ Sí              | Manejar listas de datos                  |
| `Set`      | Colección sin duplicados | ❌ No               | ✅ Sí            | ❌ Depende            | ❌ No              | Agrupar datos únicos                     |
| `Map`      | Pares clave-valor        | ❌ En claves        | ✅ Sí            | ❌ Depende            | ❌ No              | Asociar nombres, claves, configuraciones |
| `Stream`   | Flujo de procesamiento   | ✅/❌ depende        | —               | ✅ Si fuente lo tiene | ❌ No              | Filtrar, transformar, recolectar         |
