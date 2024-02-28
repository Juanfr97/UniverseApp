import {planets} from '../../data/planets'
import { PlanetCard } from './components/PlanetCard'
export const Planets = () => {
  console.log(planets)
  return (
    <div>
        <h1>Planetas</h1>
        <p style={{"color":"white"}}>Conoce los planetas de nuestro sistema solar</p>
        <div className='row'>
            {planets.map(planet => (
                <div className='col-md-4 mb-3' key={planet.id}>
                    <PlanetCard planet={planet}/>
                </div>
            ))}

        </div>
    </div>
  )
}
