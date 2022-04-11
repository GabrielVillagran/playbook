// creacion de la clase
class pokemon {
    // creacion del constructor d ela cual obtendre el nombre del pokemon
    constructor(namePoke) {
            //obtencion del valor (nombre)
            this.namePoke = namePoke
        }
        // Metodos que tendra mi clase
    sayHello() {
        console.log(`Hola el es ${this.namePoke} y dice: `)
    }
    sayMessage(message) {
        //mensaje de saludo del pokemon
        console.log(`${message}`)
        console.log("================================")
    }
}
module.exports = pokemon