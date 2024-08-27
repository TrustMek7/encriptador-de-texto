// Para la lógica de encriptar reemplazaremos las vocales por palabras
function encriptarTexto() {
    let texto = document.getElementById("texto__entrada").value; // Recibimos el texto del textarea
    let textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");

    mostrarResultado(textoEncriptado); // Mandamos el texto cuando las vocales ya fueron reemplazadas
    mostrarBotonCopiar(); // Mostramos el boton para copiar el texto
}

// Usamos la lógica inversa del encriptador
function desencriptarTexto() {
    let texto = document.getElementById("texto__entrada").value;

    // Verificar si el texto parece estar encriptado
    if (texto.includes("enter") || texto.includes("imes") || texto.includes("ai") || texto.includes("ober") || texto.includes("ufat")) {
        let textoDesencriptado = texto.replace(/enter/g, "e")
                                      .replace(/imes/g, "i")
                                      .replace(/ai/g, "a")
                                      .replace(/ober/g, "o")
                                      .replace(/ufat/g, "u");

        mostrarResultado(textoDesencriptado);
        ocultarBotonCopiar(); // Ocultamos el botón al desencriptar
    } else {
        alert("Por favor, ingrese un texto encriptado válido."); //Mandamos un mensaje de alerta porque el texto no es el encriptado
    }
}

// Función para mandar el mensaje después de la modificación (Encriptar o desencriptar)
function mostrarResultado(mensaje) {
    let outputMensaje = document.getElementById("mensaje__salida");
    outputMensaje.innerHTML = "<p>" + mensaje + "</p>"; 
}

// Función para mostrar el botón después de encriptar texto
function mostrarBotonCopiar() {
    let copiarBtn = document.getElementById("boton__copiar");
    copiarBtn.style.display = "block";
}

// Función para ocultar el botón después de desencriptar texto
function ocultarBotonCopiar() {
    let copiarBtn = document.getElementById("boton__copiar");
    copiarBtn.style.display = "none";
}

// Función para copiar el texto encriptado
function copiarTexto() {
    let texto = document.getElementById("mensaje__salida").innerText;
    navigator.clipboard.writeText(texto).then(() => { // Usamos el clipboard para copiar el texto al portapapeles
        alert("Texto copiado al portapapeles"); // Usamos el then para avisarle al usuario que el texto ha sido copiado al portapapeles
    }).catch(err => {
        alert("Error al copiar el texto: " + err);
    });
}
