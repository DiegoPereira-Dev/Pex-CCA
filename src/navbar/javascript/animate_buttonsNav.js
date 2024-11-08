/* Animação de botões de navegação */
function setActive(element) {
    const buttons = document.querySelectorAll('.navbar-nav .nav-option a');
    buttons.forEach(button => button.classList.remove('active'));
  
    element.classList.add('active');
  }
  