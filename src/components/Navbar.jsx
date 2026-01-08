import './Navbar.css'
import giphy from '../assets/giphy.gif'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={giphy} alt="Logo" className="logo"/>
        <span className="sitename">My Vite App</span>
      </div>
      <ul className="nav-right">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar