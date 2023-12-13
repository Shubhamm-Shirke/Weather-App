const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");

async function checkWeather(city) {
    const api_key = "9e8abcb2f2e976e62411997096f5d7fb";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());

    // console.log(weather_data);

    // if user entered invalid input
    if (weather_data.cod === `404`) {
        // console.log("error");
        weather_img.src = "error.png";

        temperature.innerHTML = `0°C`;
        description.innerHTML = `__________`;
        humidity.innerHTML = `______`;
        wind_speed.innerHTML = `________`;

        return;
    }
    // change data according to city
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    // change image accoding to city
    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "cloud.png";
            break;
        case 'Clear':
            weather_img.src = "clear.png";
            break;
        case 'Rain':
            weather_img.src = "rain.png";
            break;
        case 'Mist':
            weather_img.src = "mist.png";
            break;
        case 'Snow':
            weather_img.src = "snow.png";
            break;

    }
}
searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
})




