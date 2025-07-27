# 🧮 Desafío: Calculadora Simple en Java

Este desafío te ayudará a practicar el uso de **variables**, **operadores aritméticos** y entrada/salida de datos en Java, creando una calculadora básica que realiza operaciones matemáticas fundamentales.

---

## 🎯 Objetivo

Crear una calculadora simple que solicite al usuario dos números y una operación, luego muestre el resultado de la operación seleccionada.

---

## ✍️ Enunciado del Desafío

Desarrolla un programa que:

1. **Solicite al usuario dos números** (pueden ser decimales)
2. **Muestre un menú de operaciones disponibles**:
    - Suma (+)
    - Resta (-)
    - Multiplicación (*)
    - División (/)
    - Módulo (%)
3. **Pida al usuario que seleccione una operación**
4. **Calcule y muestre el resultado**
5. **Maneje el caso especial de división por cero**

---

## 🧪 Ejemplo de Ejecución

```
=== CALCULADORA SIMPLE ===

Ingrese el primer número: 15.5
Ingrese el segundo número: 4.2

Seleccione una operación:
1. Suma (+)
2. Resta (-)
3. Multiplicación (*)
4. División (/)
5. Módulo (%)

Ingrese su opción (1-5): 1

Resultado: 15.5 + 4.2 = 19.7
```

### Ejemplo con División por Cero
```
=== CALCULADORA SIMPLE ===

Ingrese el primer número: 10
Ingrese el segundo número: 0

Seleccione una operación:
1. Suma (+)
2. Resta (-)
3. Multiplicación (*)
4. División (/)
5. Módulo (%)

Ingrese su opción (1-5): 4

Error: No se puede dividir por cero.
```

---

## 💡 Pistas y Conceptos a Utilizar

### Variables que necesitarás:
- `double` para los números (permite decimales)
- `int` para la opción del menú
- `Scanner` para entrada de datos

### Operadores que debes usar:
- **Aritméticos**: `+`, `-`, `*`, `/`, `%`
- **Relacionales**: `==` para comparar la opción seleccionada
- **Lógicos**: Para validar condiciones (como división por cero)

### Estructuras de control:
- `if-else` o `switch` para manejar las diferentes operaciones
- Validación con `if` para evitar división por cero

---

## 🔧 Estructura Sugerida

```java
import java.util.Scanner;

public class CalculadoraSimple {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // 1. Mostrar título
        // 2. Solicitar números
        // 3. Mostrar menú de operaciones
        // 4. Solicitar opción
        // 5. Realizar cálculo según la opción
        // 6. Mostrar resultado
        
        scanner.close();
    }
}
```

---

## 🏆 Desafíos Adicionales (Opcional)

Una vez que tengas la calculadora básica funcionando, puedes intentar:

1. **Calculadora con bucle**: Permitir múltiples operaciones hasta que el usuario decida salir
2. **Validación de entrada**: Verificar que la opción esté entre 1-5
3. **Operaciones adicionales**: Agregar potencia, raíz cuadrada, etc.
4. **Formateo de resultados**: Mostrar solo 2 decimales en los resultados

---

## 📋 Requisitos Técnicos

- Java 8 o superior
- Usar la clase `Scanner` para entrada de datos
- Aplicar operadores aritméticos básicos
- Manejar diferentes tipos de datos (`double`, `int`)
- Implementar estructuras de control (`if-else` o `switch`)

---

## 🎯 Objetivos de Aprendizaje

Al completar este desafío, habrás practicado:

- ✅ Declaración y uso de variables de diferentes tipos
- ✅ Aplicación de operadores aritméticos
- ✅ Entrada y salida de datos con `Scanner` y `System.out`
- ✅ Uso de estructuras de control condicionales
- ✅ Manejo de casos especiales (división por cero)
- ✅ Formateo básico de salida de datos
- ✅ Organización y estructura de un programa Java completo

---

¡Buena suerte con tu calculadora! 🍀