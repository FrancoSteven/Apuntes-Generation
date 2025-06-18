package semana5.funciones;

public class Main {

    public static void main(String[] args) {
        // Métodos estáticos de la clase Calculadora
        System.out.println("Suma: " + Calculadora.sumar(5, 3));
        System.out.println("Resta: " + Calculadora.restar(10, 4));
        System.out.println("Multiplicación: " + Calculadora.multiplicar(6, 7));
        System.out.println("División: " + Calculadora.dividir(10, 2));
        System.out.println("División por cero: " + Calculadora.dividir(10, 0));
        System.out.println("Potencia: " + Calculadora.potencia(2, 3));
        System.out.println("Raíz cuadrada de 25: " + Calculadora.raizCuadrada(25));
        System.out.println("Raíz cuadrada de -4: " + Calculadora.raizCuadrada(-4));
        System.out.println("Módulo de 10 % 3: " + Calculadora.modulo(10, 3));
        System.out.println("Valor absoluto de -7: " + Calculadora.valorAbsoluto(-7));
        System.out.println("Redondear 4.6: " + Calculadora.redondear(4.6));

        System.out.println("\nFIN CALCULADORA\n");



        // Métodos no estáticos de la clase Usuario
        // Crear objeto
        Usuario usuario1 = new Usuario("El Profesor", 45);
        Usuario usuario2 = new Usuario("Tokio", 17);

        // Llamar a métodos no estáticos
        usuario1.saludar(); // Hola, soy El Profesor y tengo 45 años.
        usuario2.saludar(); // Hola, soy Tokio y tengo 17 años.

        // Verificar mayoría de edad
        System.out.println("\n¿" + usuario1.getNombre() + " es mayor de edad? " + usuario1.esMayorDeEdad());
        System.out.println("¿" + usuario2.getNombre() + " es mayor de edad? " + usuario2.esMayorDeEdad());

        // Cambiar nombre de Tokio a Nairobi
        usuario2.cambiarNombre("Nairobi");
        usuario2.saludar(); // Hola, soy Nairobi...
    }
}

