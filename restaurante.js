export default class Restaurante {
    constructor (nombre, telefono, direccion){
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
            console.log(`${i + 1} ${producto.nombre}`)
        }
        )
    }

    registrarPedido(pedido){
        this._pedidos.push(pedido)
    }

    listarPedidos(){
        this._pedidos.forEach((pedido, i) =>{
            console.log(`${i + 1} ${pedido.getResumen()}`)
        })
    }
}