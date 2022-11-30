import "../styles/Content.css"
import DeleteIcon from "../styles/icons/DeleteIcon"
import EditIcon from "../styles/icons/EditIcon"

const Todo = ({ todoInfo, setDetailsVisible, setDetails, setOlayClasses, setEditVisible, todos }) => {

    const { checked, title, details, date, priority, id } = todoInfo

    return (
        <div className={checked ? "todo-checked" : "todo"}>
            {checked ?
                <input
                    type="checkbox"
                    defaultChecked
                    onChange={() => {
                        todos.edit(id, { ...todoInfo, checked: !todoInfo.checked })
                    }}
                />
                :
                <input
                    type="checkbox"
                    onChange={() => {
                        todos.edit(id, { ...todoInfo, checked: !todoInfo.checked })
                    }}
                />
            }

            <p className={checked ? "todo-title-checked" : "todo-title"}>
                {title}
            </p>

            <button
                onClick={() => {
                    setOlayClasses(["blur-animation", "appear-animation"])
                    setDetailsVisible(true)
                    setDetails({ title, details, date, priority })
                }}
                className="details-button">
                DETAILS
            </button>

            <p className="todo-date-label">
                {new Date(date).toLocaleDateString("en-us", { month: "short", day: "numeric" })}
            </p>

            <EditIcon
                className="todo-icon"
                onClick={() => {
                    setOlayClasses(["blur-animation", "appear-animation"])
                    setEditVisible(true)
                    setDetails(todoInfo)
                }}
            />

            <DeleteIcon
                className="todo-icon"
                onClick={() => {
                    todos.remove(id)
                }}
            />

        </div>
    )
}

export default Todo 