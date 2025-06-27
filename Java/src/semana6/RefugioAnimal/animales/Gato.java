package semana6.herencia.practica2.animales;

import semana6.herencia.practica2.modelo.Animales;

public class Gato extends Animales {

    private boolean cazador;   // Atributo "cazador" en Privado para la clase gato

    public Gato(String nombre, String especie, int edad) {
        super(nombre, especie, edad);
        this.cazador = true; // valor por defecto
    }

    // Getter
    public boolean esCazador() {
        return cazador;
    }

    // Setter con parametro
    public void setCazador(boolean cazador) {
        this.cazador = cazador;
    }

    @Override
    public void hacerSonido(){
        System.out.println(nombre + " Meow Meow \uD83D\uDC31");
    }

}
