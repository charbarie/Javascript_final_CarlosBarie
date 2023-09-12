function extraccion(balance, extract) { // Realizar una extracción
    balance = balance - extract;
    return balance;
};

function deposit(balance, deposito) { // Realizar un depósito
    balance = Number(balance) + Number(deposito);
    return balance;
};

function mostrarMensaje(titulo, mensaje) { // Mostrar un mensaje utilizando la librería Swal
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
