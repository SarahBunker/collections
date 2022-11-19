import axios from 'axios'
// const baseUrl = 'http://localhost:8080/api/notes'
const baseUrl = '/api/notes'

const getAll = () => {
  console.log("Made it to getAll")
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  console.log("Made it to create")
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  console.log("Made it to update")
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, create, update }
