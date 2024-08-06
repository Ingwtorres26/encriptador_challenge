document.addEventListener('DOMContentLoaded', () => {
    const encryptButton = document.getElementById('encrypt_button');
    const decryptButton = document.getElementById('decrypt_button');
    const copyButton = document.getElementById('copy_button');
    const clearInputButton = document.getElementById('clear_input_button');
    const clearVisualButton = document.getElementById('clear_visual_button');
    const inputText = document.getElementById('input_text');
    const visualizarText = document.getElementById('visualizar_text');
    const warningMessage = document.getElementById('warning_message');
    const themeToggleButton = document.getElementById('theme_toggle_button');
    const logo = document.querySelector('.logo');

    // Verifica y aplica el tema almacenado en localStorage al cargar la página
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggleButton.textContent = '🌙'; // Cambia el ícono a oscuro
        logo.src = './assets/blanco.png'; // Cambia el logo al de tema claro
    } else {
        document.body.classList.add('dark-mode');
        themeToggleButton.textContent = '☀️'; // Cambia el ícono a claro
        logo.src = './assets/verde.png'; // Cambia el logo al de tema oscuro
    }

    // Función para encriptar
    function encrypt(text) {
        const map = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        };
        return text.split('').map(char => map[char] || char).join('');
    }

    // Función para desencriptar
    function decrypt(text) {
        const map = {
            'enter': 'e',
            'imes': 'i',
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u'
        };
        let result = text;
        for (const [key, value] of Object.entries(map)) {
            result = result.split(key).join(value);
        }
        return result;
    }

    // Validar el texto ingresado
    function isValidText(text) {
        const regex = /^[a-z\s]+$/; // Solo letras minúsculas y espacios
        return regex.test(text) && !/[A-ZÁÉÍÓÚÜÑ]/.test(text); // También verifica mayúsculas y tildes
    }

    // Mostrar advertencia
    function showWarning(message) {
        warningMessage.classList.remove('hidden');
        warningMessage.innerHTML = message;
    }

    // Ocultar advertencia
    function hideWarning() {
        warningMessage.classList.add('hidden');
    }

    // Evento de encriptar
    encryptButton.addEventListener('click', () => {
        const text = inputText.value;
        if (text.trim() === '') {
            showWarning("No se ha detectado ningún mensaje, por favor verifique e intente de nuevo.");
        } else if (isValidText(text)) {
            visualizarText.value = encrypt(text);
            hideWarning();
        } else {
            showWarning("¡WARNING! NO SE HA PODIDO ENCRIPTAR PORQUE SE HAN DETECTADO MAYÚSCULAS, TILDES O CARACTERES ESPECIALES");
        }
    });

    // Evento de desencriptar
    decryptButton.addEventListener('click', () => {
        const text = inputText.value;
        if (text.trim() === '') {
            showWarning("No se ha detectado ningún mensaje, por favor verifique e intente de nuevo.");
        } else if (isValidText(text)) {
            visualizarText.value = decrypt(text);
            hideWarning();
        } else {
            showWarning("¡WARNING! NO SE HA PODIDO DESENCRIPTAR PORQUE SE HAN DETECTADO MAYÚSCULAS, TILDES O CARACTERES ESPECIALES");
        }
    });

    // Evento de copiar al portapapeles
    copyButton.addEventListener('click', () => {
        visualizarText.select();
        try {
            document.execCommand('copy');
        } catch (e) {
            console.error('Error al copiar al portapapeles', e);
        }
    });

    // Evento de limpiar entrada
    clearInputButton.addEventListener('click', () => {
        inputText.value = '';
        visualizarText.value = ''; // Limpia también el área de visualización
        hideWarning(); // Ocultar el mensaje de advertencia
    });

    // Evento de limpiar visualización
    clearVisualButton.addEventListener('click', () => {
        visualizarText.value = '';
    });

    // Evento para cambiar el tema
    themeToggleButton.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            themeToggleButton.textContent = '🌙'; // Cambia el ícono a oscuro
            logo.src = './assets/blanco.png'; // Cambia el logo al de tema claro
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            themeToggleButton.textContent = '☀️'; // Cambia el ícono a claro
            logo.src = './assets/verde.png'; // Cambia el logo al de tema oscuro
            localStorage.setItem('theme', 'dark');
        }
    });
});
