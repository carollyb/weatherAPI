class WeatherController {
    constructor(){
        this._inputCity = $('#inputCity');
    }
    getInput(){
        return this._inputCity.val()
    }
    adiciona(event){

        event.preventDefault();
        let request = new Api(this.getInput())
        request.getWeather();
        request.getTemperature();
    }
}