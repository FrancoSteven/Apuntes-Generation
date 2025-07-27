package semana5.funciones;

public class Calculadora {

    // Suma
    public static int sumar(int a, int b) {
        return a + b;
    }

    // Resta
    public static int restar(int a, int b) {
        return a - b;
    }

    // Multiplicación
    public static int multiplicar(int a, int b) {
        return a * b;
    }

    // División con validación
    public static double dividir(int a, int b) {
        if (b == 0) {
            System.out.println("⚠️ Error: No se puede dividir por cero.");
            return Double.NaN;
        }
        return (double) a / b;
    }

    // Potencia
    public static double potencia(int base, int exponente) {
        return Math.pow(base, exponente);
    }

    // Raíz cuadrada
    public static double raizCuadrada(double numero) {
        if (numero < 0) {
            System.out.println("⚠️ Error: No se puede calcular la raíz de un número negativo.");
            return Double.NaN;
        }
        return Math.sqrt(numero);
    }

    public static int modulo(int a, int b) {
        return a % b;
    }

    public static int valorAbsoluto(int numero) {
        return Math.abs(numero);
    }

    public static long redondear(double numero) {
        return Math.round(numero);
    }

}

