import { BotaoConclui } from "../CriandoElementos/botaoConcluir.js";
import { BotaoDeleta } from "../CriandoElementos/botaoDeletar.js";
import { adicionandoLocalStorage } from "../localStorage/adicionandoTarefa.js";

export const novaTarefa = (evento) => {

    evento.preventDefault()
  
    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    const lista = document.querySelector('[data-list]')

    if(valor != '') {
        const tarefa = document.createElement('li')
        const conteudo= `<p class="content">${valor}</p>`
        tarefa.classList.add('task')
    
        tarefa.innerHTML = conteudo
    
        const div = document.createElement('div')
        div.appendChild(BotaoConclui())
        div.appendChild(BotaoDeleta())
    
        tarefa.appendChild(div)
        lista.appendChild(tarefa)
        
        input.value = ''
        input.focus()

        adicionandoLocalStorage()
    }
 }