class Api {

    constructor(city){
        this._city = city;
        this._temperature = [];
    }

    getCity(){
        return this._city
    }

    getWeather(){
        //chama a requisição
        let cidade = this.getCity()
        $.ajax({
            type: "GET",
            url: `https://community-open-weather-map.p.rapidapi.com/find?q=${cidade}&cnt=1&mode=null&lon=0&type=link%2C%20accurate&lat=0&units=imperial%2C%20metric`,
            headers: {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "8e1919796cmshecfd43aedaa3cd5p1ee97ejsna4fd79737630"
            },
            success: function (response) {
              console.log(response);
              console.log(response.list[0].name);
              console.log(response.list[0].main.temp);
              console.log(response.list[0].weather[0].description);
              //this._temperature.push(response.list[0].main.temp)
            }
        });
        
    }

    getTemperature(){
        let temperaturaKelvin = new WeatherHelper(this._temperature)
        console.log(temperaturaKelvin.getTemperaturaC())
        //return temperaturaKelvin
    }
}

//deve fazer a conversão de kelvin para celsius
//console.log(response.list[0].name);
//console.log(response.list[0].main.temp);
//console.log(response.list[0].weather[0].description);