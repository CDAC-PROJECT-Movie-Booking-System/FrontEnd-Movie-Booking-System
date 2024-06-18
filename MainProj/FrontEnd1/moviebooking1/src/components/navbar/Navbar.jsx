import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import './Navbar.css';

function Navbar(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigate = useNavigate()
  const onLogin = () => {
    navigate('/login')
  }
 
  const onSignUp = () => {
    navigate('/register')
  }

  // For active button CSS Styling
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  const handleNavigation = (path) => {
    navigate.push(path);
    setActivePath(path);
  };

    return(
      <div>
      <header className="header">
        <nav className="navbar">
          <div className="logo">MovieMagic</div>
          <div className={`nav-links-container ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-links">
              <li>
                <Link
                  className={`navBtn ${activePath === '/home' ? 'active' : ''}`}
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`navBtn ${activePath === '/movieList' ? 'active' : ''}`}
                  to="/movieList"
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  className={`navBtn ${activePath === '/theaterList' ? 'active' : ''}`}
                  to="/theaterList"
                >
                  Theaters
                </Link>
              </li>
              <li>
                <Link
                  className={`navBtn ${activePath === '/showtimes' ? 'active' : ''}`}
                  to="/"
                >
                  Showtimes
                </Link>
              </li>
            </ul>
          </div>
          <div className="auth-buttons">
            <button onClick={onLogin} className="login-btn">Log in</button>
            <button onClick={onSignUp} className="signup-btn">Sign up</button>
          </div>
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
          </div>
        </nav>
      </header>
    </div>
    )
}

export default Navbar