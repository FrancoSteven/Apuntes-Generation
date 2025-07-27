package semana6.RefugioAnimal.app;

import semana6.RefugioAnimal.animales.Gato;
import semana6.RefugioAnimal.animales.Perro;
import semana6.RefugioAnimal.interfaces.Adoptable;
import semana6.RefugioAnimal.modelo.Animales;

public class Main {

    public static void main(String[] args) {
        // Instanciar
 /*       Animales animales1 = new Animales("Michi", "Gato",3);
        animales1.mostrarInformacion();
        animales1.hacerSonido();*/

        System.out.println(" =========================");

        // Instancia
        Perro perro = new Perro("Rocky", "Labrador", 4);
        perro.mostrarInformacion();
        perro.hacerSonido();

        System.out.println(" =========================");

        Gato gato = new Gato("Lucia", "Gato", 5);
        gato.mostrarInformacion();
        gato.hacerSonido();

        System.out.println(" =========================");

        System.out.println("¿" + perro.getNombre() + " está entrenado " + " ? " + perro.isEntrenado());
      // perro.entrenar();

        System.out.println("¿" + perro.getNombre() + " está entrenado ahora ? " + perro.isEntrenado());

        System.out.println();
        perro.saludar();

        System.out.println(" =========================");

        System.out.println("¿" + gato.getNombre() + " es cazador? " + gato.esCazador());
        gato.setCazador(false);
        System.out.println("¿" + gato.getNombre() + " es cazador? ahora " + gato.esCazador());


        System.out.println(" =========================");

        // @Override : sobreescritura
        Animales[] animales = new Animales[4]; // longitud 0 1 2 3 = 4
        animales[0] = new Perro("Max", "Canino", 3);
        animales[1] = new Gato("Luna", "Felino", 3);
        animales[2] = new Perro("Max", "Canino", 5);
        animales[3] = new Gato("Luna", "Felino", 3);

        //Como podemos recorrer este arreglo
        // usaremos un for each por que vamos recorrer todo el arreglo
        for (Animales animal : animales) {
            animal.mostrarInformacion();
            animal.hacerSonido();
            System.out.println();
        }


        System.out.println(" =========================");

        // Uso de sobrecarga
        perro.alimentar();
        perro.alimentar("Carnes");
        perro.alimentar("Frutas", 3);




        System.out.println("=========================\n");

        // LLamado a Metodos de Interfaces

        System.out.println(perro.datosAdopcion());
        perro.entrenado();

        System.out.println(gato.datosAdopcion());

        /* // También podrías usar polimorfismo con interfaces:
        Adoptable adoptable1 = gato;
        System.out.println(adoptable1.datosAdopcion());  */


    }

}
