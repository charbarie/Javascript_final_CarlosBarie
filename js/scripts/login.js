let ActiveUser = false; // Utiliza camelCase para los nombres de variables
document.getElementById("guardarLogin").addEventListener("click", guardado);
function guardado() {
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

function login(a, b) {
    for (const item of Usuarios) {
        if (item.user == a && item.password == b) {
            const UsuarioEnLocal = JSON.stringify(item);//almaceno todo item para trabajar
            localStorage.setItem("item", UsuarioEnLocal);
            let objetoDesdeLocalStorage = JSON.parse(localStorage.getItem("item"));
            return true;
        };
    };
    return false; // Devuelve false si no se encuentra un usuario coincidente
};
 // Recupera el objeto del localStorage

