const request = require('superagent')

export function getMono (callback, colorCode) {
  return request
    .get(`http://localhost:3000/api/${colorCode}`)
    .end((err, res) => {
      callback (err, res)
      if (err) console.log(err)
    })
}