import axios from "axios";
const url = 'http://localhost:3002/api/blogs'
 const getAll = () => {
   const request =  axios.get(url)
   return request.then(response => response.data)
    .catch(error => console.log(error))
}
 const create = (newObject) => {
    const request = axios.post(url, newObject)
    return request.then(response => response.data)
    .catch(error => console.log(error))
}
 const ubdate = (id, newObject) => {
  const request =
  axios
  .put(`${url}/${id}`,newObject)
  return request.then(response => response.data)
  .catch(error => console.log(error))
}
 const remove = async id => {
  const request =
  axios
  .delete(`${url}/${id}`)
  return request.then(response => response.data)
  .catch(error => console.log(error))
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { 
   getAll, create, remove, ubdate
 }
