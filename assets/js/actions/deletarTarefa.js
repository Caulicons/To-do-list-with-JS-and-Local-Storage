import { deletandoNaLS } from "../localStorage/deletarTarefa.js"

export const DeletarTarefa = (evento) => {

    const botaoDeleta = evento.target
    const deletarTarefa = botaoDeleta.parentElement

    deletarTarefa.parentElement.remove() 
     
    deletandoNaLS(evento.target.parentElement.parentElement.children[0].textContent)
}