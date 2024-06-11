import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

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
    return(
        <div>
           <header className="header">
        <nav className="navbar">
          <div className="logo">MovieMagic</div>
          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/movieList">Movies</Link></li>
              <li><Link to="/theaterList">Theaters</Link></li>
              <li>Showtimes</li>
            </ul>
          </div>
          <div className="auth-buttons">
            <button onClick={onLogin}  className="login-btn">Log in</button>
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