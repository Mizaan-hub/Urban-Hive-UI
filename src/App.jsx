import NavBar from './components/NavBar/NavBar'
import './layout.scss'
import HomePage from './routes/HomePage/HomePage'

function App() {
  return (
    <div className="layout">
      
      <div className="NavBar">
        <NavBar />
      </div>
      <div className="content">
        <HomePage />
      </div>

    </div>
  )
}

export default App