package semana6.herencia.practica.app;

import semana6.herencia.practica.animales.Gato;
import semana6.herencia.practica.animales.Perro;
import semana6.herencia.practica.modelo.Animales;

public class Main {

    public static void main(String[] args) {
        // Instanciar
  /*      Animales animales = new Animales("Michi", "Gato",3);
        animales.mostrarInformacion();
        animales.hacerSonido();*/

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

        System.out.println("¿" + perro.getNombre() + " está entrenado " +  " ? " + perro.isEntrenado()  );
        perro.entrenar();

        System.out.println("¿" + perro.getNombre() + " está entrenado ahora ? " + perro.isEntrenado()  );

        System.out.println();
        perro.saludar();

        System.out.println(" =========================");

        System.out.println("¿" + gato.getNombre() + " es cazador? " + gato.esCazador());
        gato.setCazador(false);
        System.out.println("¿" + gato.getNombre() + " es cazador? ahora " + gato.esCazador());


        System.out.println(" =========================");

        // @Override : sobreescritura
        Animales[] animales = new Animales[4]; // longitud 0 1 2 3 = 4
        animales[0] = new Perro("Max","Canino",3);
        animales[1] = new Gato("Luna", "Felino",3);
        animales[2] = new Perro("Max","Canino",5);
        animales[3] = new Gato("Luna", "Felino",3);

        //Como podemos recorrer este arreglo
        // usaremos un for each por que vamos recorrer todo el arreglo
        for(Animales animal : animales){
            animal.mostrarInformacion();
            animal.hacerSonido();
            System.out.println();
        }


    }

}
