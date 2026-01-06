import './App.css'
import Navbar from './components/Navbar'

const Card = ({title, description}) => {
  return (
    <div className="card">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </div>
  )
}

const Box = (props) => {
  return (
    <div className="box">
      {props.children}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="test">Introduction</h1>
      <p>This is a Vite project setup with React.</p>
      <Box>
        <Card title="Card 1" description="This is the first card." />
      </Box>
            <Box>
        <Card title="Card 2" description="This is the second card." />
      </Box>
            <Box>
        <Card title="Card 3" description="This is the third card." />
      </Box>
    </div>
  )
}

export default App
