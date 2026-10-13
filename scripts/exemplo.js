// console.log("Arthas") - só aparece no console
// alert("Frostmourne Hungers!") aparece na tela para o usuário
// prompt("123") aparece na tela e pede algo para o usuário


// getElementById pega um id 
const footer = document.getElementById("rodape")
footer.style.backgroundColor = "blue"

const h2Criado = document.createElement("h2") //createElement cria um elemento(nesse caso o h2)
h2Criado.textContent = "Lordaeron"
footer.appendChild(h2Criado)


h2Criado.addEventListener("click", () => {
    alert("The Lich King Fell")
})


const forms = document.getElementById("formulario")
forms.addEventListener("Submit", (event) => {
    event.preventDefault()
    alert("Bolvar is the new Lich King")
})

footer.addEventListener("mouseover", () => {
    alert("Oii")
})


