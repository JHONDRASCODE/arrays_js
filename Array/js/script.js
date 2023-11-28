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

