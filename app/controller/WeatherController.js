class WeatherController {
    constructor(){
        this._inputCity = $('#inputCity');
        //cria uma nova instância da view pegando o elemento do dom
        let fillWeather = $('.fillWeather')
        this._weatherView = new WeatherView(fillWeather);
        
    }
    getInput(){
        return this._inputCity.val()
    }

    async adiciona(event){

        event.preventDefault();
        let request = new Api(this.getInput())
        
        let resposta = await request.getWeather()
        
        if (resposta.error){
            this._weatherView.errorMessage()
        } else {
            console.log(resposta);
            this._weatherView.update(resposta)
        }

        
    }
}