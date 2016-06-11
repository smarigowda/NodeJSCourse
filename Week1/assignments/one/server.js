var express = require('express')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var routerConfFn = require('./dishRouter')

var hostname = 'localhost'

var port = 5000
var app = express()

var dishRouter = express.Router()

app.use(morgan('dev'))

app.use(express.static(__dirname + '/public'))

app.use('/dishes',routerConfFn(dishRouter))

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`)
});