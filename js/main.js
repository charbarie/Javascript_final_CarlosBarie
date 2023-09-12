// Seleccionar los botones y la pantalla
const botones = document.querySelectorAll('.boton');
const pantalla = document.getElementById("pantalla");
let op = 0;


function botoneraPrincipal() { // Mostrar la "Botonera Principal"
    pantalla.innerHTML = `
        <div>
            <p>1-Saldos</p>
            <p>2-Extracciones</p>
            <p>3-Depósitos</p>
            <p>4-Cambio de clave</p>
            <p>5-Salir</p>
        </div>`;
};

function eleccionMenu(x) { // Manejar las opciones del menú principal
    switch (x) {
        case "1":
            mostrarMensaje('Saldo en cuenta', '$' + objetoDesdeLocalStorage.accountPesos);
            break;

        case "2":
            mostrarFormulario('debito', function (importe) {
                objetoDesdeLocalStorage.accountPesos = extraccion(objetoDesdeLocalStorage.accountPesos, importe);
                mostrarMensaje('Extracción realizada', `Extracción solicitada $${importe}, saldo actual: $${objetoDesdeLocalStorage.accountPesos}`);
                botoneraPrincipal();
            });
            break;

        case "3":
            mostrarFormulario('deposito', function (monto) {
                objetoDesdeLocalStorage.accountPesos = deposit(objetoDesdeLocalStorage.accountPesos, monto);
                mostrarMensaje('Depósito realizado', `Depósito de $${monto} Realizado, saldo actual: $${objetoDesdeLocalStorage.accountPesos}`);
                botoneraPrincipal();
            });
            break;

        case "4":
           /*  passwordReset(objetoDesdeLocalStorage.password); */
            break;

        default:
            localStorage.removeItem("objetoDesdeLocalStorage"); 
            pantalla.innerHTML = "Salió";
            break;
    }
};

botones.forEach(function (boton) { // Agregar un evento click a los botones "lo que me costó esta función no tiene nombre"
    boton.addEventListener('click', function () {
        op = boton.getAttribute('data-value');
        eleccionMenu(op);
    });
});

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



