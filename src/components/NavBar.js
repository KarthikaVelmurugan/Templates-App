import { Link } from "react-router-dom";
import "../assets/styles/main.css"
const NavBar = ({ context }) => {

    const {title, path} = context;
    return (
        <Link to={path} className="navItem">{title}</Link>
        
    )

}
export default NavBar;