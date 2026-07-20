const apiKey = "81118a10da3380053fc2171307efbffc";

async function getWeather() {

    const city = document.getElementById("city").value;

    if(city===""){
        alert("Please enter a city name");
        return;
    }

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        const response = await fetch(url);

        const data = await response.json();

        if(data.cod=="404"){

            alert("City not found");
            return;
        }

        document.getElementById("cityName").innerHTML =
        data.name;

        document.getElementById("temperature").innerHTML =
        "Temperature : " + data.main.temp + " °C";

        document.getElementById("description").innerHTML =
        "Weather : " + data.weather[0].description;

        document.getElementById("humidity").innerHTML =
        "Humidity : " + data.main.humidity + "%";

        document.getElementById("wind").innerHTML =
        "Wind Speed : " + data.wind.speed + " m/s";

    }

    catch(error){

        alert("Something went wrong!");

    }

}