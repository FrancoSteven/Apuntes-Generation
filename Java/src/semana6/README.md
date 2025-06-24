# 🧠 Programación Orientada a Objetos (POO) en Java - Parte 1: Fundamentos Básicos

---

## 🔎 ¿Qué es la Programación Orientada a Objetos?

La Programación Orientada a Objetos (POO) es una forma de programar en la que pensamos el código como si estuviéramos construyendo cosas del mundo real: objetos con **características** (estado) y **acciones** (comportamientos).

### 🍪 Analogía: Las galletas

* Una **clase** es el *molde* de una galleta: define forma, sabor, color.
* Un **objeto** es la *galleta real*: tiene valores específicos.
* Los **atributos** son las propiedades: sabor, color, tamaño.
* Los **métodos** son las acciones: hornear, decorar, comer.

---

## 🚗 Ejemplo 1: Clase `Vehiculo` (archivo simple sin `package`)

Creamos una clase `Vehiculo` con atributos y un método, y luego una clase `Auto` que usa esa clase.

```java
// Vehiculo.java

// Declaramos la clase Vehiculo
public class Vehiculo {
    // Atributo que indica el tipo de vehículo (Auto, Camion, Bicicleta)
    String tipo;

    // Atributo que representa la cantidad de ruedas del vehículo
    int ruedas;

    // Atributo que indica el color del vehículo
    String color;

    // Método común que simula el movimiento del vehículo
    public void avanzar() {
        // Imprime un mensaje cuando el vehículo avanza
        System.out.println("El vehículo está avanzando.");
    }
}

// Clase Auto con el método main para ejecutar el programa
class Auto {
    public static void main(String[] args) {
        // Creamos un objeto de tipo Vehiculo utilizando la palabra clave 'new'
        Vehiculo miAuto = new Vehiculo();

        // Asignamos valores a los atributos del objeto
        miAuto.tipo = "Auto";       // El tipo de vehículo es "Auto"
        miAuto.ruedas = 4;          // Tiene 4 ruedas
        miAuto.color = "Rojo";     // El color es rojo

        // Mostramos en consola los valores asignados
        System.out.println("Tipo: " + miAuto.tipo);
        System.out.println("Ruedas: " + miAuto.ruedas);
        System.out.println("Color: " + miAuto.color);

        // Llamamos al método 'avanzar' del objeto
        miAuto.avanzar(); // Esto imprimirá: El vehículo está avanzando.
    }
}
```

> 💡 Este ejemplo ayuda a comprender cómo crear y usar una clase, atributos, métodos e instancias.

---

## 📂 Ejemplo 2: Clase `Perro` usando `package` y modificadores de acceso

Ahora comenzamos a trabajar con **packages**, una forma profesional de organizar el código. También aplicamos **encapsulamiento** con atributos `private` y métodos `public` (semana 5).

### 📁 Estructura de carpetas sugerida

```
src/
├── semana6/
│   ├── poo/
│   │   └── Perro.java
│   └── poo_main/
│       └── Mascota.java
```

---

### 🐶 `Perro.java` (ubicado en `semana6.poo`)

```java
// Declaramos el paquete donde se encuentra esta clase
package semana6.poo;

// Declaramos la clase Perro y la hacemos pública para que otras clases puedan usarla
public class Perro {

    // Atributo privado: solo accesible desde esta clase
    private String nombre;

    // Otro atributo privado: la raza del perro
    private String raza;

    // Atributo privado: edad del perro
    private int edad;

    // Setter para asignar un nombre al perro desde otra clase
    public void setNombre(String nombre) {
        this.nombre = nombre; // usamos "this" para referirnos al atributo de la clase
    }

    // Setter para asignar la raza
    public void setRaza(String raza) {
        this.raza = raza;
    }

    // Setter para asignar la edad
    public void setEdad(int edad) {
        this.edad = edad;
    }

    // Método para que el perro ladre
    public void ladrar() {
        System.out.println("\u00a1Guau! \u00a1Guau!");
    }

    // Método para imprimir toda la información del perro
    public void imprimirInformacion() {
        System.out.println("Nombre: " + nombre);
        System.out.println("Raza: " + raza);
        System.out.println("Edad: " + edad + " años");
    }
}
```

---

### 🐕 `Mascota.java` (ubicado en `semana6.poo_main`)

```java
// Declaramos el paquete de esta clase principal
package semana6.poo_main;

// Importamos la clase Perro desde el paquete semana6.poo
import semana6.poo.Perro;

// Clase principal con el método main
public class Mascota {
    public static void main(String[] args) {
        // Creamos un nuevo objeto de tipo Perro porque este será quien se comunique con nuestra Clase Perro que está en el package poo
        Perro miPerro = new Perro();

        // Establecemos los valores del objeto utilizando los métodos set (encapsulamiento)
        miPerro.setNombre("Rocky");       // Asignamos el nombre "Rocky"
        miPerro.setRaza("Labrador");      // Asignamos la raza "Labrador"
        miPerro.setEdad(4);                // Asignamos la edad 4

        // Hacemos que el perro realice una acción
        miPerro.ladrar(); // El perro ladra

        // Mostramos la información completa
        miPerro.imprimirInformacion();
    }
}
```

---

## 🧑‍🏫 Ejemplo adicional: Clase `Persona` generando automáticamente métodos con IntelliJ IDEA

En IntelliJ IDEA, podemos usar atajos para generar automáticamente código repetitivo como constructores, getters, setters y `toString()`.

### 📄 Clase `Persona`

```java
package semana6.poo;

public class Persona {
    private String nombre;
    private int edad;
    private String profesion;

    // Paso 1: Hacemos clic derecho dentro de la clase > Generate...
    // Paso 2: Seleccionamos "Constructor" y marcamos los campos deseados para inicializarlos

    public Persona(String nombre, int edad, String profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    // Paso 3: Repetimos Generate... > Getter and Setter > Seleccionamos todos los campos

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getProfesion() {
        return profesion;
    }

    public void setProfesion(String profesion) {
        this.profesion = profesion;
    }

    // Paso 4: Generate... > toString() para representar el objeto como texto
    @Override
    public String toString() {
        return "Persona{" +
               "nombre='" + nombre + '\'' +
               ", edad=" + edad +
               ", profesion='" + profesion + '\'' +
               '}';
    }
}
```

### 🧪 Uso en clase principal:

```java
Persona p = new Persona("Ana", 30, "Ingeniera");
System.out.println(p); // Usamos toString()
```

### 💬 ¿Para qué sirve cada uno?

| Método      | Uso                                                                  |
| ----------- | -------------------------------------------------------------------- |
| Constructor | Inicializa los atributos cuando se crea un nuevo objeto              |
| Getter      | Permite **leer** el valor de un atributo privado                     |
| Setter      | Permite **modificar** el valor de un atributo privado                |
| toString()  | Devuelve una representación en texto del objeto (útil para imprimir) |

---

## ℹ️ Información adicional: Constructor vacío (por defecto)

Un **constructor vacío** permite crear un objeto sin pasarle datos al inicio. Es útil cuando:

1. Quieres **crear el objeto primero y asignar valores después**:

```java
Persona p = new Persona();
p.setNombre("Laura");
p.setEdad(28);
```

2. Lo requieren herramientas como **Spring**, **Jackson** o **Hibernate**, que necesitan crear objetos por reflexión.

3. Buscas **flexibilidad** al crear objetos sin tener toda la información en el momento.

### 🧪 Ejemplo con constructor vacío:

```java
public class Persona {
    private String nombre;
    private int edad;

    // Constructor vacío
    public Persona() {
        // Se puede dejar vacío o establecer valores por defecto
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }
}
```

Y su uso:

```java
Persona p = new Persona();
p.setNombre("Diego");
p.setEdad(32);
```

> 💡 Recomendación: si defines constructores con parámetros, agrega también el constructor vacío cuando sea necesario para compatibilidad o flexibilidad.

---

## 🧠 Glosario técnico

| Término             | Descripción                                                                 |
| ------------------- | --------------------------------------------------------------------------- |
| `class`             | Define una nueva clase (molde para objetos).                                |
| `object`            | Una instancia real de una clase.                                            |
| `new`               | Crea un nuevo objeto en memoria.                                            |
| `package`           | Agrupa clases relacionadas.                                                 |
| `import`            | Permite usar una clase ubicada en otro paquete.                             |
| `private`           | Restringe el acceso a un atributo o método solo dentro de su clase.         |
| `public`            | Permite el acceso desde cualquier parte del programa.                       |
| `this`              | Palabra clave que refiere al atributo de la instancia actual.               |
| `void`              | Indica que el método no devuelve ningún valor.                              |
| `constructor`       | Método especial que se llama al crear un objeto y sirve para inicializarlo. |
| `getter`            | Método público que devuelve el valor de un atributo privado.                |
| `setter`            | Método público que permite modificar un atributo privado.                   |
| `toString()`        | Representa el objeto como texto. Muy útil para debug o impresión.           |
| `constructor vacío` | Constructor sin parámetros, útil para inicialización flexible o frameworks. |

---

