import axios from 'axios'
const API_URL = new URL('http://localhost:3000/api/universe')

export const getUniverseById =  (id) => {
    return  axios.get(`${API_URL}/${id}`)
}