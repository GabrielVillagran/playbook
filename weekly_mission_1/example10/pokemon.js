// exportacion de la clase
export default class pokemon {
    // creacion del constructor d ela cual obtendre el nombre del pokemon
    constructor(namePoke) {
            //obtencion del valor (nombre)
            this.namePoke = namePoke
        }
        // Metodos que tendra mi clase
    sayHello() {
        console.log(`Hola el es ${this.namePoke} `)
    }
    sayMessage(message) {
        //mensaje de saludo del pokemon
        console.log(`y dice: ${message}`)
        console.log("================================")
    }
}