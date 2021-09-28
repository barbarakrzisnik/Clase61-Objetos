// Objetos

// Ejercicio 1

// Crear una variable llamada user, a la que le vamos a asignar un objeto.
// El objeto tiene que tener 4 propiedades: firstName, lastName, email, age, con tus datos
// Mostrar en consola el objeto user
// Mostrar en la consola el nombre y la edad de la persona: "Hola, mi nombre es [ACA EL NOMBRE DE PILA] y tengo [ACA LA EDAD] años"


const user = { 
    firstName: "Barbara",
    lastName: "Krzisnik",
    email: "barbarakrzisnik3@gmail.com",
    age: "26"
}

console.log("________Ejercicio 1")
console.log(user)
console.log(`Hola, mi nombre es ${user.firstName} y tengo ${user.age} años`)




// Ejercicio 2
// Tenemos un listado de personas y necesitamos guardarlo en una base de datos
// Los datos que tenemos son un id, email, nombre y teléfono
// Crear un objeto para cada persona que nos pasaron
// Mostrar por consola todos los objetos creados
// // DATOS DE LAS PERSONAS QUE NECESITAMOS GUARDAR EN UNA BASE DE DATOS
// // 1, ada@gmail.com, Ada Lovelace, 1234567890
// // 2, grace@hotmail.com, Grace Hopper, 0987654321
// // 3, hedy@gmail.com, Hedy Lamarr, 6789054321
// // 4, radia@yahoo.com, Radia Perlman, 1234509876
// // 5, sheryl@facebook.com, Sheryl Sandberg, 5432167890

console.log("________Ejercicio 2")

const user1 = {
    id: 1,
    mail: "ada@gmail.com",
    nombre: "Ada Lovelace",
    telefono : 1234567890
}
console.log(user1)

const user2 = {
    id: 2,
    mail: "grace@hotmail.com",
    nombre: "Hedy Lamarr",
    telefono : 6789054321
}
console.log(user2)

const user3 = {
    id: 3,
    mail: "hedy@gmail.com",
    nombre: "Hedy Lamarr",
    telefono : 6789054321
}
console.log(user3)

const user4 = {
    id: 4,
    mail: "radia@yahoo.com",
    nombre: "Radia Perlman",
    telefono : 1234509876
}
console.log(user4)

const user5 = {
    id: 5,
    mail: "sheryl@facebook.com",
    nombre: "Sheryl Sandberg",
    telefono : 5432167890
}
console.log(user5)



// Ejercicio 3

console.log("________Ejercicio 3")

// Con los objetos creados en el ejercicio anterior, mostrar en la consola los siguientes datos de cada persona:
// // 1. El nombre de Ada:

// // 2. El ID de Grace

// // 3. El email de Hedy

// // 4. El ID y nombre de Radia

// // 5. El telefono de Sheryl

console.log(user1.nombre)
console.log(user2.id)
console.log(user3.mail)
console.log(user4.id, user4.nombre)
console.log(user5.telefono)



// Ejercicio 4

// Tenemos un objeto con información de un disco:
const disco = {
  id: 1,
  nombre: 'Wasting Light',
  anioLanzamiento: 2011,
  cantidadDeTemas: 12,
  banda: {
    nombre: 'Foo Fighters',
    anioFormacion: 1994
  }
};
// Mostrar en consola el siguiente mensaje usando las propiedades del objeto:
// El disco Wasting Light de la banda Foo Fighters se lanzó en el año 2011


console.log("________Ejercicio 4")

console.log(`El disco ${disco.nombre} de la banda ${disco.banda.nombre} se lanzo en el año ${disco.anioLanzamiento}`)


// Ejercicio 5

// Crear un array llamado tecnologiasConocidas donde se listen las tecnologias que aprendiste durante el curso y las que ya supieras de antes

// Agregar al objeto creado en el ejercicio 1 dos propiedades:

// sabeProgramar: true
// tecnologiasConocidas: [el array que creaste recien]


console.log("________Ejercicio 5")
const tecnologiasConocidas = ["HTML", "CSS", "Javascript"]
user.tecnologiasConocidas = tecnologiasConocidas
user.sabeProgramar = true

console.log(user)




// Ejercicio 6

// Crear una funcion llamada mostrarTecnologias que reciba como parametros las propiedades recien creadas
// Dentro de la funcion, crear la siguiente lógica:
// Si la propiedad "sabeProgramar" es true, mostrar en consola la siguiente frase: "Hola, mi nombre es [ACA EL NOMBRE] y programo en [ACA EL LISTADO DE LENGUAJES/TECNOLOGIAS]"
// Ejecutar la funcion

console.log("________Ejercicio 6")

const mostrarTecnologias = (objeto) => {
    if ( objeto.sabeProgramar === true) {
        return `Hola, mi nombre es ${user.firstName} y programo en ${user.tecnologiasConocidas}`
    }
}

console.log(mostrarTecnologias(user))


// Ejercicio 7

// Agregar el string "Proximamente DOM" al array dentro del objeto "user".
// Ejecutar la funcion

console.log("________Ejercicio 7")

user.tecnologiasConocidas.push("Proximamente DOM")
console.log(mostrarTecnologias(user))

// Ejercicio 8

// Por un cambio en los requerimientos del proyecto, necesitamos que el nombre del objeto user ahora sea un objeto con el siguiente formato:

// const user = {
//   name: {
//     first: 'Grace',
//     last: 'Hopper'
//   },
//   // y las demas propiedades
// }
// Tenemos que crear un nuevo objeto, y guardarlo en la variable newUser, conteniendo las mismas propiedades excepto firstName y lastName.
// El nombre hay que guardarlo con el formato expresado en el punto anterior.
// No podemos escribir nuevamente los valores, sino utilizar los que ya estan guardados en el objeto user.

console.log("________Ejercicio 8")
const newUser = {
    name: {
        first: user.firstName,
        last: user.lastName
    },
    email: user.email,
    age: user.age,
    tecnologiasConocidas: user.tecnologiasConocidas,
    sabeProgramar: user.sabeProgramar
}

console.log(newUser)