import { novaTarefaLS } from "./adicionandoTarefa.js"

export const verificandoLS = () => {

    let lista = JSON.parse(localStorage.getItem('lista'))

    lista.forEach(item => novaTarefaLS(item))  
}