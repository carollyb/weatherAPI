class WeatherView{

    constructor(elemento){
        this._elemento = elemento;
    }
    
    template(model){
        return `<div class="weather-info"> ${model.map (n=> {
            return `
            <p class="city">${n._city}</p>
            <p class ="temperature">${WeatherHelper.temperaturaC}ºC</p>
            <p class="description">${n._description}</p>
            `
        }).join('')}
            
        </div><div class="mood"></div>`
    }

    update(model){
        this._elemento.innerHTML = this._template(model)
    }

}