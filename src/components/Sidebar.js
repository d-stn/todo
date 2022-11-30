import "../styles/Sidebar.css"
import "../styles/overlays/Animations.css"

const Sidebar = ({ content, setContent, setAddVisible, home, today, week, setOlayClasses }) => {
    return (
        <div className="sidebar-container hidden" id="sidebar-container">
            <div className="sidebar">
                <ul>

                    <li className={content === "home" ? "sidebar-element-selected" : "sidebar-element"}
                        onClick={() => setContent("home")}>
                        Home <button className="todos-left">
                            {home.concat(today).concat(week).filter(e => !e.checked).length}
                        </button>
                    </li>


                    <li className={content === "today" ? "sidebar-element-selected" : "sidebar-element"}
                        onClick={() => setContent("today")}>
                        Today <button className="todos-left">{today.filter(e => !e.checked).length}</button>
                    </li>


                    <li className={content === "week" ? "sidebar-element-selected" : "sidebar-element"}
                        onClick={() => setContent("week")}>
                        Week <button className="todos-left">{week.filter(e => !e.checked).length}</button>
                    </li>

                </ul>
            </div>
            <button
                className="add-button"
                onClick={() => {
                    setOlayClasses(["blur-animation", "appear-animation"])
                    setAddVisible(true)
                }}
            >+</button>
        </div>
    )
}

export default Sidebar