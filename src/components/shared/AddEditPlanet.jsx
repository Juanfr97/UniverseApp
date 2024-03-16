import { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export const AddEditPlanet = ({closeModal,planetToUpdate,handleAddEdit}) => {
    const [planet,setPlanet] = useState({
        name: '',
        description: '',
        type: '',
        mass: '',
        diameter: '',
        gravity: '',
        rotation: '',
        translation: '',
        distance: '',
        moons: '',
        image: '',
    })
    const onInputChange = (e) => {
        setPlanet({ ...planet, [e.target.name]: e.target.value })
      }
    const handleSubmit = (e) => {
        e.preventDefault()
        handleAddEdit(planet)
        closeModal()
    }
    const resetForm = () => {
        setPlanet({
          name: "",
          description: "",
          distance: "",
          gravity: "",
          moons: "",
          image: "",
        });
        closeModal()
      }
      useEffect(() => {
        if (planetToUpdate) {
          setPlanet(planetToUpdate);
        }
      },[planetToUpdate])
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Nombre"
          name="name"
          onChange={(e) => onInputChange(e)}
          value={planet.name}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="textarea"
          placeholder="Description"
          name="description"
          onChange={(e) => onInputChange(e)}
          value={planet.description}
          required
        />
      </Form.Group>
        <Form.Group>
            <Form.Control
            type="text"
            placeholder="Distancia"
            name="distance"
            onChange={(e) => onInputChange(e)}
            value={planet.distance}
            required
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
            type="text"
            placeholder="Gravedad"
            name="gravity"
            onChange={(e) => onInputChange(e)}
            value={planet.gravity}
            required
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
            type="text"
            placeholder="Lunas"
            name="moons"
            onChange={(e) => onInputChange(e)}
            value={planet.moons}
            required
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
            type="text"
            placeholder="Imagen"
            name="image"
            onChange={(e) => onInputChange(e)}
            value={planet.image}
            required
            />
        </Form.Group>

        <Form.Group>
            <Form.Control
            type="text"
            placeholder="Tipo"
            name="type"
            onChange={(e) => onInputChange(e)}
            value={planet.type}
            required
            />
        </Form.Group>

        <Form.Group>
            <Form.Control
            type="text"
            placeholder="Masa"
            name="mass"
            onChange={(e) => onInputChange(e)}
            value={planet.mass}
            required
            />
        </Form.Group>

        <Form.Group>
            <Form.Control
            type="text"
            placeholder="Diametro"
            name="diameter"
            onChange={(e) => onInputChange(e)}
            value={planet.diameter}
            required
            />
        </Form.Group>

        <Form.Group>
            <Form.Control
            type="text"
            placeholder="Rotacion"
            name="rotation"
            onChange={(e) => onInputChange(e)}
            value={planet.rotation}
            required
            />
        </Form.Group>
      <Button variant="success" type="submit" block className='me-2'>
        {planetToUpdate ? "Actualizar" : "Agregar"}
      </Button>
      <Button variant="danger" type="button" block onClick={resetForm}>
        Cancel
      </Button>

    </Form>
  )
}
