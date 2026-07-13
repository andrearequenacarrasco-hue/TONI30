window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").classList.add("hide");
        document.body.classList.add("loaded");

    }, 2500);

});


const texts = [

    "ENTRAR AL FESTIVAL",
    "DJ CALENTANDO MOTORES...",
    "NIVEL DE FIESTA: 30/30",
    "EDICIÓN ÚNICA",
    "BIENVENIDO AL TONI 30 FEST",
    "UNA NOCHE. UNA EDICIÓN.",
    "LA CUENTA ATRÁS HA TERMINADO",
    "QUE EMPIECE EL FESTIVAL"

];

const button = document.getElementById("festival-button");

let current = 0;


setInterval(() => {

    button.style.opacity = "0";

    setTimeout(() => {

        current++;

        if(current >= texts.length){
            current = 0;
        }

        button.textContent = texts[current];

        button.style.opacity = "1";

    },300);

},3500);