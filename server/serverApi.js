const express = require('express')
const request = require('superagent')

const router = express.Router()

router.get('/mono/:colorCode', (req, res) => {
  let color = req.params.colorCode
  const monochromeUrl = `http://thecolorapi.com/scheme?hex=${color}&format=json&mode=monochrome&count=3`
 // const triadUrl = `http://thecolorapi.com/scheme?hex=${color}&format=json&mode=triad&count=3`
 
  request
    .get(monochromeUrl)
    .then(apiRes => {
      const data = JSON.parse(apiRes.text)
      const colors = {
        colorOne: data.colors[0].hex.value,
        colorTwo: data.colors[1].hex.value,
        colorThree: data.colors[2].hex.value
      }
      res.send(colors)
    })
    .catch(err => console.error(err))
})

router.get('/complement/:colorCode', (req, res) => {
  let color = req.params.colorCode
  const complementUrl = `http://thecolorapi.com/scheme?hex=${color}&format=json&mode=complement&count=3`

  request
  .get(complementUrl)
  .then(apiRes => {
    const data = JSON.parse(apiRes.text)
    const complementColors = {
      colorComplementOne: data.colors[0].hex.value,
      colorComplementTwo: data.colors[1].hex.value,
      colorComplementThree: data.colors[2].hex.value
    }
    res.send(complementColors)
  })
  .catch(err => console.error(err))
})

module.exports = router
