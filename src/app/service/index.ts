import axios from "axios"

let url: string = 'http://localhost:8080/v1'

const api = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
})

export default api