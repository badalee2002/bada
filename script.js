// JavaScript hace que los botones funcionen.

// Cuando hago clic, aparece la dirección de mi página.
const boton = document.getElementById("boton-enlace");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  mensaje.textContent = "Mi página es: https://badalee2002.github.io/bada/";
});

// Abro y cierro el menú del celular.
const botonMenu = document.getElementById("boton-menu");
const menu = document.getElementById("menu");

botonMenu.addEventListener("click", function () {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});
