let ActiveUser = false; 
document.getElementById("guardarLogin").addEventListener("click", guardado);
function guardado() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("password").value;
    ActiveUser = login(user, pass); 
    if (ActiveUser) {
        showMenu()
        console.log("Credenciales guardadas con éxito.");
    } else {
        console.log("Error de ingreso");
    };
};

function login(a, b) {
    for (const item of Usuarios) {
        if (item.user == a && item.password == b) {
            const UsuarioEnLocal = JSON.stringify(item);
            localStorage.setItem("item", UsuarioEnLocal);
            let objetoDesdeLocalStorage = JSON.parse(localStorage.getItem("item"));
            return true;
        };
    };
    return false; 
};


