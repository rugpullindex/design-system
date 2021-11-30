const express = require('express')


const PORT = 5000

const app = express()

app.use(express.static(__dirname)) 

app.get('/', function(req, res) {
  
  
  
})

app.listen(PORT, () => console.log('rugpullindex runs on localhost:5000'))

