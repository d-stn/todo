import "../styles/Overlay.css"
import ExitIcon from "../styles/icons/ExitIcon"
import { OlayContext } from "../context/OverlayContext"
import { useContext } from "react"

const DetailsOverlay = ({ details }) => {
    const { detailsVisible, setDetailsVisible, olayClasses, setOlayClasses } = useContext(OlayContext)

    if (detailsVisible) {
        return (
            <div className={`overlay-container ${olayClasses[0]}`}>
                <div className={`details-overlay ${olayClasses[1]}`}>
                    <div
                        className="details-header">
                        <span className="details-title">{details.title}</span>
                        <ExitIcon
                            className="details-close-icon"
                            onClick={() => {
                                setOlayClasses(["unblur-animation", "disappear-animation"])
                                setTimeout(() => {
                                    setDetailsVisible(false)
                                }, 200)
                            }}
                        />
                    </div>

                    <div>
                        <span className="details-label">Priority: </span>
                        <span className="details-text">{details.priority}</span>
                    </div>
                    <div>
                        <span className="details-label">Due date: </span>
                        <span className="details-text">{details.date}</span>
                    </div>
                    <div>
                        <span className="details-label">Details: </span>
                        <div className="details-text">
                            {details.details}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return null
}

export default DetailsOverlay