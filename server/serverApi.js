const express = require('express')
const request = require('superagent')

const router = express.Router()

const monochromeUrl = 'http://thecolorapi.com/scheme?hex=0047AB&format=json&mode=monochrome&count=3'

router.get('/api', (req, res) => {
  request
    .get(monochromeUrl)
    .then(apiRes => {
      const data = JSON.parse(apiRes.text)
      //console.log(data.colors)
      const colors = {
        colorOne: data.colors[0].hex.value,
        colorTwo: data.colors[1].hex.value,
        colorThree: data.colors[2].hex.value
      }
      res.send(colors)
    })
    .catch(err => console.error(err))
})

module.exports = router
