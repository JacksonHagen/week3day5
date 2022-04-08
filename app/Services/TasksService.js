import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"

class TasksService {
    deleteTask(id) {
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    }
    toggleComplete(taskId) {
        let task = ProxyState.tasks.find(t => t.id == taskId)
        task.completed = !task.completed
        ProxyState.tasks = ProxyState.tasks
    }
    
    addTask(formData) {
        ProxyState.tasks = [...ProxyState.tasks, new Task(formData)]
    }
}

export const tasksService = new TasksService()