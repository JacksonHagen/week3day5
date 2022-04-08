import { generateId } from "../Utils/generateId.js"

export class List {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.color = data.color
    }

    get Template() {
        return /*html*/`
        <div class="col-4 p-4">
            <div class="card">
                <div class="card-header d-flex justify-content-between" style="background-color: ${this.color}">
                    <div class="p-2 pt-3 pb-0">
                        <p class="text-secondary">${this.name}</p>
                        <p class="text-secondary text-end" id="title-${this.id}"></p>
                    </div>
                    <div class="p-0">
                        <i class="mdi mdi-close mdi-36px text-danger action" onclick="app.listsController.deleteList('${this.id}')"></i>
                    </div>
                </div>
                <div class="card-body" >
                    <div class="row" id="id-${this.id}">

                    </div>
                </div>
                <div class="card-footer">
                    <form onsubmit="app.tasksController.addTask('${this.id}')">
                    <div class="input-group mb-3 justify-content-center">
                        <input type="text" name="text" class="input-group-text text-start bg-lavendar" placeholder="Task Name..." required>
                        <button class="btn bg-mint text-secondary">Add</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        `
    }
}