import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="nav-header">
      <nav className="navbar">
        <ul className="nav_links">
          <li>
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => isActive ? 'active' : undefined}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/volunteer" 
              className={({ isActive }) => isActive ? 'active' : undefined}
            >
              Volunteer
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/partners" 
              className={({ isActive }) => isActive ? 'active' : undefined}
            >
              Partners
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? 'active' : undefined}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? 'active' : undefined}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
