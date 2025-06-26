# 🧪 Ejercicio guiado: Refugio Animal con herencia y paquetes

Este ejercicio demuestra cómo aplicar el concepto de **herencia** en Java utilizando una estructura de paquetes clara y separada. Ideal para estudiantes que comienzan a dominar la Programación Orientada a Objetos (POO).

---

## 👣 Paso 1: Crear el proyecto

📁 Nombre sugerido: `RefugioAnimal`

---

## 👣 Paso 2: Crear la estructura de paquetes

```
src/
├── app/         → contiene la clase principal con `main`
├── modelo/      → contiene la clase base `Animal`
└── animales/    → contendrá subclases como `Perro` y `Gato`
```

---

## 👣 Paso 3: Crear la clase base `Animal`

📄 `modelo/Animal.java`

```java
package modelo;

// Clase base que representa un animal genérico
public class Animal {

    // Atributos comunes a todos los animales
    protected String nombre;
    protected String especie;
    protected int edad;

    // Constructor
    public Animal(String nombre, String especie, int edad) {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
    }

    // Método para mostrar información
    public void mostrarInformacion() {
        System.out.println("Nombre: " + nombre);
        System.out.println("Especie: " + especie);
        System.out.println("Edad: " + edad + " años");
    }

    // Método genérico que puede ser sobrescrito
    public void hacerSonido() {
        System.out.println(nombre + " hace un sonido genérico.");
    }
}
```

> 🔐 _Nota: Usamos `protected` para que los atributos puedan ser usados en subclases pero no accesibles directamente desde clases fuera del modelo._

---

## 👣 Paso 3.1: Verificar acceso desde otro paquete

📄 `app/Main.java`

```java
package app;

import modelo.Animal;

public class Main {
    public static void main(String[] args) {

        // Creamos un objeto de tipo Animal
        Animal animal1 = new Animal("Animal", "Perro", 1);
        animal1.mostrarInformacion();
        animal1.hacerSonido();

        /*
         * Salida esperada:
         * Nombre: Animal
         * Especie: Perro
         * Edad: 1 años
         * Animal hace un sonido genérico.
         */

        System.out.println("\n---\n");
    }
}
```

> ✅ Como podemos ver, no hay problema al acceder desde el paquete app a la clase Animal ubicada en el paquete modelo, porque:
>
> - La clase Animal está marcada como public.
> - Los métodos mostrarInformacion() y hacerSonido() también son public.
> - Y los atributos protected permiten su uso interno y por clases hijas.

> 🎯 Conclusión intermedia: Ya podemos trabajar con nuestra clase Animal desde distintos paquetes. Esto demuestra que los modificadores de acceso están correctamente aplicados para permitir reutilización en un proyecto estructurado.

## 🧱 Tipos de modificadores de acceso en Java

| Modificador | ¿Dónde puede ser accedido?                                                       |
| ----------- | -------------------------------------------------------------------------------- |
| `public`    | Desde cualquier lugar del programa.                                              |
| `private`   | Solo desde dentro de la misma clase.                                             |
| `protected` | Desde la misma clase, el mismo paquete y también desde clases hijas (subclases). |
| _default_   | (Sin palabra clave) Solo desde el mismo paquete.                                 |

> 📌 _Nota:_ Si no se escribe ningún modificador, se aplica el **acceso por defecto** (default).

---

### 🔄 Tabla de acceso visual

| Modificador | Dentro de la clase | Mismo paquete | Subclases (otro paquete) | Desde cualquier parte |
| ----------- | ------------------ | ------------- | ------------------------ | --------------------- |
| `public`    | ✅                 | ✅            | ✅                       | ✅                    |
| `protected` | ✅                 | ✅            | ✅                       | ❌                    |
| `default`   | ✅                 | ✅            | ❌                       | ❌                    |
| `private`   | ✅                 | ❌            | ❌                       | ❌                    |

---

---

## 👣 Paso 4: Crear clases hijas (Perro y Gato) usando herencia

📌 Para crear una subclase o clase hija en Java, usamos la palabra reservada `extends` seguida del nombre de la clase que queremos heredar.

📄 Estructura general:

```java
public class Hija extends Padre {
    // código adicional
}
```

> 🧠 En nuestro caso: Perro y Gato extienden de Animal para heredar sus atributos y métodos, y además pueden personalizar su comportamiento.

---

### 📄 `animales/Perro.java`

```java
package animales;

import modelo.Animal;

// Subclase que extiende de Animal
public class Perro extends Animal {

    // Constructor
    public Perro(String nombre, int edad) {
        super(nombre, "Perro", edad); // Llamamos al constructor del padre
    }

    // Método sobrescrito para sonido específico
    @Override
    public void hacerSonido() {
        System.out.println(nombre + " dice: ¡Guau! 🐶");
    }
}

```

---

### 📄 `animales/Gato.java`

```java
package animales;

import modelo.Animal;

// Subclase que extiende de Animal
public class Gato extends Animal {

    public Gato(String nombre, int edad) {
        super(nombre, "Gato", edad);
    }

    @Override
    public void hacerSonido() {
        System.out.println(nombre + " dice: ¡Miau! 🐱");
    }
}

```

---

## 👣 Paso 5: Instanciar subclases y probar herencia

📄 `app/Main.java`

```java
package app;

import modelo.Animal;
import animales.Perro;
import animales.Gato;

public class Main {
    public static void main(String[] args) {

        // 5.1 Creamos un objeto de tipo Animal
        Animal animal1 = new Animal("Animal", "Perro", 1);
        animal1.mostrarInformacion();
        animal1.hacerSonido();

        /*
         * Salida esperada:
         * Nombre: Animal
         * Especie: Perro
         * Edad: 1 años
         * Animal hace un sonido genérico.
         */

        System.out.println("\n---\n");

        // 5.2 Creamos un objeto de tipo Gato
        Gato gato1 = new Gato("Michi", 3);
        gato1.mostrarInformacion(); // método heredado
        gato1.hacerSonido();        // método sobrescrito

        /*
         * Salida esperada:
         * Nombre: Michi
         * Especie: Gato
         * Edad: 3 años
         * Michi dice: ¡Miau! 🐱
         */

        System.out.println("\n---\n");

        // 5.3 Creamos un objeto de tipo Perro
        Perro perro1 = new Perro("Firulais", 5);
        perro1.mostrarInformacion(); // método heredado
        perro1.hacerSonido();        // método sobrescrito

        /*
         * Salida esperada:
         * Nombre: Firulais
         * Especie: Perro
         * Edad: 5 años
         * Firulais dice: ¡Guau! 🐶
         */
    }
}

```

---

## 📘 ¿Qué observamos?

✔️ Herencia clara: Perro y Gato heredan de Animal.
✔️ Reutilización de código con el constructor del padre vía super().
✔️ Acceso a atributos gracias a protected.
✔️ Polimorfismo a través de métodos sobrescritos (hacerSonido).

## ✅ Conclusiones

✔️ Reutilización de código mediante `extends`  
✔️ Encapsulamiento protegido con `protected`  
✔️ Uso de `super()` para inicializar  
✔️ Sobrescritura de métodos (`@Override`)  
✔️ Polimorfismo en acción

---