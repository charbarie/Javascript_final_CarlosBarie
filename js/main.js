

class BotonReutilizable {
    constructor(texto, onClickFunc, variable) {
      this.boton = document.createElement('button');
      this.boton.textContent = texto;
      this.boton.addEventListener('click', () => onClickFunc(variable));
    }
  
    agregarHtml(botoncito) {
      botoncito.appendChild(this.boton);
    }
  }
  
  function BotonElegido(valor) {
    opcionElegida = valor;
    console.log("opcionelegida"+opcionElegida);
    eleccionMenu(valor);

  };
  
  const button1 = document.getElementById('boton1');
  const button2 = document.getElementById('boton2');
  const button3 = document.getElementById('boton3');
  const button4 = document.getElementById('boton4');
  const button5 = document.getElementById('boton5');
  const button6 = document.getElementById('boton6');
  
  
  const variable1 = 1;
  const variable2 = 2;
  const variable3 = 3;
  const variable4 = 4;
  const variable5 = 5;
  const variable6 = 6;
  
  const boton1 = new BotonReutilizable('Opcion 1', BotonElegido, variable1);
  const boton2 = new BotonReutilizable('Opcion 2', BotonElegido, variable2);
  const boton3 = new BotonReutilizable('Opcion 3', BotonElegido, variable3);
  const boton4 = new BotonReutilizable('Opcion 4', BotonElegido, variable4);
  const boton5 = new BotonReutilizable('Opcion 5', BotonElegido, variable5);
  const boton6 = new BotonReutilizable('Opcion 6', BotonElegido, variable6);
  
  boton1.agregarHtml(button1);
  boton2.agregarHtml(button2);
  boton3.agregarHtml(button3);
  boton4.agregarHtml(button4);
  boton5.agregarHtml(button5);
  boton6.agregarHtml(button6);
  


  
  
    

function showMenu(){// muestra opciones de menu
    const pantalla = document.getElementById("pantalla");
    pantalla.innerHTML ="<div><p>Hola </p><p>1-Saldos</p><p>2-Extracciones</p><p>3-Depósitos</p><p>4-Cambio de clave</p><p> 5-Salir</p></div>";
};
function eleccionMenu(op){
        console.log(typeof(op));
        console.log(op);
        while(op != 5){
            switch(op){
                case 1: // envia la opcion y los datos almacenados en Active user
                    console.log("entro");
                    pantalla.innerHTML = "<div><p>1-Consulta cuenta en pesos </p><p>2-Consulta cuenta en dólares</p> <p>3-Volver al Menu principal </p><p>5-salir</p></div>"
                    
                    op=5; 
                break; 
                case "2": // envia saldo en las cuentas y la opcion
                    case2( option = prompt(" 1-Extracción en pesos\n 2-Extracción en Dólares\n 3-Volver al Menu principal\n 5-Salir"));
                    break;
                case "3":
                    case3(option = prompt(" 1-Depósito en pesos\n 2-Depósito en Dólares\n 3-Volver al menu principal \n 5-Salir"));
                    break;
                case "4":
                    ActiveUSer.password= passwordReset(ActiveUSer.password);
                    valor= showMenu();
                    break;
                default:
                    return (error());
                    break;
            };
        };
    
}


function show(seleccion){
    if(seleccion){
        alert("entroa");

    }
}