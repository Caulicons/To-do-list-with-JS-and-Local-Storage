export const adicionandoLocalStorage = (nomeTarefa) => {

    let lista = JSON.parse(localStorage.getItem('lista'))
    let listaLS = []

    if (0 == lista.length) {

        listaLS = [{
            nome: nomeTarefa,
            concluido: false
        }]
    } else {

        listaLS = [...lista, {
            nome: nomeTarefa,
            concluido: false
        }]
    }

    localStorage.setItem('lista', JSON.stringify(listaLS))
}
