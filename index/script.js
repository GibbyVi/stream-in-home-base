// Cambiar entre modo video y modo audio
let isVideoMode = true;

document.getElementById("toggleMode").addEventListener("click", () => {
    const modeDisplay = document.getElementById("modeDisplay");
    if (isVideoMode) {
        modeDisplay.textContent = "Estás en modo: Solo Audio";
    } else {
        modeDisplay.textContent = "Estás en modo: Video";
    }
    isVideoMode = !isVideoMode;
});

// Botones adicionales
document.getElementById("editProfileButton").addEventListener("click", () => {
    alert("Editar Perfil - Esta funcionalidad está en desarrollo.");
});

document.getElementById("historyButton").addEventListener("click", () => {
    alert("Historial - Esta funcionalidad está en desarrollo.");
});

document.getElementById("uploadButton").addEventListener("click", () => {
    alert("Subir Contenido - Esta funcionalidad está en desarrollo.");
});