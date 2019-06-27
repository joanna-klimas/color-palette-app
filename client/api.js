const request = require('superagent')
// import color from '../componenets/Home.jsx' // this needs to import color chosen by user as a base color from one of the componenets

const monochromeUrl = 'http://thecolorapi.com/scheme?hex=0047AB&format=json&mode=monochrome&count=3'
//  in the future this will be replaced by http://thecolorapi.com/scheme?hex=${users_color}&format=json&mode=monochrome&count=3

function newMonochromePalette () {
  request
    .get(monochromeUrl)
    .end((err, res) => {
      console.log(res.body)
      return res.body
    })
}

module.exports = {
  newMonochromePalette
}
