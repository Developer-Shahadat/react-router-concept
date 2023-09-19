import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div>
             
             <h3 className="text-center text-2xl">Nav-Bar</h3>
             
            <nav className="text-center m-2 p-2">
                <NavLink className="m-2 p-2 text-blue-500 " to="/">Home</NavLink>
                <NavLink className="m-2 p-2 text-blue-500 " to="/about">About Us</NavLink>
                <NavLink className="m-2 p-2 text-blue-500 " to="/contact">Contact</NavLink>
                <NavLink className="m-2 p-2 text-blue-500 " to="/users">Users</NavLink>
                <NavLink className="m-2 p-2 text-blue-500 " to="/comments">Comments</NavLink>
                
            </nav>
        </div>
    );
};

export default Header;