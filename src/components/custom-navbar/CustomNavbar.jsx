import './CustomNavbar.css'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import {FaHome} from 'react-icons/fa'
import {IoPlanetSharp} from 'react-icons/io5'
import {GiGalaxy} from 'react-icons/gi'

export const CustomNavbar = () => {
  return (
    <nav>
            <Nav.Link as={Link} to='/'><FaHome/></Nav.Link>
            <Nav.Link as={Link} to='/planets'><IoPlanetSharp/></Nav.Link>
            <Nav.Link as={Link} to='/galaxies'><GiGalaxy/></Nav.Link>
    </nav>
  )
}
