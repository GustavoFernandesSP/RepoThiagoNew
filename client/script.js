

const stories = {
    1: { title: "História 1", text: "Essa é a história do card 1..." },
    2: { title: "História 2", text: "Essa é a história do card 2..." },
    3: { title: "História 3", text: "Essa é a história do card 3..." },
    4: { title: "História 4", text: "Essa é a história do card 4..." },
    5: { title: "História 5", text: "Essa é a história do card 5..." },
    6: { title: "História 6", text: "Essa é a história do card 6..." },
    7: { title: "História 7", text: "Essa é a história do card 7..." },
    8: { title: "História 8", text: "Essa é a história do card 8..." }
};

function toggleMenu() {
    const menu = document.querySelector('.menu-desktop');
    const button = document.querySelector('.hamburguer');

    if (menu.style.display === "block") {
        menu.style.display = "none";
        button.innerHTML = "☰"; // Ícone de menu
    } else {
        menu.style.display = "block";
        button.innerHTML = "✖"; // Ícone de fechar
    }
}


document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM carregado! Executando o carrossel...");

    const images = [
        "assets/imgs/FotosThiagoAjudando/1.png", 
        "assets/imgs/FotosThiagoAjudando/2.png", 
        "assets/imgs/FotosThiagoAjudando/3.png", 
        "assets/imgs/FotosThiagoAjudando/4.png", 
        "assets/imgs/FotosThiagoAjudando/5.png", 
        "assets/imgs/FotosThiagoAjudando/6.png", 
        "assets/imgs/FotosThiagoAjudando/7.png", 
        "assets/imgs/FotosThiagoAjudando/8.png", 
        "assets/imgs/FotosThiagoAjudando/9.png", 
        "assets/imgs/FotosThiagoAjudando/10.png", 
     
    ];

    let currentIndex = 0;

    function updateCarousel() {
        const cards = document.querySelectorAll(".carddd");

        cards.forEach((card, i) => {
            let imageIndex = (currentIndex + i) % images.length;
            card.style.backgroundImage = `url('${images[imageIndex]}')`;
            console.log(`Imagem ${i + 1}:`, images[imageIndex]); // Verifica no console
        });
    }

    document.getElementById("nextBtn").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    document.getElementById("prevBtn").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    updateCarousel();



});


              


function toggleFaq(element) {
            element.classList.toggle("active");
        }


       




function showStory(id) {
    const story = stories[id];
    document.getElementById("story-title").innerText = story.title;
    document.getElementById("story-text").innerText = story.text;
    document.getElementById("modal").style.display = "flex";
}


function closeStory() {
    document.getElementById("modal").style.display = "none";
}

