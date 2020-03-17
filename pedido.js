import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import ElementoPedido from "./elemento-pedido.js";
import Cliente from "./cliente.js";

export default class Pedido {
    constructor(fecha, hora, cliente){
        this._fecha = fecha
        this._hora = hora
        this._cliente = cliente
        this._elementos = new Array
        this._productos = new Array
    }


    getResumen() {
       return`${this._fecha.getFecha()} ${this._hora.getFormato12()} - ${this._elementos.length} elementos con ${this._getProductos()} productos - Total: $${this._getCostoTotal()}` 
    }
    getCostoTotal(){
        let costoTotal = 0 
        this._elementos.forEach(elementoPedido => {
            costoTotal = costoTotal + elementoPedido.cantidad * elementoPedido.producto.precio.valor
        })
       
        return costoTotal
    }
    
    getNumeroElementos(){
        return `Numero de elementos: ${this._elementos.length}` 
    }

    agregarElemento(elementoPedido){
        this._elementos.push(elementoPedido)
    }

    listarElementos(){
        this._elementos.forEach((elementoPedido, i) => {
            console.log(`${i + 1} ${elementoPedido.getDescripcion()}`)
        }
        )
    }

    getProductos(){
        let totalProductos = 0

        this._elementos.forEach(elementoPedido => {
            totalProductos = totalProductos + elementoPedido.cantidad
        })
       
        return totalProductos
}
}