document.addEventListener('DOMContentLoaded', function() {
    const filterButton = document.querySelector('.navegação-footer button');
    const filterMenu = document.querySelector('.filtro-vagas');
    const mainContent = document.querySelector('main');

    // Alternar visibilidade do menu de filtro ao clicar no botão
    filterButton.addEventListener('click', function(event) {
        event.stopPropagation();
        filterMenu.classList.toggle('active');
    });

    // Fechar o menu de filtro ao clicar fora dele
    mainContent.addEventListener('click', function() {
        if (filterMenu.classList.contains('active')) {
            filterMenu.classList.remove('active');
        }
    });

    // Fechar o menu de filtro ao clicar em uma das opções
    filterMenu.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            filterMenu.classList.remove('active');
        }
    });

    // Impedir que o clique no menu de filtro feche o menu
    filterMenu.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
