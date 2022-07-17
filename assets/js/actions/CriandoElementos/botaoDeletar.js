import { DeletarTarefa } from "../deletarTarefa.js"

export const BotaoDeleta = () => {

    const botaoDeleta = document.createElement('button')
    botaoDeleta.innerText = 'Deletar'
    botaoDeleta.classList.add('delete-button')

    botaoDeleta.addEventListener('click', DeletarTarefa)

    return botaoDeleta
}