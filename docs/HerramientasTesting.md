# 🛠️ Herramientas para Testing de APIs con JSON

## 📋 Índice
- [Postman - El Estándar](#postman)
- [Bruno - Alternativa Moderna](#bruno)
- [Comparación Postman vs Bruno](#comparacion)
- [Thunder Client - VS Code](#thunder-client)
- [Otras Alternativas](#otras-alternativas)
- [Recomendaciones por Caso de Uso](#recomendaciones)

---

## 📮 Postman - El Estándar de la Industria {#postman}

**Postman** es la herramienta más popular para probar APIs. Es ideal para equipos y proyectos grandes.

### ✅ Ventajas:
- Interface gráfica intuitiva
- Colecciones organizadas de requests
- Variables de entorno
- Tests automatizados con JavaScript
- Documentación automática
- Colaboración en tiempo real
- Monitoreo de APIs
- Mock servers
- Integración con CI/CD

### ❌ Desventajas:
- Consume muchos recursos (basado en Electron)
- Requiere cuenta para sincronización
- Curva de aprendizaje más alta
- Funciones avanzadas son de pago
- Datos almacenados en la nube (privacidad)

### 💡 Ejemplo de uso:
```json
// POST request en Postman
{
  "method": "POST",
  "url": "{{base_url}}/api/usuarios",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer {{token}}"
  },
  "body": {
    "nombre": "Juan Pérez",
    "email": "juan@example.com",
    "telefono": "+56912345678"
  }
}
```

### 🧪 Tests en Postman:
```javascript
// Tests automáticos en Postman
pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});

pm.test("Response has user data", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('id');
    pm.expect(jsonData.email).to.eql('juan@example.com');
});

// Guardar datos para requests posteriores
pm.test("Save user ID", function () {
    const jsonData = pm.response.json();
    pm.environment.set("user_id", jsonData.id);
});
```

---

## ⚡ Bruno - La Alternativa Moderna y Ligera {#bruno}

**Bruno** es una herramienta open-source que almacena todo localmente, sin necesidad de cuentas en la nube.

### ✅ Ventajas:
- **100% local**: No necesita cuenta ni sincronización en la nube
- **Ligero y rápido**: Menor consumo de recursos
- **Git-friendly**: Las colecciones se guardan como archivos de texto
- **Interface limpia**: Más simple que Postman
- **Open source y gratuito**
- **Mejor privacidad**: Tus APIs no salen de tu máquina
- **Sintaxis simple**: Fácil de aprender

### ❌ Desventajas:
- Menos funciones avanzadas que Postman
- Comunidad más pequeña
- Menos integraciones con herramientas externas
- Sin colaboración en tiempo real
- No tiene mock servers nativos

### 💡 Ejemplo de colección Bruno:
```json
meta {
  name: API de Usuarios
  type: http
  seq: 1
}

post {
  url: {{baseUrl}}/api/usuarios
  body: json
  auth: bearer
}

headers {
  Content-Type: application/json
  Accept: application/json
}

auth:bearer {
  token: {{authToken}}
}

body:json {
  {
    "nombre": "Ana García",
    "email": "ana@example.com",
    "rol": "usuario",
    "perfil": {
      "edad": 28,
      "ciudad": "Santiago"
    }
  }
}

tests {
  test("should create user successfully", function() {
    expect(res.status).to.equal(201);
    expect(res.body.email).to.equal("ana@example.com");
  });
}
```

### 📁 Estructura de archivos Bruno:
```
mi-proyecto/
├── api-collection/
│   ├── usuarios/
│   │   ├── crear-usuario.bru
│   │   ├── obtener-usuario.bru
│   │   └── actualizar-usuario.bru
│   ├── productos/
│   │   ├── listar-productos.bru
│   │   └── crear-producto.bru
│   └── bruno.json
```

---

## 🆚 Postman vs Bruno - Comparación Detallada {#comparacion}

| Característica | Postman | Bruno |
|---|---|---|
| **Precio** | Gratis/Premium ($12-21/mes) | 100% Gratis |
| **Almacenamiento** | Nube + Local | Solo Local |
| **Privacidad** | Datos en la nube | Datos 100% locales |
| **Rendimiento** | Pesado (200+ MB RAM) | Ligero (50-80 MB RAM) |
| **Colaboración** | Excelente (tiempo real) | Manual (via Git) |
| **Learning Curve** | Media-Alta | Baja |
| **Git Integration** | Limitada | Nativa (archivos texto) |
| **Mock Servers** | ✅ Incluido | ❌ No disponible |
| **Tests Automatizados** | ✅ Avanzados (JavaScript) | ✅ Básicos |
| **Variables de Entorno** | ✅ Múltiples niveles | ✅ Simples |
| **Documentación Auto** | ✅ Excelente | ❌ Limitada |
| **Monitoreo APIs** | ✅ Incluido | ❌ No disponible |
| **CI/CD Integration** | ✅ Newman CLI | ❌ Limitada |
| **Interfaz** | Completa pero compleja | Simple y limpia |
| **Startup Time** | Lento (5-10 segundos) | Rápido (1-2 segundos) |

### 🎯 ¿Cuál elegir?

**Elige Postman si:**
- Trabajas en equipo y necesitas colaboración
- Requieres funciones avanzadas (mock servers, monitoreo)
- Necesitas documentación automática
- Tu empresa ya usa Postman
- Trabajas con APIs complejas

**Elige Bruno si:**
- Valoras la privacidad de tus datos
- Quieres algo ligero y rápido
- Prefieres herramientas open source
- Trabajas solo o en equipos pequeños
- Te gusta tener control total de tus archivos

---

## ⚡ Thunder Client - Extensión de VS Code {#thunder-client}

**Thunder Client** es perfecto para desarrolladores que no quieren salir de su editor.

### ✅ Ventajas:
- **Integrado en VS Code**: No necesitas cambiar de aplicación
- **Muy ligero**: Extensión nativa, no consume recursos extras
- **Interface simple**: Fácil de usar para principiantes
- **Gratuito**: Todas las funciones básicas incluidas
- **Git integration**: Se puede versionar fácilmente
- **Syntax highlighting**: Para JSON automáticamente

### ❌ Desventajas:
- Funciones limitadas comparado con Postman/Bruno
- Solo disponible en VS Code
- Menos opciones de exportación
- No tiene tests automatizados avanzados

### 💡 Ejemplo de uso:
```json
// Request en Thunder Client
{
  "method": "POST",
  "url": "http://localhost:3000/api/productos",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer {{token}}"
  },
  "body": {
    "nombre": "Laptop Gaming",
    "precio": 1299.99,
    "categoria": "tecnologia",
    "stock": 10
  }
}
```

---

## 🌐 Otras Alternativas Útiles {#otras-alternativas}

### 1. **Insomnia** 🦇
- Interface limpia y moderna
- **Excelente para GraphQL** y REST
- Plugins y temas personalizables
- Versión gratuita muy robusta
- Mejor que Postman para GraphQL

```json
// Ejemplo GraphQL en Insomnia
{
  "query": "query GetUser($id: ID!) { user(id: $id) { name email posts { title } } }",
  "variables": {
    "id": "123"
  }
}
```

### 2. **HTTPie Desktop** 🌐
- Basado en la popular herramienta de línea de comandos
- **Interface muy intuitiva**
- Excelente para APIs REST simples
- Sintaxis simple y clara
- Gratis y open source

### 3. **REST Client (VS Code Extension)** 📝
- Crea requests directamente en archivos `.http`
- **Ideal para documentar APIs** en el código
- Muy ligero y rápido
- Perfecto para testing rápido

```http
### Crear usuario
POST https://api.ejemplo.com/usuarios
Content-Type: application/json
Authorization: Bearer {{token}}

{
  "nombre": "Carlos López",
  "email": "carlos@ejemplo.com",
  "telefono": "+56987654321"
}

### Obtener usuario
GET https://api.ejemplo.com/usuarios/{{user_id}}
Authorization: Bearer {{token}}

### Actualizar usuario
PUT https://api.ejemplo.com/usuarios/{{user_id}}
Content-Type: application/json
Authorization: Bearer {{token}}

{
  "telefono": "+56911111111"
}
```

### 4. **Curl (Línea de comandos)** 💻
- Herramienta básica pero **muy poderosa**
- Disponible en todos los sistemas Unix/Linux/Mac
- Ideal para scripting y automatización
- Curva de aprendizaje empinada pero vale la pena

```bash
# Crear usuario
curl -X POST https://api.ejemplo.com/usuarios \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer tu_token" \
  -d '{
    "nombre": "María González",
    "email": "maria@ejemplo.com",
    "telefono": "+56912345678"
  }'

# Obtener usuario con formato JSON bonito
curl -X GET https://api.ejemplo.com/usuarios/123 \
  -H "Authorization: Bearer tu_token" | jq '.'
```

### 5. **HTTPie CLI** 🚀
- Más amigable que curl
- Sintaxis intuitiva
- Colores automáticos
- JSON por defecto

```bash
# Instalar: pip install httpie

# Crear usuario
http POST api.ejemplo.com/usuarios \
  Authorization:"Bearer tu_token" \
  nombre="Pedro Martínez" \
  email="pedro@ejemplo.com"

# Obtener usuario
http GET api.ejemplo.com/usuarios/123 \
  Authorization:"Bearer tu_token"
```

---

## 🎯 Recomendaciones por Caso de Uso {#recomendaciones}

### 👶 Para Principiantes (Bootcamp):
1. **Thunder Client** ← Si ya usas VS Code
2. **Bruno** ← Standalone, fácil de aprender
3. **HTTPie Desktop** ← Interface super simple

### 👥 Para Equipos Pequeños (2-5 devs):
1. **Bruno + Git** ← Mejor para privacidad y control
2. **Insomnia** ← Balance perfecto features/simplicidad  
3. **Thunder Client** ← Si todos usan VS Code

### 🏢 Para Empresas/Equipos Grandes (5+ devs):
1. **Postman** ← Mejor colaboración y features empresariales
2. **Insomnia** ← Alternativa moderna con buenas features
3. **Bruno + Git workflows** ← Para equipos técnicos

### 🤓 Para Desarrolladores que Aman la Terminal:
1. **HTTPie CLI** ← Más amigable que curl
2. **Curl** ← Máximo control y flexibilidad
3. **REST Client** ← Lo mejor de ambos mundos

### 🔒 Para Proyectos con Alta Seguridad:
1. **Bruno** ← Todo local, nada en la nube
2. **Thunder Client** ← Local en VS Code
3. **Curl/HTTPie** ← Control total

### 💰 Para Presupuesto Cero:
1. **Bruno** ← 100% gratis, todas las features
2. **Thunder Client** ← Gratis con VS Code
3. **HTTPie CLI** ← Gratis y poderoso
4. **Insomnia** ← Versión gratis muy completa

---

## 📚 Herramientas Complementarias

### Para Validación y Formato:
- **JSONLint**: Validador de JSON online
- **Prettier**: Formateador de código (incluye JSON)
- **jq**: Procesador de JSON desde línea de comandos

### Para Bases de Datos:
- **MongoDB Compass**: Visualizador de documentos JSON/BSON
- **pgAdmin**: Para PostgreSQL con columnas JSON

### Para Desarrollo:
- **VS Code**: Extensiones para JSON (validación, formato)
- **Git**: Para versionar colecciones (especialmente útil con Bruno)

---

## 🚀 Próximos Pasos

1. **Instala al menos 2 herramientas** de esta lista
2. **Crea tu primera colección** de requests
3. **Practica con APIs públicas** (JSONPlaceholder, REST Countries)
4. **Aprende a usar variables de entorno**
5. **Implementa tests básicos**

¡Recuerda que la mejor herramienta es la que realmente usas! Empieza con una simple y ve creciendo según tus necesidades.