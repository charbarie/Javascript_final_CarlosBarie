
ActiveUSer = false;

document.getElementById("guardarLogin").addEventListener("click", guardado)
function guardado(){
    /* et user = "coder";let pass = 1234; */
    let user = document.getElementById("user").value;
    let pass = Number(document.getElementById("password").value); 
    console.log("Credenciales guardadas con éxito.");
    ActiveUSer = login(user,pass);
    console.log(ActiveUSer);
    console.log("---------------------------------------------");
    if(ActiveUSer == true){
        showMenu();
    };
function login(a,b){
    for( const item of Usuarios){
        if(item.user == a && item.password == b){ 
            const UsuarioEnLocal = JSON.stringify(item);
            localStorage.setItem("item",UsuarioEnLocal);
            console.log("-------------UsuarioEnLocal -----------------------");
            console.log(UsuarioEnLocal);
            const UsuarioDesdeLocal = JSON.parse(UsuarioEnLocal);   
            console.log("-------------UsuarioDesdeLocal -----------------------");
            return true;
        };
    };
};
    

};


 

function extraction(balance,extract){  //* resta saldo - lo pedido
 balance = balance- Number(extract);
    alert("su extraccion de: " + extract + " fue realizada con exito");
    showAccount(balance);
    return balance;
};
function deposit(balance,deposito){//* suma saldo + lo depositado
    balance =Number(balance) + Number(deposito);
    alert("su Depósito  de: " +  deposito + " fue realizada con éxito");
    showAccount(balance);
    return balance;
};
function case1 (selection, pesos , dolares){ //* consulta de saldos en cuenta pesos y dolares 
        if(selection==1){
            showAccount(pesos);
        }else if(selection==2){
            showAccount(dolares);
        }else if(selection==3){
            choice= showMenu();
        }else if(selection==5){
            validation = false;
        }else{
            error();
        }
};
function case2( selection){//* Extraccion en cuenta
    if(selection==1){
            amount = prompt("Ingrese monto a extraer en pesos");
                if(amount <= ActiveUSer.accountPesos){                                  
                        ActiveUSer.accountPesos = extraction(ActiveUSer.accountPesos,Number(amount));
                        choice = showMenu();
                }else{ 
                    alert("no posee ese saldo en la cuenta");
                    showAccount(ActiveUSer.accountPesos);
                }
    }else if(selection==2){
            amount = prompt("Ingrese monto a extraer en Dólares");
            if(amount <= ActiveUSer.accountDolares){
                ActiveUSer.accountDolares = extraction(ActiveUSer.accountDolares,Number(amount)); 
                    choice = showMenu();
            }else{
                alert("no posee ese saldo en la cuenta");
                showAccount( ActiveUSer.accountDolares);
            }
    }else if(selection==3){
        choice= showMenu();
    }else if(selection==5){
        validation = false;     
    }else{
        error();
    }
};
function case3(selection){//* deposito en cuenta 
    if(selection==1){
        amount = prompt("Ingrese monto a depositar en Pesos \n");
        if(amount >=1){
            ActiveUSer.accountPesos= deposit(ActiveUSer.accountPesos,amount);  
        }else{
            alert("Ingrese un valor válido");
            console.log("usuario ingresó un valor negativo");
        }
    }else if(selection==2){
        amount = prompt("ingrese monto a depositar en Dólares\n ");
        if(amount >=1){
            ActiveUSer.accountDolares= deposit(ActiveUSer.accountDolares,amount);
        }else{
            alert("Ingrese un valor válido");
            console.log("usuario ingresó un valor negativo");
        }
    }else if(selection==3){
        choice= showMenu();
    }else if(selection==5){
        access = false;
    }
    else {
        error();
    }
};
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
let showAccount=(saldo)=> alert("Su saldo actual es de: " + saldo);
function error (){
    alert("Favor de ingresar una opcion correcta");
    return choice =showMenu();
};


 



