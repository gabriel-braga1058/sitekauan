// Exemplo de JavaScript para interação no site

// Função para adicionar uma classe ao cabeçalho quando a imagem for clicada
const header = document.querySelector('header');
const img = document.querySelector('img');

img.addEventListener('click', function() {
  header.classList.add('header-active');
});
