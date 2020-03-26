const port = 3456

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, function() {
  console.log(`BACKEND is running on port ${port}.`)
})

// server.use(function(req, res, next) {
//   // res.send('Funcionou!')
//   console.log('meu middleware 1')
//   next()
// })
//
// server.use(function(req, res, next) {
//   console.log('meu middleware 2')
//   res.send('Funcionou novamente!!!')
// })

module.exports = server
