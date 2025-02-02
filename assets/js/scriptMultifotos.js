document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".open-modal");
    const carouselInner = document.getElementById("carouselItems");
    
    images.forEach((img, index) => {
        img.addEventListener("click", function () {
            carouselInner.innerHTML = "";
            images.forEach((image, i) => {
                const activeClass = i === index ? "active" : "";
                carouselInner.innerHTML += `
                    <div class="carousel-item ${activeClass}">
                        <img src="${image.src}" class="d-block w-100" alt="Imagem ${i + 1}">
                    </div>
                `;
            });
            new bootstrap.Modal(document.getElementById("photoModal")).show();
        });
    });
});