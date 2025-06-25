package semana6.ejercicio;

import semana6.ejercicio.Models.*;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        GestorEstudiantes gestorEstudiantes = new GestorEstudiantes();
        GestorCursos gestorCursos = new GestorCursos();
        GestorNotas gestorNotas = new GestorNotas();

        while (true) {
            System.out.println("\n========= MENÚ =========");
            System.out.println("1. Gestión de Estudiantes");
            System.out.println("2. Gestión de Cursos");
            System.out.println("3. Gestión de Notas");
            System.out.println("0. Salir");
            System.out.print("Elige una opción: ");
            int opcion = sc.nextInt();
            sc.nextLine(); // limpiar buffer

            switch (opcion) {
                case 1:
                    System.out.println("\n--- GESTIÓN DE ESTUDIANTES ---");
                    System.out.print("Nombre: ");
                    String nombre = sc.nextLine();
                    System.out.print("Apellido: ");
                    String apellido = sc.nextLine();
                    System.out.print("Matrícula: ");
                    int matricula = sc.nextInt();
                    System.out.print("Calificación: ");
                    int calificacion = sc.nextInt();
                    System.out.print("Año: ");
                    int año = sc.nextInt();
                    sc.nextLine();
                    Estudiante e = new Estudiante(nombre, apellido, matricula, calificacion, año);
                    gestorEstudiantes.agregarEstudiante(e);
                    System.out.println("Estudiante agregado.");
                    gestorEstudiantes.mostrarTodos();
                    break;

                case 2:
                    System.out.println("\n--- GESTIÓN DE CURSOS ---");
                    System.out.print("Curso: ");
                    String curso = sc.nextLine();
                    System.out.print("Matrícula del estudiante: ");
                    int mat = sc.nextInt();
                    sc.nextLine();
                    Estudiante estudianteCurso = gestorEstudiantes.obtenerEstudiante(mat);
                    if (estudianteCurso != null) {
                        gestorCursos.agregarEstudianteACurso(curso, estudianteCurso);
                        System.out.println("Estudiante agregado al curso.");
                    } else {
                        System.out.println("Estudiante no encontrado.");
                    }
                    gestorCursos.mostrarEstudiantesDeCurso(curso);
                    break;

                case 3:
                    System.out.println("\n--- GESTIÓN DE NOTAS ---");
                    System.out.print("Matrícula: ");
                    int m = sc.nextInt();
                    sc.nextLine();
                    Estudiante estudianteNota = gestorEstudiantes.obtenerEstudiante(m);
                    if (estudianteNota != null) {
                        gestorNotas.agregar(estudianteNota);
                        System.out.print("Nueva nota: ");
                        int nuevaNota = sc.nextInt();
                        sc.nextLine();
                        gestorNotas.actualizarNota(m, nuevaNota);
                        gestorNotas.mostrarNota(m);
                    } else {
                        System.out.println("Estudiante no encontrado.");
                    }
                    break;

                case 0:
                    System.out.println("Saliendo...");
                    return;

                default:
                    System.out.println("Opción inválida.");
            }
        }
    }
}
