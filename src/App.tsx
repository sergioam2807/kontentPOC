import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Programs from './pages/Programs'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/programs' element={<Programs />} />
      </Routes>
    </Router>
  )
}

export default App
