function setActive(element) {
  document.querySelectorAll('.nav-links').forEach(link => {
    link.classList.remove('active');
  });
  element.classList.add('active');

  const borderSlider = document.querySelector('.border-slider');

  const buttonRect = element.getBoundingClientRect();
  const parentRect = element.parentElement.parentElement.getBoundingClientRect();

  borderSlider.style.width = `${buttonRect.width}px`;
  borderSlider.style.left = `${buttonRect.left - parentRect.left}px`;
}
