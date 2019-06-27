import request from 'superagent'
// import color from '../componenets/Home.jsx' // this needs to import color chosen by user as a base color from one of the componenets
// const request = require('superagent')

const monochromeUrl = 'http://thecolorapi.com/scheme?hex=0047AB&format=json&mode=monochrome&count=3'
//  in the future this will be replaced by http://thecolorapi.com/scheme?hex=${users_color}&format=json&mode=monochrome&count=3

const url = 'http://thecolorapi.com/scheme?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=html&mode=analogic&count=6'
const anotherUrl = 'http://thecolorapi.com/scheme?hex=0047AB&mode=analogic&count=3'

export function newMonochromePalette () {
  return request
    .get(anotherUrl)
    .then(res => {
      console.log(res.body)
    })
}

// module.exports = newMonochromePalette
