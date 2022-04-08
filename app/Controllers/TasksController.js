import { ProxyState } from "../AppState.js"
import { tasksService } from "../Services/TasksService.js"
import { Pop } from "../Utils/Pop.js"

function _drawTasks() {
    ProxyState.lists.forEach(l => {
        let template = ''
        let arr = ProxyState.tasks.filter(t => t.listId == l.id)
        arr.forEach(t => template += t.Template)
        document.getElementById(`id-${l.id}`).innerHTML = template
    })
}
export class TasksController {
    constructor() {
        _drawTasks()
        ProxyState.on('tasks', _drawTasks)
        ProxyState.on('lists', _drawTasks)
    }

    toggleComplete(id) {
        tasksService.toggleComplete(id)
    }

    async deleteTask(id) {
        if(await Pop.confirm('Are you sure you want to delete the task?', 'This cannot be undone.', 'warning')) {
            tasksService.deleteTask(id)
        }
    }

    addTask(id) {
        window.event.preventDefault()
        try {
            /** @type {HTMLFormElement} */
            // @ts-ignore
            const form = window.event.target
            const formData = {
                listId: id,
                text: form.text.value
            }
            form.reset()
            tasksService.addTask(formData)
        } catch (error) {
            Pop.error(error.message)
        }
    }
}