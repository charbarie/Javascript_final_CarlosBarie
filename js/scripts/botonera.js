const botones = document.querySelectorAll('.boton');
const menuPrincipal = document.getElementById('MenuPrincipal');
let op = 0;
let ActiveUser = false; // Utiliza camelCase para los nombres de variables
document.getElementById("guardarLogin").addEventListener("click", guardado);//Almaceno y verifico login
function guardado() {//Almacena en el local storage y valida
    let user = document.getElementById("user").value;
    let pass = document.getElementById("password").value;
    ActiveUser = login(user, pass); //verifico en el array si esta el usurio
    if (ActiveUser) {
        showMenu()
        console.log("Credenciales guardadas con éxito.");
    } else {
        console.log("Error de ingreso");
    };
};
function login(a, b) {// funcion hija de guardado
    for (const item of Usuarios) {
        if (item.user == a && item.password == b) {
            const UsuarioEnLocal = JSON.stringify(item);//almaceno todo item para trabajar
            localStorage.setItem("item", UsuarioEnLocal);
           
            
            return true;
        };
    };
    return false; // Devuelve false si no se encuentra un usuario coincidente
};
function showMenu(){// Muestra el menu principal
    const pantalla = document.getElementById("pantalla");
    pantalla.innerHTML ="<div>><p>1-Saldos</p><p>2-Extracciones</p><p>3-Depósitos</p><p>4-Cambio de clave</p><p> 5-Salir</p></div>";
};
botones.forEach(function (boton) { // Escucha el boton seleccionado
    boton.addEventListener('click', function () {
        op = boton.getAttribute('data-value');
        eleccionMenu(op); // Asignar el valor del botón a 'op'
    });
});

function eleccionMenu(op) {
    console.log("entro");
    let objetoDesdeLocalStorage = JSON.parse(localStorage.getItem("item"));
        switch (op) {
            case "1":
                pantalla.innerHTML = "<div><p>1-Consulta cuenta en pesos </p><p>2-Consulta cuenta en dólares</p> <p>3-Volver al Menu principal </p><p>5-salir</p>"
                botones.forEach(function (boton) { // Escucha el boton seleccionado
                    boton.addEventListener('click', function () {
                        let subEleccion = boton.getAttribute('data-value');
                        if(subEleccion == "1") {alert("pesos");objetoDesdeLocalStorage.accountPesos = extraccion(objetoDesdeLocalStorage.accountPesos, 100);}else{alert("dolares")}// Asignar el valor del botón a 'op'
});
                });
                console.log(objetoDesdeLocalStorage.accountPesos)
                break;
            case "2":
                case2(option = prompt("1-Extracción en pesos\n2-Extracción en Dólares\n3-Volver al Menu principal\n5-Salir"));
                break;
            case "3":
                case3(option = prompt("1-Depósito en pesos\n2-Depósito en Dólares\n3-Volver al menu principal\n5-Salir"));
                sho
                break;
            case "4":
                ActiveUSer.password = passwordReset(ActiveUSer.password);
                valor = showMenu();
                break;
            default:
                return 0; // Hacer funcion salir 
                break;
        };
};


function extraccion(balance, extract) {
    console.log("dentro de extraccion "+ balance);
    // Restar saldo - lo pedido
    balance = balance - extract;
    alert("Su extracción de: " + extract + " fue realizada con éxito");
    return balance; // Devolver el nuevo saldo
}
