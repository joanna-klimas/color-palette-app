const request = require('superagent')

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