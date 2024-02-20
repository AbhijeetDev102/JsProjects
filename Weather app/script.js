
const URL=`https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=07a63444780b0ec7fefeceb189cf219f`


async function weather(city){
    
    const response= await fetch(URL + "&q="+ city)
    var data= await response.json()
    
    document.querySelector(".temp-icon").src="images/temperature-half-solid.svg"
    document.querySelector(".cityname").innerHTML= data.name;
    document.querySelector(".temperature").innerHTML= " " +Math.round(data.main.temp ) + "°C";
    document.querySelector(".max").innerHTML= "Max: "+ data.main.temp_max  + "°C";
    document.querySelector(".min").innerHTML="Min: "+ data.main.temp_min  + "°C";
    console.log(data);
    if (data.weather[0].main=="Clear"){
        document.querySelector(".weatherImg").src="./images/sun.png"
        document.querySelector(".weatherdiscription").innerHTML= data.weather[0].main;
    }
    if (data.weather[0].main=="Clouds" || data.weather[0].main=="Haze" || data.weather[0].main=="Smoke"){
        document.querySelector(".weatherImg").src="./images/cloudy.png"
        document.querySelector(".weatherdiscription").innerHTML= data.weather[0].main;
    }
    if (data.weather[0].main=="Snow"){
        document.querySelector(".weatherImg").src="./images/snow.png"
        document.querySelector(".weatherdiscription").innerHTML= data.weather[0].main;
    }
    if (data.weather[0].main=="Rain" || data.weather[0].main=="Drizzle"){
        document.querySelector(".weatherImg").src="./images/rainy-day.png"
        document.querySelector(".weatherdiscription").innerHTML= data.weather[0].main;
    }
    if (data.weather[0].main=="Thunderstorm"){
        document.querySelector(".weatherImg").src="./images/storm.png"
        document.querySelector(".weatherdiscription").innerHTML= data.weather[0].main;
    }
    
}

document.querySelector(".btn").addEventListener("click", ()=>{
    weather(document.querySelector(".city").value);
})