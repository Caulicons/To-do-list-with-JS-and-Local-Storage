import { adicionandoLocalStorage } from "../localStorage/adicionandoTarefa.js";
import criandoTarefa from "./CriandoElementos/tarefa.js";

export const novaTarefa = (evento) => {

    evento.preventDefault()
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    if (valor !== '') {
        criandoTarefa(valor)
        adicionandoLocalStorage(valor)
    }

    input.value = ''
    input.focus()
}