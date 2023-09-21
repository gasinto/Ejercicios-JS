//JSON

//JavaScript Object Notation

let objetoModelo = {
    nombre: "Rodrigo",
    edad: 32,
    tecnologias: ["HTML", "CSS", "Javascript", "React"],
    grabando: true
};

console.log("Objeto modelo: ");
console.log(objetoModelo);

let objetoEnJSON = JSON.stringify(objetoModelo) //parseamos a JSON

console.log("Objeto Json");
console.log(objetoEnJSON);



//Parsea de JSON a objeto

console.log("Objeto parseado");

let objetoParseado = JSON.parse(objetoEnJSON);
console.log(objetoParseado);