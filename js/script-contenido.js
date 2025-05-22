//cargar el contenido  de index.html del JSON en los parrafos
document.addEventListener("DOMContentLoaded", function () {
    // Cargar el archivo JSON
    fetch("/contenido/contenido-index.json")
        .then(response => response.json()) // Convertir la respuesta a JSON
        .then(data => {
            // Iterar sobre las claves del JSON y asignarlas a los <p> con el id correspondiente
            Object.keys(data).forEach(key => {
                let paragraph = document.getElementById(key);
                if (paragraph) {
                    paragraph.textContent = data[key]; // Insertar el contenido en el <p>
                }
            });
        })
        .catch(error => console.error("Error cargando el JSON:", error));
});

//cargar el contenido de patologias.html del JSON en los parrafos
document.addEventListener("DOMContentLoaded", function () {
    // Cargar el archivo JSON
    fetch("/contenido/contenido-patologias.json")
        .then(response => response.json()) // Convertir la respuesta a JSON
        .then(data => {
            // Iterar sobre las claves del JSON y asignarlas a los <p> con el id correspondiente
            Object.keys(data).forEach(key => {
                let paragraph = document.getElementById(key);
                if (paragraph) {
                    paragraph.textContent = data[key]; // Insertar el contenido en el <p>
                }
            });
        })
        .catch(error => console.error("Error cargando el JSON:", error));
});


//cargar el contenido  de antipsicoticos.html del JSON en los parrafos
document.addEventListener("DOMContentLoaded", function () {
    // Cargar el archivo JSON
    fetch("/contenido/contenido-antipsicoticos.json")
        .then(response => response.json()) // Convertir la respuesta a JSON
        .then(data => {
            // Iterar sobre las claves del JSON y asignarlas a los <p> con el id correspondiente
            Object.keys(data).forEach(key => {
                let paragraph = document.getElementById(key);
                if (paragraph) {
                    paragraph.textContent = data[key]; // Insertar el contenido en el <p>
                }
            });
        })
        .catch(error => console.error("Error cargando el JSON:", error));
});

//cargar el contenido  de antidepresivos.html del JSON en los parrafos
document.addEventListener("DOMContentLoaded", function () {
    // Cargar el archivo JSON
    fetch("/contenido/contenido-antidepresivos.json")
        .then(response => response.json()) // Convertir la respuesta a JSON
        .then(data => {
            // Iterar sobre las claves del JSON y asignarlas a los <p> con el id correspondiente
            Object.keys(data).forEach(key => {
                let paragraph = document.getElementById(key);
                if (paragraph) {
                    paragraph.textContent = data[key]; // Insertar el contenido en el <p>
                }
            });
        })
        .catch(error => console.error("Error cargando el JSON:", error));
});

//cargar el contenido  de eutimizantes.html del JSON en los parrafos
document.addEventListener("DOMContentLoaded", function () {
    // Cargar el archivo JSON
    fetch("/contenido/contenido-eutimizantes.json")
        .then(response => response.json()) // Convertir la respuesta a JSON
        .then(data => {
            // Iterar sobre las claves del JSON y asignarlas a los <p> con el id correspondiente
            Object.keys(data).forEach(key => {
                let paragraph = document.getElementById(key);
                if (paragraph) {
                    paragraph.textContent = data[key]; // Insertar el contenido en el <p>
                }
            });
        })
        .catch(error => console.error("Error cargando el JSON:", error));
});

//cargar el contenido  de ansioliticos.html del JSON en los parrafos
document.addEventListener("DOMContentLoaded", function () {
    // Cargar el archivo JSON
    fetch("/contenido/contenido-ansioliticos.json")
        .then(response => response.json()) // Convertir la respuesta a JSON
        .then(data => {
            // Iterar sobre las claves del JSON y asignarlas a los <p> con el id correspondiente
            Object.keys(data).forEach(key => {
                let paragraph = document.getElementById(key);
                if (paragraph) {
                    paragraph.textContent = data[key]; // Insertar el contenido en el <p>
                }
            });
        })
        .catch(error => console.error("Error cargando el JSON:", error));
});

//cargar el contenido  de contencion.html del JSON en los parrafos
document.addEventListener("DOMContentLoaded", function () {
    // Cargar el archivo JSON
    fetch("/contenido/contenido-contencion.json")
        .then(response => response.json()) // Convertir la respuesta a JSON
        .then(data => {
            // Iterar sobre las claves del JSON y asignarlas a los <p> con el id correspondiente
            Object.keys(data).forEach(key => {
                let paragraph = document.getElementById(key);
                if (paragraph) {
                    paragraph.textContent = data[key]; // Insertar el contenido en el <p>
                }
            });
        })
        .catch(error => console.error("Error cargando el JSON:", error));
});