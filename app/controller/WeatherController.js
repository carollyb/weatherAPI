class WeatherController {
    constructor(){
        this._inputCity = $('#inputCity');
        //cria uma nova instância da view pegando o elemento do dom
        this._weatherView = new WeatherView($('.fillWeather'));
        
    }
    getInput(){
        return this._inputCity.val()
    }
    adiciona(event){

        event.preventDefault();
        let request = new Api(this.getInput())
        //chama a função quando clica
        request.getWeather()

        let helper = new WeatherHelper(WeatherList.temperature) //tá respondendo mais rápido do que a API
        console.log(helper)

        //chama o método de preencher
        this.weatherView.update(//deve passar o objeto da lista)
        
    }
}