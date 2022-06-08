export const ConcluaTarefa = (evento) => {

    const botaoConclui = evento.target 

    const tarefaConcluida = botaoConclui.parentElement  

    tarefaConcluida.parentElement.classList.toggle('done')
}