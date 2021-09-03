function numero(){
    var a =parseFloat(document.getElementById('a').value);
    
    if (a > 0){
        var b = 'Positivo';
    }
    else 
         b = ' Negativo';
    
    document.getElementById('b'). value = b
}



function ta_mul(){

        var m =parseFloat(document.getElementById('m').value);
        for(var i = 1;i<=10;i++){
            
            var n = document.write(m + "x " + i + "= " + m * i);
            
        }
        document.getElementById('n'). value = n;
    }