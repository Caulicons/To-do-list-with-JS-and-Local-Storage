import { BotaoConclui } from "./botaoConcluir.js"
import { BotaoDeleta } from "./botaoDeletar.js"

export default function criandoTarefa(content) {

   const lista = document.querySelector('[data-list]')
   const tarefa = document.createElement('li')
   const conteudo = `<p class="content">${content}</p>`
   tarefa.classList.add('task')

   tarefa.innerHTML = conteudo

   const botões = document.createElement('div')
   botões.appendChild(BotaoConclui())
   botões.appendChild(BotaoDeleta())

   tarefa.appendChild(botões)
   lista.appendChild(tarefa)

   return tarefa
}
