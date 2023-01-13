import Header from "./Header"
import ExitIcon from "../styles/icons/ExitIcon"
import "../styles/Overlay.css"
import { OlayContext } from "../context/OverlayContext"
import { useContext } from "react"

const AddOverlay = ({ newTodo, setNewTodo, createNewTodo, olayClasses, setOlayClasses }) => {
    const titleMaxLength = 30;
    const detailsMaxLength = 200;

    const { addVisible, setAddVisible } = useContext(OlayContext)

    const select = (label) => {
        switch (label) {
            case "low":
                document.getElementById("low-priority").className = "priority selected"
                document.getElementById("medium-priority").className = "priority"
                document.getElementById("high-priority").className = "priority"
                break;
            case "medium":
                document.getElementById("low-priority").className = "priority"
                document.getElementById("medium-priority").className = "priority selected"
                document.getElementById("high-priority").className = "priority"
                break;
            case "high":
                document.getElementById("low-priority").className = "priority"
                document.getElementById("medium-priority").className = "priority"
                document.getElementById("high-priority").className = "priority selected"
                break;
            default:
                throw new Error(`Error: Priority "${label}" doesn't exist`)
        }
    }

    if (addVisible) {
        return (
            <div className={`overlay-container ${olayClasses[0]}`}>
                <form
                    onSubmit={(event) => {
                        event.preventDefault()
                        createNewTodo()
                        setOlayClasses(["unblur-animation", "disappear-animation"])
                        setTimeout(() => {
                            setAddVisible(false)
                        }, 200)
                    }}
                    className={`add-overlay ${olayClasses[1]}`}>
                    <Header title="Create a new..." className="overlay-header">
                        <ExitIcon
                            className="add-exit-icon"
                            onClick={() => {
                                setOlayClasses(["unblur-animation", "disappear-animation"])
                                setTimeout(() => {
                                    setAddVisible(false)
                                }, 200)
                            }}
                        />
                    </Header>

                    <textarea
                        className="title-input"
                        placeholder="Title"
                        maxLength={titleMaxLength}
                        onChange={
                            ({ target }) => setNewTodo({ ...newTodo, title: target.value })
                        }
                        required>
                    </textarea>
                    <br />
                    <textarea
                        maxLength={detailsMaxLength}
                        className="details-input"
                        placeholder="Details: e.g buy groceries, walk the dog, ..."
                        onChange={
                            ({ target }) => setNewTodo({ ...newTodo, details: target.value })
                        }>
                    </textarea>

                    <div className="bottom-row-container">
                        <div className="bottom-row-segment-one">
                            <span className="date-label">Due date:</span>
                            <input
                                type="date"
                                className="date-input"
                                onChange={({ target }) => setNewTodo({ ...newTodo, date: target.value })}
                                required>
                            </input>
                        </div>
                        <div className="bottom-row-segment-two">
                            <span className="priority-label">Priority:</span>
                            <input type="radio" name="priority" id="low" value="low" required></input>
                            <label
                                className="priority"
                                htmlFor="low"
                                id="low-priority"
                                onClick={
                                    ({ target }) => {
                                        setNewTodo({ ...newTodo, priority: target.control.defaultValue })
                                        select("low")
                                    }
                                }
                            >low</label>

                            <input type="radio" name="priority" id="medium" value="medium"></input>
                            <label
                                className="priority"
                                htmlFor="medium"
                                id="medium-priority"
                                onClick={
                                    ({ target }) => {
                                        setNewTodo({ ...newTodo, priority: target.control.defaultValue })
                                        select("medium")
                                    }
                                }
                            >medium</label>

                            <input type="radio" name="priority" id="high" value="high"></input>
                            <label
                                className="priority"
                                htmlFor="high"
                                id="high-priority"
                                onClick={
                                    ({ target }) => {
                                        setNewTodo({ ...newTodo, priority: target.control.defaultValue })
                                        select("high")
                                    }
                                }
                            >high</label>

                            <button className="submit-button" type="submit">
                                ADD TO DO
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
    return null
}

export default AddOverlay