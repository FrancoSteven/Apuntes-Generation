// Importamos la función getRandomUser desde api.js
import { getRandomUser } from './api.js';

// ======================
// VARIABLES GLOBALES
// ======================
// Array global de usuarios, ahora sincronizado con Local Storage
export let users = [];

// Variables para edición y eliminación
let editingIndex = null;
let deleteIndex = null;

// ======================
// LOCAL STORAGE
// ======================

// Guarda el array de usuarios en Local Storage
function saveUsersToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(users));
}

// Carga el array de usuarios desde Local Storage
function loadUsersFromLocalStorage() {
    const storedUsers = localStorage.getItem('users');
    users = storedUsers ? JSON.parse(storedUsers) : [];
}

// ======================
// EVENTOS PRINCIPALES
// ======================
document.addEventListener('DOMContentLoaded', () => {
    // Cargamos usuarios almacenados antes de renderizar
    loadUsersFromLocalStorage();

    // Eventos de los botones y formulario
    document.getElementById('autoFillBtn').addEventListener('click', autoFillForm);
    document.getElementById('clearBtn').addEventListener('click', clearForm);
    document.getElementById('userForm').addEventListener('submit', handleSubmit);
    document.getElementById('saveEditBtn').addEventListener('click', saveEdit);
    document.getElementById('confirmDeleteBtn').addEventListener('click', confirmDelete);

    renderUsers();
});

// ======================
// FUNCIONES DEL FORMULARIO
// ======================

// Obtiene los datos del formulario
function getFormData() {
    return {
        fullName: document.getElementById('fullName').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        profileImage: document.getElementById('profileImage').src
    };
}

// Llena el formulario con datos de un usuario
function fillForm(user) {
    document.getElementById('fullName').value = user.fullName;
    document.getElementById('email').value = user.email;
    document.getElementById('phone').value = user.phone;
    document.getElementById('profileImage').src = user.profileImage;
}

// Auto-rellenar el formulario con datos de la API RandomUser
async function autoFillForm() {
    try {
        const user = await getRandomUser();
        fillForm(user);
        showToast('Formulario auto-rellenado con datos de RandomUser', 'success');
    } catch {
        showToast('Error al obtener datos de la API', 'danger');
    }
}

// Maneja el envío del formulario
function handleSubmit(e) {
    e.preventDefault();
    const userData = getFormData();

    if (!validateUser(userData)) return;

    users.push(userData);
    saveUsersToLocalStorage(); // Guardamos en Local Storage
    clearForm();
    renderUsers();
    showToast('Usuario agregado correctamente', 'success');
}

// Limpia el formulario
function clearForm() {
    document.getElementById('userForm').reset();
    document.getElementById('profileImage').src = 'https://via.placeholder.com/100x100/6c757d/ffffff?text=Foto';
}

// ======================
// RENDERIZADO DE USUARIOS
// ======================
export function renderUsers(filteredList = null) {
    const list = filteredList || users;
    const container = document.getElementById('usersList');
    document.getElementById('userCount').textContent = `${list.length} usuarios`;

    container.innerHTML = list.length
        ? list.map((u, i) => userCard(u, i)).join('')
        : `<div class="col-12 text-center text-muted py-5">No hay usuarios</div>`;
}

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
window.editUser = (index) => {
    editingIndex = index;
    const user = users[index];
    document.getElementById('editUserIndex').value = index;
    document.getElementById('editProfileImage').src = user.profileImage;
    document.getElementById('editFullName').value = user.fullName;
    document.getElementById('editEmail').value = user.email;
    document.getElementById('editPhone').value = user.phone;
    new bootstrap.Modal(document.getElementById('editModal')).show();
};

function saveEdit() {
    const index = editingIndex;
    if (index === null) return;

    const email = document.getElementById('editEmail').value.trim();
    const phone = document.getElementById('editPhone').value.trim();

    if (!validateEmail(email) || !validatePhone(phone)) {
        showToast('Datos inválidos al editar', 'danger');
        return;
    }

    users[index].email = email;
    users[index].phone = phone;
    saveUsersToLocalStorage(); // Guardamos cambios
    editingIndex = null;

    bootstrap.Modal.getInstance(document.getElementById('editModal')).hide();
    renderUsers();
    showToast('Usuario actualizado correctamente', 'success');
}

// ======================
// MODAL DE ELIMINACIÓN
// ======================
window.askDelete = (index) => {
    deleteIndex = index;
    document.getElementById('deleteUserName').textContent = users[index].fullName;
    new bootstrap.Modal(document.getElementById('deleteModal')).show();
};

function confirmDelete() {
    if (deleteIndex === null) return;
    users.splice(deleteIndex, 1);
    saveUsersToLocalStorage(); // Guardamos cambios
    deleteIndex = null;
    bootstrap.Modal.getInstance(document.getElementById('deleteModal')).hide();
    renderUsers();
    showToast('Usuario eliminado', 'warning');
}

// ======================
// VALIDACIONES
// ======================
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

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
    return /^[0-9+\-()\s]{7,15}$/.test(phone);
}

// ======================
// NOTIFICACIONES (TOAST)
// ======================
function showToast(message, type = 'primary') {
    const toast = document.getElementById('mainToast');
    toast.className = `toast align-items-center text-bg-${type} border-0`;
    document.getElementById('toastMessage').textContent = message;
    new bootstrap.Toast(toast).show();
}
