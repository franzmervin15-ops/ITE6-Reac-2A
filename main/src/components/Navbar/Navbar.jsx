import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/activity1" className="nav-link">Activity 1</Link>
        <Link to="/" className="nav-link">Activity 2</Link>
        <Link to="/activity3" className="nav-link">Activity 3</Link>
        <Link to="/activity4" className="nav-link">Activity 4</Link>
      </div>
    </nav>
  );
};

export default Navbar;
