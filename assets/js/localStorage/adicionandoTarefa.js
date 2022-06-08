import { BotaoConclui } from "../CriandoElementos/botaoConcluir.js"
import { BotaoDeleta } from "../CriandoElementos/botaoDeletar.js"

export const adicionandoLocalStorage = () => {

    let lista = document.querySelectorAll('.content')
    let listaLS = [] 
 
    lista.forEach( item => listaLS.push(item.textContent))
 
    if (listaLS != []) {
         localStorage.setItem('lista', JSON.stringify(listaLS)) 
    }
 }

export const novaTarefaLS = (item) => {
    
    const lista = document.querySelector('[data-list]')
    const tarefa = document.createElement('li')
    const conteudo= `<p class="content">${item}</p>`
    tarefa.classList.add('task')

    tarefa.innerHTML = conteudo

    const div = document.createElement('div')
    div.appendChild(BotaoConclui())
    div.appendChild(BotaoDeleta())

    tarefa.appendChild(div)
    lista.appendChild(tarefa)
}