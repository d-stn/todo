import "../styles/Overlay.css"
import ExitIcon from "../styles/icons/ExitIcon"
import { OlayContext } from "../context/OverlayContext"
import { useContext } from "react"

const EditOverlay = ({ details, setDetails, submitEdit }) => {
    const titleMaxLength = 30;
    const detailsMaxLength = 200;
    const { editVisible, setEditVisible, olayClasses, setOlayClasses } = useContext(OlayContext)

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

    if (editVisible) {
        return (
            <div className={`overlay-container ${olayClasses[0]}`}>
                <div className={`edit-overlay ${olayClasses[1]}`}>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault()
                            submitEdit(details.id, details)
                            setOlayClasses(["unblur-animation", "disappear-animation"])
                            setTimeout(() => {
                                setEditVisible(false)
                            }, 200)
                        }}
                    >
                        <div className="edit-overlay-top-row">
                            <textarea
                                maxLength={titleMaxLength}
                                className="title-input"
                                value={details.title}
                                onChange={(event) => { setDetails({ ...details, title: event.target.value }) }}
                                required>
                            </textarea>
                            <ExitIcon
                                className="edit-exit-icon"
                                onClick={() => {
                                    setOlayClasses(["unblur-animation", "disappear-animation"])
                                    setTimeout(() => {
                                        setEditVisible(false)
                                    }, 200)
                                }}
                            />
                        </div>
                        <textarea
                            maxLength={detailsMaxLength}
                            className="details-input"
                            value={details.details}
                            onChange={(event) => { setDetails({ ...details, details: event.target.value }) }}>
                        </textarea>
                        <div className="bottom-row-container">
                            <div className="bottom-row-segment-one">
                                <span className="date-label">Due date:</span>
                                <input
                                    className="date-input"
                                    value={details.date}
                                    type="date"
                                    onChange={(event) => { setDetails({ ...details, date: event.target.value }) }}
                                    required>
                                </input>
                            </div>
                            <div className="bottom-row-segment-two">
                                <span className="priority-label">Priority:</span>

                                <input type="radio" name="priority" id="low" value="low"></input>
                                <label
                                    className={details.priority !== "low" ? "priority" : "priority selected"}
                                    htmlFor="low"
                                    id="low-priority"
                                    onClick={
                                        (event) => {
                                            setDetails({ ...details, priority: event.target.htmlFor })
                                            select("low")
                                        }
                                    }
                                >low</label>

                                <input type="radio" name="priority" id="medium" value="medium"></input>
                                <label
                                    className={details.priority !== "medium" ? "priority" : "priority selected"}
                                    htmlFor="medium"
                                    id="medium-priority"
                                    onClick={
                                        (event) => {
                                            setDetails({ ...details, priority: event.target.htmlFor })
                                            select("medium")
                                        }
                                    }
                                >medium</label>

                                <input type="radio" name="priority" id="high" value="high"></input>
                                <label
                                    className={details.priority !== "high" ? "priority" : "priority selected"}
                                    htmlFor="high"
                                    id="high-priority"
                                    onClick={
                                        (event) => {
                                            setDetails({ ...details, priority: event.target.htmlFor })
                                            select("high")
                                        }
                                    }
                                >high</label>
                                <button className="bottom-row-segment submit-button" type="submit">
                                    Confirm edit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        )
    }

    return null
}


export default EditOverlay