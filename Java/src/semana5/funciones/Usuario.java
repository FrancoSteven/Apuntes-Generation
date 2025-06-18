package semana5.funciones;

public class Usuario {
    private String nombre;
    private int edad;

    // Constructor
    public Usuario(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método no estático: saluda
    public void saludar() {
        System.out.println("Hola, soy " + nombre + " y tengo " + edad + " años.");
    }

    // Método no estático: verifica si es mayor de edad
    public boolean esMayorDeEdad() {
        return edad >= 18;
    }



    // Si solo hicieramos esto provocaria ' "ERROR nombre has private access " por eso se crea el GETTER
    public void cambiarNombre(String nuevoNombre) {
        this.nombre = nuevoNombre;
        System.out.println("\nMi nuevo nombre es: " + this.nombre);
    }

    // 👇 GETTER para el nombre
    public String getNombre() {
        return this.nombre;
    }

}

