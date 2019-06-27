const path = require('path')
const express = require('express')

const server = express()

const api = require('../client/api')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.get('/api', (req, res) => {
  api.newMonochromePalette ()
    .then(data => {
      console.log(data)
      res.send(data)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = server
