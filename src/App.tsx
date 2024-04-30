import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Programs from './pages/Programs'
import Courses from './pages/Courses'
import { Grid } from '@mui/material'
import HeaderBar from './components/HeaderBar'
import './App.css'

function App() {
  return (
    <Router>
      <Grid>
        <RouteWrapper />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/courses/:level' element={<Courses />} />
        </Routes>
      </Grid>
    </Router>
  )
}

function RouteWrapper() {
  const location = useLocation()
  return location.pathname !== '/' && <HeaderBar />
}

export default App
