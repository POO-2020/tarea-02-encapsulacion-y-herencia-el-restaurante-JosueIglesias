export default class Restaurante {
    constructor ({nombre, telefono, direccion}){
        this._nombre = nombre
        this._telefono = telefono
        this._direccion = direccion
        this._productos = new Array
        this._pedidos = new Array
    }
    
    registrarProductos(producto) {
        this._productos.push(producto)
    }

    listarProductos(){
        this._productos.forEach((producto, i) => {
            console.log(`${i + 1} ${producto._nombre}`)
        }
        )
    }

    registrarPedido(pedido){
        if (this.encontrarPedido(pedido) != null){
            return false
        }
        this._pedidos.push(pedido)
    }

    listarPedidos(){
        this._pedidos.forEach((pedido, i) =>{
            console.log(`${i + 1} ${pedido.getResumen()}`)
        })
    }

    encontrarPedido(pedido){
        let result = this._pedidos.find(e => e.esIgualA(pedido))

        return result
    }

    encontrarIndicePedido(pedido){
        let indice = this._pedidos.findIndex(e => e.esIgualA(pedido))

        return indice
    }

    eliminarPedido(pedido){
        let indice = this.encontrarIndicePedido(pedido)

        if (indice < 0){
            return false
        }

        this._pedidos.splice(indice, 1)
        return true
    }

    actualizarPedido(pedido, nuevoPedido){
        let indice = this.encontrarIndicePedido(pedido)

        if (indice < 0){
            return false
        }

        this._pedidos.splice(indice, 1, nuevoPedido)
        return true
    }
}