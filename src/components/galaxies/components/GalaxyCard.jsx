import './GalaxyCard.css';
import {FaRulerHorizontal} from 'react-icons/fa';
import PropTypes from 'prop-types';
export const GalaxyCard = ({galaxy}) => {
    return (
      <div className='card'>
          <img src={galaxy.image} alt={galaxy.name} className='card-img-top'/>
          <div className='card-body'>
              <h5 className='card-title'>{galaxy.name}</h5>
              <p className='card-text'>{galaxy.description}</p>
              <div className='row'>
                <p><FaRulerHorizontal/> {galaxy.diameter}</p>
              </div>
          </div>
      </div>
    )
  }

  GalaxyCard.propTypes = {
    galaxy: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      diameter: PropTypes.string.isRequired
    }).isRequired,
};