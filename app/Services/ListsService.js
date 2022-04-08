import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"

class ListsService {
    deleteList(id) {
        ProxyState.tasks = ProxyState.tasks.filter(t => t.listId != id)
        ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
    }
    addList(formData) {
        ProxyState.lists = [...ProxyState.lists, new List(formData)]
    }
}

export const listsService = new ListsService()