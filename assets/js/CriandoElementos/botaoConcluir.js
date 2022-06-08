import { ConcluaTarefa } from "../actions/concluirTarefa.js"

export const BotaoConclui = () => {

    const botaoConclui = document.createElement('button')   
    botaoConclui.innerText = 'Conclui'
    botaoConclui.classList.add('check-button')

    botaoConclui.addEventListener('click', ConcluaTarefa)
    
    return botaoConclui
}