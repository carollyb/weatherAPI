class WeatherView{

    constructor(elemento){
        this._elemento = elemento;
    }

    update(model){
        //instancia o helper para transformar o endpoint de temperatura da API de kelvin para celsius
        let helper = new WeatherHelper(model.temperature)
        console.log(helper.temperaturaC)
        //limpa a div para sobrescrever com nova busca
        this._elemento.empty();
        //página carrega com a div invisível através do display none, salvo nesta classe. ao clicar, deve remover
        this._elemento.removeClass('doNotDisplay')
        return this._elemento.append(`<p class="city">${model._city}</p>
        <p class ="temperature">${helper.temperaturaC}ºC</p>
        <p class="description">${model._description}</p>`);
        
        //deve limpar campo do console

    }

}