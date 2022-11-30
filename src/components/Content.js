import "../styles/Content.css"
import Todo from "./Todo"

const Content = ({ todos, content, setDetailsVisible, setDetails, setOlayClasses, setEditVisible }) => {
    const createTodos = (type) => {
        return (
            <div className="content-container">
                <div className="content">
                    {type.map(currentTodo =>
                        <Todo
                            key={currentTodo.id}
                            todoInfo={{
                                category: currentTodo.category,
                                checked: currentTodo.checked,
                                title: currentTodo.title,
                                details: currentTodo.details,
                                date: currentTodo.date,
                                priority: currentTodo.priority,
                                id: currentTodo.id
                            }}
                            setDetailsVisible={setDetailsVisible}
                            setDetails={setDetails}
                            setEditVisible={setEditVisible}
                            setOlayClasses={setOlayClasses}
                            todos={todos}
                        />
                    )}
                </div>
            </div>
        )
    }

    return (
        content === "home" ?
            createTodos(todos.getAll())
            :
            createTodos(todos.getCategory(content))
    )
}

export default Content