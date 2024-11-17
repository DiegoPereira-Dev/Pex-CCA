document.addEventListener('DOMContentLoaded', () => {
  function setActive(element) {
      console.log("função setActive chamada");

      // Remove a classe 'active' de todos os links
      document.querySelectorAll('.nav-links').forEach(link => {
          link.classList.remove('active');
      });

      // Adiciona a classe 'active' ao link clicado
      element.classList.add('active');

      // Seleciona o elemento border-slider
      const borderSlider = document.querySelector('.border-slider');

      // Obtém a posição e tamanho do link clicado
      const buttonRect = element.getBoundingClientRect();

      // Obtém a posição do contêiner pai do link
      const parentRect = element.closest('.nav').getBoundingClientRect();

      // Define a largura e posição do slider
      borderSlider.style.width = `${buttonRect.width}px`;
      borderSlider.style.left = `${buttonRect.left - parentRect.left}px`;

      console.log(`Slider ajustado: largura=${borderSlider.style.width}, esquerda=${borderSlider.style.left}`);
  }

  document.querySelectorAll('.nav-links').forEach(link => {
      link.addEventListener('click', function () {
          setActive(this);
      });
  });
});

/* function setActive(element) {
  document.querySelectorAll('.nav-links').forEach(link => {
    link.classList.remove('active');
  });
  element.classList.add('active');

  document.querySelectorAll('.nav-links').forEach(link => {
    link.classList.remove('active');
  });

  const borderSlider = document.querySelector('.border-slider');

  const buttonRect = element.getBoundingClientRect();
  const parentRect = element.parentElement.parentElement.getBoundingClientRect();

  borderSlider.style.width = `${buttonRect.width}px`;
  borderSlider.style.left = `${buttonRect.left - parentRect.left}px`;
}
document.querySelectorAll('.nav-links').forEach(link => {
  link.classList.remove('active');
}); */
