import Cliente from "./cliente.js";

export default class ClienteFrecuente extends Cliente{
    constructor ({nombre, direccion, telefono,  numeroCliente, fechaRegistro}){
        super({nombre, direccion, telefono})

        this._nombre = nombre
        this._direccion = direccion 
        this._telefono = telefono
        this._numeroCliente = numeroCliente
        this._fechaRegistro = fechaRegistro
    }

    getPerfil(){
        return `No. de cliente: ${this._numeroCliente}, Fecha de registro: ${this._fechaRegistro.getFecha()}, Nombre: ${this._nombre}, Direccion: ${this._direccion.getFormatoCorto()}, Telefono: ${this._telefono}`
    }
}