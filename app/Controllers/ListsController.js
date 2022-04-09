import { ProxyState } from "../AppState.js"
import { listsService } from "../Services/ListsService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"
import { Pop } from "../Utils/Pop.js"

function _drawLists() {
    let template = ''
    ProxyState.lists.forEach(l => template += l.Template)
    document.getElementById('lists').innerHTML = template
    console.log(ProxyState.lists)
}

export class ListsController {
    constructor() {
        ProxyState.on('lists', _drawLists)
        ProxyState.on('lists', saveState)
        ProxyState.on('tasks', saveState)

        loadState()
        _drawLists()
    }

    addList() {
        window.event.preventDefault()
        try {
            /** @type {HTMLFormElement} */
            // @ts-ignore
            const form = window.event.target
            const formData = {
                name: form.listName.value,
                color: form.color.value
            }
            listsService.addList(formData)
            form.reset()
            Pop.toast('List Added!', 'success', 'top-end', 3000, true)
        } catch (error) {
            console.error('LIST ADD ERROR', error.message)
            Pop.error(error)
        }
    }
    async deleteList(id) {
        if(await Pop.confirm('Are you sure you want to delete the task?', 'This cannot be undone.', 'warning')){
            listsService.deleteList(id)
        }
    }
}