// Selecionar as imagens e o modal
const images = document.querySelectorAll(".carousel-inner img");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.querySelector(".close");

// Adicionar evento de clique nas imagens
images.forEach((image) => {
  image.addEventListener("click", () => {
    modal.style.display = "flex"; // Exibir o modal
    modalImage.src = image.src; // Definir imagem do modal
    modalTitle.textContent = image.dataset.title; // Definir título
    modalDescription.textContent = image.dataset.description; // Definir descrição
  });
});

// Evento para fechar o modal ao clicar no botão de fechar
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fechar o modal ao clicar fora do conteúdo
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
