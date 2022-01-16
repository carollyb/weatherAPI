class WeatherView{

    constructor(elemento){
        this._elemento = elemento;
    }

    update(model){
        let helper = new WeatherHelper(model.temperature)
        console.log(helper.temperaturaC)
        return this._elemento.append(`<p class="city">${model._city}</p>
        <p class ="temperature">${helper.temperaturaC}ºC</p>
        <p class="description">${model._description}</p>`)
    }

}