document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".container-bar");

  if (!sidebar) {
    console.warn("No se encontró el elemento .container-bar");
    return;
  }

  const threshold = 30; // Distancia en píxeles desde el borde derecho

  document.body.addEventListener("mousemove", function (e) {
    if (window.innerWidth - e.clientX <= threshold) {
      sidebar.classList.add("show");
    } else {
      sidebar.classList.remove("show");
    }
  });
});