import { Link } from 'react-router-dom';
import './Navbar.css'; // Halkan ku qor habaynta qoraalka sare

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">FIT<span style={{color: 'red'}}>GYM</span></h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/classes">Classes</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login" className="btn-login">Login</Link>
      </div>
    </nav>
  );
}
export default Navbar;