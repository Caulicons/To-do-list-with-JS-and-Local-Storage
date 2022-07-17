import falandoParaLSQueATarefaÉConcluida from "../localStorage/concluindoLS.js"

export const ConcluaTarefa = (evento) => {

    const botaoConclui = evento.target
    const tarefaConcluida = botaoConclui.parentElement

    tarefaConcluida.parentElement.classList.toggle('done')

    falandoParaLSQueATarefaÉConcluida(evento)
}

export const ConcluaTarefaLS = (nomeTarefa) => {

    const lista = document.querySelectorAll('.content')

    lista.forEach(tarefa => {

        if (tarefa.textContent == nomeTarefa)
            tarefa.parentElement.classList.toggle('done')
    })
}