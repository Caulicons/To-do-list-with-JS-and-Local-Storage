import { ConcluaTarefaLS } from "../actions/concluirTarefa.js"
import criandoTarefa from "../actions/CriandoElementos/tarefa.js"

export const verificandoLS = () => {

    let lista = JSON.parse(localStorage.getItem('lista')) /* Procurando dados no LocalStorage */
    if (!lista) { localStorage.setItem('lista', '[]') } /* caso não tiver nada, criando um local. */

    lista.forEach(item => {
        criandoTarefa(item.nome)

        if (item.concluido)
            ConcluaTarefaLS(item.nome)
    })
}