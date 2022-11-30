import { nanoid } from "nanoid";
// filename is "ls", which stands for local storage
// it contains operations which modify the local storage

const get = (category) => {
    return JSON.parse(localStorage.getItem(category))
}

const getTodos = () => {
    return JSON.parse(localStorage.getItem("todos"))
}

const getAll = () => {
    const keys = Object.keys(localStorage)
    const allTodos = keys.map(category => JSON.parse(localStorage.getItem(category)))
    return allTodos;
}

const add = (todo) => {
    // Array needs to be spread ... in order to prevent nesting of arrays.
    // If it is not spread, adding will result in nested arrays, example: [ { todo }, [{ added todo }] ]
    // But in order to use the spread operator ... the todos needs to already be an array
    // If spread operator is used on something that is not array, it will give error
    // That's why we first get the todos, and then determine if we convert it to array or spreaded array
    // This procedure is done for all methods
    try {
        const todos = getTodos()
        const todosArr = Array.isArray(todos) ? [...todos] : [todos]

        todosArr.push(todo);
        localStorage.setItem("todos", JSON.stringify(todosArr))
    }
    catch (error) {
        console.error("Error trying to ADD an item to local storage. \n", error)
    }
}

const remove = (id) => {
    try {
        const todos = getTodos()
        const todosArr = Array.isArray(todos) ? [...todos] : [todos]

        const index = todosArr.map(e => e.id).indexOf(id)

        if (index === -1) {
            console.log(`Element with id  ${id}  doesn't exist`)
            return
        }

        todosArr.splice(index, 1)
        localStorage.setItem("todos", JSON.stringify(todosArr))
    }
    catch (error) {
        console.error("Error trying to REMOVE an item from local storage. \n", error);
    }
}

const edit = (id, newItem) => {
    try {
        const todos = getTodos()
        const todosArr = Array.isArray(todos) ? [...todos] : [todos]

        const index = todosArr.map(e => e.id).indexOf(id)

        if (index === -1) {
            console.log(`Element with id  ${id}  doesn't exist`)
            return
        }

        todosArr[index] = newItem
        localStorage.setItem("todos", JSON.stringify(todosArr));
    }
    catch (error) {
        console.error("Error trying to EDIT an item from local storage. \n", error);
    }
}

const log = (category) => {
    const todos = JSON.parse(localStorage.getItem(category))
    const todosArr = Array.isArray(todos) ? [...todos] : [todos]

    console.log("Todos in", category)
    todosArr.map(a => console.log(a))
    console.log("");
}

const logAll = () => {
    const keys = Object.keys(localStorage)
    keys.map(key => log(key))
}

const initialize = () => {
    const initialTodos = [
        {
            category: "home",
            checked: false,
            title: "clean room",
            details: "vacuum floor, dust furnite and clean windows",
            date: "2022-12-12",
            priority: "low",
            id: nanoid()
        },
        {
            category: "home",
            checked: false,
            title: "fix door handle",
            details: "door handle of living room jams",
            date: "2022-12-05",
            priority: "medium",
            id: nanoid()
        },
        {
            category: "today",
            checked: true,
            title: "brush teeth",
            details: "need to brush my teeth",
            date: "2022-12-12",
            priority: "high",
            id: nanoid()
        },
        {
            category: "today",
            checked: true,
            title: "walk dog",
            details: "do the daily 30 minute walk",
            date: "2022-12-05",
            priority: "medium",
            id: nanoid()
        },
        {
            category: "week",
            checked: true,
            title: "practise react",
            details: "practice at least 2 hours a day",
            date: "2022-12-12",
            priority: "medium",
            id: nanoid()
        },
        {
            category: "week",
            checked: false,
            title: "go to dentist",
            details: "go to the dentist's appointment at 2pm",
            date: "2022-11-12",
            priority: "high",
            id: nanoid()
        },
        {
            category: "week",
            checked: true,
            title: "get car inspected",
            details: "take the car to technical inspection at that place Josh told me about",
            date: "2022-12-12",
            priority: "low",
            id: nanoid()
        }
    ]

    localStorage.setItem("todos", JSON.stringify(initialTodos))
}

export default { get, getTodos, getAll, add, remove, edit, log, logAll, initialize }