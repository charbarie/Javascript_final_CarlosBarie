
function cambiarClave(usuario) {
    // Mostrar el formulario
    const cambioClaveForm = document.getElementById("cambioClaveForm");
    cambioClaveForm.style.display = "block";

    cambioClaveForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nuevaClave = document.getElementById("nuevaClave").value;
        const confirmarClave = document.getElementById("confirmarClave").value;

        if (nuevaClave === confirmarClave) {
            usuario.password = nuevaClave;
            const UsuarioEnLocal = JSON.stringify(usuario);
            localStorage.setItem("item", UsuarioEnLocal);
            mostrarMensaje("Contraseña cambiada", "Su contraseña ha sido actualizada correctamente.");
            cambioClaveForm.style.display = "none"; 
            botoneraPrincipal(); 
        } else {
            mostrarMensaje("Error", "Las contraseñas no coinciden. Intente nuevamente.");
        }
    });
};