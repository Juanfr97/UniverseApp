import {universe} from '../../data/info'
import './Home.css'
import {DetailCard} from '../shared/DetailCard'
import {MdAccessTime, MdExpand, MdStar, MdScience} from 'react-icons/md'
export const Home = () => {
  console.log(universe)
  return (
    <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6">
        <h1>El Universo</h1>
        <p>El universo es todo lo que existe, incluyendo el espacio, el tiempo, la materia, la energía, las galaxias, las estrellas y los planetas. Aprende más sobre el universo y sus misterios.</p>
      </div>
      <div className="col-md-6">
        <img src={universe.image} className="img-fluid" alt="Imagen Principal" />
      </div>

    </div>
    <div className="row mt-3">
    <div className="col">
        <h4>Información General:</h4>
        <ul className="list-group">
          {/* Usa el componente DetailCard con los iconos y descripciones apropiadas */}
          <li className="list-group-item">
            <DetailCard icon={MdAccessTime} description={`Edad: ${universe.age}`} />
          </li>
          <li className="list-group-item">
            <DetailCard icon={MdExpand} description={`Tamaño: ${universe.size}`} />
          </li>
          <li className="list-group-item">
            <DetailCard icon={MdStar} description={`Estrellas: ${universe.stars}`} />
          </li>
          <li className="list-group-item">
            <DetailCard icon={MdScience} description={`Materia: ${universe.matter}`} />
          </li>
        </ul>
      </div>
    </div>
    <div className="row mt-3">
      <div className="col">
        <h4>Hechos Interesantes:</h4>
        <ul>
          {universe.facts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>
    </div>
    <div className="row mt-3">
      <div className="col">
        <h4>Imágenes Adicionales:</h4>
        <div className="row">
          {universe.images.map((image, index) => (
            <div key={index} className="col-sm-4 mb-3">
              <img src={image} className="img-fluid" alt={`Imagen ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}
