function mult (){
    var num1=parseFloat(document.getElementById('a').value);
    var num2=parseFloat(document.getElementById('b').value);
    var num3=parseFloat(document.getElementById('c').value);

    var res= num1*num2*num3;
    document.getElementById('m').value= res;
}

function temperatura(){
    var temp=document.getElementById('tempe').value;
    if(temp>=-10 && temp<=15){
        var res="Frio";
        }
    else
        if (temp>=16 && temp<=25){
        res="Templado";}
        else
            if (temp>=26 && temp<=40){
            res="calor";
            }
            else 
            res="el valor no es valido";
        
    document.getElementById('r').value=res
}

function factorial (){
    var nu1 =parseFloat(document.getElementById('nu2').value);
    var fac = 1;
    for (var i=1;i<=nu1;i++){
        fac = fac * i;
    }
    document.getElementById('res').value = fac;
}

function fecha(){
    var fecha = new Date();
    var diasemana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
    var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

    var dia =diasemana[fecha.getDay()]
    var mes = meses[fecha.getMonth()]
    var year = fecha.getFullYear();
    var fechas= fecha.getDate();
    
   
    document.getElementById('fec').value = dia
    document.getElementById('fec1').value =fechas +', de'+ mes +' del ' + year
       
}