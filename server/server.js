const path = require('path')
const express = require('express')
const cors = require ('cors')

const server = express()
const router = require('./serverApi')

server.use(cors())
server.use(express.static(path.join(__dirname, './public')))
server.use('/', router)

module.exports = server
