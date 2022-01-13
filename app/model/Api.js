class Api {

    constructor(city){
        this._city = city;
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
                let list = new WeatherList(response.list[0].name,response.list[0].main.temp,response.list[0].weather[0].description);
                
                console.log(list);
            }
        });
    }
}

//https://stackoverflow.com/questions/5316697/jquery-return-data-after-ajax-call-success
//deve fazer a conversão de kelvin para celsius
//console.log(response.list[0].name);
//console.log(response.list[0].main.temp);
//console.log(response.list[0].weather[0].description);