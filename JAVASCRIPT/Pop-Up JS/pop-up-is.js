const galeriaItens = document.querySelectorAll('.galeria-item');
const imagemModal = document.querySelector('#imagen-modal');
const sourceModal = document.querySelector('#modalconteudo , #imagen-modal');
const legendaModal = document.querySelector('#legenda-modal');
const modal = document.querySelector('#meuModal');
const fecharBtn = document.querySelector('#fechar-btn');
const main = document.querySelector('#IS');
const titulo = document.querySelector('#titulo-principal');
const galery = document.querySelector('#galeria-is'); 


// FOR EACH PARA CADA UM MAIS A CONVERSAO DE GIF PARA VIDEO!!\\
galeriaItens.forEach(item => {
    item.addEventListener('click', () => {

        const imagemSrc = item.querySelector('img').src;
        const textoDesc = item.querySelector('.descriçao-secundaria-is').innerText;



        imagemModal.src = imagemSrc;
        legendaModal.innerText = textoDesc;


        modal.style = "display:flex";
        main.style = "filter:blur(20px); opacity: 0.2;"
        titulo.style = "filter:blur(20px); opacity: 0.2;"
        galery.style = "filter:blur(20px); opacity: 0.2;"



    });
});


// PARA FECHAR O VIDEO QUE FOI INCOCADO NO GALERIA ITENS!!\\
fecharBtn.addEventListener('click', () => {
    modal.style.display = "none";
    main.style = "";
    titulo.style = "";
    galery.style = "";


});