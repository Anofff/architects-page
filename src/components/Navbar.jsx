import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <div className="navbar-outer">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        
        </div>
        <div className="navbar-menu">
          <ul>
            <li><Link to="/">Main</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            {/* <li><a href="#certifications">Certifications</a></li> {/* can be anchor for now */}
            {/* <li><a href="#contacts">Contacts</a></li> */} 
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
