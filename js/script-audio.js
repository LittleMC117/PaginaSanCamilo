/* Scripts Audios Index */

//Script Audio Bienvenida
document.addEventListener("DOMContentLoaded", () => {
    const bienvenidaSection = document.querySelector(".bienvenida");
    const playPauseBtn = bienvenidaSection.querySelector(".playPause");
    const resetBtn = bienvenidaSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(bienvenidaSection.querySelectorAll("h3,p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h3 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio Proposito
document.addEventListener("DOMContentLoaded", () => {
    const propositoSection = document.querySelector(".proposito");
    const playPauseBtn = propositoSection.querySelector(".playPause");
    const resetBtn = propositoSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(propositoSection.querySelectorAll("h3,p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h3 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

// Script Audio Glosario
document.addEventListener("DOMContentLoaded", () => {
    const glosarioSection = document.querySelector(".glosario");
    const playPauseBtn = glosarioSection.querySelector(".playPause");
    const resetBtn = glosarioSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(glosarioSection.querySelectorAll("h3, h4, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h3, h4 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});


/* Scripts Audios Antipsicoticos */

//Script Audio Antipsicoticos.contenido
document.addEventListener("DOMContentLoaded", () => {
    const antiaccionesSection = document.querySelector(".ant-cont");
    const playPauseBtn = antiaccionesSection.querySelector(".playPause");
    const resetBtn = antiaccionesSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(antiaccionesSection.querySelectorAll("h3, h4, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h3, h4 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio Efectos-Anticolinergicos
document.addEventListener("DOMContentLoaded", () => {
    const antiefectantiSection = document.querySelector(".efectos-anti");
    const playPauseBtn = antiefectantiSection.querySelector(".playPause");
    const resetBtn = antiefectantiSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(antiefectantiSection.querySelectorAll("h4, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h4 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio Efectos-Extrapiramidales
document.addEventListener("DOMContentLoaded", () => {
    const antiefectextraSection = document.querySelector(".efectos-extra");
    const playPauseBtn = antiefectextraSection.querySelector(".playPause");
    const resetBtn = antiefectextraSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(antiefectextraSection.querySelectorAll("h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h3 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio Consideraciones-Decir al pacientes
document.addEventListener("DOMContentLoaded", () => {
    const consideracionSection = document.querySelector(".contenido-tercero");
    const playPauseBtn = consideracionSection.querySelector(".playPause");
    const resetBtn = consideracionSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(consideracionSection.querySelectorAll("h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h3 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio Medicamentos
document.addEventListener("DOMContentLoaded", () => {
    const medicamentosSection = document.querySelector(".medicamentos");
    const playPauseBtn = medicamentosSection.querySelector(".playPause");
    const resetBtn = medicamentosSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(medicamentosSection.querySelectorAll("h2, h3, p, a"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3, p y a
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio sindrome-neuroleptico
document.addEventListener("DOMContentLoaded", () => {
    const sinneuroSection = document.querySelector(".sindrome-neuroleptico");
    const playPauseBtn = sinneuroSection.querySelector(".playPause");
    const resetBtn = sinneuroSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(sinneuroSection.querySelectorAll("h3, h4, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h3, h4 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio SyS
document.addEventListener("DOMContentLoaded", () => {
    const sysSection = document.querySelector(".conteventadv-sys");
    const playPauseBtn = sysSection.querySelector(".playPause");
    const resetBtn = sysSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(sysSection.querySelectorAll("h4, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h4 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio DyT
document.addEventListener("DOMContentLoaded", () => {
    const dytSection = document.querySelector(".dyt");
    const playPauseBtn = dytSection.querySelector(".playPause");
    const resetBtn = dytSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(dytSection.querySelectorAll("h3, h4, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h3, h4 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});


/* Scripts Audios Antidepresivos */

//Script Audio cont-1
document.addEventListener("DOMContentLoaded", () => {
    const ant1nSection = document.querySelector(".cont-1");
    const playPauseBtn = ant1nSection.querySelector(".playPause");
    const resetBtn = ant1nSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(ant1nSection.querySelectorAll("h3,p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h3 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio Triciclicos & Tetraciclicos
document.addEventListener("DOMContentLoaded", () => {
    const TTcontpSection = document.querySelector(".cont-p");
    const playPauseBtn = TTcontpSection.querySelector(".playPause");
    const resetBtn = TTcontpSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(TTcontpSection.querySelectorAll("h2,h3,p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h3 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio ISRS
document.addEventListener("DOMContentLoaded", () => {
    const isrscontSection = document.querySelector(".isrs-cont");
    const playPauseBtn = isrscontSection.querySelector(".playPause");
    const resetBtn = isrscontSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(isrscontSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio Med ISRS
document.addEventListener("DOMContentLoaded", () => {
    const medicamentosisrsSection = document.querySelector(".medicamentos-isrs");
    const playPauseBtn = medicamentosisrsSection.querySelector(".playPause");
    const resetBtn = medicamentosisrsSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(medicamentosisrsSection.querySelectorAll("h2, h3, p, a"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3, p y a
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio IRSN
document.addEventListener("DOMContentLoaded", () => {
    const irsncontSection = document.querySelector(".irsn-cont");
    const playPauseBtn = irsncontSection.querySelector(".playPause");
    const resetBtn = irsncontSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(irsncontSection.querySelectorAll("h2, h3, p, a"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3, p y a
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio Med IRSN
document.addEventListener("DOMContentLoaded", () => {
    const isrscontSection = document.querySelector(".medicamentos-irsn");
    const playPauseBtn = isrscontSection.querySelector(".playPause");
    const resetBtn = isrscontSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(isrscontSection.querySelectorAll("h2, h3, p, a"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3, p y a
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio Atipicos
document.addEventListener("DOMContentLoaded", () => {
    const atcontSection = document.querySelector(".at-cont");
    const playPauseBtn = atcontSection.querySelector(".playPause");
    const resetBtn = atcontSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(atcontSection.querySelectorAll("h2, h3, p, a"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3, p y a
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio Med Atipicos
document.addEventListener("DOMContentLoaded", () => {
    const medicamentosisrsSection = document.querySelector(".medicamentos-at");
    const playPauseBtn = medicamentosisrsSection.querySelector(".playPause");
    const resetBtn = medicamentosisrsSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(medicamentosisrsSection.querySelectorAll("h2, h3, p, a"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3, p y a
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});


/* Scripts Audios Eutimizantes */

//Script Audio cont-eutimi
document.addEventListener("DOMContentLoaded", () => {
    const conteutiSection = document.querySelector(".cont-eutimi");
    const playPauseBtn = conteutiSection.querySelector(".playPause");
    const resetBtn = conteutiSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(conteutiSection.querySelectorAll("h3, p, strong"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h3, p y strong
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio Evento-Adverso
document.addEventListener("DOMContentLoaded", () => {
    const eventoadvSection = document.querySelector(".evento-adverso");
    const playPauseBtn = eventoadvSection.querySelector(".playPause");
    const resetBtn = eventoadvSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(eventoadvSection.querySelectorAll("h2, h3, p, strong"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3, p y strong
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});


/* Scripts Audios Ansioliticos */

//Script Audio ansot-cont
document.addEventListener("DOMContentLoaded", () => {
    const eventoadvSection = document.querySelector(".ansot-cont");
    const playPauseBtn = eventoadvSection.querySelector(".playPause");
    const resetBtn = eventoadvSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(eventoadvSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3, p y strong
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio Med Ans Otr
document.addEventListener("DOMContentLoaded", () => {
    const medicamentosansotSection = document.querySelector(".medicamentosansot");
    const playPauseBtn = medicamentosansotSection.querySelector(".playPause");
    const resetBtn = medicamentosansotSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(medicamentosansotSection.querySelectorAll("h2, h3, p, a"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3, p y a
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio SeHi-cont
document.addEventListener("DOMContentLoaded", () => {
    const sehicontSection = document.querySelector(".sehi-cont");
    const playPauseBtn = sehicontSection.querySelector(".playPause");
    const resetBtn = sehicontSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(sehicontSection.querySelectorAll("h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h3, p 
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio Med SeHi
document.addEventListener("DOMContentLoaded", () => {
    const medicamentossehiSection = document.querySelector(".medicamentossehi");
    const playPauseBtn = medicamentossehiSection.querySelector(".playPause");
    const resetBtn = medicamentossehiSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(medicamentossehiSection.querySelectorAll("h2, h3, p, a"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3, p y a
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});


/* Scripts Audios patologias */

//Script Audio sm
document.addEventListener("DOMContentLoaded", () => {
    const smSection = document.querySelector(".sm");
    const playPauseBtn = smSection.querySelector(".playPause");
    const resetBtn = smSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(smSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 y p 
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio tm
document.addEventListener("DOMContentLoaded", () => {
    const tmSection = document.querySelector(".tm");
    const playPauseBtn = tmSection.querySelector(".playPause");
    const resetBtn = tmSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tmSection.querySelectorAll("h3, h4, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h3, h4 y p 
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio intr-ayf
document.addEventListener("DOMContentLoaded", () => {
    const intrayfSection = document.querySelector(".intr-ayf");
    const playPauseBtn = intrayfSection.querySelector(".playPause");
    const resetBtn = intrayfSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(intrayfSection.querySelectorAll("h3, h4, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h3, h4 y p 
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio ayf
document.addEventListener("DOMContentLoaded", () => {
    const ayfSection = document.querySelector(".ayf");
    const playPauseBtn = ayfSection.querySelector(".playPause");
    const resetBtn = ayfSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(ayfSection.querySelectorAll("h4, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h4 y p 
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio ayf-sl
document.addEventListener("DOMContentLoaded", () => {
    const ayfslSection = document.querySelector(".ayf-sl");
    const playPauseBtn = ayfslSection.querySelector(".playPause");
    const resetBtn = ayfslSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(ayfslSection.querySelectorAll("h4, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h4 y p 
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio ayf2
document.addEventListener("DOMContentLoaded", () => {
    const ayf2Section = document.querySelector(".ayf2");
    const playPauseBtn = ayf2Section.querySelector(".playPause");
    const resetBtn = ayf2Section.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(ayf2Section.querySelectorAll("h4, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h4 y p 
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio neurotr
document.addEventListener("DOMContentLoaded", () => {
    const neurotrSection = document.querySelector(".neurotr");
    const playPauseBtn = neurotrSection.querySelector(".playPause");
    const resetBtn = neurotrSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(neurotrSection.querySelectorAll("h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h3 y p 
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio nytm
document.addEventListener("DOMContentLoaded", () => {
    const nytmSection = document.querySelector(".nytm");
    const playPauseBtn = nytmSection.querySelector(".playPause");
    const resetBtn = nytmSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(nytmSection.querySelectorAll("h3, h4, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h3, h4 y p 
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio trpsicoticos
document.addEventListener("DOMContentLoaded", () => {
    const trpsicoticosSection = document.querySelector(".trpsicoticos");
    const playPauseBtn = trpsicoticosSection.querySelector(".playPause");
    const resetBtn = trpsicoticosSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(trpsicoticosSection.querySelectorAll("h3, h4, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h3, h4 y p 
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio intr-trestanimo
document.addEventListener("DOMContentLoaded", () => {
    const intrtrestanimoSection = document.querySelector(".intr-trestanimo");
    const playPauseBtn = intrtrestanimoSection.querySelector(".playPause");
    const resetBtn = intrtrestanimoSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(intrtrestanimoSection.querySelectorAll("h3, h4, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h3, h4 y p 
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio edm-cd
document.addEventListener("DOMContentLoaded", () => {
    const edmcdSection = document.querySelector(".edm-cd");
    const playPauseBtn = edmcdSection.querySelector(".playPause");
    const resetBtn = edmcdSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(edmcdSection.querySelectorAll("h3, h4, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h3, h4 y p 
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio tab-cd
document.addEventListener("DOMContentLoaded", () => {
    const tabcdSection = document.querySelector(".tab-cd");
    const playPauseBtn = tabcdSection.querySelector(".playPause");
    const resetBtn = tabcdSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tabcdSection.querySelectorAll("h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h3 y p 
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio bba
document.addEventListener("DOMContentLoaded", () => {
    const bbaSection = document.querySelector(".bba");
    const playPauseBtn = bbaSection.querySelector(".playPause");
    const resetBtn = bbaSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(bbaSection.querySelectorAll("h3, h4, h5 p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h3, h4, h5 y p 
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio fsl
document.addEventListener("DOMContentLoaded", () => {
    const fslSection = document.querySelector(".fsl");
    const playPauseBtn = fslSection.querySelector(".playPause");
    const resetBtn = fslSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(fslSection.querySelectorAll("h4, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h4 y p 
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio tc
document.addEventListener("DOMContentLoaded", () => {
    const tcSection = document.querySelector(".tc");
    const playPauseBtn = tcSection.querySelector(".playPause");
    const resetBtn = tcSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tcSection.querySelectorAll("h4, p, span"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h4, p y span
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio ad-cd
document.addEventListener("DOMContentLoaded", () => {
    const adcdSection = document.querySelector(".ad-cd");
    const playPauseBtn = adcdSection.querySelector(".playPause");
    const resetBtn = adcdSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(adcdSection.querySelectorAll("h3, h4, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h3, h4 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio pc
document.addEventListener("DOMContentLoaded", () => {
    const pcSection = document.querySelector(".pc");
    const playPauseBtn = pcSection.querySelector(".playPause");
    const resetBtn = pcSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(pcSection.querySelectorAll("h4, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h4 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio dsnc
document.addEventListener("DOMContentLoaded", () => {
    const dsncSection = document.querySelector(".dsnc");
    const playPauseBtn = dsncSection.querySelector(".playPause");
    const resetBtn = dsncSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(dsncSection.querySelectorAll("h4, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h4 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio esnc
document.addEventListener("DOMContentLoaded", () => {
    const esncSection = document.querySelector(".esnc");
    const playPauseBtn = esncSection.querySelector(".playPause");
    const resetBtn = esncSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(esncSection.querySelectorAll("h4, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h4 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio alucino
document.addEventListener("DOMContentLoaded", () => {
    const aluSection = document.querySelector(".alu");
    const playPauseBtn = aluSection.querySelector(".playPause");
    const resetBtn = aluSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(aluSection.querySelectorAll("h4, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h4 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio inh
document.addEventListener("DOMContentLoaded", () => {
    const inhSection = document.querySelector(".inh");
    const playPauseBtn = inhSection.querySelector(".playPause");
    const resetBtn = inhSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(inhSection.querySelectorAll("h4, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h4 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio nit
document.addEventListener("DOMContentLoaded", () => {
    const nitSection = document.querySelector(".nit");
    const playPauseBtn = nitSection.querySelector(".playPause");
    const resetBtn = nitSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(nitSection.querySelectorAll("h4, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h4 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio otras-sustancias
document.addEventListener("DOMContentLoaded", () => {
    const otssusSection = document.querySelector(".otras-sustancias");
    const playPauseBtn = otssusSection.querySelector(".playPause");
    const resetBtn = otssusSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(otssusSection.querySelectorAll("h4, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h4 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});


/* Script Audio Contencion-mecanica */

//Script Audio Definicion-Objetivo
document.addEventListener("DOMContentLoaded", () => {
    const defobjSection = document.querySelector(".Audio1");
    const playPauseBtn = defobjSection.querySelector(".playPause");
    const resetBtn = defobjSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(defobjSection.querySelectorAll("h2, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio Preceptos Legales de Aplicación
document.addEventListener("DOMContentLoaded", () => {
    const plaSection = document.querySelector(".Audio2");
    const playPauseBtn = plaSection.querySelector(".playPause");
    const resetBtn = plaSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(plaSection.querySelectorAll("h2, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio Indicaciones y Contraindicaciones
document.addEventListener("DOMContentLoaded", () => {
    const indicacontraSection = document.querySelector(".Audio3");
    const playPauseBtn = indicacontraSection.querySelector(".playPause");
    const resetBtn = indicacontraSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(indicacontraSection.querySelectorAll("h2, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio Abordaje Verbal
document.addEventListener("DOMContentLoaded", () => {
    const abverSection = document.querySelector(".Audio4");
    const playPauseBtn = abverSection.querySelector(".playPause");
    const resetBtn = abverSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(abverSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio Abordaje Ambiental
document.addEventListener("DOMContentLoaded", () => {
    const abambSection = document.querySelector(".Audio5");
    const playPauseBtn = abambSection.querySelector(".playPause");
    const resetBtn = abambSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(abambSection.querySelectorAll("h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h3 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio Abordaje Farmacologico
document.addEventListener("DOMContentLoaded", () => {
    const abfarmSection = document.querySelector(".Audio6");
    const playPauseBtn = abfarmSection.querySelector(".playPause");
    const resetBtn = abfarmSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(abfarmSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio Participacion y Abordaje
document.addEventListener("DOMContentLoaded", () => {
    const paraborSection = document.querySelector(".Audio7");
    const playPauseBtn = paraborSection.querySelector(".playPause");
    const resetBtn = paraborSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(paraborSection.querySelectorAll("h2, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio Personal Responsable del Cuidado
document.addEventListener("DOMContentLoaded", () => {
    const prcSection = document.querySelector(".Audio8");
    const playPauseBtn = prcSection.querySelector(".playPause");
    const resetBtn = prcSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(prcSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio Material Utilizado
document.addEventListener("DOMContentLoaded", () => {
    const materialSection = document.querySelector(".Audio9");
    const playPauseBtn = materialSection.querySelector(".playPause");
    const resetBtn = materialSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(materialSection.querySelectorAll("h2, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio Instauracion
document.addEventListener("DOMContentLoaded", () => {
    const instauracionSection = document.querySelector(".Audio10");
    const playPauseBtn = instauracionSection.querySelector(".playPause");
    const resetBtn = instauracionSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(instauracionSection.querySelectorAll("h2, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio Precauciones
document.addEventListener("DOMContentLoaded", () => {
    const precauSection = document.querySelector(".Audio11");
    const playPauseBtn = precauSection.querySelector(".playPause");
    const resetBtn = precauSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(precauSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio Cuidados
document.addEventListener("DOMContentLoaded", () => {
    const cuidadoSection = document.querySelector(".Audio12");
    const playPauseBtn = cuidadoSection.querySelector(".playPause");
    const resetBtn = cuidadoSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(cuidadoSection.querySelectorAll("h2, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});

//Script Audio Eliminacion
document.addEventListener("DOMContentLoaded", () => {
    const eliminaSection = document.querySelector(".Audio13");
    const playPauseBtn = eliminaSection.querySelector(".playPause");
    const resetBtn = eliminaSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(eliminaSection.querySelectorAll("h2, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2 y p
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});


/* Script Audio Bibliografia */ 
document.addEventListener("DOMContentLoaded", () => {
    const eventoadvSection = document.querySelector("#bibliografia");
    const playPauseBtn = eventoadvSection.querySelector(".playPause");
    const resetBtn = eventoadvSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(eventoadvSection.querySelectorAll("h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h3 yp
            .filter(text => text.length > 0) // Eliminar textos vacíos
            .join(". "); // Unir los textos con punto para pausas naturales
    }

    // Función para iniciar la lectura
    function iniciarLectura() {
        const textoCompleto = obtenerTextoSeccion();

        if (!textoCompleto) {
            console.warn("No hay texto para leer.");
            return;
        }

        utterance = new SpeechSynthesisUtterance(textoCompleto);

        utterance.onboundary = (event) => {
            currentCharIndex = event.charIndex;
        };

        // Se asigna el evento 'onend' aquí, cuando utterance ya está definido
        utterance.onend = () => {
            isPlaying = false;
            isPaused = false;
            currentCharIndex = 0;
            playPauseBtn.textContent = "▶"; // Restaurar el botón a play
        };
    }

    // Botón Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (!isPlaying) {
            if (isPaused) {
                speechSynthesis.resume();
            } else {
                iniciarLectura(); // Inicializa utterance antes de usarlo
                speechSynthesis.speak(utterance);
            }
            playPauseBtn.textContent = "⏸";
            isPlaying = true;
            isPaused = false;
        } else {
            speechSynthesis.pause();
            playPauseBtn.textContent = "▶";
            isPlaying = false;
            isPaused = true;
        }
    });

    // Botón Reset
    resetBtn.addEventListener("click", () => {
        speechSynthesis.cancel();
        iniciarLectura(); // Volver a inicializar la lectura con el contenido actual
        currentCharIndex = 0;
        isPlaying = false;
        isPaused = false;
        playPauseBtn.textContent = "▶";
    });
});