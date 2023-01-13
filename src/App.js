import { useState } from "react";
import { nanoid } from "nanoid";

// components
import Container from "./components/Container"
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import AddOverlay from "./components/AddOverlay";
import DetailsOverlay from "./components/DetailsOverlay";
import EditOverlay from "./components/EditOverlay";

// styles
import MenuIcon from "./styles/icons/MenuIcon";
import ExitIcon from "./styles/icons/ExitIcon";

// utililies and hooks
import ls from "./utils/ls";
import { useTodos } from "./hooks/hooks";


function App() {
    if (localStorage.length === 0 || localStorage === undefined) {
        ls.initialize();
    }

    const [content, setContent] = useState("home")
    const [olayClasses, setOlayClasses] = useState(null)

    const [newTodo, setNewTodo] = useState(null)
    const [details, setDetails] = useState(null)

    const [sidebarVisible, setSidebarVisible] = useState(false)

    const todos = useTodos();

    const createNewTodo = (event) => {
        const generatedId = nanoid()
        const newItem = {
            ...newTodo,
            checked: false,
            id: generatedId,
            category: content
        }
        todos.add(newItem)
        setNewTodo(null)
        hideSidebar();
    }

    const submitEdit = (id, newItem) => {
        todos.edit(id, newItem)
    }

    const showSidebar = (event) => {
        document.getElementById("sidebar-container").className = "sidebar-container"
        setSidebarVisible(true)
    }

    const hideSidebar = (event) => {
        document.getElementById("sidebar-container").className = "sidebar-container hidden"
        setSidebarVisible(false)
    }

    return (
        <div className="main-container">
            <AddOverlay
                newTodo={newTodo}
                setNewTodo={setNewTodo}
                createNewTodo={createNewTodo}


                olayClasses={olayClasses}
                setOlayClasses={setOlayClasses}
            />
            <DetailsOverlay
                details={details}


                olayClasses={olayClasses}
                setOlayClasses={setOlayClasses}
            />
            <EditOverlay
                details={details}
                setDetails={setDetails}
                submitEdit={submitEdit}


                olayClasses={olayClasses}
                setOlayClasses={setOlayClasses}
            />
            <Container>
                <Header title={"TO - DO"}>
                    {sidebarVisible ?
                        <ExitIcon
                            className="menu-icon"
                            onClick={hideSidebar}
                        />
                        :
                        <MenuIcon
                            className="menu-icon"
                            onClick={showSidebar}
                        />
                    }
                </Header>
                <Sidebar
                    content={content}
                    setContent={setContent}
                    home={todos.getCategory("home")}
                    today={todos.getCategory("today")}
                    week={todos.getCategory("week")}


                    setOlayClasses={setOlayClasses}
                />
                <Content
                    content={content}
                    todos={todos}
                    setDetails={setDetails}


                    setOlayClasses={setOlayClasses}
                />
            </Container>
        </div>
    )
}

export default App;
