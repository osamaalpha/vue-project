const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()

module.exports = axios.create({
  baseURL: 'https://api.intern.d-tt.nl/api/houses',
  timeout: 5000,
  headers: {
    'X-Api-Key': process.env.API_KEY,
    'Content-Type': 'application/json'
  }
})
