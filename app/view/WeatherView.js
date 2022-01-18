class WeatherView{

    constructor(elemento){
        this._elemento = elemento;
    }

    update(model){
        //instancia o helper para transformar o endpoint de temperatura da API de kelvin para celsius
        let helper = new WeatherHelper(model.temperature)
        console.log(helper.temperaturaC)
        //página carrega com a div invisível através do display none, salvo nesta classe. ao clicar, deve remover
        this._elemento.removeClass('doNotDisplay')
        this._elemento.html(`<p class="city">${model._city}</p>
        <p class ="temperature">${helper.temperaturaC}ºC</p>
        <p class="description">${model._description}</p>`);

        //manipulando classes para mudar aparência do site de acordo com o output da descrição
        if (model._description == 'clear sky'){
            $('body').addClass(function(){
                if ($('.snowSky')){
                    $('body').removeClass('snowSky');
                } 
                if ($('.otherSky')){
                    $('body').removeClass('otherSky');
                }
                return 'clearSky'
            })
        } else if (model._description == 'snow'){
            
            $('body').addClass(function(){
                if ($('.clearSky')){
                    $('body').removeClass('clearSky')
                } 
                if ($('.otherSky')){
                    $('body').removeClass('otherSky')
                }
                return 'snowSky'
            })
        } else {
            $('body').addClass(function(){
                if ($('.clearSky')){
                    $('body').removeClass('clearSky')
                } 
                if ($('.snowSky')){
                    $('body').removeClass('snowSky')
                }
                return 'otherSky'
            })
        };        
        //deve limpar campo do input
        
    }

    errorMessage(){
        this._elemento.removeClass('doNotDisplay')
        this._elemento.html(`<p>oops!</p><p>we couldn't find this city. please try again</p>`);
    }

}