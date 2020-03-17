export default class Precio {
    constructor(valor){
        this._valor = valor
    }

    getPrecio(){
        //let precio = this._valor.toFixed(2)
        return`$${this._valor.toFixed(2)}`
    }
}