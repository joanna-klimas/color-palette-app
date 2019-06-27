//import { newMonochromePalette } from '../client/api.js'
// const api = require('../client/api.js')
const path = require('path')
const express = require('express')
const cors = require('cors')

const server = express()
//const router = express.Router()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

// server.get('/api', (req, res) => {
//   api.newMonochromePalette()
//     .then(data => {
//       console.log(data)
//       res.send(data)
//     })
//     .catch(err => {
//       res.status(500).send(err.message)
//     })
// })

module.exports = server
