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
    listaElement.innerHTML += `<li>${element}</li>`;
}

//MILESTONE 2: ciclo while//

let i = 0;
while (i< listaSpesa.length) {

    const element=listaSpesa[i];
    console.log(i,element);
    i++;

    
    const liElement = document.createElement("li");
  	liElement.innerText = element;
  	listaElement.append(liElement);
   
}
 console.log (i);
    
   

