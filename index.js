//Tipos de datos

//Primitivos
// String
// Number
// Boolean

// null
// undefined

//Compuestos 
// arrays
// funciones
// objetos

//Los datos compuestos guardan mas informacion que los primitivos
//Los objetos son la estructura mas compleja (pero no dificil)


// Los arrray sirven para listar cosas. Muy ocasionalmente los usamos para otra cosa
//Cuando queremos guardar informacion sobre una entidad privilegiamos los objetos porque son mucho mas claros
//Llamar un dato a traves de un array con por ejemplo persona[0] seria poco claro

//OBJETOS

//Todos empiezan con llaves
//En un objeto puedo poner cualquier tipo de dato
//Los datos que voy poniendo son PROPIEDADES. Adentro, el VALOR

//Ejemplo: 

const persona = {
    nombre: "Caro",
    edad: 27,
    apellido: "Lerner",
    tecnologiasQueConoce: ["HTML", "CSS", "Javascript","Ansiedad"],
    ubicacionGeografica: {
        pais: "Argentina",
        provincia: "Buenos Aires",
        barrio: "Avellaneda"
    }
}

//Importante poner comas despues de cada valor

//Si quiero acceder a la propiedad:
console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.tecnologiasQueConoce) 
console.log(persona.tecnologiasQueConoce[0]) // HTML

//Tambien puedo hacer cosas como:
console.log(persona.nombre.toUpperCase())

//Puedo agregarle propiedades al objeto con codigo
persona.fechaDeCumpleanios = "26/09/1994"

//En los objetos, js ordena las propiedades alfabeticamente. El orden que le doy yo, no importa para nada
//El orden en si, no importa

//Tambien puedo modificar propiedades 
persona.apellido = "Suarez"

//Un objeto se puede llenar por ejemplo con un formulario. Se puede rellenar un objeto vacio, o ir cambiando las propiedades
//Cambiar las propiedades es mejor, mas ordenado. Le da a otros desarrolladores la guia de que va a pasar en ese objeto

// En las propiedades puedo usar VALORES O VARIABLES, es indistinto

//Un objeto puede tener otro objeto adentro!
//Puedo acceder a el:

console.log(persona.ubicacionGeografica.barrio)