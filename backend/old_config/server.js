const port = 3456

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, '127.0.0.1', function() {
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
