
const galeriaItens = document.querySelectorAll('.galeria-item');
const videoModal = document.querySelector('#meuModal video');
const sourceModal = document.querySelector('#meuModal source');
const legendaModal = document.querySelector('#legenda-modal');
const modal = document.querySelector('#meuModal');
const fecharBtn = document.querySelector('#fechar-btn');
const main = document.querySelector('#spw');
const titulo = document.querySelector('#titulo-principal');
const galery = document.querySelector('#galeria-spw');


// FOR EACH PARA CADA UM MAIS A CONVERSAO DE GIF PARA VIDEO!!\\

galeriaItens.forEach(item => {
    item.addEventListener('click', () => {

        const imagemSrc = item.querySelector('img').src;
        const textoDesc = item.querySelector('.descriçao-secundaria-spw').innerText;

        // MUITO IMNPORTANTE PARA EU NAO PERDER O TEMPO DE CONVERTER UM POR UM!!\\
        const videoSrc = imagemSrc.replace('/GIF/', '/MP4/').replace('.gif', '.mp4');


        sourceModal.src = videoSrc;
        legendaModal.innerText = textoDesc;

        videoModal.load();
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
    // EU COLOCEI PARA QUANDO EU FECHAR O BOTAO O VIDEO PAUSAR PARA NAO ATRAPLAHAR NO SOM!!\\
    videoModal.pause();
});
