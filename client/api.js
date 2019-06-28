const request = require('superagent')

export function getMono (callback) {
  return request
    .get('http://localhost:3000/api')
    .end((err, res) => {
      callback(err, res)
      if (err) console.log(err)
    })
}