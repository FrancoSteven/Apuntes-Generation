
---
## 📌 **3. Trabajo con Ramas (Branching)**

### 🔹 Crear una nueva rama
```bash
git branch nueva-rama
```
👉 Crea una nueva rama llamada `nueva-rama`.

### 🔹 Listar todas las ramas
```bash
git branch
```
👉 Muestra las ramas disponibles.

### 🔹 Cambiar a otra rama
```bash
git checkout nueva-rama
```
👉 Cambia a la rama `nueva-rama`.

### 🔹 Crear y cambiar a una nueva rama en un solo paso
```bash
git checkout -b nueva-rama
```
👉 Crea y cambia a `nueva-rama` al mismo tiempo.

### 🔹 Fusionar una rama con la rama actual
```bash
git merge otra-rama
```
👉 Fusiona `otra-rama` con la rama actual.

### 🔹 Eliminar una rama local
```bash
git branch -d nombre-rama
```
👉 Borra `nombre-rama` si ya ha sido fusionada.

### 🔹 Eliminar una rama remota
```bash
git push origin --delete nombre-rama
```
👉 Elimina la rama `nombre-rama` en el repositorio remoto.


