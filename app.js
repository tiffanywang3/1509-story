
var express = require('express')
var app = express()
var fs = require('fs')
var mime = require('mime')
var bodyParser = require('body-parser')


app.use(express.static(__dirname + '/public')); //__dirname is the folder this file is in.

// static file middleware
app.use(function(req, res, next) {
  console.log(req.path)
  var mimeType = mime.lookup(req.path)
  fs.readFile('./public/' + req.path, function(err, fileBuffer) {
    if(err) return next()
    res.header('Content-Type', mimeType)
    res.send(fileBuffer)
  })
})

app.use(bodyParser.urlencoded({ extended: true }))



app.use(require('./routes'))

app.listen(3000)