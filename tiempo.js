export default class Tiempo {
    constructor(hora, minutos, periodo) {
        this._hora = hora
        this._minutos = minutos
        this._periodo = periodo
    }

    getFormato12(){
        return `${this._hora}:${this._minutos} ${this._periodo}`

    }

    getFormato24(){
        if (this._periodo.toUpperCase() === "PM" && this._hora != 12) {
            this._hora = this._hora + 12
        }
        return `${this._hora}:${this._minutos}`
    }
}