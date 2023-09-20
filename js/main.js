// Seleccionar los botones y la pantalla
const botones = document.querySelectorAll('.boton');
const pantalla = document.getElementById("pantalla");
let op = 0;



function eleccionMenu(x) { 
    if(ActiveUser == true){// Manejar las opciones del menú principal si está logueado
    switch (x) {
        case "1":
            mostrarMensaje('Saldo en cuenta', '$' + objetoDesdeLocalStorage.accountPesos);
            break;

        case "2":
            cl("entro caso dos")
            mostrarFormulario('debito', function (importe) {
               
                objetoDesdeLocalStorage.accountPesos = extraccion(objetoDesdeLocalStorage.accountPesos, importe);
                
                botoneraPrincipal();
            });
            break;

        case "3":
            cl("entro caso mostrar")
            mostrarFormulario('deposito', function (monto) {
                objetoDesdeLocalStorage.accountPesos = deposit(objetoDesdeLocalStorage.accountPesos, monto);
                cl("salio caso tres")
                botoneraPrincipal();
            });
            break;

        case "4":
           pantalla.innerHTML =  `
           <form id="cambioClaveForm" style="display: none;">
                <label for="nuevaClave">Nueva Contraseña:</label>
                <input type="password" id="nuevaClave" required><br>
            
                <label for="confirmarClave">Confirmar Contraseña:</label>
                <input type="password" id="confirmarClave" required><br>
            
                <button type="submit">Cambiar Contraseña</button>
            </form>

           `;
           cambiarClave(objetoDesdeLocalStorage)
            break;

        default:
            localStorage.clear();
            pantalla.innerHTML = "Salió";
            ActiveUser = false;
            break;
    }
}else{
    pantalla.innerHTML = "Favor de loguearse";
};
}


botones.forEach(function (boton) { // Agregar un evento click a los botones "lo que me costó esta función no tiene nombre"
    boton.addEventListener('click', function () {
        op = boton.getAttribute('data-value');
        eleccionMenu(op);
    });
});




