// import request from 'superagent'
// import color from '../componenets/Home.jsx' // this needs to import color chosen by user as a base color from one of the componenets
const request = require('superagent')

const monochromeUrl = 'http://thecolorapi.com/scheme?hex=0047AB&format=json&mode=monochrome&count=3'
//  in the future this will be replaced by http://thecolorapi.com/scheme?hex=${users_color}&format=json&mode=monochrome&count=3

// export
function newMonochromePalette () {
  console.log('hello!')
  return request
    .get(monochromeUrl)
    .then(res => {
      console.log(res.body)
    })
}

module.exports = {
  newMonochromePalette
}
