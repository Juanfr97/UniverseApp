import axios from 'axios'
const API_URL = new URL('http://localhost:3000/api/planet')

export const getPlanets =  () => {
    return  axios.get(API_URL)
}

export const getPlanetById =  (id) => {
    return  axios.get(`${API_URL}/${id}`)
}

export const createPlanet =  (planet) => {
    return  axios.post(API_URL, planet)
}

export const updatePlanet =  (planet) => {
    return  axios.put(`${API_URL}/${planet._id}`, planet)
}

export const deletePlanet =  (id) => {
    return  axios.delete(`${API_URL}/${id}`)
}