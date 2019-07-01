const request = require('superagent')

<<<<<<< HEAD
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
=======
export function getMono (callback, colorCode) {
  return request
    .get(`http://localhost:3000/mono/${colorCode}`)
    .end((err, res) => {
      callback (err, res)
      if (err) console.log(err)
    })
}

export function getComplement (callback, colorCode) {
  return request
    .get(`http://localhost:3000/complement/${colorCode}`)
    .end((err, res) => {
      callback (err, res)
      if (err) console.log(err)
    })
}

export function getTriad (callback, colorCode) {
  return request
  .get(`http://localhost:3000/triad/${colorCode}`)
  .end((err, res) => {
    callback (err, res)
    if (err) console.log(err)
  })
}
>>>>>>> 95b6b8c66d5095462611821cd8e8d7b321f308fc
