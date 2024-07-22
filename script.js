document.addEventListener('DOMContentLoaded', () => {
    const encryptButton = document.getElementById('encrypt_button');
    const decryptButton = document.getElementById('decrypt_button');
    const copyButton = document.getElementById('copy_button');
    const clearInputButton = document.getElementById('clear_input_button');
    const clearVisualButton = document.getElementById('clear_visual_button');
    const inputText = document.getElementById('input_text');
    const visualizarText = document.getElementById('visualizar_text');

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

    // Encriptar el texto
    encryptButton.addEventListener('click', () => {
        const text = inputText.value.toLowerCase();
        visualizarText.value = encrypt(text);
    });

    // Desencriptar el texto
    decryptButton.addEventListener('click', () => {
        const text = inputText.value.toLowerCase();
        visualizarText.value = decrypt(text);
    });

    // Copiar el texto al portapapeles
    copyButton.addEventListener('click', () => {
        visualizarText.select();
        document.execCommand('copy');
    });

    // Limpiar el área de ingreso de texto
    clearInputButton.addEventListener('click', () => {
        inputText.value = '';
    });

    // Limpiar el área de visualización
    clearVisualButton.addEventListener('click', () => {
        visualizarText.value = '';
    });
});
