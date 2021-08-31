//id mizque: 3910291
//api.openweathermap.org/data/2.5/weather?id=3910291&units=metric&appid=9062e0e181557a2fff0a54bdca6eb699

const requestURL= "https://api.openweathermap.org/data/2.5/weather?id=3910291&units=metric&appid=9062e0e181557a2fff0a54bdca6eb699";
const request = new XMLHttpRequest();
request.open('GET',requestURL);
//conexion
request.responseType = 'json';
request.send();

//obtencion

request.onload = function()
{
    const clima_mizque = request.response;
    console.log(clima_mizque);
   // document.getElementById('temp').innerHTML=clima_mizque.main.temp;
    Most_info(clima_mizque);
}
function Most_info(objson)
{
    var he1 = document.querySelector('header');
    var lu= document.createElement('h1');
    var temp_ac= document.createElement('h2');
    var temp_max= document.createElement('h3');
    var temp_min= document.createElement('h3');
    var humedad= document.createElement('h3');
    

    lu.textContent= 'Pueblo de '+ objson.name;
    temp_ac.textContent= 'Temperatura actual: '+ objson.main.temp + '°C';
    temp_max.textContent= 'Temperatura maxima: '+ objson.main.temp_max + '°C';
    temp_min.textContent= 'Temperatura minima: '+ objson.main.temp_min + '°C';
    humedad.textContent= 'Humedad relativa: '+ objson.main.humidity + '%';

    he1.appendChild(lu);
    he1.appendChild(temp_ac);
    he1.appendChild(temp_max);
    he1.appendChild(temp_min);
    he1.appendChild(humedad);
}