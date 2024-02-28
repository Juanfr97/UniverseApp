
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/home/Home'
import { CustomNavbar } from './components/custom-navbar/CustomNavbar'
import {Planets} from './components/planets/Planets'
function App() {
  return (
    <div className="App">
      <CustomNavbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planets" element={<Planets/>} />
        </Routes>
    </div>
  )
}

export default App
