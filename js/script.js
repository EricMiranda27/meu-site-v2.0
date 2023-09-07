const minhaFoto = document.querySelector('.minha-foto');

minhaFoto.addEventListener('click', function() {
    this.classList.add('animacao-foto');

    this.addEventListener('animationend', () => {
        this.classList.remove('animacao-foto');
    });
});
