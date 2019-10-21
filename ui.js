class UI{
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icons = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
        this.feellike = document.getElementById('w-feels-like');
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.string.textContent = `${weather.main.temp}°C`;
        this.desc.textContent = weather.weather[0].description;
        this.dewpoint.textContent = `Atmospheric pressure: ${weather.main.pressure} hPa`;
        this.humidity.textContent = `Relative humidity: ${weather.main.humidity}%`;
        this.icons.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`)
        this.wind.textContent = `Wind: ${weather.wind.speed} m/s`
        this.feellike.textContent = `Visibility: ${weather.visibility} m`
    }
}
