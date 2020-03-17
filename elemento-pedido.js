import Producto from "./producto.js"

export default class ElementoPedido {
    constructor(producto = new Producto, cantidad){
        this._producto = producto
        this._cantidad = cantidad
        this._costo = (this._producto.precio.valor * this._cantidad).toFixed(2)
    }

    getDescripcion(){
        return`${this._cantidad} x ${this._producto.nombre} $${this._costo}`
    }
}