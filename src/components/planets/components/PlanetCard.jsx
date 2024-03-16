import "./PlanetCard.css";
import PropTypes from "prop-types";
import { FaRulerHorizontal } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { IoMoonSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import { useModal } from "../../../hooks/useModal";
import { AddEditPlanet } from "../../shared/AddEditPlanet";
import { IoPlanetSharp } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";

export const PlanetCard = ({ planet,handleEdit,handleDelete }) => {
  const [show, handleShow, handleClose] = useModal();
  return (
    <div className="card" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          gap: "10px", 
          margin: "10px",
        }}
      >
        <FaEdit
          onClick={() => handleShow()}
          style={{
            border: "none",
            cursor: "pointer",
            zIndex: 1,
            color: "white",
            width: "30px",
          }}
        />
        <FaTrash
          onClick={() => {
            handleDelete(planet._id);
          }}
          style={{
            border: "none",
            cursor: "pointer",
            zIndex: 1,
            color: "white",
            width: "30px",
          }}
        />
      </div>
      <img src={planet.image} alt={planet.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{planet.name}</h5>
        <p className="card-text">{planet.description}</p>
        <div className="row">
          <div className="col-md-4">
            <p>
              <FaRulerHorizontal /> {planet.distance}
            </p>
          </div>
          <div className="col-md-4">
            <p>
              <FaLongArrowAltDown /> {planet.gravity}
            </p>
          </div>
          <div className="col-md-4">
            <p>
              <IoMoonSharp /> {planet.moons}
            </p>
          </div>
        </div>
      </div>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>
            <IoPlanetSharp></IoPlanetSharp>{planet.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddEditPlanet closeModal={handleClose} planetToUpdate={planet} handleAddEdit={handleEdit}/>
        </Modal.Body>
      </Modal>
    </div>
  );
};

PlanetCard.propTypes = {
  planet: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    distance: PropTypes.string.isRequired,
    gravity: PropTypes.string.isRequired,
    moons: PropTypes.string.isRequired,
  }).isRequired,
};
