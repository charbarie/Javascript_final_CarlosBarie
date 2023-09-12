const botones = document.querySelectorAll('.boton');
const menuPrincipal = document.getElementById('MenuPrincipal');
let op = 0;


function BotoneraPrincipal(){
    const pantalla = document.getElementById("pantalla");
    pantalla.innerHTML = `<div>
                            <p>1-Saldos</p>
                            <p>2-Extracciones</p>
                            <p>3-Depósitos</p>
                            <p>4-Cambio de clave</p>
                            <p> 5-Salir</p>
                          </div> `};
botones.forEach(function (boton) { 
    boton.addEventListener('click', function () {
        op = boton.getAttribute('data-value');
        eleccionMenu(op);
    });
});

function eleccionMenu (x){
    switch (x) {
        case "1":
                Swal.fire({   
                title: 'Saldo en cuenta',
                text: '$'+ objetoDesdeLocalStorage.accountPesos ,
                confirmButtonText: 'Volver'
              })
                 break;
            case "2":
                pantalla.innerHTML = `
                <form class="formulario debito">
                <label for="importe">Importe:</label>
                <div class="input-container">
                    <input id="importe" type="number" name="importe" placeholder="Ingrese el importe" required>
                    <button type="submit">Extraer</button>
                    
                </div>
            </form>
                `;
                document.querySelector('.debito').addEventListener('submit', function (event) {
                  event.preventDefault(); 
                  let importe = Number(document.getElementById("importe").value);
                  if(!isNaN(importe)){
                    objetoDesdeLocalStorage.accountPesos = extraccion(objetoDesdeLocalStorage.accountPesos, importe);
                    Swal.fire({   
                        title: 'Extraccion realizada',
                        text: 'Extraccion solicitada $'+ importe ,
                        text: 'Extraccion solicitada $'+ importe + 'saldo actual: $'+ objetoDesdeLocalStorage.accountPesos ,
                        confirmButtonText: 'Volver'
                       

                      })
                  } else {
                    alert("Por favor, ingrese un valor  válido.");
                  }
                  BotoneraPrincipal();
                });

        
            break;
            
            case "3":
                pantalla.innerHTML = `
                <form class="formulario deposito">
                <label for="realizarDeposito">Importe:</label>
                <div class="input-container">
                    <input id="realizarDeposito" type="text" name="importe" placeholder="Ingrese el importe" required>
                    <button type="submit">Depositar</button>
                </div>
            </form>
            
            `;
                document.querySelector('.deposito').addEventListener('submit', function (event) {
                event.preventDefault(); 
                let monto = Number(document.getElementById("realizarDeposito").value);
                cl(monto);
                if(!isNaN(monto)){
                    Swal.fire({   
                        title: 'Deposito de $'+ monto +' Realizado',
                        text:  'saldo actual: $ '+ objetoDesdeLocalStorage.accountPesos ,
                        confirmButtonText: 'Volver',
                      })

                  };
                });
                
              
            break;
        
            case "4":
                location.href ="./pages/cambiodeclave.html"
            break;
        default:
            pantalla.innerHTML = "salio" 
            break;
    }}


    
function extraccion(balance, extract) {
    console.log("dentro de extraccion "+ balance);
    
    balance = balance - extract;
    return balance; 
}
