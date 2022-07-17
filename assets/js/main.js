import { verificandoLS } from "./localStorage/verificandoLS.js"
import { novaTarefa } from "./actions/novaTarefa.js"

document.querySelector('[data-form-button]')
   .addEventListener('click', novaTarefa)

verificandoLS()