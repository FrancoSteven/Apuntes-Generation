let contador = 0;

const spanContador = document.getElementById("contador");
const btnSumar = document.getElementById("sumar");
const btnResetear = document.getElementById("resetear");

btnSumar.addEventListener("click", () => {
  contador++;
  spanContador.textContent = contador;
});

btnResetear.addEventListener("click", () => {
  contador = 0;
  spanContador.textContent = contador;
});
