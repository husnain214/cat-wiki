import axios from 'axios'

const API_URL = 'http://localhost:3001'

const getCatVotes = async () => {
  const response = await axios.get(`${API_URL}/cats`)
  return response.data
}

const setCatVotes = async newData => {
  await axios.post(`${API_URL}/cats`, newData)
}

const updateCatVotes = async (id, newData) => {
  await axios.put(`${API_URL}/cats/${id}`, newData)
}

export default { getCatVotes, setCatVotes, updateCatVotes }
