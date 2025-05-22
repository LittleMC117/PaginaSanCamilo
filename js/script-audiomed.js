/* Scripts Audios Med Ansioliticos */

//Script Audio Alpralozam
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".alprazolam");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Clonazepam
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".clonazepam");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Diazepam
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".diazepam");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Lorazepam
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".lorazepam");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Flumazenil
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".flumazenil");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Fenobarbital
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".fenobarbital");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Fenitoina
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".fenitoina");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Propranolol-Metoprolol
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".propanometoprolol");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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


/* Scripts Audios Med. Antidepresivos-Atipicos */

//Script Audio Agomelatina
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".agomelatina");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Bupropion
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".bupropion");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Mirtazapina
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".mirtazapina");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Trazodona
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".trazodona");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

/* Scripts Audios Med. Antidepresivos-IRSN */

//Script Audio Desvenlafaxina
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".desvenlafaxina");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Duloxetina
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".duloxetina");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Venlafaxina
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".venlafaxina");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

/* Scripts Audios Med. Antidepresivos-ISRS */

//Script Audio Escitalopram
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".escitalopram");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Fluoxetina
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".fluoxetina");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Fluvoxamina
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".fluvoxamina");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Paroxetina
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".paroxetina");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Sertralina
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".sertralina");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Vortioxetina
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".vortioxetina");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

/* Scripts Audios Med. Antidepresivos-TT */

//Script Audio Amitriptilina
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".amitriptilina");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Clomipramina
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".clomipramina");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Imipramina
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".imipramina");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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


/* Scripts Audios Med. Antipsicoticos-Ati */

//Script Audio Aripiprazol
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".aripiprazol");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Clozapina
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".clozapina");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Aripiprazol
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".aripiprazol");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Olanzapina
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".olanzapina");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Paliperidona
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".paliperidona");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Quetiapina
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".quetiapina");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Risperidona
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".risperidona");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

/* Scripts Audios Med. Antipsicoticos-Tip */

//Script Audio Clorpromazina
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".clorpromazina");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Haloperidol
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".haloperidol");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Levomepromazina
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".levomepromazina");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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


/* Scripts Audios Med. Eutimizantes */

//Script Audio Acido Valproico
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".acido-valproico");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Carbamazepina
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".carbamazepina");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Carbonato de Litio
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".carbonato-litio");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Lamotrigina
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".lamotrigina");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Pregabalina
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".pregabalina");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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


/* Scripts Audios Med. Sedantes */

//Script Audio Midazolam
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".midazolam");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Propofol
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".propofol");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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

//Script Audio Ketamina
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasSection = document.querySelector(".ketamina");
    const playPauseBtn = tarjetasSection.querySelector(".playPause");
    const resetBtn = tarjetasSection.querySelector(".reset");

    let utterance;
    let isPaused = false;
    let isPlaying = false;
    let currentCharIndex = 0;

    // Función para obtener todo el texto dentro
    function obtenerTextoSeccion() {
        return Array.from(tarjetasSection.querySelectorAll("h2, h3, p"))
            .map(element => element.innerText.trim()) // Obtener solo el texto de h2, h3 yp
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