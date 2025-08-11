# 4) Manejo de errores con fetch

## 📖 Definición técnica
Con `fetch` pueden ocurrir tres tipos de problemas:
1. **Error de red** → La Promesa se rechaza (no hay internet, DNS, CORS duro).
2. **Error HTTP (404/500…)** → La Promesa NO se rechaza; `response.ok` es `false`.
3. **Error al parsear** → `response.json()` puede fallar si el cuerpo no es JSON válido.
4. *Opcional*: Timeout con `AbortController` (porque `fetch` no trae timeout nativo).

## 💬 En palabras simples
- Si el servidor dice *"404"*, `fetch` te entrega la carta igual; tú debes leerla y ver que dice *"404"*.
- Si se cae el Wi-Fi, `fetch` ni siquiera trae la carta → cae al `.catch`.
- Si la carta está en *"jeroglífico"* y pediste JSON, fallará al convertir.

## ✅ Buenas prácticas
- Siempre verifica `response.ok` antes de usar `.json()`.
- Entrega mensajes claros al usuario (no stacktraces).
- Distingue entre error de red y error HTTP.
- Considera timeout y reintentos limitados si aplica.

## ❌ No deberías
- Asumir que 404 "lanza" solo.
- Consumir `.json()` sin validar `ok`.
- Silenciar errores.