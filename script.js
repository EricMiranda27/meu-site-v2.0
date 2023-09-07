// script.js
const minhaFoto = document.querySelector('.minha-foto');

minhaFoto.addEventListener('click', function() {
    this.classList.add('animacao-foto');

    // Adicione um ouvinte de evento para detectar o fim da animação
    this.addEventListener('animationend', () => {
        this.classList.remove('animacao-foto'); // Remove a classe após o término da animação
    });
});
