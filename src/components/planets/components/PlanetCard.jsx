import './PlanetCard.css';
import PropTypes from 'prop-types';
import {FaRulerHorizontal} from 'react-icons/fa';
import {FaLongArrowAltDown} from 'react-icons/fa';
import {IoMoonSharp} from 'react-icons/io5';
export const PlanetCard = ({planet}) => {
  return (
    <div className='card'>
        <img src={planet.image} alt={planet.name} className='card-img-top'/>
        <div className='card-body'>
            <h5 className='card-title'>{planet.name}</h5>
            <p className='card-text'>{planet.description}</p>
            <div className='row'>
                <div className='col-md-4'>
                    <p><FaRulerHorizontal/> {planet.distance}</p>
                </div>
                <div className='col-md-4'>
                    <p><FaLongArrowAltDown/> {planet.gravity}</p>
                </div>
                <div className='col-md-4'>
                    <p><IoMoonSharp/> {planet.moons}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

PlanetCard.propTypes = {
    planet: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      distance: PropTypes.string.isRequired,
        gravity: PropTypes.string.isRequired,
        moons: PropTypes.number.isRequired,
    }).isRequired,
};