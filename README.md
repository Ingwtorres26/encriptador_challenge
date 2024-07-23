Proyecto ENCDESC - Encriptador/Desencriptador de Texto
Este proyecto fue elaborado para dar respuesta al requerimiento del curso "Practicando lógica de programación: Challenge Encriptador de texto" de Alura Latam y Oracle Next One.

El proyecto combina las habilidades aprendidas en los cursos de HTML, JavaScript y CSS.

HTML: Archivo index.html
Head
Título de la página: ENCDESC
Body
Header

Logo de Alura
Nombre de la aplicación: ENCDESC - ENCRIPTADOR/DESENCRIPTADOR DE TEXTO
Main

Área de texto: Designada para el ingreso de texto
Mensaje informativo: No se aceptan mayúsculas, tildes ni caracteres especiales
Botón: Encriptar
Botón: Desencriptar
Botón: Limpiar
Área de texto: Designada para la visualización del texto encriptado o desencriptado
Botón: Copiar
Botón: Limpiar
Footer

Mensaje con datos del desarrollador: Desarrollado por Walter J. Torres Llanos en julio de 2024.
JavaScript: Archivo scripts.js
Evento DOM
DOMContentLoaded
Obtención de elementos DOM mediante su id
encrypt_button
decrypt_button
copy_button
clear_input_button
clear_visual_button
input_text
visualizar_text
warning_message
Funciones
Función para encriptar: function encrypt(text)

Esta función toma un texto y lo encripta reemplazando las vocales por ciertas cadenas predefinidas usando un mapeo:
e = enter
i = imes
a = ai
o = ober
u = ufat
Función para desencriptar: function decrypt(text)

Esta función hace el proceso inverso: toma un texto encriptado y lo desencripta reemplazando las cadenas predefinidas por sus correspondientes vocales:
enter = e
imes = i
ai = a
ober = o
ufat = u
Validación del texto ingresado: function isValidText(text)

Esta función valida que el texto solo contenga letras minúsculas y espacios, y que no tenga mayúsculas ni tildes.
Mostrar advertencia: function showWarning(message)

Muestra un mensaje de advertencia haciendo visible el elemento warning_message y estableciendo su contenido.
Ocultar advertencia: function hideWarning()

Oculta el mensaje de advertencia añadiendo la clase hidden al elemento warning_message.
Eventos
Evento de encriptar:

Se activa cuando se hace clic en el botón de encriptar. Valida el texto y, si es válido, lo encripta; si no, muestra un mensaje de advertencia.
encryptButton.addEventListener
Evento de desencriptar:

Se activa cuando se hace clic en el botón de desencriptar. Valida el texto y, si es válido, lo desencripta; si no, muestra un mensaje de advertencia.
decryptButton.addEventListener
Evento de copiar al portapapeles:

Se activa cuando se hace clic en el botón de copiar. Selecciona el texto en el área de visualización y lo copia al portapapeles.
copyButton.addEventListener
Evento de limpiar entrada:

Se activa cuando se hace clic en el botón de limpiar entrada. Borra el contenido del área de entrada y oculta cualquier mensaje de advertencia.
clearInputButton.addEventListener
Evento de limpiar visualización:

Se activa cuando se hace clic en el botón de limpiar visualización. Borra el contenido del área de visualización.
clearVisualButton.addEventListener
CSS: Archivo style.css
Dado que se trata de un encriptador de texto, aproveché la oportunidad para dar mi toque personal y estilizar mi proyecto. Estos estilos crean una página web con una estructura flexible y un diseño que se adapta a diferentes tamaños de pantalla, con un estilo visual que recuerda a "The Matrix".

General
Fuente: font-family: 'VT323', monospace se usa esta fuente para dar un estilo de máquina de escribir antigua.
Fondo: background-image, background-repeat, background-position
Se establece una imagen de fondo con tema de la película "The Matrix" de modo que cubra toda la pantalla, sea centrada y no se repita.
Header
header
header .logo
header h1
Main
main
container
Columns
left-column
right-column
Textarea
textarea
Buttons
button
left-column-buttons
right-column-buttons
Footer
footer
Mensaje de advertencia
warning_message
hidden
Responsividad
Media Queries
