// Importamos la función getRandomUser desde api.js
// El "./" indica que el archivo api.js está en la misma carpeta que este script
import { getRandomUser } from './api.js';

// Array global para almacenar los usuarios creados
export let users = [];  // en vez de let users = [];
// Variable para identificar el índice del usuario que se está editando
let editingIndex = null;
// Variable para identificar el índice del usuario que se desea eliminar
let deleteIndex = null;

// ======================
// EVENTOS PRINCIPALES
// ======================
document.addEventListener('DOMContentLoaded', () => {
    // Al hacer clic en el botón "Auto-rellenar", ejecutamos autoFillForm()
    document.getElementById('autoFillBtn').addEventListener('click', autoFillForm);
    // Al hacer clic en "Limpiar", vaciamos el formulario con clearForm()
    document.getElementById('clearBtn').addEventListener('click', clearForm);
    // Al enviar el formulario, ejecutamos handleSubmit()
    document.getElementById('userForm').addEventListener('submit', handleSubmit);
    // Botón de guardar en el modal de edición
    document.getElementById('saveEditBtn').addEventListener('click', saveEdit);
    // Botón de confirmar en el modal de eliminar
    document.getElementById('confirmDeleteBtn').addEventListener('click', confirmDelete);
    // Renderizamos la lista de usuarios vacía al inicio
    renderUsers();
});

// ======================
// FUNCIONES DEL FORMULARIO
// ======================

// Obtiene los datos del formulario actual y los devuelve como objeto
function getFormData() {
    return {
        fullName: document.getElementById('fullName').value.trim(), // Nombre completo
        email: document.getElementById('email').value.trim(),       // Email
        phone: document.getElementById('phone').value.trim(),       // Teléfono
        profileImage: document.getElementById('profileImage').src   // Foto de perfil actual
    };
}
/*
{
  fullName: "Juan Pérez",
  email: "juan@gmail.com",
  phone: "+123456789",
  profileImage: "https://ejemplo.com/foto.jpg"
}


Diferencia Clave
- Objeto JS: Estructura manipulable dentro de tu código.
- JSON: Texto (string) que necesitas convertir a objeto para usarlo.

const jsonString = JSON.stringify(user);
console.log(jsonString);
// Resultado: {"fullName":"Juan Pérez","email":"juan@gmail.com", ...}

const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.fullName); // Juan Pérez


*/


// Llena el formulario con los datos de un usuario existente
function fillForm(user) {
    document.getElementById('fullName').value = user.fullName;
    document.getElementById('email').value = user.email;
    document.getElementById('phone').value = user.phone;
    document.getElementById('profileImage').src = user.profileImage;
}

// Obtiene un usuario aleatorio de la API y lo usa para llenar el formulario
async function autoFillForm() {
    try {
        const user = await getRandomUser(); // Llamamos a la API
        fillForm(user);                     // Llenamos el formulario con los datos obtenidos
        showToast('Formulario auto-rellenado con datos de RandomUser', 'success');
    } catch {
        showToast('Error al obtener datos de la API', 'danger');
    }
}

// Maneja el envío del formulario: valida y agrega un usuario a la lista
function handleSubmit(e) {
    e.preventDefault();         // Evitamos que la página se recargue al enviar el form
    const userData = getFormData(); // Obtenemos datos del formulario

    // Validamos la información
    if (!validateUser(userData)) return;

    // Agregamos el usuario al array de usuarios
    users.push(userData);
    console.log(users);
    clearForm();    // Limpiamos el formulario
    renderUsers();  // Actualizamos la lista
    showToast('Usuario agregado correctamente', 'success');
}

// Limpia el formulario y restablece la foto de perfil por defecto
function clearForm() {
    document.getElementById('userForm').reset();
    document.getElementById('profileImage').src = 'https://via.placeholder.com/100x100/6c757d/ffffff?text=Foto';
}

// ======================
// RENDERIZADO DE USUARIOS
// ======================

// Muestra la lista de usuarios en el contenedor correspondiente.
// Si recibe una lista filtrada, muestra solo esos resultados.
export function renderUsers(filteredList = null) {
    const list = filteredList || users; // Usa la lista filtrada o el array global
    const container = document.getElementById('usersList'); // Contenedor donde irán las tarjetas
    document.getElementById('userCount').textContent = `${list.length} usuarios`; // Actualizamos contador

    // Si hay usuarios, construimos las tarjetas con map. Si no, mostramos mensaje vacío.
    container.innerHTML = list.length
        ? list.map((u, i) => userCard(u, i)).join('')
        : `<div class="col-12 text-center text-muted py-5">No hay usuarios</div>`;
}


// Crea la estructura HTML para mostrar un usuario en una tarjeta
function userCard(user, index) {
    return `
        <div class="col-md-6 mb-3">
            <div class="card shadow-sm">
                <div class="card-body text-center">
                    <img src="${user.profileImage}" class="rounded-circle mb-2" width="80">
                    <h5>${user.fullName}</h5>
                    <p>${user.email}</p>
                    <p>${user.phone}</p>
                    <button class="btn btn-sm btn-outline-primary" onclick="editUser(${index})">Editar</button>
                    <button class="btn btn-sm btn-outline-danger" onclick="askDelete(${index})">Eliminar</button>
                </div>
            </div>
        </div>`;
}

// ======================
// MODAL DE EDICIÓN
// ======================

// Abre el modal para editar el correo y teléfono de un usuario
window.editUser = (index) => {
    editingIndex = index;
    const user = users[index];
    document.getElementById('editUserIndex').value = index;
    document.getElementById('editProfileImage').src = user.profileImage;
    document.getElementById('editFullName').value = user.fullName; // Solo lectura (opcional)
    document.getElementById('editEmail').value = user.email;
    document.getElementById('editPhone').value = user.phone;

    // Mostramos el modal usando Bootstrap
    new bootstrap.Modal(document.getElementById('editModal')).show();
};

// Guarda los cambios realizados en el modal de edición
function saveEdit() {
    const index = editingIndex;
    if (index === null) return;

    const email = document.getElementById('editEmail').value.trim();
    const phone = document.getElementById('editPhone').value.trim();

    // Validamos email y teléfono antes de guardar
    if (!validateEmail(email) || !validatePhone(phone)) {
        showToast('Datos inválidos al editar', 'danger');
        return;
    }

    // Actualizamos el usuario en el array
    users[index].email = email;
    users[index].phone = phone;

    editingIndex = null;
    // Cerramos el modal
    bootstrap.Modal.getInstance(document.getElementById('editModal')).hide();
    renderUsers();  // Volvemos a mostrar la lista actualizada
    showToast('Usuario actualizado correctamente', 'success');
}

// ======================
// MODAL DE ELIMINACIÓN
// ======================

// Abre el modal de confirmación para eliminar un usuario
window.askDelete = (index) => {
    deleteIndex = index;
    document.getElementById('deleteUserName').textContent = users[index].fullName;
    new bootstrap.Modal(document.getElementById('deleteModal')).show();
};

// Confirma y elimina el usuario seleccionado
function confirmDelete() {
    if (deleteIndex === null) return;
    users.splice(deleteIndex, 1); // Eliminamos al usuario
    deleteIndex = null;
    bootstrap.Modal.getInstance(document.getElementById('deleteModal')).hide();
    renderUsers();
    showToast('Usuario eliminado', 'warning');
}

// ======================
// VALIDACIONES SIMPLES
// ======================

// Valida un usuario completo (nombre, email y teléfono)
function validateUser(user) {
    if (!user.fullName || user.fullName.length < 2) {
        showToast('Nombre inválido', 'danger');
        return false;
    }
    if (!validateEmail(user.email)) {
        showToast('Email inválido', 'danger');
        return false;
    }
    if (!validatePhone(user.phone)) {
        showToast('Teléfono inválido', 'danger');
        return false;
    }
    return true;
}

// Valida formato de correo usando una expresión regular básica
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Valida formato de teléfono (números, +, -, espacios y paréntesis)
function validatePhone(phone) {
    return /^[0-9+\-()\s]{7,15}$/.test(phone);
}

// ======================
// NOTIFICACIONES (TOAST)
// ======================

// Muestra una notificación flotante (toast) con un mensaje y tipo de color (Bootstrap)
function showToast(message, type = 'primary') {
    const toast = document.getElementById('mainToast');
    toast.className = `toast align-items-center text-bg-${type} border-0`;
    document.getElementById('toastMessage').textContent = message;
    new bootstrap.Toast(toast).show();
}
