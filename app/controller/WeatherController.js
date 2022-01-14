class WeatherController {
    constructor(){
        this._inputCity = $('#inputCity');
        //cria uma nova instância da view pegando o elemento do dom
        this._weatherView = new WeatherView($('.fillWeather'));
        
    }
    getInput(){
        return this._inputCity.val()
    }
    async adiciona(event){

        event.preventDefault();
        let request = new Api(this.getInput())
        
        let resposta = await request.getWeather()
        
        if (resposta.error){
            console.log('Cidade não existe');
        } else {
            let helper = new WeatherHelper(resposta.temperature)
            console.log(helper.temperaturaC)
            console.log(resposta);
        }
        
        
        //this.weatherView.update(//deve passar o objeto da lista)
        
    }
}