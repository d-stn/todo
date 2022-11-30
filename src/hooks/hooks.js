import { useState } from "react";
import ls from "../utils/ls";

export const useTodos = () => {
    const [todos, setTodos] = useState(ls.get("todos"))

    const add = (newItem) => {
        ls.add(newItem)
        setTodos(ls.getTodos())
    }

    const remove = (id) => {
        ls.remove(id)
        setTodos(ls.getTodos())
    }

    const edit = (id, newItem) => {
        ls.edit(id, newItem)
        setTodos(ls.getTodos())
    }

    const getCategory = (category) => {
        return todos.filter(e => e.category === category)
    }

    const getAll = () => {
        return todos;
    }

    return {todos, add, remove, edit, getCategory, getAll}
}