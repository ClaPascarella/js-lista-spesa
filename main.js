//Creo un Array//
let listaSpesa = [
    "Latte",
    "pane",
    "acqua",
    "pasta",
    "formaggio",
]
const listaElement = document.querySelector("ul")

for (let i=0; i<listaSpesa.length; i++) {
    const element =listaSpesa[i];
    console.log (i, element)
}