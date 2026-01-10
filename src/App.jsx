import './App.css'
import Navbar from './components/Navbar'
import but_why from './assets/but_why.gif'

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="test">Introduction</h1>
      <p>This is a Vite project setup with React.</p>
      <div className='section-wrapper'>
        <div className="section">
          <div className="box">
            <img src={but_why} alt="Meme" className="meme" />
          </div>
          <div className='box'>
            <p>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, <em>quis 
              nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo 
              consequat.</em> Duis aute irure 
              dolor in reprehenderit in voluptate 
              velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
          </div>
        </div>

        <div className="section section--reverse">
          <div className='box'>
            <p>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, <em>quis 
              nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo 
              consequat.</em> Duis aute irure 
              dolor in reprehenderit in voluptate 
              velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
          </div>
          <div className="box">
            <img src={but_why} alt="Meme" className="meme" />
          </div>
        </div>

        <div className="section">
          <div className="box">
            <img src={but_why} alt="Meme" className="meme" />
          </div>
          <div className='box'>
            <p>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, <em>quis 
              nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo 
              consequat.</em> Duis aute irure 
              dolor in reprehenderit in voluptate 
              velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
