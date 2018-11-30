import axios from 'axios'

const HTTP = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 5000,
  headers: {
    Authorization: 'Client-ID ' + process.env.VUE_APP_CLIENT_ID,
  },
})

export { HTTP }
