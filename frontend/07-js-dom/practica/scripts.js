console.log(document); // Muestra todo el árbol DOM

// | Método                           | Uso común                                       |
// | -------------------------------- | ----------------------------------------------- |
// | `getElementById(id)`             | Selecciona por ID                               |
// | `getElementsByClassName(clase)`  | Todos los elementos con una clase               |
// | `getElementsByTagName(etiqueta)` | Todos los elementos por tipo (`p`, `div`, etc.) |
// | `querySelector(selector)`        | Primer match por selector CSS                   |
// | `querySelectorAll(selector)`     | Todos los matches por selector CSS              |


const parrafo = document.querySelector('.texto');

// parrafo.textContent = 'Texto cambiado';