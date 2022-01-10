class WeatherHelper{
    constructor(tempK){
        this._temperaturaKelvin = tempK
    }

    getTemperaturaC(){
        return this._temperaturaKelvin[0]-273.15
    }
}