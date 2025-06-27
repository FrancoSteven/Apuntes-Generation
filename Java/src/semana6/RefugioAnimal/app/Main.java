package semana6.RefugioAnimal.app;

import semana6.RefugioAnimal.animales.Gato;
import semana6.RefugioAnimal.animales.Perro;
import semana6.RefugioAnimal.modelo.Animales;

public class Main {

    public static void main(String[] args) {
        // Instanciar
  /*      Animales animales = new Animales("Michi", "Gato",3);
        animales.mostrarInformacion();
        animales.hacerSonido();*/

        System.out.println("=========================\n");

        // Instancia
        Perro perro = new Perro("Rocky", "Labrador", 4);
        perro.mostrarInformacion();
        perro.hacerSonido();

        System.out.println("=========================\n");

        Gato gato = new Gato("Lucia", "Gato", 5);
        gato.mostrarInformacion();
        gato.hacerSonido();

        System.out.println("=========================\n");

        System.out.println("¿" + perro.getNombre() + " está entrenado " +  " ? " + perro.isEntrenado()  );
        perro.entrenar();

        System.out.println("¿" + perro.getNombre() + " está entrenado ahora ? " + perro.isEntrenado()  );

        System.out.println();
        perro.saludar();

        System.out.println("=========================\n");

        System.out.println("¿" + gato.getNombre() + " es cazador? " + gato.esCazador());
        gato.setCazador(false);
        System.out.println("¿" + gato.getNombre() + " es cazador? ahora " + gato.esCazador());


        System.out.println("=========================\n");

        // @Override : sobreescritura
        Animales[] animales = new Animales[4]; // longitud 0 1 2 3 = 4
        animales[0] = new Perro("Max","Gato",3);
        animales[1] = new Gato("Luna", "Perro",3);
        animales[2] = new Perro("Max","Gato",5);
        animales[3] = new Gato("Luna", "Perro",3);

        //Como podemos recorrer este arreglo
        // usaremos un for each por que vamos recorrer todo el arreglo
        for(Animales animal : animales){
            animal.mostrarInformacion();
            animal.hacerSonido();
            System.out.println();
        }

        System.out.println("=========================\n");


        // Prubea de Polimorfismo con Sobrecarga
        perro.alimentar();                                       // sin argumentos
        perro.alimentar("pollo");                         // un argumento
        perro.alimentar("croquetas", 150);        // dos argumentos

    }

}
