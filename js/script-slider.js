//Slider tarjetas medicamentos
document.addEventListener("DOMContentLoaded", function() {
    const tarjetas = document.querySelectorAll(".fondo-tarjeta");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let currentIndex = 0;

    function mostrarTarjeta(index) {
        tarjetas.forEach((tarjeta, i) => {
            tarjeta.classList.toggle("active", i === index);
        });
    }

    mostrarTarjeta(currentIndex);

    nextButton.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % tarjetas.length;
        mostrarTarjeta(currentIndex);
    });

    prevButton.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + tarjetas.length) % tarjetas.length;
        mostrarTarjeta(currentIndex);
    });
});
