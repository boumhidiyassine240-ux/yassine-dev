 window.addEventListener("load", () => {

            let name = document.querySelector(".titulo-galeria");
            let intro = document.querySelector(".intro-loader");

            setTimeout(() => {
                name.style.opacity = '1';

                name.style.transform = "translateY(0px)";
            }, 300);

            setTimeout(() => {
                intro.style.top = "-100%";
            }, 1800);
        });