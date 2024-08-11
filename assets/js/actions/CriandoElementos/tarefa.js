import { adicionandoLocalStorage } from "../../localStorage/adicionandoTarefa.js"
import { BotaoConclui } from "./botaoConcluir.js"
import { BotaoDeleta } from "./botaoDeletar.js"


export default function criandoTarefa(content) {

   const lista = document.querySelector('[data-list]')
   const tarefa = document.createElement('li')
   tarefa.classList.add('task')
   const conteudo = `<p class="content">${content}</p>`
   tarefa.innerHTML = conteudo

   const botões = document.createElement('div')
   botões.classList.add('buttons')
   botões.appendChild(BotaoConclui())
   botões.appendChild(BotaoDeleta())

   tarefa.appendChild(botões)
   lista.appendChild(tarefa)

   return tarefa
}
