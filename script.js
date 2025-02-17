// Función para iniciar la música automáticamente cuando la página se carga
window.onload = function() {
  var audio = document.querySelector('audio');
  audio.play();
};

// Agregar animación al cargar la página
window.addEventListener('load', () => {
  document.querySelector('body').classList.add('fade-in');
});

// Añadir efectos de desvanecimiento en las secciones
document.querySelectorAll('section').forEach(section => {
  section.classList.add('fade-in');
});

// Menú de hamburguesa
document.getElementById('hamburger').addEventListener('click', () => {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
});