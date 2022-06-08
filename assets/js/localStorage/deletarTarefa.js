export const deletandoNaLS = (item) => {

    let storage = JSON.parse(localStorage.getItem('lista'))
    storage.splice(storage.indexOf(item), 1)

    localStorage.setItem('lista', JSON.stringify(storage)) 
}
