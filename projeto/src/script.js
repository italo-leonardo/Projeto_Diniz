document.addEventListener("DOMContentLoaded", function () {
    // Referências aos botões e seções
    const pessoaFisicaBtn = document.querySelector('[aria-label="Cadastro para Pessoa Física"]');
    const pessoaJuridicaBtn = document.querySelector('[aria-label="Cadastro para Pessoa Jurídica"]');
    const infoComercialSection = document.querySelector('[aria-labelledby="info-comercial"]');

    // Ocultar a seção info-comercial inicialmente
    infoComercialSection.style.display = "none";

    // Adicionar evento de clique ao botão Pessoa Jurídica
    pessoaJuridicaBtn.addEventListener("click", function () {
        // Exibir a seção info-comercial
        infoComercialSection.style.display = "block";
    });

    // Adicionar evento de clique ao botão Pessoa Física
    pessoaFisicaBtn.addEventListener("click", function () {
        // Ocultar a seção info-comercial
        infoComercialSection.style.display = "none";
    });
});
