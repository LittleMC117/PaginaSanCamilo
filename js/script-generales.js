//Animación de aparecer y desaparecer contenido haciendo Scroll

document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll('.animado');

    function controlarAnimaciones() {
        let scrollTop = window.scrollY;
        let alturaVentana = window.innerHeight;

        elementos.forEach(el => {
            let posicionElemento = el.getBoundingClientRect().top + scrollTop;
            
            if (scrollTop + alturaVentana > posicionElemento + 50) {
                el.classList.add("mostrar");  // Aparece cuando entra en la vista
            } 
            
            if (scrollTop + alturaVentana < posicionElemento + 50) {
                el.classList.remove("mostrar"); // Desaparece al salir de la vista
            }
        });
    }

    window.addEventListener("scroll", controlarAnimaciones);
    controlarAnimaciones(); // Llamar al cargar la página por si ya hay elementos en vista
});

//Abrir el menú hamburguesa
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu-nav ul");
    const hamburguer = document.querySelector(".hamburguer");
    const body = document.body;

    hamburguer.addEventListener("click", function () {
        menu.classList.toggle("active");
        body.classList.toggle("menu-abierto"); // Agregar/quitar clase al body
    });
});