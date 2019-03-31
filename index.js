

var boton = document.querySelector("#guardar");

boton.addEventListener('click',function(){
    var Nota1 = document.querySelector("#Nota1").value;
    var Nota2 = document.querySelector("#Nota2").value;
    var Nota3 = document.querySelector("#Nota3").value;
    var Nota4 = document.querySelector("#Nota4").value;
    console.log(Nota1);  
    Total(Nota1,Nota2,Nota3,Nota4);

})

function Total (Nota1,Nota2,Nota3,Nota4){

    var Parcial = parseFloat(Nota1) + parseFloat(Nota2) + parseFloat(Nota3) + parseFloat(Nota4);
    
    var Promedio = Parcial/4;

    console.log(Parcial);
    document.getElementById("Promedio").value = Promedio;   
    
    var status;

    if((Promedio >=90)&&(Promedio <=100)){
        status = "A";
    }else if((Promedio >=80)&&(Promedio <=89)){
            status = "B";   
        }
    
        else if((Promedio >=70)&&(Promedio <=79)){
            status = "C";   
        }
        else if((Promedio >=60)&&(Promedio <=69)){
            status = "D";   
        }
        else if((Promedio >=0)&&(Promedio <=59)){
            status = "E";   
        }
    
        console.log(status);
        document.getElementById("Puntaje").value = status;
}

var boton = document.getElementById("guardar2");

boton.onclick = function dina(){
    const gravedad = 6.673;

    var Masa1 = document.getElementById ("Masa1").value;
    var Masa2 = document.getElementById ("Masa2").value;
    var Distancia = document.getElementById ("Distancia").value;

    var Fuerza = ((gravedad*Math.pow(10.0,-8))*Masa1*Masa2)/Math.pow(Distancia,2); 
    
    document.getElementById("Dina").value = Fuerza+ " dinas";
}

var boton2 = document.getElementById("guardar3");

boton2.onclick = function energia(){
    
    const c = 2.997925;

    var Masa3 = document.getElementById ("Masa3").value;   
    var Velocidad = (c*Math.pow(10.0,10));

    var energia1 = (Masa3*(Velocidad*Velocidad));

    document.getElementById("Energia").value = energia1+ " ergios";
}    

var boton3 = document.getElementById("guardar4");

boton3.onclick = function hipotenus(){
    var ladoa = document.getElementById ("ladoa").value;
    var ladob = document.getElementById ("ladob").value;

    var la2 = ladoa*ladoa;
    var lb2 = ladob*ladob;
    var cuahipo = la2 + lb2;

    var hi = Math.sqrt(cuahipo,2);

    console.log = hi;
    document.getElementById("hipotenusa").value = hi;
}

var boton4 = document.getElementById("guardar5");

boton4.onclick = function areatri(){
    var lado1 = document.getElementById ("lado1").value;
    var lado2 = document.getElementById ("lado2").value;
    var lado3 = document.getElementById ("lado3").value;
    var p = (parseInt(lado1) + parseInt(lado2) + parseInt(lado3))/2; 

    var a = Math.sqrt((p*(p-lado1)*(p-lado2)+(p-lado3)),2);

    console.log(a);
    document.getElementById("areat").value = a;

}
/*funcion de limpiar campos*/
function limpiar() {
    document.getElementById("Promedio").value = "";
    document.getElementById("Puntaje").value = "";
    document.getElementById("Nota1").value = "";
    document.getElementById("Nota2").value = "";
    document.getElementById("Nota3").value = "";
    document.getElementById("Nota4").value = "";
    
}

function convertirHora(time) {
    /*obtenermos la hora ingresada*/
  var time = document.getElementById("time").value;
  var ts = time;
  /*validamos si la cadena ingresada es igual a 5 caracteres*/
  if (ts.length == 5) {
  var H = time.substr(0, 2);
  //calculamos el modulo del valor ingresado y obtenemos un entero con dicho valor
  var h = (H % 12);
  //var h = (H % 12) || 12;
  h = (h < 10 )?("0"+h):h;  // se concatena el 0 si es meno a 10 y se concatena am o pm si es menor a 12
  var ampm = H < 12 ? " AM" : " PM";
  ts = h + ts.substr(2, 3) + ampm;
  document.getElementById("resultTime").value = ts;
  } else {
    alert("Escribe 5 caracteres exactamente ejemplo 09:00");
  }
};

function convertirFecha(date){
    var date = date ;//document.getElementById("conFecha").value;
    var estado = date.includes('Enero');
    var estado = date.includes('Febrero');
    var estado = date.includes('Marzo');
    var estado = date.includes('Abril');
    var estado = date.includes('Mayo');
    var estado = date.includes('Junio');
    var estado = date.includes('Julio');
    var estado = date.includes('Agosto');
    var estado = date.includes('Septiembre');
    var estado = date.includes('Octubre');
    var estado = date.includes('Noviembre');
    var estado = date.includes('Diciembre');
    switch(estado){
        case estado == true:
        console.log(date.replace("Enero","1"));
        break;
        case estado == true:
        console.log(date.replace("Febrero","2"));
        break;
        case estado == true:
        console.log(date.replace("Marzo","3"));
        break;
        case estado == true:
        console.log(date.replace("Abril","4"));
        break;
        case estado == true:
        console.log(date.replace("Mayo","5"));
        break;
        case estado == true:
        console.log(date.replace("Junio","6"));
        break;
        case estado == true:
        console.log(date.replace("Julio","7"));
        break;
        case estado == true:
        console.log(date.replace("Agosto","8"));
        break;
        case estado == true:
        console.log(date.replace("Septiembre","9"));
        break;
        case estado == true:
        console.log(date.replace("Octubre","10"));
        break;
        case estado == true:
        console.log(date.replace("Noviembre","11"));
        break;
        case estado == true:
        console.log(date.replace("Diciembre","12"));
        break;
    }
    
}
convertirFecha('4 Enero 1994');

function calculosCirculo(radio){
    var radio = document.getElementById("radio").value;
    const pi = 3.14159;
    var diametro = radio * 2;
    var area = Math.pow(radio,2) * pi;    
    var circunferencia = diametro * pi;
    document.getElementById("diametro").value = diametro;
    document.getElementById("circunferencia").value = circunferencia;
    document.getElementById("area").value = area;
}
/*18*/
function validarNumero(num){
    var num = document.getElementById("numero").value;
    var res = Math.sign(num);
    if (res == 1) {
        document.getElementById("number").value = "El numero " + num + " es positivo";
    }if (res == -1){
        document.getElementById("number").value = "El numero " + num + " es negativo";
    }if(res == 0){
        document.getElementById("number").value = "El numero es cero";
    }

}
/*14*/
function validarAnio(anio){
    var anio = document.getElementById("anio").value;
    if (anio % 4 == 0 && anio % 100 != 0 || anio % 400 == 0) {
        document.getElementById("resultAnio").value = 'Es bisiesto';
    }else{
        document.getElementById("resultAnio").value = 'No es bisiesto';
    }
}
/*function calcularSalario(horas){
    var horas = document.getElementById("horas").value;
    var salarioNeto;
}*/
function numeroPrimo(numero){
    var numero = document.getElementById("numPrimo").value;
    var i = 2;
    while (numero % i !== 0 && i < numero / 2 ) {
    i++;
    }
    if (numero % i !== 0) {
    document.getElementById("resPrimo").value = "El número es primo";
    } else {
    document.getElementById("resPrimo").value = "El número no es primo";
    }
}

