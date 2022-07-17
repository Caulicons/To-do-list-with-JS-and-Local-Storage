export default function falandoParaLSQueATarefaÉConcluida(task) {

   const itemConcluido = task.target.parentElement.parentElement.querySelector('.content').textContent
   const listaLSAnterior = JSON.parse(localStorage.getItem('lista'))

   const listaLS = listaLSAnterior.map(item => {

      if (item.nome == itemConcluido) {
         return { ...item, concluido: !item.concluido }
      }
      return item
   })

   localStorage.setItem('lista', JSON.stringify(listaLS))
} 