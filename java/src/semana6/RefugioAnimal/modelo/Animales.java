package semana6.RefugioAnimal.modelo;

public abstract class Animales {

    // Atributos
    protected String nombre;
    protected String especie;
    protected int edad;

    // Contructor
    public Animales(String nombre, String especie, int edad) {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEspecie() {
        return especie;
    }

    public void setEspecie(String especie) {
        this.especie = especie;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    // Metodo para mostrar informacion
    public void mostrarInformacion() {
        System.out.println("Nombre: " + nombre);
        System.out.println("Especie: " + especie);
        System.out.println("Edad: " + edad);
    }

    // Metodo generico para poder sobreescribirlo
/*    public void hacerSonido() {
        System.out.println("El animal ha hecho un sonido");
    };*/

    public abstract void hacerSonido();


}
