// Página personal de Bada Francesca Lee Grande
// Curso: Legal Tech | 0B TEO | 2274-5110
// Código JavaScript separado del HTML y del CSS.

document.addEventListener("DOMContentLoaded", () => {
  // Año del pie de página.
  const year = document.querySelector("#current-year");
  if (year) year.textContent = new Date().getFullYear();

  // Menú accesible para pantallas pequeñas.
  const menuButton = document.querySelector("#menu-toggle");
  const nav = document.querySelector("#main-nav");
  if (menuButton && nav) {
    const closeMenu = () => {
      nav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menú");
    };

    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  // Botón para copiar la dirección pública de la página.
  const copyButton = document.querySelector("#copy-link");
  const feedback = document.querySelector("#copy-feedback");
  if (copyButton && feedback) {
    copyButton.addEventListener("click", async () => {
      const url = window.location.protocol === "file:"
        ? "https://badalee2002.github.io/bada/"
        : window.location.href.split("#")[0];
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(url);
        } else {
          const input = document.createElement("textarea");
          input.value = url;
          input.style.position = "fixed";
          input.style.opacity = "0";
          document.body.append(input);
          input.select();
          if (!document.execCommand("copy")) throw new Error("No se pudo copiar");
          input.remove();
        }
        feedback.textContent = "¡Listo! Enlace copiado al portapapeles ♡";
      } catch {
        feedback.textContent = "Puedes copiar este enlace: " + url;
      }
    });
  }
});
