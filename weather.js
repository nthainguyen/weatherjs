class Weather {
    constructor(city, country){
        this.apikey = '7c4cf8fef4f3d99b27900502c5c6526f'
        this.city = city;
        this.country = country;
        this.unit = 'metric';
    }

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=${this.unit}&appid=${this.apikey}`)

        const responseData = await response.json();
        return responseData
    }

    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}


