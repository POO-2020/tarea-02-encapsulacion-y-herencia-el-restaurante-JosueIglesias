import Precio from "./precio.js"
export default class Producto {
    constructor(nombre, precio = new Precio){
        this._nombre = nombre
        this._precio = precio
    }

    getDescripcion(){
        return`${this._nombre} ${this._precio.getPrecio()}`
    }
}
