const novaTarefa = (evento) => {

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
 const novoItem = document.querySelector('[data-form-button]')
 
 novoItem.addEventListener('click', novaTarefa)


const BotaoConclui = () => {

    const botaoConclui = document.createElement('button')   
    botaoConclui.innerText = 'Conclui'
    botaoConclui.classList.add('check-button')

    botaoConclui.addEventListener('click', ConcluaTarefa)
    
    return botaoConclui
}

const ConcluaTarefa = (evento) => {

    const botaoConclui = evento.target 

    const tarefaConcluida = botaoConclui.parentElement  

    tarefaConcluida.parentElement.classList.toggle('done')
}

const BotaoDeleta = () => {

    const botaoDeleta = document.createElement('button')
    botaoDeleta.innerText = 'Deletar'
    botaoDeleta.classList.add('delete-button')

    botaoDeleta.addEventListener('click', DeletarTarefa)

    return botaoDeleta
}

const DeletarTarefa = (evento) => {

    const botaoDeleta = evento.target

    const deletarTarefa = botaoDeleta.parentElement

    deletarTarefa.parentElement.remove() 
     
    deletandoNaLS(evento.target.parentElement.parentElement.children[0].textContent)
}

const adicionandoLocalStorage = () => {

   let lista = document.querySelectorAll('.content')
   let listaLS = [] 

   lista.forEach( item => listaLS.push(item.textContent))

   if (listaLS != []) {
        localStorage.setItem('lista', JSON.stringify(listaLS)) 
   }
}

const deletandoNaLS = (item) => {

    let storage = JSON.parse(localStorage.getItem('lista'))
    storage.splice(storage.indexOf(item), 1)

    localStorage.setItem('lista', JSON.stringify(storage)) 
}

const verificandoLS = () => {

    let lista = JSON.parse(localStorage.getItem('lista'))

    lista.forEach(item => novaTarefaLS(item))  
}

const novaTarefaLS = (item) => {
    
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

verificandoLS()