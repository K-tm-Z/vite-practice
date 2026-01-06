import './Navbar.css'
import giphy from '../assets/giphy.gif'

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={giphy} alt="Logo" className="logo"/>
        <h1 className="title">My Vite App</h1>
        <div className="buttons">
            <button class="draw meet">Home</button>
            <button class="draw meet">About</button>
            <button class="draw meet">Contact</button>
        </div>
        <section class="buttons">
            <button className="draw">Draw</button>
            <button className="meet">Draw Meet</button>
        </section>
    </nav>
  )
}

export default Navbar