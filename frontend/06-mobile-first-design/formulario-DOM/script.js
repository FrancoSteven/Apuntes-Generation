// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {

    // Seleccionar los elementos del DOM
    const form = document.getElementById('reserva-form');
    const btnEnviar = document.getElementById('btnEnviar');
    const nombreInput = document.getElementById('nombre');
    const llegadaInput = document.getElementById('llegada');
    const salidaInput = document.getElementById('salida');
    const habitacionSelect = document.getElementById('habitacion');

    // 1. Cambiar el texto del botón de envío
    btnEnviar.textContent = 'Reservar Ahora';

    // 2. Cambiar el color del botón con mouseover y mouseout
    const colorOriginal = '#28a745';
    const colorHover = '#218838'; // Un verde más oscuro

    btnEnviar.addEventListener('mouseover', () => {
        btnEnviar.style.backgroundColor = colorHover;
    });

    btnEnviar.addEventListener('mouseout', () => {
        btnEnviar.style.backgroundColor = colorOriginal;
    });
    
    // 3. Añadir evento click para validar y mostrar la alerta
    form.addEventListener('submit', function(event) {
        // Prevenir el envío real del formulario para manejarlo con JS
        event.preventDefault(); 
        
        // Obtener los valores de los campos en el momento del click
        const nombre = nombreInput.value;
        const llegada = llegadaInput.value;
        const salida = salidaInput.value;
        const habitacion = habitacionSelect.value;
        
        // 4. Validar que las fechas no estén vacías
        if (llegada === '' || salida === '') {
            alert('Por favor, completa las fechas de llegada y salida.');
            return; // Detiene la ejecución si la validación falla
        }

        // Si la validación es exitosa, mostrar la alerta de confirmación
        const mensaje = `¡Reserva confirmada, ${nombre}! 🎉\n\n` +
                        `Fecha de Llegada: ${llegada}\n` +
                        `Tipo de Habitación: ${habitacion}`;
        
        alert(mensaje);
        
        // Opcional: Limpiar el formulario después de la reserva
        form.reset();
    });

});