//Acceder al elemento de la pantalla al cargar la ventana y de una vez controlar la función
window.onload= function(){
   var pantalla=document.getElementById("pantalla"); //elemento pantalla de salida
}
var n=0;
var ni=1;
var decimal=0;
var xi=0; //número oculto o en espera.
var opera="no"; //operación en curso; "no" =  sin operación.
function num(nn){
    if(n=="0" || ni==1){
        pantalla.innerHTML=nn; //mostrar en pantalla
        n=nn; //guardar número;
        if (nn==".") { //si escribimos un punto al principio del número
            pantalla.innerHTML="0."; //escribimos 0 para que no de un error matemático.
            n=nn; //se guarda el numero
            decimal=1; //cambie el total del punto decimal
            }
        }else{ //continuar con numeros un número
            if (nn=="." && decimal==0) { //si escribimos el punto decimal primera
                pantalla.innerHTML+=nn;
                n+=nn;
                decimal=1; //cambiar el estado de la coma para que ya no se pueda escribir otra  
            }
        else if (nn=="." && decimal==1) {
        //si intentamos escribir una segunda coma decimal no realiza ninguna acción.
        }
            else{ 
                pantalla.innerHTML+=nn;
                n+=nn; //añadimos numero y lo guarda
            }  
        }
     ni=0;
}
function c() {
    pantalla.innerHTML=0; //poner pantalla a 0
    n="0"; //reiniciar número en pantalla
    decimal=0; //reiniciar estado coma decimal 
    xi=0 //indicador de número oculto a 0;
    opera="no" //borrar operación en curso.
    }
function ope(s) {
    igual(s);
    xi=n; 
    opera=s; 
    ni=1;
    }

function raiz(){
    n= Math.sqrt(n);
    pantalla.innerHTML=n; 
     opera="no"; 
    ni=1; 
}
function modulo(){
    igual();
    xi= n;
    opera="simod"; 
    ni=1; 
}

function signo() { 
            ni=Number(n); 
            ni=-ni; 
            n=String(ni); 
            pantalla.innerHTML=n; 
            }
 function inverso() { 
     ni=1/n; 
    pantalla.innerHTML=ni; 
     }   
     function back(){ 
        var cifras=n.length; //hayar número de caracteres en pantalla
        var br=n.substr(cifras-1,cifras);
        //El substr()método extrae una parte de una cadena.
        n=n.substr(0,cifras-1) //quitar el ultimo caracter segun el total de caracteres
        if (n=="") {n="0";} //si ya no quedan caracteres, se pondra 0
        if (br==".") 
        {
            decimal=0;
        } 
        //Si hemos quitado el punto decimal permite escrirlo nuevamente
        pantalla.innerHTML=n; 
        } 
        function cE() {
            pantalla.innerHTML=0; //Borrado de pantalla;
            n=0; //Borrado indicador número pantalla.
            decimal=0; //reiniciamos también la coma					
            }     
function igual(){
    if(opera=="no"){
        pantalla.innerHTML= n;
    }else if(opera=="simod"){
        var mod = xi % n;
    pantalla.innerHTML=mod; 
    }else{
        decimal= 0;
        var sl=xi+opera+n; 
        var sol=eval(sl);
        pantalla.innerHTML=sol //mostramos la solución
        n=sol; //guardamos la solución
        opera="no"; 
        ni=1; 
    }
}