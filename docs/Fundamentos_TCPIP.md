# 🧠 Conceptos Básicos del Protocolo TCP/IP

Este documento forma parte del módulo introductorio de redes en el bootcamp de desarrollo web. Estos son los fundamentos esenciales del protocolo TCP/IP, necesario para entender cómo viajan los datos por Internet y cómo funcionan los servicios web.

---

## 📚 Tabla de Contenidos

1. **[🌐 ¿Qué es el protocolo TCP/IP y por qué es importante?](#-qué-es-el-protocolo-tcpip-y-por-qué-es-importante)**

   - [Breve historia y propósito](#breve-historia-y-propósito)
   - [Su rol en el funcionamiento de Internet](#su-rol-en-el-funcionamiento-de-internet)

2. **[🏗️ Modelo TCP/IP vs Modelo OSI](#️-modelo-tcpip-vs-modelo-osi)**

   - [Comparación de capas](#comparación-de-capas)
   - [¿Por qué usamos TCP/IP en la web?](#por-qué-usamos-tcpip-en-la-web)

3. **[📦 Las 4 capas del modelo TCP/IP (de forma sencilla)](#-las-4-capas-del-modelo-tcpip-de-forma-sencilla)**

   - [Capa de Aplicación (HTTP, HTTPS, DNS, etc.)](#capa-de-aplicación-http-https-dns-etc)
   - [Capa de Transporte (TCP vs UDP)](#capa-de-transporte-tcp-vs-udp)
   - [Capa de Internet (IP, direcciones IP, routing)](#capa-de-internet-ip-direcciones-ip-routing)
   - [Capa de Acceso a Red (Ethernet, Wi-Fi)](#capa-de-acceso-a-red-ethernet-wi-fi)

4. **[🌍 Direccionamiento IP: IPv4 vs IPv6](#-direccionamiento-ip-ipv4-vs-ipv6)**

   - [Qué es una dirección IP](#qué-es-una-dirección-ip)
   - [Estructura básica de una IP](#estructura-básica-de-una-ip)
   - [Diferencia entre IP pública y privada](#diferencia-entre-ip-pública-y-privada)

5. **[📶 Puertos y Protocolos Comunes para Desarrolladores Web](#-puertos-y-protocolos-comunes-para-desarrolladores-web)**

   - [¿Qué es un puerto?](#qué-es-un-puerto)
   - [Puertos típicos: 80 (HTTP), 443 (HTTPS), 22 (SSH), 3306 (MySQL)](#puertos-típicos-80-http-443-https-22-ssh-3306-mysql)

6. **[🛠️ Protocolos clave en el día a día web](#️-protocolos-clave-en-el-día-a-día-web)**

   - [HTTP/HTTPS](#httphttps)
   - [DNS](#dns)
   - [DHCP](#dhcp)
   - [TCP vs UDP (con ejemplos como streaming vs navegación)](#tcp-vs-udp-con-ejemplos-como-streaming-vs-navegación)

7. **[🧭 Proceso básico de conexión en la web](#-proceso-básico-de-conexión-en-la-web)**

   - [De tu navegador a un servidor web: ¿qué ocurre paso a paso?](#de-tu-navegador-a-un-servidor-web-qué-ocurre-paso-a-paso)
   - [Resolución DNS](#resolución-dns)
   - [Establecimiento de conexión TCP (Handshake)](#establecimiento-de-conexión-tcp-handshake)

8. **[🔐 Seguridad y capa de transporte](#-seguridad-y-capa-de-transporte)**

   - [Introducción rápida a SSL/TLS](#introducción-rápida-a-ssltls)
   - [Qué cambia cuando usamos HTTPS](#qué-cambia-cuando-usamos-https)

9. **[🧪 Herramientas básicas para ver el protocolo en acción](#-herramientas-básicas-para-ver-el-protocolo-en-acción)**

   - [`ping`, `tracert`/`traceroute`](#ping-tracerttraceroute)
   - [`netstat`, `nslookup`, `curl`, `telnet`](#netstat-nslookup-curl-telnet)

10. **[📝 Glosario esencial de términos](#-glosario-esencial-de-términos)**
    - [IP, DNS, Gateway, NAT, Subred, Paquete, etc.](#ip-dns-gateway-nat-subred-paquete-etc)

---

## 🌐 ¿Qué es el protocolo TCP/IP y por qué es importante?

### Breve historia y propósito

**TCP/IP** significa **Transmission Control Protocol/Internet Protocol** (Protocolo de Control de Transmisión/Protocolo de Internet). Es el conjunto de reglas y estándares que permiten que los dispositivos se comuniquen a través de redes, especialmente Internet.

**Historia clave:**

- **1969**: Nace ARPANET, la red precursora de Internet
- **1973**: Vint Cerf y Bob Kahn desarrollan los conceptos básicos de TCP/IP
- **1981**: Se publica el RFC 791 (IPv4) y RFC 793 (TCP)
- **1983**: ARPANET adopta oficialmente TCP/IP (nacimiento de Internet moderno)
- **1989**: Tim Berners-Lee crea la World Wide Web sobre TCP/IP

**Propósito fundamental:**
TCP/IP fue diseñado para resolver problemas críticos de comunicación en redes:

1. **Interoperabilidad**: Diferentes tipos de computadoras y sistemas operativos pueden comunicarse
2. **Escalabilidad**: Desde 2 computadoras hasta millones de dispositivos
3. **Robustez**: Si una ruta falla, los datos encuentran otra ruta
4. **Simplicidad**: Relativamente fácil de implementar y mantener

```
Ejemplo práctico:
Cuando escribes "google.com" en tu navegador, TCP/IP:
├── Traduce "google.com" a una dirección IP (DNS)
├── Divide tu solicitud en pequeños paquetes
├── Envía cada paquete por la mejor ruta disponible
├── Reensambla los paquetes en el servidor de Google
└── Devuelve la respuesta por el mismo proceso
```

### Su rol en el funcionamiento de Internet

TCP/IP es literalmente **el lenguaje universal de Internet**. Sin él, no existiría:

- **Navegación web** (HTTP/HTTPS)
- **Correo electrónico** (SMTP, POP3, IMAP)
- **Transferencia de archivos** (FTP, SFTP)
- **Streaming de video** (YouTube, Netflix)
- **Videollamadas** (Zoom, Teams)
- **Redes sociales** (Facebook, Twitter)
- **Juegos online**
- **Servicios en la nube** (AWS, Google Cloud)

**Analogía del sistema postal:**

```
Internet sin TCP/IP = Cartas sin direcciones, códigos postales o reglas de entrega
Internet con TCP/IP = Sistema postal mundial perfectamente organizado

Tu mensaje: "Hola mundo" 📧
├── Dirección origen: Tu IP (192.168.1.100)
├── Dirección destino: IP del servidor (172.217.14.206)
├── Fragmentado en paquetes numerados
├── Cada paquete viaja independientemente
├── Se reensambla en el destino
└── Confirmación de entrega
```

## 🏗️ Modelo TCP/IP vs Modelo OSI

### Comparación de capas

El **Modelo OSI** (Open Systems Interconnection) es un modelo teórico de 7 capas, mientras que **TCP/IP** es un modelo práctico de 4 capas que realmente se usa en Internet.

```
MODELO OSI (7 capas)          MODELO TCP/IP (4 capas)
┌─────────────────────────┐   ┌─────────────────────────┐
│ 7. APLICACIÓN           │   │                         │
├─────────────────────────┤   │  4. APLICACIÓN          │
│ 6. PRESENTACIÓN         │   │     (HTTP, FTP, SMTP)   │
├─────────────────────────┤   │                         │
│ 5. SESIÓN               │   │                         │
├─────────────────────────┤   ├─────────────────────────┤
│ 4. TRANSPORTE           │   │  3. TRANSPORTE          │
│    (TCP, UDP)           │   │     (TCP, UDP)          │
├─────────────────────────┤   ├─────────────────────────┤
│ 3. RED                  │   │  2. INTERNET            │
│    (IP, ICMP)           │   │     (IP, ICMP, ARP)     │
├─────────────────────────┤   ├─────────────────────────┤
│ 2. ENLACE DE DATOS      │   │                         │
├─────────────────────────┤   │  1. ACCESO A RED        │
│ 1. FÍSICA               │   │     (Ethernet, Wi-Fi)   │
└─────────────────────────┘   └─────────────────────────┘
```

**Principales diferencias:**

| Aspecto            | OSI                             | TCP/IP                 |
| ------------------ | ------------------------------- | ---------------------- |
| **Capas**          | 7 capas                         | 4 capas                |
| **Uso**            | Modelo teórico/educativo        | Modelo práctico/real   |
| **Desarrollo**     | Creado por ISO                  | Desarrollado por DARPA |
| **Implementación** | Raramente implementado completo | Base de Internet       |
| **Complejidad**    | Más detallado                   | Más simple             |

### ¿Por qué usamos TCP/IP en la web?

**Razones técnicas:**

1. **Simplicidad práctica**: 4 capas son más fáciles de implementar que 7
2. **Rendimiento**: Menor overhead (menor carga) de procesamiento
3. **Flexibilidad**: Permite diferentes implementaciones en cada capa
4. **Madurez**: Más de 40 años de desarrollo y refinamiento
5. **Universalidad**: Todos los dispositivos conectados lo entienden

**Ejemplo práctico - Solicitud HTTP:**

```http
GET /index.html HTTP/1.1
Host: www.ejemplo.com
User-Agent: Mozilla/5.0

Capa de Aplicación: HTTP estructura la solicitud
Capa de Transporte: TCP garantiza entrega confiable
Capa de Internet: IP enruta los paquetes
Capa de Acceso a Red: Ethernet/Wi-Fi transmite físicamente
```

## 📦 Las 4 capas del modelo TCP/IP (de forma sencilla)

### Capa de Aplicación (HTTP, HTTPS, DNS, etc.)

**¿Qué hace?**
Es la capa más cercana al usuario. Aquí viven todos los protocolos que usas diariamente sin darte cuenta.

**Protocolos principales:**

#### HTTP (Hypertext Transfer Protocol)

- **Puerto**: 80
- **Función**: Transferir páginas web
- **Ejemplo de uso**: Cada vez que visitas una página web

```http
Solicitud HTTP típica:
GET /api/users/123 HTTP/1.1
Host: api.ejemplo.com
Accept: application/json
User-Agent: Mozilla/5.0
Cookie: sessionId=abc123

Respuesta HTTP:
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 156

{
  "id": 123,
  "name": "Juan Pérez",
  "email": "juan@ejemplo.com"
}
```

#### HTTPS (HTTP Secure)

- **Puerto**: 443
- **Función**: HTTP con cifrado SSL/TLS
- **Ejemplo**: Compras online, banca, login

```
HTTP vs HTTPS:
┌─────────────────────────────────────────────────────────┐
│ HTTP (Sin cifrado)                                       │
│ Cliente ──── "password=123456" ──── Servidor            │
│         (Visible para cualquiera)                       │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ HTTPS (Con cifrado SSL/TLS)                             │
│ Cliente ──── "aX9$kL@mP2#qR7" ──── Servidor            │
│         (Datos cifrados)                                │
└─────────────────────────────────────────────────────────┘
```

#### DNS (Domain Name System)

- **Puerto**: 53
- **Función**: Traducir nombres de dominio a IP
- **Ejemplo**: "google.com" → "142.250.191.46"

```
Proceso DNS:
1. Usuario escribe: "github.com"
2. DNS local busca en caché
3. Si no existe, consulta al servidor DNS
4. DNS responde: "140.82.112.4"
5. Navegador se conecta a 140.82.112.4
```

#### Otros protocolos importantes:

- **FTP** (Puerto 21): Transferencia de archivos
- **SMTP** (Puerto 25): Envío de correos
- **POP3** (Puerto 110): Recepción de correos
- **IMAP** (Puerto 143): Acceso a correos
- **SSH** (Puerto 22): Acceso remoto seguro

### Capa de Transporte (TCP vs UDP)

**¿Qué hace?**
Controla cómo se envían los datos: de forma confiable (TCP) o rápida (UDP).

#### TCP (Transmission Control Protocol)

**Características:**

- **Confiable**: Garantiza que todos los datos lleguen
- **Ordenado**: Los datos llegan en el orden correcto
- **Control de flujo**: Evita saturar al receptor
- **Detección de errores**: Detecta y corrige errores

**Proceso de conexión TCP (Three-way handshake):**

```
Cliente                    Servidor
   │                          │
   │──── SYN (seq=100) ────→  │  "¿Quieres conectar?"
   │                          │
   │ ←── SYN-ACK (seq=200) ───│  "Sí, confirmado"
   │     (ack=101)            │
   │                          │
   │──── ACK (seq=101) ────→  │  "Perfecto, conectados"
   │     (ack=201)            │
   │                          │
   │═══ DATOS SEGUROS ═══════│
```

**Cuándo usar TCP:**

- Navegación web (HTTP/HTTPS)
- Transferencia de archivos
- Correo electrónico
- Cualquier aplicación donde los datos deben llegar completos

#### UDP (User Datagram Protocol)

**Características:**

- **Rápido**: Sin verificaciones, envía y olvida
- **Sin conexión**: No necesita establecer conexión
- **Menor overhead**: Menos datos de control
- **No garantiza entrega**: Los datos pueden perderse

**Proceso UDP:**

```
Cliente                    Servidor
   │                          │
   │──── DATOS ────────────→  │  "Aquí tienes, espero que llegue"
   │──── DATOS ────────────→  │  "Más datos..."
   │──── DATOS ────────────→  │  "¡Rápido y directo!"
   │                          │
```

**Cuándo usar UDP:**

- Streaming de video/audio (YouTube, Netflix)
- Juegos online (donde velocidad > precisión)
- DNS (consultas rápidas)
- Broadcasts (envío masivo)

**Comparación práctica:**

```
TCP = Correo certificado 📦
├── Garantizado
├── Acuse de recibo
├── Más lento
└── Más caro (recursos)

UDP = Carta normal 📮
├── Rápido
├── Sin garantías
├── Más barato
└── Puede perderse
```

### Capa de Internet (IP, direcciones IP, routing)

**¿Qué hace?**
Se encarga de encontrar la mejor ruta para enviar los datos a través de múltiples redes.

#### Protocolo IP (Internet Protocol)

**Funciones principales:**

1. **Direccionamiento**: Cada dispositivo tiene una IP única
2. **Routing**: Encuentra la mejor ruta
3. **Fragmentación**: Divide paquetes grandes si es necesario
4. **Ensamblaje**: Reúne los fragmentos en el destino

**Estructura de un paquete IP:**

```
┌─────────────────────────────────────────────────────────┐
│ CABECERA IP                                             │
├─────────────────────────────────────────────────────────┤
│ Versión │ IHL │ Tipo Serv │ Longitud Total              │
├─────────────────────────────────────────────────────────┤
│ Identificación    │ Flags │ Fragment Offset             │
├─────────────────────────────────────────────────────────┤
│ TTL │ Protocolo │ Checksum │                            │
├─────────────────────────────────────────────────────────┤
│ IP Origen (192.168.1.100)                               │
├─────────────────────────────────────────────────────────┤
│ IP Destino (172.217.14.206)                            │
├─────────────────────────────────────────────────────────┤
│ DATOS (HTTP, TCP, etc.)                                 │
└─────────────────────────────────────────────────────────┘
```

#### Direcciones IP

**IPv4 (32 bits):**

- Formato: 192.168.1.100
- Rango: 0.0.0.0 a 255.255.255.255
- Total: ~4.3 mil millones de direcciones
- **Problema**: Se están agotando

**IPv6 (128 bits):**

- Formato: 2001:0db8:85a3:0000:0000:8a2e:0370:7334
- Total: 340 sextillones de direcciones
- **Solución**: Reemplaza gradualmente IPv4

#### Routing (Enrutamiento)

**¿Cómo llega un paquete a su destino?**

```
Tu computadora (192.168.1.100)
        │
        ▼
Router doméstico (192.168.1.1)
        │
        ▼
ISP Router (10.0.0.1)
        │
        ▼
Internet Backbone
        │
        ▼
Servidor destino (172.217.14.206)
```

**Tabla de enrutamiento simple:**

```
Destino          Gateway          Interfaz
0.0.0.0          192.168.1.1     eth0        (Ruta por defecto)
192.168.1.0      0.0.0.0         eth0        (Red local)
127.0.0.0        127.0.0.1       lo          (Localhost)
```

#### Protocolos auxiliares

**ICMP (Internet Control Message Protocol):**

- Mensajes de error y control
- Usado por `ping` y `traceroute`
- Ejemplo: "Host no alcanzable", "Tiempo agotado"

**ARP (Address Resolution Protocol):**

- Traduce IP a MAC address
- Funciona solo en la red local
- Ejemplo: ¿Quién tiene 192.168.1.1? → MAC: 00:1A:2B:3C:4D:5E

### Capa de Acceso a Red (Ethernet, Wi-Fi)

**¿Qué hace?**
Controla la transmisión física de datos y el acceso al medio de transmisión.

#### Tecnologías principales

**Ethernet:**

- **Velocidades**: 10 Mbps, 100 Mbps, 1 Gbps, 10 Gbps
- **Cables**: Cat5, Cat5e, Cat6, Cat6a
- **Conectores**: RJ45
- **Topología**: Estrella (a través de switch)

```
Estructura del frame Ethernet:
┌─────────────────────────────────────────────────────────┐
│ Preámbulo │ Dest MAC │ Orig MAC │ Tipo │ Datos │ FCS    │
│ 8 bytes   │ 6 bytes  │ 6 bytes  │ 2 B  │ 46-1500│ 4 B   │
└─────────────────────────────────────────────────────────┘
```

**Wi-Fi (IEEE 802.11):**

- **Estándares**: 802.11n, 802.11ac, 802.11ax (Wi-Fi 6)
- **Frecuencias**: 2.4 GHz, 5 GHz, 6 GHz
- **Seguridad**: WPA2, WPA3
- **Topología**: Estrella (a través de Access Point)

#### Direcciones MAC

**¿Qué es una MAC address?**

- Identificador único de cada tarjeta de red
- 48 bits (6 bytes) en formato hexadecimal
- Ejemplo: 00:1A:2B:3C:4D:5E
- **Alcance**: Solo en la red local

```
Diferencia IP vs MAC:
┌─────────────────────────────────────────────────────────┐
│ IP Address = Dirección postal de tu casa                │
│ MAC Address = Número de serie de tu buzón               │
│                                                         │
│ IP: Cambia según la red (192.168.1.100 → 10.0.0.50)   │
│ MAC: Siempre la misma (00:1A:2B:3C:4D:5E)              │
└─────────────────────────────────────────────────────────┘
```

#### Proceso completo de transmisión

**Ejemplo: Navegando a google.com**

```
1. CAPA DE APLICACIÓN:
   └── HTTP: "GET / HTTP/1.1"

2. CAPA DE TRANSPORTE:
   └── TCP: Divide en segmentos, añade puertos (80, 443)

3. CAPA DE INTERNET:
   └── IP: Añade direcciones IP origen/destino

4. CAPA DE ACCESO A RED:
   └── Ethernet: Añade MAC addresses, transmite físicamente
```

**Visualización del encapsulado:**

```
┌─────────────────────────────────────────────────────────┐
│ Ethernet Header                                         │
├─────────────────────────────────────────────────────────┤
│ IP Header                                               │
├─────────────────────────────────────────────────────────┤
│ TCP Header                                              │
├─────────────────────────────────────────────────────────┤
│ HTTP Data: "GET / HTTP/1.1"                            │
└─────────────────────────────────────────────────────────┘
```

## 🌍 Direccionamiento IP: IPv4 vs IPv6

### Qué es una dirección IP

Una **dirección IP** (Internet Protocol) es un identificador único que se asigna a cada dispositivo conectado a una red. Es como la dirección postal de tu casa, pero para dispositivos en Internet.

**Analogía del sistema postal:**

```
Dirección física: Calle Falsa 123, Springfield, USA
Dirección IP: 192.168.1.100

Ambas permiten:
├── Identificar un destino único
├── Enrutar información correctamente
├── Distinguir entre diferentes ubicaciones
└── Establecer comunicación bidireccional
```

**Funciones principales:**

1. **Identificación**: Cada dispositivo tiene una IP única en su red
2. **Localización**: Permite encontrar el dispositivo en la red
3. **Enrutamiento**: Los routers usan las IP para dirigir tráfico
4. **Comunicación**: Establece origen y destino de los datos

### Estructura básica de una IP

#### IPv4 (Internet Protocol version 4)

**Formato**: 4 números decimales separados por puntos (notación decimal punteada)

- Ejemplo: `192.168.1.100`
- Cada número: 0-255 (8 bits = 1 byte)
- Total: 32 bits (4 bytes)

**Representación binaria:**

```
192.168.1.100 en decimal
  ↓
11000000.10101000.00000001.01100100 en binario
  ↓
Cada grupo = 8 bits (1 byte)
Total = 32 bits
```

**Clases de direcciones IPv4:**

```
Clase A: 1.0.0.0    a 126.255.255.255    (16,777,214 hosts)
├── Uso: Redes muy grandes (ISPs, gobiernos)
├── Máscara: 255.0.0.0 (/8)
└── Ejemplo: 10.0.0.0/8

Clase B: 128.0.0.0  a 191.255.255.255    (65,534 hosts)
├── Uso: Redes medianas (universidades, empresas)
├── Máscara: 255.255.0.0 (/16)
└── Ejemplo: 172.16.0.0/16

Clase C: 192.0.0.0  a 223.255.255.255    (254 hosts)
├── Uso: Redes pequeñas (oficinas, hogares)
├── Máscara: 255.255.255.0 (/24)
└── Ejemplo: 192.168.1.0/24
```

**Calculadora de subredes - Ejemplo práctico:**

```
Red: 192.168.1.0/24
├── Dirección de red: 192.168.1.0
├── Máscara de subred: 255.255.255.0
├── Rango de hosts: 192.168.1.1 - 192.168.1.254
├── Broadcast: 192.168.1.255
└── Total hosts: 254
```

#### IPv6 (Internet Protocol version 6)

**Formato**: 8 grupos de 4 dígitos hexadecimales separados por dos puntos

- Ejemplo: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`
- Cada grupo: 0000-FFFF (16 bits)
- Total: 128 bits (16 bytes)

**Simplificación de IPv6:**

```
Dirección completa:
2001:0db8:85a3:0000:0000:8a2e:0370:7334

Simplificación 1 (omitir ceros iniciales):
2001:db8:85a3:0:0:8a2e:370:7334

Simplificación 2 (comprimir ceros consecutivos):
2001:db8:85a3::8a2e:370:7334
```

**Ventajas de IPv6:**

```
IPv4 (32 bits):
├── Direcciones: ~4.3 mil millones
├── Estado: Agotándose
└── Configuración: Manual o DHCP

IPv6 (128 bits):
├── Direcciones: 340 sextillones
├── Estado: Futuro de Internet
├── Configuración: Autoconfiguración
└── Características: IPSec integrado, mejor QoS
```

### Diferencia entre IP pública y privada

#### Direcciones IP Privadas

**Definición**: Direcciones que solo funcionan dentro de redes locales (LAN). No son enrutables en Internet.

**Rangos reservados (RFC 1918):**

```
Clase A: 10.0.0.0      - 10.255.255.255     (10.0.0.0/8)
├── Hosts: 16,777,214
└── Uso: Redes corporativas grandes

Clase B: 172.16.0.0    - 172.31.255.255     (172.16.0.0/12)
├── Hosts: 1,048,574
└── Uso: Redes medianas

Clase C: 192.168.0.0   - 192.168.255.255    (192.168.0.0/16)
├── Hosts: 65,534
└── Uso: Redes domésticas y pequeñas oficinas
```

**Ejemplo de red doméstica:**

```
Router (Gateway): 192.168.1.1
├── Laptop: 192.168.1.100
├── Smartphone: 192.168.1.101
├── Smart TV: 192.168.1.102
└── Impresora: 192.168.1.103
```

#### Direcciones IP Públicas

**Definición**: Direcciones únicas en Internet, asignadas por autoridades regionales (RIR).

**Características:**

- Únicas globalmente
- Enrutables en Internet
- Asignadas por ISPs
- Escasas y valiosas

**Ejemplo de configuración típica:**

```
Internet
    │
    ▼
ISP (IP pública: 203.0.113.42)
    │
    ▼
Router doméstico (WAN: 203.0.113.42, LAN: 192.168.1.1)
    │
    ├── Dispositivo 1 (192.168.1.100)
    ├── Dispositivo 2 (192.168.1.101)
    └── Dispositivo 3 (192.168.1.102)
```

#### NAT (Network Address Translation)

**¿Qué es NAT?**
Permite que múltiples dispositivos con IPs privadas compartan una IP pública.

**Proceso NAT:**

```
1. SALIDA (Dispositivo interno → Internet):
   Origen: 192.168.1.100:35000 → 203.0.113.42:35000
   Destino: 172.217.14.206:80 (google.com)

2. TABLA NAT:
   Interno: 192.168.1.100:35000 ←→ Externo: 203.0.113.42:35000

3. ENTRADA (Internet → Dispositivo interno):
   Origen: 172.217.14.206:80
   Destino: 203.0.113.42:35000 → 192.168.1.100:35000
```

**Tipos de NAT:**

```
Static NAT (1:1):
├── Una IP privada = Una IP pública
└── Uso: Servidores que necesitan IP fija

Dynamic NAT (N:M):
├── Pool de IPs públicas para múltiples privadas
└── Uso: Oficinas con múltiples IPs públicas

PAT/NAPT (N:1):
├── Múltiples IPs privadas = Una IP pública
└── Uso: Redes domésticas (más común)
```

## 📶 Puertos y Protocolos Comunes para Desarrolladores Web

### ¿Qué es un puerto?

Un **puerto** es un número que identifica un proceso o servicio específico en un dispositivo. Es como el número de apartamento en un edificio.

**Analogía del edificio:**

```
IP Address = Dirección del edificio (192.168.1.100)
Puerto = Número del apartamento
├── Apartamento 80 = Servidor Web (HTTP)
├── Apartamento 443 = Servidor Web Seguro (HTTPS)
├── Apartamento 22 = Servicio SSH
└── Apartamento 3306 = Base de datos MySQL
```

**Características técnicas:**

- Rango: 0-65535 (16 bits)
- Combinación única: IP + Puerto = Socket
- Ejemplo: 192.168.1.100:80

**Tipos de puertos:**

```
Puertos del sistema (0-1023):
├── Reservados para servicios estándar
├── Requieren privilegios administrativos
└── Ejemplos: 80 (HTTP), 443 (HTTPS), 22 (SSH)

Puertos registrados (1024-49151):
├── Asignados por IANA para aplicaciones
├── Uso común pero no exclusivo
└── Ejemplos: 3306 (MySQL), 5432 (PostgreSQL)

Puertos dinámicos/privados (49152-65535):
├── Uso libre para aplicaciones
├── Puertos temporales (ephemeral)
└── Conexiones client-side
```

### Puertos típicos: 80 (HTTP), 443 (HTTPS), 22 (SSH), 3306 (MySQL)

#### Puerto 80 - HTTP (Hypertext Transfer Protocol)

**Uso**: Navegación web estándar (sin cifrado)
**Ejemplo de conexión:**

```bash
# Conexión telnet manual a puerto 80
telnet www.ejemplo.com 80

# Solicitud HTTP manual
GET / HTTP/1.1
Host: www.ejemplo.com
User-Agent: Mi-Navegador/1.0
Connection: close

# Respuesta del servidor
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1234
Server: Apache/2.4.41

<!DOCTYPE html>
<html>...
```

#### Puerto 443 - HTTPS (HTTP Secure)

**Uso**: Navegación web segura (con cifrado SSL/TLS)
**Proceso de conexión:**

```
1. TCP Handshake (puerto 443)
2. TLS Handshake:
   ├── Client Hello (cifrados soportados)
   ├── Server Hello (cifrado elegido)
   ├── Certificate (certificado SSL)
   ├── Key Exchange (intercambio de claves)
   └── Finished (conexión segura establecida)
3. Datos HTTP cifrados
```

**Verificación del certificado:**

```bash
# Ver certificado SSL
openssl s_client -connect google.com:443 -servername google.com

# Información del certificado
Subject: CN=*.google.com
Issuer: CN=GTS CA 1C3
Valid from: Oct 10 08:15:00 2023 GMT
Valid until: Jan  2 08:15:00 2024 GMT
```

#### Puerto 22 - SSH (Secure Shell)

**Uso**: Acceso remoto seguro a servidores
**Conexión típica:**

```bash
# Conexión SSH básica
ssh usuario@servidor.com

# Especificar puerto personalizado
ssh -p 2222 usuario@servidor.com

# Conexión con clave privada
ssh -i ~/.ssh/mi_clave_privada usuario@servidor.com

# Túnel SSH (port forwarding)
ssh -L 8080:localhost:80 usuario@servidor.com
```

**Autenticación SSH:**

```
Métodos de autenticación:
├── Password: Contraseña tradicional
├── Public Key: Par de claves RSA/ED25519
├── Certificate: Certificados SSH
└── Multi-factor: Combinación de métodos
```

#### Puerto 3306 - MySQL Database

**Uso**: Conexión a bases de datos MySQL
**Cadena de conexión:**

```javascript
// Node.js - Conexión a MySQL
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "mi_usuario",
  password: "mi_password",
  database: "mi_base_datos",
});
```

**Configuración de seguridad:**

```sql
-- Crear usuario con permisos limitados
CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'password_seguro';
GRANT SELECT, INSERT, UPDATE ON mi_app.* TO 'app_user'@'localhost';
FLUSH PRIVILEGES;
```

#### Otros puertos importantes para desarrolladores:

```
Bases de datos:
├── PostgreSQL: 5432
├── MongoDB: 27017
├── Redis: 6379
└── Elasticsearch: 9200

Servidores web:
├── Apache: 80, 443
├── Nginx: 80, 443
├── Node.js: 3000, 8000
└── Django: 8000

Desarrollo:
├── React dev server: 3000
├── Vue.js dev server: 8080
├── Angular dev server: 4200
├── Webpack dev server: 8080
└── Live reload: 35729
```

## 🛠️ Protocolos clave en el día a día web

### HTTP/HTTPS

#### HTTP (Hypertext Transfer Protocol)

**Características:**

- Protocolo sin estado (stateless)
- Basado en texto plano
- Modelo request-response
- Métodos estándar (GET, POST, PUT, DELETE, etc.)

**Estructura de mensaje HTTP:**

```http
Solicitud HTTP:
┌─────────────────────────────────────────────────────────┐
│ Línea de solicitud                                      │
│ GET /api/users/123 HTTP/1.1                            │
├─────────────────────────────────────────────────────────┤
│ Cabeceras (Headers)                                     │
│ Host: api.ejemplo.com                                   │
│ User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)  │
│ Accept: application/json                                │
│ Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJS...   │
│ Content-Type: application/json                          │
├─────────────────────────────────────────────────────────┤
│ Cuerpo (Body) - Opcional                                │
│ {                                                       │
│   "name": "Juan Pérez",                                │
│   "email": "juan@ejemplo.com"                          │
│ }                                                       │
└─────────────────────────────────────────────────────────┘
```

**Métodos HTTP principales:**

```
GET: Obtener recursos
├── Idempotente: Sí
├── Cacheable: Sí
├── Cuerpo: No
└── Ejemplo: GET /api/users/123

POST: Crear recursos
├── Idempotente: No
├── Cacheable: No
├── Cuerpo: Sí
└── Ejemplo: POST /api/users

PUT: Actualizar recurso completo
├── Idempotente: Sí
├── Cacheable: No
├── Cuerpo: Sí
└── Ejemplo: PUT /api/users/123

PATCH: Actualizar recurso parcialmente
├── Idempotente: No
├── Cacheable: No
├── Cuerpo: Sí
└── Ejemplo: PATCH /api/users/123

DELETE: Eliminar recurso
├── Idempotente: Sí
├── Cacheable: No
├── Cuerpo: No
└── Ejemplo: DELETE /api/users/123
```

**Códigos de estado HTTP:**

```
1xx - Informativos:
├── 100 Continue
└── 101 Switching Protocols

2xx - Éxito:
├── 200 OK
├── 201 Created
├── 202 Accepted
├── 204 No Content
└── 206 Partial Content

3xx - Redirecciones:
├── 301 Moved Permanently
├── 302 Found
├── 304 Not Modified
└── 307 Temporary Redirect

4xx - Errores del cliente:
├── 400 Bad Request
├── 401 Unauthorized
├── 403 Forbidden
├── 404 Not Found
├── 405 Method Not Allowed
└── 429 Too Many Requests

5xx - Errores del servidor:
├── 500 Internal Server Error
├── 502 Bad Gateway
├── 503 Service Unavailable
└── 504 Gateway Timeout
```

#### HTTPS (HTTP Secure)

**Diferencias clave con HTTP:**

```
HTTP (Puerto 80):
├── Datos en texto plano
├── Vulnerable a interceptación
├── Sin verificación de identidad
└── Más rápido (sin cifrado)

HTTPS (Puerto 443):
├── Datos cifrados con SSL/TLS
├── Integridad de datos garantizada
├── Autenticación del servidor
└── Ligeramente más lento (cifrado)
```

**Proceso de handshake SSL/TLS:**

```
1. Cliente → Servidor: Client Hello
   ├── Versiones TLS soportadas
   ├── Cipher suites disponibles
   └── Número aleatorio

2. Servidor → Cliente: Server Hello
   ├── Versión TLS elegida
   ├── Cipher suite seleccionado
   ├── Certificado SSL
   └── Número aleatorio

3. Cliente verifica certificado:
   ├── Válido y no expirado
   ├── Emitido por CA confiable
   └── Coincide con el dominio

4. Intercambio de claves:
   ├── Cliente genera pre-master secret
   ├── Cifra con clave pública del servidor
   └── Ambos derivan session keys

5. Finished: Conexión segura establecida
```

### DNS (Domain Name System)

**¿Qué es DNS?**
El DNS es como la guía telefónica de Internet. Traduce nombres de dominio legibles por humanos a direcciones IP que entienden las computadoras.

**Jerarquía DNS:**

```
. (Root)
├── .com (Top Level Domain)
│   ├── google.com (Second Level Domain)
│   │   ├── www.google.com (Subdomain)
│   │   ├── mail.google.com
│   │   └── drive.google.com
│   └── facebook.com
├── .org
├── .net
└── .edu
```

**Proceso de resolución DNS:**

```
1. Usuario escribe: "www.ejemplo.com"
2. Caché local: ¿Tengo la IP? Si no...
3. Servidor DNS recursivo: Busca en caché
4. Si no existe, consulta Root servers
5. Root: "Pregunta a los servidores .com"
6. TLD .com: "Pregunta a ns1.ejemplo.com"
7. Authoritative: "www.ejemplo.com = 203.0.113.42"
8. Respuesta llega al cliente
9. Conexión a 203.0.113.42
```

**Tipos de registros DNS:**

```
A Record: Nombre → IPv4
├── ejemplo.com → 203.0.113.42
└── Uso: Sitios web, servicios

AAAA Record: Nombre → IPv6
├── ejemplo.com → 2001:db8::1
└── Uso: Sitios web IPv6

CNAME: Alias → Nombre canónico
├── www.ejemplo.com → ejemplo.com
└── Uso: Subdominios, CDN

MX Record: Correo electrónico
├── ejemplo.com → mail.ejemplo.com (prioridad 10)
└── Uso: Enrutamiento de emails

TXT Record: Texto libre
├── ejemplo.com → "v=spf1 include:_spf.google.com ~all"
└── Uso: SPF, DKIM, verificación de dominio

NS Record: Servidores de nombres
├── ejemplo.com → ns1.ejemplo.com
└── Uso: Delegación de autoridad
```

**Herramientas DNS:**

```bash
# Consulta básica
nslookup google.com

# Consulta específica
dig google.com A
dig google.com MX
dig google.com TXT

# Consulta inversa (IP → nombre)
dig -x 8.8.8.8

# Trace completo
dig +trace google.com
```

### DHCP (Dynamic Host Configuration Protocol)

**¿Qué es DHCP?**
Protocolo que asigna automáticamente configuración de red a dispositivos (IP, gateway, DNS, etc.).

**Proceso DHCP (DORA):**

```
1. DISCOVER: Cliente busca servidores DHCP
   Cliente: "¿Hay algún servidor DHCP aquí?" (Broadcast)

2. OFFER: Servidor ofrece configuración
   Servidor: "Te ofrezco 192.168.1.100 por 24 horas"

3. REQUEST: Cliente solicita configuración específica
   Cliente: "Acepto la oferta del servidor X"

4. ACKNOWLEDGE: Servidor confirma asignación
   Servidor: "Confirmado, aquí está tu configuración completa"
```

**Información típica proporcionada por DHCP:**

```
Configuración DHCP:
├── IP Address: 192.168.1.100
├── Subnet Mask: 255.255.255.0
├── Gateway: 192.168.1.1
├── DNS Servers: 8.8.8.8, 8.8.4.4
├── Domain Name: local.domain
├── Lease Time: 24 horas
└── NTP Server: time.google.com
```

### TCP vs UDP (con ejemplos como streaming vs navegación)

#### Comparación detallada

**TCP (Transmission Control Protocol):**

```
Características:
├── Orientado a conexión
├── Confiable (guaranteed delivery)
├── Ordenado (sequenced)
├── Control de flujo
├── Detección y corrección de errores
├── Mayor overhead
└── Más lento pero seguro
```

**UDP (User Datagram Protocol):**

```
Características:
├── Sin conexión
├── No confiable (best effort)
├── Sin orden garantizado
├── Sin control de flujo
├── Sin corrección de errores
├── Menor overhead
└── Más rápido pero inseguro
```

#### Casos de uso prácticos

**TCP - Navegación web:**

```
Ejemplo: Carga de página web
1. Establecer conexión TCP
2. Enviar solicitud HTTP
3. Recibir respuesta completa
4. Verificar integridad
5. Cerrar conexión

¿Por qué TCP?
├── Necesitamos todos los datos
├── El orden importa (HTML, CSS, JS)
├── Errores causan páginas rotas
└── Latencia aceptable
```

**UDP - Streaming de video:**

```
Ejemplo: YouTube, Netflix
1. Establecer stream UDP
2. Enviar paquetes continuamente
3. Si se pierde un paquete, continuar
4. Buffer maneja pequeñas pérdidas

¿Por qué UDP?
├── Velocidad > Perfección
├── Pérdidas ocasionales = imperceptibles
├── Reenvío causaría lag
└── Latencia crítica
```

**Ejemplos de aplicaciones:**

```
TCP Applications:
├── Web browsing (HTTP/HTTPS)
├── Email (SMTP, POP3, IMAP)
├── File transfer (FTP, SFTP)
├── Remote access (SSH, Telnet)
├── Database connections
└── API REST calls

UDP Applications:
├── Video streaming (YouTube, Netflix)
├── Online gaming (FPS, MMO)
├── DNS queries
├── DHCP
├── Network monitoring (SNMP)
├── Real-time communications (VoIP)
├── IoT sensors
└── Live broadcasts
```

**Ejemplo práctico - Juego online:**

```javascript
// TCP para datos críticos (login, compras)
const tcpSocket = new WebSocket("wss://game-server.com/secure");
tcpSocket.send(
  JSON.stringify({
    action: "purchase_item",
    itemId: 12345,
    playerId: "user123",
  })
);

// UDP para movimiento (usando WebRTC Data Channel)
const udpChannel = peerConnection.createDataChannel("game-movement");
udpChannel.send(
  JSON.stringify({
    action: "move",
    x: 100,
    y: 200,
    timestamp: Date.now(),
  })
);
```

## 🧭 Proceso básico de conexión en la web

### De tu navegador a un servidor web: ¿qué ocurre paso a paso?

Cuando escribes "https://www.ejemplo.com" en tu navegador, se ejecuta una secuencia compleja de procesos que ocurren en segundos. Aquí está el proceso completo:

#### Paso 1: Análisis de la URL

```
URL: https://www.ejemplo.com/productos/laptop?color=negro#especificaciones

Componentes:
├── Protocolo: https (puerto 443)
├── Subdominio: www
├── Dominio: ejemplo.com
├── Ruta: /productos/laptop
├── Parámetros: ?color=negro
└── Fragmento: #especificaciones
```

#### Paso 2: Cache DNS local

```
Verificación en orden:
1. Cache del navegador
   └── "¿Recuerdo la IP de www.ejemplo.com?"

2. Cache del sistema operativo
   └── "¿Está en el cache DNS del OS?"

3. Archivo hosts local
   └── "¿Hay entrada manual en /etc/hosts?"
```

#### Paso 3: Resolución DNS (si no está en cache)

```
Consulta DNS recursiva:
Cliente (192.168.1.100)
    │
    ▼
Router local (192.168.1.1)
    │
    ▼
DNS del ISP (8.8.8.8)
    │
    ▼
Root servers (.)
    │ "Pregunta a los servidores .com"
    ▼
TLD servers (.com)
    │ "Pregunta a ns1.ejemplo.com"
    ▼
Authoritative servers (ns1.ejemplo.com)
    │ "www.ejemplo.com = 203.0.113.42"
    ▼
Respuesta: 203.0.113.42
```

#### Paso 4: Establecimiento de conexión TCP

```
Three-way handshake:
Cliente                    Servidor (203.0.113.42:443)
   │                          │
   │──── SYN ────────────────→ │  Seq=1000
   │                          │
   │ ←── SYN-ACK ─────────────│  Seq=2000, Ack=1001
   │                          │
   │──── ACK ────────────────→ │  Seq=1001, Ack=2001
   │                          │
   │ ═══ CONECTADO ═══════════ │
```

#### Paso 5: Handshake SSL/TLS (para HTTPS)

```
1. Client Hello:
   ├── Versiones TLS soportadas
   ├── Cipher suites disponibles
   ├── Extensiones (SNI, ALPN)
   └── Client random

2. Server Hello:
   ├── Versión TLS seleccionada
   ├── Cipher suite elegido
   ├── Certificado SSL
   ├── Server random
   └── Session ID

3. Verificación del certificado:
   ├── Fecha de validez
   ├── Autoridad certificadora
   ├── Coincidencia de dominio
   └── Cadena de confianza

4. Key Exchange:
   ├── Cliente genera pre-master secret
   ├── Cifra con clave pública del servidor
   ├── Ambos derivan session keys
   └── Finished messages cifrados
```

#### Paso 6: Solicitud HTTP

```http
GET /productos/laptop?color=negro HTTP/1.1
Host: www.ejemplo.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Upgrade-Insecure-Requests: 1
```

#### Paso 7: Procesamiento en el servidor

```
Servidor web (Nginx/Apache):
├── Recibe solicitud HTTP
├── Verifica permisos y autenticación
├── Rutea a aplicación backend
└── Procesa lógica de negocio

Aplicación backend:
├── Consulta base de datos
├── Procesa lógica de negocio
├── Genera respuesta HTML/JSON
└── Envía de vuelta al servidor web
```

#### Paso 8: Respuesta del servidor

```http
HTTP/1.1 200 OK
Date: Sat, 05 Jul 2025 14:30:00 GMT
Server: nginx/1.18.0
Content-Type: text/html; charset=UTF-8
Content-Length: 15420
Last-Modified: Fri, 04 Jul 2025 10:00:00 GMT
ETag: "3c3c-5e0a7b8c9d0e1f"
Accept-Ranges: bytes
Connection: keep-alive

<!DOCTYPE html>
<html lang="es">
<head>
    <title>Laptops - Ejemplo.com</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <h1>Laptops disponibles</h1>
    <!-- Contenido HTML -->
</body>
</html>
```

#### Paso 9: Renderizado en el navegador

```
Parsing y renderizado:
1. Parse HTML → DOM tree
2. Parse CSS → CSSOM tree
3. Combine DOM + CSSOM → Render tree
4. Layout (reflow) → Posiciones y tamaños
5. Paint → Pixels en pantalla
6. Composite → Capas finales

Recursos adicionales:
├── CSS: nuevas conexiones TCP/TLS
├── JavaScript: descarga y ejecución
├── Imágenes: descarga paralela
└── Fuentes: carga de tipografías
```

### Resolución DNS

#### Proceso detallado de resolución DNS

**Tipos de consultas DNS:**

```
Consulta recursiva:
├── Cliente → Servidor DNS: "Dame la IP de www.ejemplo.com"
├── Servidor DNS hace todo el trabajo
└── Servidor DNS → Cliente: "Aquí está: 203.0.113.42"

Consulta iterativa:
├── Cliente → Root: "¿Dónde está .com?"
├── Root → Cliente: "Pregunta a a.gtld-servers.net"
├── Cliente → TLD: "¿Dónde está ejemplo.com?"
├── TLD → Cliente: "Pregunta a ns1.ejemplo.com"
├── Cliente → Authoritative: "¿Dónde está www.ejemplo.com?"
└── Authoritative → Cliente: "203.0.113.42"
```

**Cache DNS en diferentes niveles:**

```
Cache hierarchy:
Browser cache (TTL: 60 segundos)
    │
    ▼
OS cache (TTL: variable)
    │
    ▼
Router cache (TTL: 300 segundos)
    │
    ▼
ISP cache (TTL: 3600 segundos)
    │
    ▼
Root/TLD cache (TTL: 86400 segundos)
```

**Ejemplo práctico con dig:**

```bash
# Consulta básica
dig www.ejemplo.com

# Respuesta completa
;; QUESTION SECTION:
;www.ejemplo.com.               IN      A

;; ANSWER SECTION:
www.ejemplo.com.        300     IN      A       203.0.113.42

;; AUTHORITY SECTION:
ejemplo.com.            86400   IN      NS      ns1.ejemplo.com.
ejemplo.com.            86400   IN      NS      ns2.ejemplo.com.

;; ADDITIONAL SECTION:
ns1.ejemplo.com.        86400   IN      A       198.51.100.1
ns2.ejemplo.com.        86400   IN      A       198.51.100.2
```

### Establecimiento de conexión TCP (Handshake)

#### Three-way handshake detallado

**Campos importantes del header TCP:**

```
TCP Header:
├── Source Port: 45678 (puerto cliente)
├── Destination Port: 443 (puerto servidor)
├── Sequence Number: Número de secuencia
├── Acknowledgment Number: Confirmación
├── Flags: SYN, ACK, FIN, RST, PSH, URG
├── Window Size: Control de flujo
└── Checksum: Verificación de errores
```

**Proceso paso a paso:**

```
Estado inicial:
Cliente: CLOSED
Servidor: LISTENING

Paso 1 - SYN:
Cliente → Servidor: SYN, Seq=1000
Cliente: SYN-SENT
Servidor: SYN-RECEIVED

Paso 2 - SYN-ACK:
Servidor → Cliente: SYN-ACK, Seq=2000, Ack=1001
Cliente: ESTABLISHED
Servidor: SYN-RECEIVED

Paso 3 - ACK:
Cliente → Servidor: ACK, Seq=1001, Ack=2001
Cliente: ESTABLISHED
Servidor: ESTABLISHED

Resultado: Conexión establecida
```

**Cierre de conexión (Four-way handshake):**

```
Cliente inicia cierre:
Cliente → Servidor: FIN, Seq=5000
Servidor → Cliente: ACK, Ack=5001
Servidor → Cliente: FIN, Seq=3000
Cliente → Servidor: ACK, Ack=3001

Estados finales:
Cliente: CLOSED
Servidor: CLOSED
```

## 🔐 Seguridad y capa de transporte

### Introducción rápida a SSL/TLS

**¿Qué es SSL/TLS?**

- **SSL** (Secure Sockets Layer): Protocolo original (obsoleto)
- **TLS** (Transport Layer Security): Sucesor moderno de SSL
- **Función**: Proporciona cifrado, autenticación e integridad

**Versiones TLS:**

```
TLS 1.0 (1999): Obsoleto, vulnerable
TLS 1.1 (2006): Obsoleto, vulnerable
TLS 1.2 (2008): Ampliamente usado, seguro
TLS 1.3 (2018): Último estándar, más seguro y rápido
```

#### Proceso de handshake TLS 1.3 (simplificado)

**Handshake TLS 1.3:**

```
Cliente                           Servidor
   │                                 │
   │──── Client Hello ─────────────→ │
   │     ├── TLS 1.3                 │
   │     ├── Cipher suites           │
   │     ├── Key shares              │
   │     └── Extensions              │
   │                                 │
   │ ←── Server Hello ──────────────│
   │     ├── TLS 1.3                 │
   │     ├── Cipher suite elegido    │
   │     ├── Key share               │
   │     ├── Certificate             │
   │     └── Certificate Verify      │
   │                                 │
   │ ═══ CONEXIÓN CIFRADA ═══════════│
```

**Cipher suites modernos:**

```
TLS_AES_256_GCM_SHA384:
├── Key Exchange: ECDHE (Elliptic Curve Diffie-Hellman Ephemeral)
├── Authentication: RSA/ECDSA
├── Encryption: AES-256-GCM
└── Hash: SHA-384

TLS_CHACHA20_POLY1305_SHA256:
├── Key Exchange: ECDHE
├── Authentication: RSA/ECDSA
├── Encryption: ChaCha20-Poly1305
└── Hash: SHA-256
```

#### Certificados SSL/TLS

**Tipos de certificados:**

```
Domain Validation (DV):
├── Validación: Solo dominio
├── Tiempo: Minutos
├── Precio: Gratuito/Bajo
└── Uso: Blogs, sitios personales

Organization Validation (OV):
├── Validación: Dominio + organización
├── Tiempo: Días
├── Precio: Medio
└── Uso: Empresas, e-commerce

Extended Validation (EV):
├── Validación: Completa verificación legal
├── Tiempo: Semanas
├── Precio: Alto
└── Uso: Bancos, sitios críticos
```

**Cadena de certificados:**

```
Root CA (Certificate Authority)
├── Intermediate CA 1
│   ├── Intermediate CA 2
│   │   ├── End-entity Certificate (tu sitio)
│   │   └── Otros certificados
│   └── Otros intermedios
└── Otros intermedios
```

### Qué cambia cuando usamos HTTPS

#### HTTP vs HTTPS: Diferencias técnicas

**HTTP (Inseguro):**

```
Flujo de datos:
Navegador ──(texto plano)── Servidor

Riesgos:
├── Sniffing: Interceptación de datos
├── Man-in-the-middle: Modificación de datos
├── Replay attacks: Reutilización de solicitudes
└── Sin autenticación de servidor
```

**HTTPS (Seguro):**

```
Flujo de datos:
Navegador ──(cifrado TLS)── Servidor

Protecciones:
├── Confidencialidad: Datos cifrados
├── Integridad: Detección de modificaciones
├── Autenticación: Verificación de identidad
└── Forward secrecy: Claves temporales
```

#### Impacto en el rendimiento

**Overhead de HTTPS:**

```
Latencia adicional:
├── DNS lookup: +0-50ms
├── TCP handshake: +RTT
├── TLS handshake: +1-2 RTT
└── Procesamiento: +1-5ms

Optimizaciones:
├── HTTP/2: Multiplexing, server push
├── TLS 1.3: Handshake más rápido
├── HSTS: Evita redirects
├── Certificate pinning: Reduce verificaciones
└── Session resumption: Reutiliza conexiones
```

**Ejemplo de headers de seguridad:**

```http
HTTP/1.1 200 OK
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

## 🧪 Herramientas básicas para ver el protocolo en acción

### `ping`, `tracert`/`traceroute`

#### ping - Verificar conectividad

**Función**: Envía paquetes ICMP para verificar si un host está accesible.

**Uso básico:**

```bash
# Ping básico
ping google.com

# Resultado típico
PING google.com (142.250.191.46) 56(84) bytes of data.
64 bytes from lga25s62-in-f14.1e100.net (142.250.191.46): icmp_seq=1 ttl=118 time=12.4 ms
64 bytes from lga25s62-in-f14.1e100.net (142.250.191.46): icmp_seq=2 ttl=118 time=11.8 ms
64 bytes from lga25s62-in-f14.1e100.net (142.250.191.46): icmp_seq=3 ttl=118 time=12.1 ms

--- google.com ping statistics ---
3 packets transmitted, 3 received, 0% packet loss
round-trip min/avg/max/stddev = 11.8/12.1/12.4/0.247 ms
```

**Parámetros útiles:**

```bash
# Número específico de pings
ping -c 4 google.com

# Intervalo personalizado
ping -i 0.5 google.com

# Tamaño de paquete
ping -s 1000 google.com

# Ping a IPv6
ping6 ipv6.google.com

# Ping continuo (Windows)
ping -t google.com
```

**Interpretación de resultados:**

```
Información del ping:
├── TTL (Time To Live): Saltos restantes
├── Time: Latencia en milisegundos
├── Packet loss: Pérdida de paquetes
└── Jitter: Variación en latencia

Diagnóstico:
├── TTL bajo: Muchos saltos
├── Time alto: Latencia alta
├── Packet loss: Problemas de red
└── Timeout: Host no alcanzable
```

#### traceroute/tracert - Rastrear ruta

**Función**: Muestra la ruta que toman los paquetes hasta el destino.

**Uso básico:**

```bash
# Linux/macOS
traceroute google.com

# Windows
tracert google.com

# Resultado típico
traceroute to google.com (142.250.191.46), 64 hops max, 52 byte packets
 1  192.168.1.1 (192.168.1.1)  1.203 ms  0.925 ms  0.897 ms
 2  10.0.0.1 (10.0.0.1)  12.456 ms  11.234 ms  10.987 ms
 3  isp-gateway.net (203.0.113.1)  15.234 ms  14.567 ms  15.123 ms
 4  core-router.isp.net (203.0.113.254)  18.456 ms  17.789 ms  18.123 ms
 5  peer-exchange.net (198.51.100.1)  25.456 ms  24.789 ms  25.123 ms
 6  google-peer.net (172.217.14.1)  28.456 ms  27.789 ms  28.123 ms
 7  lga25s62-in-f14.1e100.net (142.250.191.46)  30.123 ms  29.456 ms  30.789 ms
```

**Parámetros avanzados:**

```bash
# Usar UDP en lugar de ICMP
traceroute -U google.com

# Especificar puerto
traceroute -p 80 google.com

# Máximo número de saltos
traceroute -m 15 google.com

# Usar IPv6
traceroute6 ipv6.google.com
```

### `netstat`, `nslookup`, `curl`, `telnet`

#### netstat - Estadísticas de red

**Función**: Muestra conexiones de red activas, tablas de enrutamiento, estadísticas de interfaces.

**Uso básico:**

```bash
# Todas las conexiones
netstat -a

# Solo conexiones TCP
netstat -t

# Solo conexiones UDP
netstat -u

# Mostrar procesos (Linux)
netstat -p

# Mostrar direcciones numéricas
netstat -n

# Combinado común
netstat -tulpn
```

**Ejemplo de salida:**

```
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address    Foreign Address    State      PID/Program
tcp        0      0 0.0.0.0:22      0.0.0.0:*          LISTEN     1234/sshd
tcp        0      0 127.0.0.1:3306  0.0.0.0:*          LISTEN     5678/mysqld
tcp        0      0 0.0.0.0:80      0.0.0.0:*          LISTEN     9012/apache2
tcp        0      0 0.0.0.0:443     0.0.0.0:*          LISTEN     9012/apache2
```

**Tabla de enrutamiento:**

```bash
# Mostrar tabla de enrutamiento
netstat -r

# Resultado
Kernel IP routing table
Destination     Gateway         Genmask         Flags   MSS Window  irtt Iface
0.0.0.0         192.168.1.1     0.0.0.0         UG        0 0          0 eth0
192.168.1.0     0.0.0.0         255.255.255.0   U         0 0          0 eth0
```

#### nslookup - Consultas DNS

**Función**: Herramienta interactiva para consultas DNS.

**Uso básico:**

```bash
# Consulta simple
nslookup google.com

# Resultado
Server:		8.8.8.8
Address:	8.8.8.8#53

Non-authoritative answer:
Name:	google.com
Address: 142.250.191.46
```

**Modo interactivo:**

```bash
nslookup
> set type=MX
> google.com
google.com	mail exchanger = 10 smtp.google.com.

> set type=NS
> google.com
google.com	nameserver = ns1.google.com.
google.com	nameserver = ns2.google.com.

> set type=TXT
> google.com
google.com	text = "v=spf1 include:_spf.google.com ~all"
```

#### curl - Cliente HTTP

**Función**: Transfiere datos desde/hacia servidores usando varios protocolos.

**Uso básico:**

```bash
# GET simple
curl https://api.github.com/users/octocat

# POST con datos
curl -X POST -H "Content-Type: application/json" \
     -d '{"name":"test"}' \
     https://api.ejemplo.com/users

# Mostrar headers
curl -I https://google.com

# Seguir redirects
curl -L https://google.com

# Guardar en archivo
curl -o output.html https://ejemplo.com

# Mostrar tiempo de respuesta
curl -w "%{time_total}\n" https://google.com
```

**Análisis de rendimiento:**

```bash
# Tiempos detallados
curl -w "DNS: %{time_namelookup}s\nConnect: %{time_connect}s\nTLS: %{time_appconnect}s\nTotal: %{time_total}s\n" \
     https://google.com

# Resultado
DNS: 0.012s
Connect: 0.045s
TLS: 0.123s
Total: 0.234s
```

#### telnet - Conexión TCP raw

**Función**: Conecta a servicios TCP para debugging manual.

**Uso básico:**

```bash
# Conectar a servidor web
telnet google.com 80

# Una vez conectado, escribir:
GET / HTTP/1.1
Host: google.com
Connection: close

# Resultado
HTTP/1.1 200 OK
Date: Sat, 05 Jul 2025 14:30:00 GMT
Expires: -1
Cache-Control: private, max-age=0
Content-Type: text/html; charset=ISO-8859-1
...
```

**Verificar puertos:**

```bash
# Verificar si puerto está abierto
telnet servidor.com 22   # SSH
telnet servidor.com 25   # SMTP
telnet servidor.com 80   # HTTP
telnet servidor.com 443  # HTTPS (no funcionará para datos)
```

## 📝 Glosario esencial de términos

### IP, DNS, Gateway, NAT, Subred, Paquete, etc.

#### A-D

**ARP (Address Resolution Protocol)**

- Protocolo que traduce direcciones IP a direcciones MAC en redes locales
- Ejemplo: ¿Quién tiene 192.168.1.1? → MAC: 00:1A:2B:3C:4D:5E

**Bandwidth (Ancho de banda)**

- Cantidad máxima de datos que puede transmitir una conexión
- Medido en bits por segundo (bps, Kbps, Mbps, Gbps)

**BGP (Border Gateway Protocol)**

- Protocolo que intercambia información de enrutamiento entre sistemas autónomos
- Base del enrutamiento en Internet

**CIDR (Classless Inter-Domain Routing)**

- Notación para especificar redes IP: 192.168.1.0/24
- El número después de / indica bits de red

**DNS (Domain Name System)**

- Sistema que traduce nombres de dominio a direcciones IP
- Ejemplo: google.com → 142.250.191.46

**DHCP (Dynamic Host Configuration Protocol)**

- Protocolo que asigna automáticamente configuración IP a dispositivos
- Incluye: IP, máscara, gateway, DNS

#### E-H

**Ethernet**

- Tecnología de red cableada más común
- Velocidades: 10 Mbps, 100 Mbps, 1 Gbps, 10 Gbps

**Firewall**

- Dispositivo o software que filtra tráfico de red
- Bloquea conexiones no autorizadas

**Gateway (Puerta de enlace)**

- Dispositivo que conecta redes diferentes
- Típicamente el router: 192.168.1.1

**HTTP (Hypertext Transfer Protocol)**

- Protocolo para transferir páginas web
- Puerto 80 (sin cifrar), puerto 443 (HTTPS cifrado)

#### I-L

**ICMP (Internet Control Message Protocol)**

- Protocolo para mensajes de control y error
- Usado por ping y traceroute

**IP Address (Dirección IP)**

- Identificador único de dispositivo en red
- IPv4: 192.168.1.100, IPv6: 2001:db8::1

**ISP (Internet Service Provider)**

- Proveedor de servicios de Internet
- Ejemplos: Movistar, Claro, VTR

**LAN (Local Area Network)**

- Red local dentro de un edificio u oficina
- Ejemplo: Red Wi-Fi de casa

#### M-P

**MAC Address (Media Access Control)**

- Identificador único de tarjeta de red
- Formato: 00:1A:2B:3C:4D:5E

**MTU (Maximum Transmission Unit)**

- Tamaño máximo de paquete que puede transmitir una red
- Ethernet: 1500 bytes

**NAT (Network Address Translation)**

- Traduce direcciones IP privadas a públicas
- Permite compartir una IP pública entre múltiples dispositivos

**Packet (Paquete)**

- Unidad de datos transmitida por la red
- Contiene headers y datos

#### Q-T

**QoS (Quality of Service)**

- Técnicas para priorizar cierto tráfico de red
- Ejemplo: Priorizar video sobre descarga de archivos

**Router (Enrutador)**

- Dispositivo que dirige tráfico entre redes
- Toma decisiones basadas en tablas de enrutamiento

**RTT (Round-Trip Time)**

- Tiempo que tarda un paquete en ir y volver
- Medido por ping

**Subnet (Subred)**

- División de una red IP en redes más pequeñas
- Ejemplo: 192.168.1.0/24 dividida en /26

**Switch**

- Dispositivo que conecta dispositivos en una LAN
- Aprende direcciones MAC y filtra tráfico

**TCP (Transmission Control Protocol)**

- Protocolo confiable orientado a conexión
- Garantiza entrega y orden de datos

#### U-Z

**UDP (User Datagram Protocol)**

- Protocolo rápido sin conexión
- No garantiza entrega ni orden

**VLAN (Virtual LAN)**

- Segmentación lógica de una red física
- Permite separar tráfico sin hardware adicional

**VPN (Virtual Private Network)**

- Red privada sobre infraestructura pública
- Cifra todo el tráfico entre cliente y servidor

**WAN (Wide Area Network)**

- Red que cubre área geográfica amplia
- Internet es la WAN más grande

**Wi-Fi**

- Tecnología de red inalámbrica
- Estándares: 802.11n, 802.11ac, 802.11ax

**Ejemplo práctico integrando conceptos:**

```
Navegación web completa:
1. DNS: ejemplo.com → 203.0.113.42
2. ARP: Gateway IP → Gateway MAC
3. Packet: Encapsulado en Ethernet frame
4. Router: Enrutamiento basado en IP
5. NAT: 192.168.1.100 → IP pública
6. TCP: Handshake en puerto 443
7. TLS: Cifrado de datos
8. HTTP: Solicitud GET
9. Response: Página web cifrada
10. Rendering: Mostrar en navegador
```

# 🌐 Complemento al Glosario TCP/IP

## 📊 Comparación práctica: TCP/IP vs OSI

| Capa OSI           | Capa TCP/IP  | Ejemplos/Protocolos          |
| ------------------ | ------------ | ---------------------------- |
| 7. Aplicación      | Aplicación   | HTTP, HTTPS, FTP, SMTP, DNS  |
| 6. Presentación    | Aplicación   | SSL/TLS, Cifrado, Compresión |
| 5. Sesión          | Aplicación   | Manejo de sesiones web       |
| 4. Transporte      | Transporte   | TCP, UDP                     |
| 3. Red             | Internet     | IP, ICMP, ARP                |
| 2. Enlace de datos | Acceso a Red | Ethernet, Wi-Fi              |
| 1. Física          | Acceso a Red | Cables, señales              |

## 🚀 Proceso completo de conexión web

### Paso a paso: www.ejemplo.com

```
1. DNS Resolution
   - Browser → DNS Server: "¿IP de ejemplo.com?"
   - DNS → Browser: "IP: 203.0.113.42"

2. TCP Handshake (3-way)
   - SYN → Server
   - SYN-ACK ← Server
   - ACK → Server
   - Conexión establecida ✓

3. TLS Handshake (si HTTPS)
   - Client Hello → Server
   - Server Hello + Certificate ← Server
   - Key Exchange → Server
   - Cifrado establecido ✓

4. HTTP Request
   - GET /index.html HTTP/1.1
   - Host: www.ejemplo.com

5. HTTP Response
   - HTTP/1.1 200 OK
   - Content-Type: text/html
   - [HTML content]
```

## 🔌 Puertos importantes para desarrolladores

### Puertos del sistema (0-1023)

- **22** - SSH (Secure Shell)
- **23** - Telnet
- **25** - SMTP (Email)
- **53** - DNS
- **80** - HTTP
- **110** - POP3
- **143** - IMAP
- **443** - HTTPS
- **993** - IMAPS
- **995** - POP3S

### Puertos de desarrollo común

- **3000** - React Dev Server
- **3306** - MySQL
- **5432** - PostgreSQL
- **6379** - Redis
- **8000** - Django Dev
- **8080** - Tomcat/Proxy alternativo
- **9000** - PHP-FPM

## 📱 Tipos de direcciones IP

### IPv4 - Clases tradicionales

```
Clase A: 1.0.0.0 - 126.255.255.255    (/8)
Clase B: 128.0.0.0 - 191.255.255.255  (/16)
Clase C: 192.0.0.0 - 223.255.255.255  (/24)
```

### Direcciones IP reservadas

```
10.0.0.0/8        - Redes privadas grandes
172.16.0.0/12     - Redes privadas medianas
192.168.0.0/16    - Redes privadas pequeñas
127.0.0.0/8       - Loopback (localhost)
169.254.0.0/16    - APIPA (Auto-IP)
```

### IPv6 - Ejemplos comunes

```
::1               - Localhost IPv6
::                - Dirección vacía
2001:db8::/32     - Documentación
fe80::/10         - Link-local
```

## 🛠️ Comandos de diagnóstico esenciales

### Windows

```cmd
ping google.com                    # Conectividad básica
tracert google.com                 # Ruta de paquetes
nslookup google.com               # Resolución DNS
netstat -an                       # Conexiones activas
ipconfig /all                     # Configuración IP
ipconfig /flushdns                # Limpiar caché DNS
```

### Linux/Mac

```bash
ping google.com                    # Conectividad básica
traceroute google.com             # Ruta de paquetes
nslookup google.com               # Resolución DNS
netstat -tuln                     # Puertos escuchando
ifconfig                          # Configuración IP (Linux)
dig google.com                    # DNS avanzado
```

## 🔐 SSL/TLS - Certificados y cifrado

### Proceso TLS simplificado

```
1. ClientHello
   - Versiones TLS soportadas
   - Algoritmos de cifrado
   - Número aleatorio

2. ServerHello
   - Versión TLS elegida
   - Algoritmo de cifrado
   - Certificado digital

3. Verificación
   - Cliente verifica certificado
   - Valida cadena de confianza

4. Intercambio de claves
   - Generación de clave simétrica
   - Cifrado de sesión activo
```

### Verificar certificado SSL

```bash
# Ver certificado de un sitio
openssl s_client -connect google.com:443 -servername google.com

# Verificar fechas de expiración
curl -vI https://google.com 2>&1 | grep -i expire
```

## 🌍 NAT y traducción de direcciones

### Tipos de NAT

```
1. Static NAT (1:1)
   192.168.1.100 ↔ 203.0.113.42

2. Dynamic NAT (Pool)
   192.168.1.x ↔ 203.0.113.42-50

3. PAT (Port Address Translation)
   192.168.1.100:5000 ↔ 203.0.113.42:12345
   192.168.1.101:5000 ↔ 203.0.113.42:12346
```

## 📊 Métricas de red importantes

### Latencia y throughput

```
Latency (RTT):     < 50ms excelente, > 150ms problemático
Jitter:            < 10ms para video, < 30ms para web
Packet Loss:       < 0.1% ideal, > 1% problemático
Bandwidth:         Capacidad máxima del enlace
Throughput:        Velocidad real de transferencia
```

### Herramientas de medición

```bash
# Medir latencia continuamente
ping -t google.com

# Medir throughput
curl -o /dev/null -s -w "Speed: %{speed_download} bytes/sec\n" \
  https://speed.cloudflare.com/__down?bytes=100000000

# Análisis de red avanzado
mtr google.com                    # Combina ping + traceroute
```

## 🚨 Troubleshooting común

### Problemas típicos y soluciones

```
1. "No hay conexión a Internet"
   - ping 8.8.8.8 (Google DNS)
   - Si falla: problema de red local
   - Si funciona: problema de DNS

2. "Sitio web no carga"
   - nslookup sitio.com
   - ping IP del sitio
   - telnet IP 80/443

3. "Conexión lenta"
   - traceroute para ver saltos
   - ping para medir latencia
   - Verificar MTU con ping -f -l 1472

4. "Puerto no accesible"
   - netstat -an | grep :puerto
   - telnet ip puerto
   - Verificar firewall
```

### Códigos de estado HTTP relevantes

```
200 OK                - Éxito
301 Moved Permanently - Redirección permanente
404 Not Found         - Recurso no encontrado
500 Internal Error    - Error del servidor
502 Bad Gateway       - Problema de proxy/balanceador
503 Service Unavailable - Servicio no disponible
```
