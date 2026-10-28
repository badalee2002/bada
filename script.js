// SCRIPT.JS = LOS BOTONES
// Usamos las mismas ideas del mini proyecto de tarjeta de clase.

// 1. Buscamos el botón y el párrafo que cambiará de mensaje.
const botonEnlace = document.getElementById("boton-enlace");
const mensaje = document.getElementById("mensaje");

// 2. Cuando hacemos clic, aparece mi dirección web.
botonEnlace.addEventListener("click", function () {
  mensaje.textContent = "Visita mi página: https://badalee2002.github.io/bada/";
});

// 3. Buscamos el botón del menú y sus enlaces.
const botonMenu = document.getElementById("boton-menu");
const menu = document.getElementById("menu");

// 4. Con if y else decidimos si el menú se ve o se esconde.
botonMenu.addEventListener("click", function () {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});
