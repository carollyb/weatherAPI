class WeatherHelper{
    constructor(tempK){
        this._temperaturaKelvin = tempK
    }

    get temperaturaC(){
        
        return this._temperaturaKelvin - 273
        
    }
}