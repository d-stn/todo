import "../styles/Header.css"

const Header = (props) => {
    return (
        <div
            className={props.className ? props.className : "header"}>
            {props.title}
            {props.children}
        </div>
    )
}

export default Header