package semana6.RefugioAnimal.animales;

import semana6.RefugioAnimal.modelo.Animales;

public class Perro extends Animales {

    private boolean entrenado; // nuevo atributo con modificador privado
    // sabemos que solo puede ser usado dentro de la misma clase

    // Contructor con herencia
    public Perro(String nombre, String especie, int edad) {
        super(nombre, especie, edad);
        this.entrenado = false; // valor por defecto
    }

    // Getter para saber si esta entrenado
    public boolean isEntrenado() {
        return entrenado;
    }

    // Setter para cambiar su estado
    public void entrenar() {
        this.entrenado = true;
        System.out.println(nombre + " Entrenando. \uD83D\uDC3E");
    }

    // Metodo privado solo visible en esta clase
    private void moverCola(){
        System.out.println(nombre + " Mover Cola \uD83D\uDE48");
    }

    // Metodo Publico para que internamente podamos usar el metodo privado
    public void saludar(){
        System.out.println("se acerca.....");
        System.out.println(nombre + " Saludando \uD83D\uDC36");
        moverCola();
    }


    @Override
    public void hacerSonido(){
        System.out.println(nombre + " Guau Guau \uD83D\uDC36");
    }


    // Sobrecarga 1: sin parámetros
    public void alimentar() {
        System.out.println(nombre + " está comiendo croquetas.");
    }

    // Sobrecarga 2: con tipo de comida
    public void alimentar(String comida) {
        System.out.println(nombre + " está comiendo " + comida + ".");
    }

    // Sobrecarga 3: con tipo de comida y cantidad
    public void alimentar(String comida, int cantidad) {
        System.out.println(nombre + " comió " + cantidad + " gramos de " + comida + ".");
    }

}
