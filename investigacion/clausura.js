function iniciar() {
    var nombre = prompt("Ingrese su nombre porfavor");  // La variable nombre es una variable local creada por iniciar.
    function mostrarNombre() {  // La función mostrarNombre es una función interna, una clausura.
      alert(nombre);  // Usa una variable declarada en la función externa.
    }
    mostrarNombre();
  }

  function sumar(){
    let num1, num2, resul;
    num1=  prompt("Ingrese un número, cual sea");
    function opera(){
        num2= prompt("Ingrese un valor para suma");
        resul= parseFloat(num1) + parseFloat(num2);
        console.log(resul);
    }
    opera();
  }

  function par(){
    let num1, num2, resul;
    num1=  prompt("Ingrese un número, cual sea");
    function opera(){
        num2= prompt("Ingrese un valor para suma");
        resul= parseFloat(num1) % parseFloat(num2);
        console.log(resul);
    }
    opera();
    if(num1%num2==0){
        console.log("Es par " + resul);
    }else{
        console.log("Es impar " + resul);

    }
  }

 
 