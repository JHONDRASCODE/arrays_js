// Acceder a los elementos de un array 
document.write("<h3>ELEMENTOS DE UN ARRAY</h3>")
const numbers = [1, 2, 3, 4, 5]
document.write("el arreglo en su primera pocision es: "+numbers[0]+"<br>")

document.write("el arreglo en la pocision dos: "+numbers[2]+"<br>")

//usar variables para acceder a los elementos de un array
let index = 4
document.write ("la variable index corresponde a: "+numbers[index]+"<br>")

//modificar elementos de un array

numbers[0] = 10 
numbers[2] = 30

document.write ("la modificacion corresponde a: "+numbers+"<br>")

//longitud de un array
document.write("<h3>LA LONGITUD DE UN ARRAY</h3>"+"<br>")

const frutas = ["manzana", "pera", "plátano", "fresa"]
document.write ("el array de frutas es: "+frutas+"<br>")
document.write("el array de las frutas tiene una logitud de: "+frutas.length+"<br>") // 4

//tambien puedes cortar la logitud asignando un nuevo valor a la propiedad .length

frutas.length = 2
document.write ("se corta la su longitud asignado .length: "+frutas+"<br>")
document.write("y tambien se imprime el valor de dos que son manzana, pera : "+frutas.length+"<br>")

//Metodos de arrays
document.write("<h3>METODOS DE ARRAYS</h3>"+"<br>")

//El metodo .push() nospermite añadir un elemento al final de un array
frutas.push("naranja")
document.write("Añade la fruta que seria la naranja: "+frutas+"<br>")

//Además, el método .push() devuelve la nueva longitud del array:

const frutas1 = ["plátano", "fresa"]
document.write("El array es dos frutas: "+frutas1.length+"<br>") // 2
//se agraga esta variable y la fruta para que quede en el  array con todas las frutas juntas
const newLength = frutas1.push("naranja")
document.write("Se agrega otro array devolviendo la longitud del array que seria la naranja y quedaria en: "+newLength+"<br>") // 3
document.write("Aqui nos daria las tres frutas juntas: "+frutas1+"<br>") // ["plátano", "fresa", "naranja"]

//El método .pop() elimina y devuelve el último elemento de un array:
document.write("<h3>Metodo pop</h3>"+"<br>")
const frutas2 = ["plátano", "fresa", "naranja"]
const ultimaFruta = frutas2.pop()

document.write ("A qui nos quitaria la ultima fruta del array que seria la naranja: "+frutas2+"<br>") // ["plátano", "fresa"]
document.write ("y aqui nos imprimiria la que quitamos: "+ultimaFruta+"<br>") // "naranja"

//El método .shift() elimina y devuelve el primer elemento de un array. Es lo mismo que .pop(), pero con el primer elemento en lugar del último:
document.write("<h3>Metodo shift</h3>"+"<br>")

const frutas3 = ["plátano", "fresa", "naranja"]
const primeraFruta = frutas3.shift()

document.write("Aqui seria diferente por que quitaria la primer fruta de array que seria el platano: "+frutas3+"<br>") // ["fresa", "naranja"]
document.write("Y nos imprime la primer fruta del array: "+primeraFruta+"<br>") // "plátano"
//El método .unshift() añade un elemento al principio de un array. Es lo mismo que .push(), pero con el primer elemento en lugar del último:
document.write("<h3>Metodo unshift</h3>"+"<br>")

const frutas4 = ["plátano", "fresa", "naranja"]
frutas4.unshift("manzana")

document.write("Se agrega una fruta al principio del array la cual seria la manzana: "+frutas4+"<br>") // ["manzana", "plátano", "fresa", "naranja"]

document.write("<h3>CONCATENAR ARRAYS</h3>")

//Podemos concatenar dos arrays usando el método concat().
const numbers1 = [1, 2, 3]
const numbers2 = [4, 5]

const allNumbers = numbers1.concat(numbers2)

document.write("Aqui concatenamos 4 y 5 y se imprimiria en cosola asi: "+allNumbers+"<br>") // [1, 2, 3, 4, 5]
//Otra forma de concatenar arrays es usando el operador ... (spread operator). Este operador propaga los elementos de un array. Así que podríamos hacer lo siguiente:

const numbers0 = [1, 2, 3]
const numbers3 = [4, 5]

const allNumbers1 = [...numbers0, ...numbers3]
document.write("Tambien se puede concatenar con el suiguiente operador ... y se imprime asi: "+allNumbers1+"<br>") // [1, 2, 3, 4, 5]

document.write("<h3>INTERACCION DE ARRAYS EN JASCRIPT</h3>"+"<br>")


document.write("<h3>Bucle while</h3>"+"<br>")
/*El bucle while vimos que permitía ejecutar un bloque de código mientras una condición era verdadera.
En el caso de la iteración de arrays, la condición generalmente se basa en el índice del elemento.
*/

let frutass = ['🍎', '🍌', '🍓']
let i = 0 // lo usaremos como índice

while (i < frutass.length) {
  document.write(""+frutass[i]) // imprime el elemento en la posición i
  i++ // incrementamos el índice en 1 para la siguiente iteración
}


