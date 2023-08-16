import { NavLink } from "react-router-dom";
import './App.css'
function Navbar() {
  return (
    <div>
      <ul className="navbar">

        <li><NavLink className="navLink" to="/">Home</NavLink></li>
        <li><NavLink className="navLink" to="/about/anil">Anil</NavLink></li>
        <li><NavLink className="navLink" to="/about/peter">Peter</NavLink></li>
        <li><NavLink className="navLink" to="/filter">Filter</NavLink></li>
        <li><NavLink className="navLink" to="/add">Add</NavLink></li>
        
      </ul>
    </div>
    )
}
export default Navbar;