let ActiveUser = false;// Variable para rastrear si el usuario está activo o no
document.getElementById("guardarLogin").addEventListener("click", guardado);// Agrega un evento de clic al botón "guardarLogin" y llama a la función "guardado" 

function guardado() { // Guarda las credenciales y verificar el inicio de sesión
    // Obtener el usuario y la contraseña ingresados por el usuario
    let user = document.getElementById("user").value;
    let pass = document.getElementById("password").value;

    ActiveUser = login(user, pass);// Verifica el inicio de sesión llamando a la función "login"

    
    if (ActiveUser){// Si el inicio de sesión es exitoso, mostrar la "Botonera Principal" y registrar un mensaje de éxito en la consola
        botoneraPrincipal();
        cl("Credenciales guardadas con éxito.");
    }else{ // Si el inicio de sesión falla, registrar un mensaje de error en la consola
        cl("Error de ingreso");
    };
};

function login(a,b){ //Verifica las credenciales de inicio de sesión
    for (const item of Usuarios){// Si se encuentra una coincidencia de usuario y contraseña, almacena el usuario en el local y devolver "true"
        if(item.user == a && item.password == b){
            const UsuarioEnLocal = JSON.stringify(item);
            localStorage.setItem("item", UsuarioEnLocal);
            return true;
        };
    };
            return false;// Si no se encuentra ninguna coincidencia, devolver "false"
};

let objetoDesdeLocalStorage = JSON.parse(localStorage.getItem("item"));// Obtener el objeto de usuario desde el almacenamiento local


