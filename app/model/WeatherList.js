class WeatherList{
    constructor(city,temperature,description){
        this._city = city
        this._temperature = temperature
        this._description = description
    }

    getCity(){
        return this._city
    }

    get temperature(){
        return this._temperature
    }

    getDescription(){
        return this._description
    }

}