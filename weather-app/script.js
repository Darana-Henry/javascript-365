const apiKey = "";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=zurich&units=metric";

async function checkWeather() {
    const response = await fetch(apiURL + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
}

checkWeather();