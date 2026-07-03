// ==========================================
// VANESSA SOLLO
// SCRIPT.JS
// ==========================================

// -------------------------------
// CARREGAR AGENDA
// -------------------------------

fetch("agenda.json")
    .then(response => response.json())
    .then(shows => {

        const container = document.getElementById("agenda-container");

        shows.forEach((show,index) => {

            let botaoIngresso = "";

            if (show.ingresso !== "") {

                botaoIngresso = `

                    <a
                        href="${show.ingresso}"
                        target="_blank"
                        class="btn-ingresso">

                        Comprar ingresso

                    </a>

                `;

            }

            container.innerHTML += `

                <div class="card-show"
style="animation-delay:${index*0.15}s">

                    <img
                        src="assets/agenda/${show.banner}"
                        alt="${show.local}">

                    <div class="card-info">

                        <div class="card-data">

                            ${show.data}

                        </div>

                        <div class="card-local">

                            ${show.local}

                        </div>

                        <div class="card-cidade">

                            ${show.cidade}

                        </div>

                        <div class="card-hora">

                            <i class="fa-regular fa-clock"></i>

                            ${show.hora}

                        </div>

                        ${botaoIngresso}

                    </div>

                </div>

            `;

        });

    })

    .catch(error => {

        console.error("Erro ao carregar agenda:", error);

    });


// ----------------------------------
// BOTÕES DO CARROSSEL
// ----------------------------------

const btnNext = document.getElementById("next");

const btnPrev = document.getElementById("prev");

btnNext.addEventListener("click", () => {

    document
        .getElementById("agenda-container")
        .scrollBy({

            left:380,

            behavior:"smooth"

        });

});

btnPrev.addEventListener("click", () => {

    document
        .getElementById("agenda-container")
        .scrollBy({

            left:-380,

            behavior:"smooth"

        });

});


// ----------------------------------
// MODAL DO VÍDEO
// ----------------------------------

const abrirVideo = document.getElementById("abrirVideo");

const fecharVideo = document.getElementById("fecharVideo");

const modal = document.getElementById("videoModal");

const video = document.getElementById("videoPlayer");

abrirVideo.addEventListener("click", () => {

    modal.style.display = "flex";

});

fecharVideo.addEventListener("click", () => {

    modal.style.display = "none";

    video.pause();

});

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

        video.pause();

    }

});


// ----------------------------------
// HEADER AO ROLAR
// ----------------------------------

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(0,0,0,.85)";
        header.style.backdropFilter = "blur(12px)";

    } else {

        header.style.background = "linear-gradient(to bottom, rgba(0,0,0,.70), transparent)";
        header.style.backdropFilter = "none";

    }

});
``