class WeatherHelper{

    constructor(tempK){
        this._temperaturaKelvin = tempK
        
    }

    get temperaturaC(){
        
        return Math.round(this._temperaturaKelvin - 273.15)
        
    }
}