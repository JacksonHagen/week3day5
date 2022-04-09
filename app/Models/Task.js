import { generateId } from "../Utils/generateId.js";

export class Task {
    constructor(data) {
        this.id = data.id || generateId()
        this.listId = data.listId
        this.text = data.text
        this.completed = false
    }

    get Template() {
        let case1 = `<i class="mdi mdi-checkbox-outline text-success action mdi-24px align-top" onclick="app.tasksController.toggleComplete('${this.id}')"> ${this.text}</i>`
        let case2 = `<i class="mdi mdi-checkbox-blank-outline text-secondary action mdi-24px align-top" onclick="app.tasksController.toggleComplete('${this.id}')"> ${this.text}</i>`
        return /*html*/ `
       
        <div class="col-9">          
            ${this.completed ? case1 : case2}      
        </div>
        <div class="col-3 text-end" >
            <i class="mdi mdi-delete-forever mdi-24px text-secondary action" onclick="app.tasksController.deleteTask('${this.id}')"></i>
        </div> 
        
        `
    }
}