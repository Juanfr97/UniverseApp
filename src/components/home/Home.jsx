import {universe} from '../../data/info'
import './Home.css'
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
          <li className="list-group-item"><strong>Edad:</strong> {universe.age}</li>
          <li className="list-group-item"><strong>Tamaño:</strong> {universe.size}</li>
          <li className="list-group-item"><strong>Estrellas:</strong> {universe.stars}</li>
          <li className="list-group-item"><strong>Materia:</strong> {universe.matter}</li>
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
