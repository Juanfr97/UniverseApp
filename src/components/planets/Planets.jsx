import { PlanetCard } from "./components/PlanetCard";
import { useEffect, useState } from "react";
import { getPlanets,createPlanet,deletePlanet,updatePlanet } from "../../services/PlanetService";
import { IoPlanetSharp } from "react-icons/io5";
import { Modal } from "react-bootstrap";
import { useModal } from "../../hooks/useModal";
import { AddEditPlanet } from "../shared/AddEditPlanet";
export const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [show, handleShow, handleClose] = useModal()
  const getPlanetsInfo = async () => {
    const { data } = await getPlanets();
    setPlanets(data);
  };

  const handlePlanet = async (planet) => {
    if(planet._id){
      await updatePlanet(planet)
    }
    else {
      await createPlanet(planet)
    }
    getPlanetsInfo()
  }

  const handlePlanetDelete = async (id) => {
    await deletePlanet(id)
    getPlanetsInfo()
  }

  const handleAddEdit = (planet) => {
    handlePlanet(planet)
  }

  const handleDelete = (id) => {
    handlePlanetDelete(id)
  }

  useEffect(() => {
    getPlanetsInfo();
  }, []);
  return (
    <div>
      <div className="row align-items-center justify-content-between">
        <div className="col">
          <h1>Planetas</h1>
          <p style={{ color: "white" }}>
            Conoce los planetas de nuestro sistema solar
          </p>
        </div>
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-primary d-flex align-items-center"
            style={{ backgroundColor: "#99f8f5", border: "none" }}
            onClick={() => handleShow()}
          >
            <IoPlanetSharp size={20} style={{ color: "black" }} />
            <span style={{ marginLeft: "8px", color: "black" }}>Agregar</span>
          </button>
        </div>
      </div>

      <div className="row">
        {planets.map((planet) => (
          <div className="col-md-4 mb-3" key={planet.id}>
            <PlanetCard planet={planet} key={planet.id} handleEdit={handleAddEdit} handleDelete={handleDelete}/>
          </div>
        ))}
      </div>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title><IoPlanetSharp></IoPlanetSharp>Agrega un planeta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddEditPlanet closeModal={handleClose} handleAddEdit={handleAddEdit}/>
        </Modal.Body>
      </Modal>
    </div>
  );
};
