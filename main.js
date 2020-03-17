import Precio from "./precio.js"
import Producto from "./producto.js"
import ElementoPedido from "./elemento-pedido.js"
import Direccion from "./direccion.js"
import Cliente from "./cliente.js"
import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import Pedido from "./pedido.js"
import Restaurante from "./restaurante.js"

const direccion1 = new Direccion("Av. Gordolova", 442, 2, "Las lomas", 32448, "Villa de Alvarez", "Villa de Alvarez")
const cliente1 = new Cliente ("Enrique Pantoja", direccion1, "772-223-449")
const datosPedido1 = {
    fecha: new Fecha(2020, 4, 24),
    hora: new Tiempo(1,50,"pm"),
    cliente: cliente1,
    numPedido: 11
} 
const datosPedido2 = {
    fecha: new Fecha(2020, 4, 25),
    hora: new Tiempo (5, 30, "pm"),
    cliente: cliente1,
    numPedido: 12
}
const datosPedido3 = {
    fecha: new Fecha(2020, 3, 20),
    hora: new Tiempo(4, 14, "pm"),
    cliente: cliente1,
    numPedido: 13
}

class Main {
    constructor(){
        this.producto1 = new Producto("Tortaogada estilo colimote", new Precio(49))
        this.producto2 = new Producto("Tacos de soia", new Precio(27))
        this.producto3 = new Producto("Agua de horchata", new Precio(15))
        //this.direccion1 = new Direccion("Av. Gordolova", 442, 2, "Las lomas", 32448, "Villa de Alvarez", "Villa de Alvarez")
        this.elementoPedido1 = new ElementoPedido(this.producto1, 4)
        this.elementoPedido2 = new ElementoPedido(this.producto2, 5)
        this.elementoPedido3 = new ElementoPedido(this.producto3, 4)
        //const cliente1 = new Cliente("Enrique Pantoja", this.direccion1, "772-223-449")
        //this.restaurante = new Restaurante("El wen sazón", "333-688-345" ,new Direccion("Av. Lasoia", 343, 2, "Lomas doradas", 425523, "Villa de Alvarez", "Villa de Alvarez"))
        this.restaurante = new Restaurante ({
            nombre:"El wen sazón",
            telefono: "333-688-345",
            direccion: new Direccion("Av. Lasoia", 343, 2, "Lomas doradas", 425523, "Villa de Alvarez", "Villa de Alvarez")
        })
        this.pedido1 = new Pedido(datosPedido1)
        this.pedido2 = new Pedido(datosPedido2) 
        this.pedido3 = new Pedido(datosPedido3)
        
        /*
        const datosPedido1 = {
            fecha: new Fecha(2020, 4, 24),
            hora: new Tiempo(1,50,"pm"),
            cliente: cliente1
        } 
        const datosPedido2 = {
            fecha: new Fecha(2020, 4, 25),
            hora: new Tiempo (5, 30, "pm"),
            cliente: cliente1
        }
        const datosPedido3 = {
            fecha: new Fecha(2020, 3, 20),
            hora: new Tiempo(4, 14, "pm"),
            cliente: cliente1
        }
        /*this.datosPedido1 = {
            fecha: new Fecha(2020, 4, 24),
            hora: new Tiempo(1,50,"pm"),
            cliente: this.cliente1
        } 
        this.datosPedido2 = {
            fecha: new Fecha(2020, 4, 25),
            hora: new Tiempo (5, 30, "pm"),
            cliente: this.cliente1
        }
        this.datosPedido3 = {
            fecha: new Fecha(2020, 3, 20),
            hora: new Tiempo(4, 14, "pm"),
            cliente: this.cliente1
        }*/
    }

    probarPrecio(){
        console.log("---------Precio----------")
        let precio1 = new Precio(443)
        console.log(precio1.getPrecio())
    }

    probarProducto(){
        console.log("---------Producto----------")
        //let producto1 = new Producto("Tortaogada estilo colimote", new Precio(49))
        console.log(this.producto1.getDescripcion())
    }

    probarElementoPedido(){
        console.log("----------Elemento Pedido----------")
        //let pedido1 = new ElementoPedido(this.producto1, 4)
        console.log(this.elementoPedido1.getDescripcion())
    }

    probarDireccion(){
        console.log("----------Direccion----------")
        //let direccion1 = new Direccion("Av. Gordolova", 442, 2, "Las lomas", 32448, "Villa de Alvarez", "Villa de Alvarez")
        console.log(direccion1.getFormatoCorto())
        console.log(direccion1.getFormatoExtendido())
    }

    probarCliente(){
        console.log("----------Cliente----------")
        //let cliente1 = new Cliente("Enrique Pantoja", this.direccion1, "772-223-449")
        console.log(cliente1.getPerfil())
    }
    
    probarTiempo(){
        console.log("----------Tiempo----------")
        let hora1 = new Tiempo(4,12,"pm")
        console.log(hora1.getFormato24())
    }

    probarFecha(){
        console.log("----------Fecha----------")
        let fecha1 = new Fecha(2004, 7, 18)
        console.log(fecha1.getFecha())
        console.log(fecha1.getAños())
        console.log(fecha1.getMeses())
        console.log(fecha1.getSemanas())
        console.log(fecha1.getDias())
        console.log(fecha1.getDiaFecha())
    }

    probarPedido(){
        console.log("----------Pedido----------")
        this.pedido1.agregarElemento(this.elementoPedido1)
        this.pedido1.agregarElemento(this.elementoPedido2)
        this.pedido1.listarElementos()
        console.log(this.pedido1.getProductos())
        console.log(this.pedido1.getNumeroElementos())
        console.log(this.pedido1.getCostoTotal())
        console.log(this.pedido1.getResumen())

        this.pedido2.agregarElemento(this.elementoPedido1)
        this.pedido2.agregarElemento(this.elementoPedido3)
        console.log(this.pedido2.getResumen())

        this.pedido3.agregarElemento(this.elementoPedido2)
        this.pedido3.agregarElemento(this.elementoPedido3)
        console.log(this.pedido3.getResumen())
    }

    probarRestaurante(){
        console.log("----------Restaurante----------")
        console.log(this.restaurante._nombre)
        console.log(`Telefono: ${this.restaurante._telefono}`)
        console.log(this.restaurante._direccion.getFormatoCorto())
        this.restaurante.registrarProductos(this.producto1)
        this.restaurante.registrarProductos(this.producto2)
        this.restaurante.listarProductos(this.producto1)

        this.restaurante.registrarPedido(this.pedido1)
        this.restaurante.registrarPedido(this.pedido2)
        this.restaurante.registrarPedido(this.pedido3)
        this.restaurante.listarPedidos()

        console.log(this.restaurante.encontrarPedido(this.pedido2))
        console.log(this.restaurante.registrarPedido(this.pedido3))
        console.log(this.restaurante.eliminarPedido(this.pedido2))
        this.restaurante.listarPedidos()

        console.log(this.restaurante.actualizarPedido(this.pedido3, this.pedido2))
        this.restaurante.listarPedidos()

    }
}

let app = new Main
app.probarPrecio()
app.probarProducto()
app.probarElementoPedido()
app.probarDireccion()
app.probarCliente()
app.probarTiempo()
app.probarFecha()
app.probarPedido()
app.probarRestaurante()