

function extraccion(saldo, extraccion) { 
    if(saldo > extraccion){
        saldo = saldo - extraccion;
        mostrarMensaje('Extracción realizada', `Extracción solicitada $${extraccion}, saldo actual: $${saldo}`);
        return saldo;
     }else{
        mostrarMensaje("Error","No posee el saldo suficiente");
    }   
    return saldo;

};

function deposit(saldo, ingreso) {
    if(ingreso){ // Realizar un depósito
        saldo = Number(saldo) + Number(ingreso);
    return balance;
};

function mostrarMensaje(titulo, mensaje) { // Mostrar un mensaje utilizando la librería 
    Swal.fire({
        title: titulo,
        text: mensaje,
        confirmButtonText: 'Volver'
    });
};

function mostrarFormulario(tipo, retorno) { // Mostrar un formulario y gestionar su envío
    pantalla.innerHTML = `
        <form class="formulario ${tipo}">
            <label for="importe">Importe:</label>
            <div class="input-container">
                <input id="importe" type="text" name="importe" placeholder="Ingrese el importe" required>
                <button type="submit">${tipo === 'debito' ? 'Extraer' : 'Depositar'}</button>
            </div>
        </form>`;

    const formulario = document.querySelector(`.${tipo}`);

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        let importe = Number(document.getElementById("importe").value);
        if (!isNaN(importe)) {
            retorno(importe);
        } else {
            mostrarMensaje("error","Por favor, ingrese un valor válido.");
        };
    });
};

function botoneraPrincipal() { // Mostrar las "opciones Principales"
    pantalla.innerHTML = `
        <div>
            <p>1-Saldos</p>
            <p>2-Extracciones</p>
            <p>3-Depósitos</p>
            <p>4-Cambio de clave</p>
            <p>5-Salir</p>
        </div>`;
};
function cl(a){// Función de utilidad para imprimir un valor en la consola solo para pruebas
    console.log(a);
    console.log(typeof (a));
}
}