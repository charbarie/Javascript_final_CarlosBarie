/* cambiar



function passwordReset(password){
    confirm=prompt("ingrese su clave");;
    if(Number(confirm)===password){
        let newPass = prompt("ingrese su nueva clave");
        let verification=prompt("repita su nueva clave");
        if(newPass === verification){
            password = newPass; 
            alert( "su nueva clave es  "+password);
            console.log("Cambio de clave exitoso");
            return password;
        }
    }else{
        alert("La clave no se cambió")
        return password;
    }
};


------------------------------------------------------------------------------------
function formularioCambioClave() { // Formulario de cambio de clave
    pantalla.innerHTML = `
        <form id="cambioClaveForm">
            <label for="claveActual">Clave Actual:</label>
            <input type="password" id="claveActual" name="claveActual" required><br>
            <label for="nuevaClave">Nueva Clave:</label>
            <input type="password" id="nuevaClave" name="nuevaClave" required><br>
            <label for="confirmacionClave">Confirmar Clave:</label>
            <input type="password" id="confirmacionClave" name="confirmacionClave" required><br>
            <button type="submit">Cambiar Clave</button>
        </form>`;

    pantalla.innerHTML = formularioCambioClave;
    document.getElementById("cambioClaveForm").addEventListener("submit", function (event) {   
        event.preventDefault();
        const claveActual = document.getElementById("claveActual").value;
        const nuevaClave = document.getElementById("nuevaClave").value;
        const confirmacionClave = document.getElementById("confirmacionClave").value;
        if (claveActual === "" || nuevaClave === "" || confirmacionClave === "") { // Realizar validaciones
            mostrarMensaje("error","Por favor, complete todos los campos.");
            return;
        }
        if (nuevaClave !== confirmacionClave) {
            mostrarMensaje("error","La confirmación de la nueva clave no coincide.");
            return;
        }
        mostrarMensaje("bien","Clave cambiada con éxito.");
        document.getElementById("cambioClaveForm").reset();    
    });
}

mostrarFormularioCambioClave();
 */

