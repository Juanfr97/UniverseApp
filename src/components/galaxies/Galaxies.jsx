import {galaxies} from '../../data/galaxies'
import { GalaxyCard } from './components/GalaxyCard'
export const Galaxies = () => {
  return (
    <div>
        <h1>Galaxias</h1>
        <p style={{"color":"white"}}>Las galaxias del universo</p>
        <div className='row'>
            {galaxies.map(galaxy => (
                <div className='col-md-4 mb-3' key={galaxy.id}>
                    <GalaxyCard galaxy={galaxy}/>
                </div>
            ))}

        </div>
    </div>
  )
}
