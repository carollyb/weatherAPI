class Api {
  constructor(city) {
    this._city = city;
  }

  getCity() {
    return this._city;
  }

  getWeather() {

    let cidade = this.getCity();
    let key = `38f8e399e6e4dcb588f0cc0b5fde2fe2`
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&APPID=${key}`
    
    return fetch(url)
    .then((response) => response.json())
    .then((data) => {
        
        let list = new WeatherList(
            data.name,
            data.main.temp,
            data.weather[0].description
          );
         return list;
    })
    .catch((erro) => {
        return {error:erro}
    })
    
  }
}