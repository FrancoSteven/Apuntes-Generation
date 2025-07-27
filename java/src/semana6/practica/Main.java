package semana6.practica;

import semana6.practica.models.Curso;
import semana6.practica.models.Estudiante;

public class Main {
    public static void main(String[] args) {

        System.out.println("========== CREANDO ESTUDIANTES ==========\n");

        // Crear estudiantes
        Estudiante estudiante1 = new Estudiante("Ana", "Pérez", 101, 85, 1);
        Estudiante estudiante2 = new Estudiante("Carlos", "López", 102, 55, 1);
        Estudiante estudiante3 = new Estudiante("Lucía", "Martínez", 103, 92, 1);

        // Mostrar información de cada estudiante
        estudiante1.mostrarInformacion();
        System.out.println();
        estudiante2.mostrarInformacion();
        System.out.println();
        estudiante3.mostrarInformacion();
        System.out.println();

        System.out.println("========== VERIFICANDO PROMOCIONES ==========\n");

        estudiante1.avanzarDeAño();
        estudiante2.avanzarDeAño();
        System.out.println();

        System.out.println("========== CREANDO CURSO Y GESTIONANDO INSCRIPCIONES ==========\n");

        // Crear un curso
        Curso cursoJava = new Curso("Java Básico", "Prof. Ramírez", 2024);

        // Inscribir estudiantes
        cursoJava.inscribirEstudiante(estudiante1);
        cursoJava.inscribirEstudiante(estudiante2);
        cursoJava.inscribirEstudiante(estudiante3);
        System.out.println();

        // Mostrar cantidad de estudiantes
        System.out.println("Total de estudiantes inscritos: " + cursoJava.contarEstudiantes() + "\n");

        // Mostrar mejor calificación
        System.out.println("Mejor calificación del curso: " + cursoJava.obtenerMejorCalificacion() + "\n");

        System.out.println("========== DESINSCRIPCIÓN ==========\n");

        // Desinscribir estudiante
        cursoJava.desinscribirEstudiante(estudiante2);
        System.out.println();

        // Mostrar cantidad final de estudiantes
        System.out.println("Cantidad actualizada de estudiantes: " + cursoJava.contarEstudiantes());

        System.out.println("\n========== FIN DEL PROGRAMA ==========");
    }
}