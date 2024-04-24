// MILESTONE 1: Creo un Array//
let listaSpesa = [
    "Latte",
    "pane",
    "acqua",
    "pasta",
    "formaggio",
]
const listaElement = document.querySelector("ul")

//Creo ciclo//
for (let i=0; i<listaSpesa.length; i++) {
    const element =listaSpesa[i];
    console.log (i, element)

   
}

//MILESTONE 2://

let i = 0;
while (i< listaElement.length) {
    const element=listaSpesa[i];
    console.log(i,element);
    i++;
    
   

}
console.log (i,);
